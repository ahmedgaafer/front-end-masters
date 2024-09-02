import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";

export function encodeSvgToDataUrl(svg: ReactElement): string {
	// Encode the SVG content
	const encodedSvg = encodeURIComponent(ReactDOMServer.renderToString(svg));
	// Create the Data URL
	return `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
}
