const createConfig = require('./config');
const createFileRenderer = require('./lib/createFileRenderer');

module.exports.generateArt = async function generateArt(seed) {
	const config = createConfig(seed);
	return await createFileRenderer(config);
}
