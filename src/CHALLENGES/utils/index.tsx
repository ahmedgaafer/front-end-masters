import React, { useEffect } from "react";

//#region attribution
export const Attribution: React.FC = () => {
	return (
		<div className="attribution">
			Challenge by{" "}
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
				Frontend Mentor
			</a>
			. Coded by <a href="https://github.com/ahmedgaafer">Ahmed Gaafer</a>.
		</div>
	);
};
//#endregion

//#region tab context change
const setFavicon = (url: string) => {
	let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		document.head.appendChild(link);
	}
	link.href = url;
};

export const useDocumentTitleAndFavicon = (title: string, favicon: string) => {
	useEffect(() => {
		// Update the document title
		document.title = title;

		// Set the favicon
		setFavicon(favicon);
	}, [title, favicon]);
};

//#endregion
