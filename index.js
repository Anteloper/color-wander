const createConfig = require('./config');
const createFileRenderer = require('./lib/createFileRenderer');

const generateArt = async function generateArt(seed) {
	const config = createConfig(seed);
	return await createFileRenderer(config);
}

module.exports = {
	generateArt
}