const createConfig = require('./config');
const createFileRenderer = require('./lib/createFileRenderer');

export async function generateArt(seed) {
	const config = createConfig(seed);
	return await createFileRenderer(config);
}
