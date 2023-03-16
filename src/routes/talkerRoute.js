const express = require('express');

const { readTalkers } = require('../utils/fs');

const router = express.Router();

router.use(express.json());

router.get('/', async (_req, res) => res.status(200).json(await readTalkers()));

module.exports = router;
