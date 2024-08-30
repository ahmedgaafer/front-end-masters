import React from "react";

type ReactObject = {
	[key: string]: React.ReactNode;
};

export type NavProps = {
	[key: string]: React.ReactNode | ReactObject;
};
