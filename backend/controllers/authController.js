const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, err: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ success: false, err: "Wrong Password" });
        }
        const token = jwt.sign({ _id: user._id, role: user.role },
            process.env.JWT_KEY, { expiresIn: "10d" }
        )
        res.status(200).json({ success: true, token, user: { _id: user._id, name: user.name, role: user.role } })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
}

const verify = (req, res) => {
    return res.status(200).json({ success: true, user: req.user });
}

module.exports = { login, verify };