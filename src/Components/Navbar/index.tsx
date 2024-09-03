import React from "react";

import { pushRotate as Menu } from "react-burger-menu";
import { NavLinks } from "./NavLink";

const TITLE = "Master of the Front-end";

const NavBar: React.FC<any> = (props) => {
	const { outerID, pageWrapID } = props;

	return (
		<Menu pageWrapId={pageWrapID} outerContainerId={outerID}>
			<div className="nav-title">
				<div className="logo">{TITLE}</div>
			</div>
			<div className="nav-links">
				<div className="links">
					<NavLinks />
				</div>
			</div>
		</Menu>
	);
};

export default NavBar;
