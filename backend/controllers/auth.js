const authService = require('../services/auth');

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { newUser, token } = await authService.signup(email, password);
    res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await authService.login(email, password);
    res
      .status(200)
      .json({ message: 'Login successful', token, lastLogin: user.lastLogin });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.logout = (req, res) => {
  try {
    const result = authService.logout();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
