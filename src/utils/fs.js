const fs = require('fs/promises');

const readTalkers = async () => {
  try {
    return JSON.parse(await fs.readFile('./src/talker.json', 'utf8'));
  } catch (error) {
    return error.message;
  }
};

module.exports = { readTalkers };
