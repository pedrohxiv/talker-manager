const express = require('express');

const randomToken = require('../utils/randomToken');

const router = express.Router();

router.use(express.json());

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res
      .status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

router.post('/', loginValidation, (_req, res) => {
  const token = randomToken();
  return res.status(200).json({ token });
});

module.exports = router;
