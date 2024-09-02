import React from "react";

export type ReactObject = {
	[key: string]: React.ReactNode;
};

export type NavProps = {
	[key: string]: React.ReactNode | ReactObject;
};
