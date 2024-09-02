import React, { useEffect } from "react";
import { nav } from "../Navbar/NavStructure";
import { ReactObject } from "../Navbar/types";

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

export const getCurrentComponent = (): React.ReactNode => {
	const urlParams = new URLSearchParams(window.location.search);
	const category = urlParams.get("category");
	const page = urlParams.get("page");

	let resolvedPage = nav.Home;
	if (category && page) {
		const currentCategory = nav[category] ? nav[category] : nav.Home;

		if (React.isValidElement(currentCategory)) {
			resolvedPage = currentCategory;
		} else {
			resolvedPage = (currentCategory as ReactObject)[page]
				? (currentCategory as ReactObject)[page]
				: nav.Home;
		}
	} else if (page) {
		// TODO: make it fault to error page
		resolvedPage = nav[page] ? nav[page] : nav.Home;
	}

	return resolvedPage as React.ReactNode;
};
