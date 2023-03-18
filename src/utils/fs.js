const fs = require('fs/promises');

const readTalkers = async () => {
  try {
    return JSON.parse(await fs.readFile('./src/talker.json', 'utf8'));
  } catch (error) {
    return error.message;
  }
};

const writeTalker = async (talkers) => {
  try {
    return fs.writeFile('./src/talker.json', JSON.stringify(talkers));
  } catch (error) {
    return error.message;
  }
};

module.exports = { readTalkers, writeTalker };
