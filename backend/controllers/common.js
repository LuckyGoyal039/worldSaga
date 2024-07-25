import bcrypt from "bcrypt";

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
