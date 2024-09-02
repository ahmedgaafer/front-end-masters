import { NavProps } from "./types";

import RecipePage from "../../CHALLENGES/recipe-page-main/solution";
import Home from "../../Pages/Home";

export const nav: NavProps = {
	Home: <Home />,
	Noob: {
		"Recipe Page": <RecipePage />,
		p2: <div>p2</div>,
		p3: <div>p3</div>,
		p4: <div>p4</div>,
		p5: <div>p5</div>,
		p6: <div>p6</div>,
	},
	"Semi noob": {
		p2: <div>p2</div>,
	},
	Normal: {
		p3: <div>p3</div>,
	},
	ADVANCED: {
		p4: <div>p4</div>,
	},
	"HOW?": {
		p5: <div>p5</div>,
	},

	About: <div>About</div>,
};
