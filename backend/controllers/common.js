import bcrypt from "bcrypt";
import { readFile } from 'fs/promises';
import imagekit from '../config/imagekitConfig.js';
import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const cryptoSecretKey = process.env.CRYPTO_SECRET_KEY;

export async function imagekitPut(filePath, fileName, folderPath = '/', uniqueFileName = true) {
    if (!filePath || !fileName) {
        throw new Error("File path or file name is missing");
    }

    try {
        const data = await readFile(filePath);
        const result = await new Promise((resolve, reject) => {
            imagekit.upload({
                file: data,
                fileName: fileName,
                folder: folderPath,
                useUniqueFileName: uniqueFileName
            }, (error, result) => {
                if (error) {
                    reject(new Error("Something went wrong. Failed to upload file to ImageKit"));
                } else {
                    resolve(result);
                }
            });
        });
        return result;
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
}

export const isValidEmail = (email) => {
    // use zod instead of this
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
export const encryptPassword = (password) => {
    try {
        let saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return {
            status: true,
            hash
        }
    } catch (err) {
        console.log(err)
        return {
            status: false,
            msg: "unable to encrypted password"
        }
    }
}

export const checkPassword = (password, text) => {
    if (!password || !text) return false
    return bcrypt.compareSync(password, text);
}

export const checkEmptyFields = (...arg) => {
    let check = false;
    arg.forEach((entry) => {
        if (!entry) {
            check = true;
            return false;
        }
    })
    return check;
}

export function cryptId(text) {
    const iv = crypto.randomBytes(16); // Generate a random initialization vector for each encryption
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(cryptoSecretKey), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('base64') + ':' + encrypted.toString('base64');
}
export function decryptId(text) {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'base64');
    const encryptedText = Buffer.from(textParts.join(':'), 'base64');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(cryptoSecretKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
