import bcrypt from "bcrypt";
import { readFile } from 'fs/promises';
import imagekit from '../config/imagekitConfig.js';

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
