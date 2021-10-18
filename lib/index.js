const createConfig = require('../config');
const createFileRenderer = require('./createFileRenderer');

export const generateArt = async function generateArt(seed) {
	const config = createConfig(seed);
	return await createFileRenderer(config);
}

export default generateArt