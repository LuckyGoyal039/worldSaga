

export async function adminSignIn(req, res) {
    try {
        // write login functionality for admin
    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong. Server not working"
        })
    }
}
export async function adminForgetPassword(req, res) {
    try {
        // write forgetpassword functionality for admin

    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong. Server not working"
        })
    }
}
export async function adminLogout(req, res) {
    try {
        // write logout functionality for admin

    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong. Server not working"
        })
    }
}