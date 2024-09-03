import RecipePage from "../../CHALLENGES/recipe-page-main/solution";
import Home from "../../Pages/Home";

export type TComponentKey = keyof typeof componentsMap;

type TNavProps = {
	label: string;
} & (
	| {
			children: {
				label: string;
				key: TComponentKey;
			}[];

			key?: never;
	  }
	| {
			key: TComponentKey;
			children?: never;
	  }
);

export const componentsMap = {
	Home: <Home />,
	"noob.recipePage": <RecipePage />,
	"semiNoob.p2": <div>p2</div>,
	"normal.p4": <div>p4</div>,
	"advanced.p3": <div>p3</div>,
	"how.p5": <div>p5</div>,
	"noob.p6": <div>p6</div>,
};

export const nav: TNavProps[] = [
	{
		label: "Home",
		key: "Home",
	},
	{
		label: "Noob",
		children: [
			{
				label: "Recipe Page",
				key: "noob.recipePage",
			},
			{
				label: "p6",
				key: "noob.p6",
			},
		],
	},
	{
		label: "Semi noob",
		children: [
			{
				label: "p2",
				key: "semiNoob.p2",
			},
		],
	},
	{
		label: "Normal",
		children: [
			{
				label: "p4",
				key: "normal.p4",
			},
		],
	},
	{
		label: "Advanced",
		children: [
			{
				label: "p3",
				key: "advanced.p3",
			},
		],
	},
	{
		label: "How?",
		children: [
			{
				label: "p5",
				key: "how.p5",
			},
		],
	},
];
