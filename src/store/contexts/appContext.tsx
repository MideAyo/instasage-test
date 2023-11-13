// YourContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AppContextType{
    isSideBarOpen: boolean;
    toggleSideBar: ()=>void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useYourContext must be used within a YourContextProvider');
    }
    return context;
};
interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    const value = {
        isSideBarOpen,
        toggleSideBar,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, useAppContext, AppProvider };
