const express = require('express');

const { readTalkers, writeTalker } = require('../utils/fs');

const router = express.Router();

router.use(express.json());

const tokenValid = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};

const nameValid = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const ageValid = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof age !== 'number' || !Number.isInteger(age) || age < 18) {
    return res.status(400).json({
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
  }

  next();
};

const validateWatchedAt = (watchedAt) => {
  if (!watchedAt) {
    throw new Error('O campo "watchedAt" é obrigatório');
  }
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(watchedAt)) {
    throw new Error('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
  }
};

const validateRate = (rate) => {
  if (rate === undefined) {
    throw new Error('O campo "rate" é obrigatório');
  }
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    throw new Error('O campo "rate" deve ser um número inteiro entre 1 e 5');
  }
};

const talkValid = (req, res, next) => {
  const { talk } = req.body;

  try {
    if (!talk) {
      throw new Error('O campo "talk" é obrigatório');
    }

    validateWatchedAt(talk.watchedAt);
    validateRate(talk.rate);

    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

router.get('/', async (_req, res) => res.status(200).json(await readTalkers()));

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const talkers = await readTalkers();
  const talker = talkers.find((t) => t.id === +id);
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
});

router.post('/', tokenValid, nameValid, ageValid, talkValid, async (req, res) => {
  const { name, age, talk } = req.body;

  const talkers = await readTalkers();

  const newTalker = { id: talkers.length + 1, name, age, talk };
  talkers.push(newTalker);
  await writeTalker(talkers);

  return res.status(201).json(newTalker);
});

router.put('/:id', tokenValid, nameValid, ageValid, talkValid, async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const talkers = await readTalkers();

  const talker = talkers.find((tal) => tal.id === +id);

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  talker.name = name;
  talker.age = age;
  talker.talk = talk;
  await writeTalker(talkers);

  return res.status(200).json(talker);
});

router.delete('/:id', tokenValid, async (req, res) => {
  const { id } = req.params;

  const talkers = await readTalkers();

  const newTalkers = talkers.filter((tal) => tal.id !== +id);

  await writeTalker(newTalkers);

  return res.status(204).json();
});

module.exports = router;
