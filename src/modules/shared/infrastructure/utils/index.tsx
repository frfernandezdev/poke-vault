import alternativeColors from "./alternativeColors";

const bgColor = (color: string) => ["white", "black"].includes(color)
    ? alternativeColors[color]
    : `${color ?? 'gray'}.400`;

const bgColorHover = (color: string) => ["white", "black"].includes(color)
	? alternativeColors[color]
	: `${color ?? 'gray'}.600`;
const textColor = (color:string) => color === "white" ? "black" : "white";


export {
	alternativeColors,
	bgColor,
	bgColorHover,
	textColor
}

