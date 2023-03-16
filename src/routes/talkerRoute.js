const express = require('express');

const { readTalkers } = require('../utils/fs');

const router = express.Router();

router.use(express.json());

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

module.exports = router;
