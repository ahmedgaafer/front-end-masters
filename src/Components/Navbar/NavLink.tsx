import { useState } from "react";
import { useAppContext } from "../../context";
import { nav, TComponentKey } from "./NavStructure";
import { MdArrowDropDownCircle } from "react-icons/md";

const Link = ({
	label,
	compKey: key,
}: {
	label: string;
	compKey: TComponentKey;
}) => {
	const { setActiveComponent } = useAppContext();
	return (
		<div
			className="page-item"
			onClick={(e) => {
				e.stopPropagation();
				setActiveComponent(key);
			}}
			key={key + label}
		>
			{label}
		</div>
	);
};

export const NavLinks = () => {
	const [open, setOpen] = useState("");

	const handleSubMenuClick = (menuName: string) => {
		setOpen(open === menuName ? "" : menuName);
	};

	return (
		<>
			{nav.map((link) => {
				if (link?.key) {
					return <Link label={link.label} compKey={link.key} />;
				} else {
					return (
						<div
							key={link.key + link.label}
							onClick={() => handleSubMenuClick(link.label)}
							className={`accordion-item ${
								open === link.label ? "active" : "close"
							}`}
						>
							<div className="accordion-header">
								<span>{link.label}</span>
								<MdArrowDropDownCircle />
							</div>
							<div className={`accordion-content `}>
								{link.children.map((subLink) => (
									<Link label={subLink.label} compKey={subLink.key} />
								))}
							</div>
						</div>
					);
				}
			})}
		</>
	);
};
