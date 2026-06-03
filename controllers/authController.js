const User = require("../models/User")
const bcrypt = require("bcryptjs")

// Show Register Page
exports.getRegister = (req, res) => {
    res.render("register")
}

// Register User
exports.postRegister = async (req, res) => {
    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({
        name,
        email,
        password: hashedPassword
    })

    res.redirect("/login")
}

// Show Login Page
exports.getLogin = (req, res) => {
    res.render("login")
}

// Login User
exports.postLogin = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        return res.send("User not found")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.send("Invalid password")
    }

    // Save user in session
    req.session.user = user

    res.redirect("/dashboard")
}

// Logout
exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect("/login")
}