export const snakeToCamelWithSpaces = (metal: string) => {
	return metal
		.toLowerCase()
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};
