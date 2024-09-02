import { useContext } from "react";
import NavBar from "./Components/Navbar";
import { AppContext } from "./context";
import "./styles/index.scss";
import { MENU_OUTER_ID, MENU_PAGE_WRAP_ID } from "./constants";
import { Attribution } from "./Components/Attribution";

function App() {
	const { context } = useContext(AppContext)!;

	const { ActiveComponent } = context;

	return (
		<div id={MENU_OUTER_ID}>
			<NavBar outerID={MENU_OUTER_ID} pageWrapID={MENU_PAGE_WRAP_ID} />
			<div id={MENU_PAGE_WRAP_ID}>{ActiveComponent}</div>

			<Attribution />
		</div>
	);
}

export default App;
