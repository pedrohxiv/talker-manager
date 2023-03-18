const express = require('express');

const randomToken = require('../utils/randomToken');

const router = express.Router();

router.use(express.json());

router.post('/', (_req, res) => {
    const token = randomToken();
    return res.status(200).json({ token });
});

module.exports = router;
