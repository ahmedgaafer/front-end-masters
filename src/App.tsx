import { useContext, useState } from "react";
import NavBar from "./Components/Navbar";
import { AppContext } from "./context";
import "./styles/index.scss";
import { MENU_OUTER_ID, MENU_PAGE_WRAP_ID } from "./constants";

function App() {
	const { context, setContext } = useContext(AppContext)!;

	const { ActiveComponent } = context;
	console.log(context);

	return (
		<div id={MENU_OUTER_ID}>
			<NavBar outerID={MENU_OUTER_ID} pageWrapID={MENU_PAGE_WRAP_ID} />
			<div id={MENU_PAGE_WRAP_ID}>{ActiveComponent}</div>
		</div>
	);
}

export default App;
