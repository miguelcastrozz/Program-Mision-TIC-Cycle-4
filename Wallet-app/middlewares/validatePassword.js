export default function ValidatePassword(req, res, next) {
    const {password} = req.body.user;
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!validatePassword.test(password)) {
        return res.status(400).json({
            error:"verifica que la contraseña tenga al menos 8 caracteres, contenga al menos un dígito, una letra minúscula y una mayúscula"});
    }
    next();
}
