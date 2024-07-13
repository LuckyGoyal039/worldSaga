import bcrypt from "bcrypt";

const isValidEmail = (email) => {
    // use zod instead of this
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const encryptPassword = (password) => {
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

const checkPassword = (password, text) => {
    if (!password || !text) return false
    return bcrypt.compareSync(password, text);
}

export { isValidEmail, encryptPassword, checkPassword }