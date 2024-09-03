import NavBar from "./Components/Navbar";
import { useAppContext } from "./context";
import "./styles/index.scss";
import { MENU_OUTER_ID, MENU_PAGE_WRAP_ID } from "./constants";
import { Attribution } from "./Components/Attribution";
import { componentsMap } from "./Components/Navbar/NavStructure";

function App() {
	const { activeComponent } = useAppContext();

	return (
		<div id={MENU_OUTER_ID}>
			<NavBar outerID={MENU_OUTER_ID} pageWrapID={MENU_PAGE_WRAP_ID} />
			<div id={MENU_PAGE_WRAP_ID}>{componentsMap[activeComponent]}</div>

			<Attribution />
		</div>
	);
}

export default App;
