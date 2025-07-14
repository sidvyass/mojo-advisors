export const config = {
	dir: {
		input: "src"
	}
};


export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
}
