import { useContext, useState, useRef, useEffect } from "react";
import { AppContainer } from "./styles/styled";
import WindowContext from "./context/window/windowContext";
import { ThemeContext } from "styled-components";
import { theme } from "./theme/Theme";
import { DesktopContainer } from "./components/InnerPages/styles/styled";

export default function Home(){
    const viewport = window.visualViewport;
    // const {theme} = useContext(ThemeContext);
    const {windowState, createNewWindow} = useContext(WindowContext);

    const [loggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [selectedIcon, setSelectedIcon] = useState<string | null>();

    const canvasRef = useRef<any>();
    const [canDraw, setCanDraw] = useState<boolean>(false);


    return (
        <AppContainer>
            
            <DesktopContainer>

            </DesktopContainer>

        </AppContainer>
    )
} 