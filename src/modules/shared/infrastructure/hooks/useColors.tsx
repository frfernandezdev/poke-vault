import { bgColor, bgColorHover, textColor } from "../utils";

export default function useColors(color: string) {
	return {
		bgColor: bgColor(color),
		bgColorHover: bgColorHover(color),
		textColor: textColor(color),
	}	
}
