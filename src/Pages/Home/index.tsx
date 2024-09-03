import React from "react";
import { FcHome } from "react-icons/fc";
import { encodeSvgToDataUrl } from "../../assets/utils";
import { useDocumentTitleAndFavicon } from "../../Components/Attribution";
import ParticleComponent from "./Prticles";
import { FaGithub, FaDev, FaLinkedin } from "react-icons/fa6";

import "./index.scss";

const Home: React.FC = () => {
	useDocumentTitleAndFavicon(
		"Home",
		encodeSvgToDataUrl(<FcHome color="white" />)
	);

	return (
		<div id="home-content">
			<ParticleComponent />

			<div className="home-body glass">
				<div className="home-title">
					<h1>Hi, I'm Ahmed</h1>
					<h2>Frontend Engineer</h2>
					<h3>
						and this website is to show case the front-end mentor challenges
					</h3>
				</div>
				<div className="home-text">
					I wanted to challenge my self with some front-end task and like any
					reasonable developer I created a full website (SPA) with a custom nav
					solution to solve the challenges. <span className="emoji">🤭</span>
					you can find the code for this project
					{"  "}
					<a
						href="https://github.com/ahmedgaafer/front-end-mentor"
						target="_blank"
					>
						here
					</a>
					<br />
					If you want more you can follow me on the social media links below.
				</div>
				<div className="home-footer">
					<a
						href="https://github.com/ahmedgaafer"
						target="_blank"
						className="social github"
					>
						<FaGithub />
					</a>
					<a
						href="https://dev.to/ahmedgaafer"
						target="_blank"
						className="social devto"
					>
						<FaDev />
					</a>
					<a
						href="https://www.linkedin.com/in/ahmed-s-gaafer/"
						target="_blank"
						className="social linkedin"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
