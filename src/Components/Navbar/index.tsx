import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import { nav } from "./NavStructure";
import { MdArrowDropDownCircle } from "react-icons/md";
import { pushRotate as Menu } from "react-burger-menu";

const TITLE = "Master of the Front-end";
const links = Object.entries(nav);

const genLinks = (setContext: React.Dispatch<React.SetStateAction<any>>) => {
	const [open, setOpen] = useState("");

	const onLinkClick = (
		el: React.ReactNode,
		pageName: string,
		category?: string
	) => {
		const urlParams = new URLSearchParams(window.location.search);

		if (urlParams.has("page")) {
			urlParams.delete("page");
		}

		window.history.pushState(
			{},
			"",
			`?page=${pageName}${category ? `&category=${category}` : ""}`
		);

		setContext({
			ActiveComponent: el,
		});
	};

	const handleSubMenuClick = (menuName: string) => {
		setOpen(open === menuName ? "" : menuName);
	};

	return (
		<>
			{links.map(([linkTitle, value]) => {
				if (React.isValidElement(value)) {
					return (
						<div
							className="page-item"
							onClick={() => onLinkClick(value, linkTitle)}
							key={linkTitle}
						>
							{linkTitle}
						</div>
					);
				} else if (typeof value === "object" && value !== null) {
					const subList = Object.entries(value);

					return (
						<div
							key={linkTitle}
							onClick={() => handleSubMenuClick(linkTitle)}
							className={`accordion-item ${
								open === linkTitle ? "active" : "close"
							}`}
						>
							<div className="accordion-header">
								<span>{linkTitle}</span>
								<MdArrowDropDownCircle />
							</div>
							<div className={`accordion-content `}>
								{subList.map(([subLinkTitle, Component]) => (
									<div
										key={subLinkTitle}
										className="page-item"
										onClick={(e) => {
											e.stopPropagation();
											onLinkClick(Component, subLinkTitle, linkTitle);
										}}
									>
										{subLinkTitle.split("-").join(" ")}
									</div>
								))}
							</div>
						</div>
					);
				} else {
					return <></>;
				}
			})}
		</>
	);
};

const NavBar: React.FC<any> = (props) => {
	const { setContext } = useContext(AppContext)!;
	const { outerID, pageWrapID } = props;

	return (
		<Menu pageWrapId={pageWrapID} outerContainerId={outerID}>
			<div className="nav-title">
				<div className="logo">{TITLE}</div>
			</div>
			<div className="nav-links">
				<div className="links">{genLinks(setContext)}</div>
			</div>
		</Menu>
	);
};

export default NavBar;
