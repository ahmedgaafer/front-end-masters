import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getCurrentComponent } from "../Components/Attribution";
import { TComponentKey } from "../Components/Navbar/NavStructure";

interface AppProviderProps {
	children: ReactNode;
}

export type AppContext = {
	activeComponent: TComponentKey;
	setActiveComponent: (el: TComponentKey) => void;
};

export const AppContext = createContext<AppContext | null>(null);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [activeComponent, _setActiveComponent] = useState<TComponentKey>(
		getCurrentComponent()
	);
	const setCurrentComponent = () => {
		_setActiveComponent(getCurrentComponent());
	};

	useEffect(() => {
		window.addEventListener("popstate", setCurrentComponent);

		window.addEventListener("pushstate", setCurrentComponent);

		window.addEventListener("replacestate", setCurrentComponent);

		return () => {
			window.removeEventListener("popstate", setCurrentComponent);
			window.removeEventListener("pushstate", setCurrentComponent);
			window.removeEventListener("replacestate", setCurrentComponent);
		};
	}, []);

	const setActiveComponent = (ComponentKey: TComponentKey) => {
		const urlParams = new URLSearchParams(window.location.search);
		const currentPageKey = urlParams.get("componentKey");
		if (urlParams.has("componentKey")) {
			urlParams.delete("componentKey");
		}

		if (currentPageKey === ComponentKey) {
			return;
		}

		window.history.pushState({}, "", `?componentKey=${ComponentKey}`);
		_setActiveComponent(ComponentKey);
	};

	return (
		<AppContext.Provider value={{ activeComponent, setActiveComponent }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = React.useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext must be used within a AppProvider");
	}

	return context;
};
