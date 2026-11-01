const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {
  validateRegistrationInput,
  validateLoginInput
} = require('../utils/validation');

const BCRYPT_ROUNDS = 12;

function safeUser(user) {
  return {
    id: user.id,
    name: user.name,
    date: user.date,
    email: user.email,
    createdAt: user.createdAt
  };
}

async function register(req, res) {
  const validation = validateRegistrationInput(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  const { name, date, email, password } = validation.data;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const user = await User.create({ name, date, email, passwordHash });

    return res.status(201).json({
      message: 'Registration successful.',
      user: safeUser(user)
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: 'The supplied account details are invalid.' });
    }
    console.error('Registration failed:', error);
    return res.status(500).json({ error: 'Unable to complete registration.' });
  }
}

async function login(req, res) {
  const validation = validateLoginInput(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  const { email, password } = validation.data;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    return res.status(200).json({
      message: 'Login successful.',
      user: safeUser(user)
    });
  } catch (error) {
    console.error('Login failed:', error);
    return res.status(500).json({ error: 'Unable to complete login.' });
  }
}

module.exports = { register, login };
