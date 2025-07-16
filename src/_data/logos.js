import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Read all image files from assets/logos and return
 * an array of their public paths.
 */
export default function getLogos() {
	const logoDir = path.join(__dirname, '../assets/logos');
	return fs
		.readdirSync(logoDir)
		.filter((file) => /\.(png|jpe?g|svg)$/.test(file))
		.sort()
		.map((file) => `/assets/logos/${file}`);
}
