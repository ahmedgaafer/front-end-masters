import React from "react";
import { FcHome } from "react-icons/fc";
import { encodeSvgToDataUrl } from "../../assets/utils";
import { useDocumentTitleAndFavicon } from "../../CHALLENGES/utils";

const Home: React.FC = () => {
	useDocumentTitleAndFavicon(
		"Home",
		encodeSvgToDataUrl(<FcHome color="white" />)
	);
	return <div>Home</div>;
};

export default Home;
