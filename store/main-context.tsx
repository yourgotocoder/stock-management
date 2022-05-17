import { createContext, useState } from "react";

const MainContext = createContext({
    currentAction: "",
    setCurrentAction: (componentClicked: string) => {},
});

type Props = {
    children: React.ReactNode;
};

export function MainContextProvider(props: Props) {
    const [currentComponent, setCurrentComponent] = useState("");

    const setCurrentMainCard = (componentClicked: string) => {
        setCurrentComponent(componentClicked);
    };

    const context = {
        currentAction: currentComponent,
        setCurrentAction: setCurrentMainCard,
    };

    return (
        <MainContext.Provider value={context}>
            {props.children}
        </MainContext.Provider>
    );
}

export default MainContext;
