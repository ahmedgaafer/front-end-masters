import React, { useEffect } from "react";
import { componentsMap, TComponentKey } from "../Navbar/NavStructure";

//#region attribution
export const Attribution: React.FC = () => {
	return (
		<div className="attribution">
			Challenge by{" "}
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
				Frontend Mentor
			</a>
			. Coded by{" "}
			<a href="https://github.com/ahmedgaafer" target="_blank">
				Ahmed Gaafer
			</a>
			.
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

export const getCurrentComponent = (): TComponentKey => {
	const urlParams = new URLSearchParams(window.location.search);
	const componentKey = urlParams.get("componentKey");
	const faultPage = "Home";

	if (!componentKey) return faultPage;

	if (componentsMap.hasOwnProperty(componentKey)) {
		return componentKey as TComponentKey;
	}

	return faultPage;
};
