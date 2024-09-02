import React, { createContext, ReactNode, useState } from "react";
import Home from "../Pages/Home";

interface AppProviderProps {
	children: ReactNode; // Define the type for children
}

export interface ContextType {
	context: any; // Replace `any` with a more specific type
	setContext: React.Dispatch<React.SetStateAction<any>>; // Replace `any` with the same type as `context`
}

const _context = {
	ActiveComponent: <Home />,
};

export const AppContext = createContext<ContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [context, setContext] = useState<any>(_context);

	return (
		<AppContext.Provider value={{ context, setContext }}>
			{children}
		</AppContext.Provider>
	);
};
