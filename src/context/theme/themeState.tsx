import { useReducer } from "react";
//이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다. 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있지요.
import ThemeReducer from "./themeReducer";
import ThemeContext from "./themeContext";
import {
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  SET_BLUE_THEME,
  SET_PEACH_THEME,
  SET_PINK_THEME,
  SET_PURPLE_THEME,
  SET_TURQUOISE_THEME,
  IPropsState,
} from "./types";
import { lightThemeDefault, darkThemeDefault, KobayashiColors } from "./colorSchemes";


const ThemeState = (props: IPropsState) => {
    const savedTheme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")!) : null;
    const defaultState = lightThemeDefault;
  
    const [theme, dispatch] = useReducer(ThemeReducer, defaultState);
  
    const setLightTheme = () => {
      dispatch({ type: SET_LIGHT_THEME, payload: lightThemeDefault });
      localStorage.setItem("theme", JSON.stringify({ ...theme, ...lightThemeDefault }));
      return { ...theme, ...lightThemeDefault };
    };
  
    const setDarkTheme = () => {
      dispatch({ type: SET_DARK_THEME, payload: darkThemeDefault });
      localStorage.setItem("theme", JSON.stringify({ ...theme, ...darkThemeDefault }));
      return { ...theme, ...darkThemeDefault };
    };
  
    const setPinkColor = () => {
      const newTheme = {
        ...theme,
        backgroundColor: KobayashiColors.pink.background,
        terminalColor: KobayashiColors.pink.terminal,
        borderColor: "#30302C",
        textColor: "#1C1C1C",
        shadowColor: "#30302C",
      };
  
      dispatch({ type: SET_PINK_THEME, payload: KobayashiColors });
      localStorage.setItem("theme", JSON.stringify(newTheme));
  
      return newTheme;
    };
  
    const setPeachColor = () => {
      const newTheme = {
        ...theme,
        backgroundColor: KobayashiColors.peach.background,
        terminalColor: KobayashiColors.peach.terminal,
        borderColor: "#30302C",
        textColor: "#1C1C1C",
        shadowColor: "#30302C",
      };
  
      dispatch({ type: SET_PEACH_THEME, payload: KobayashiColors });
      localStorage.setItem("theme", JSON.stringify(newTheme));
  
      return newTheme;
    };
  
    const setTurquoiseColor = () => {
      const newTheme = {
        ...theme,
        backgroundColor: KobayashiColors.turquoise.background,
        terminalColor: KobayashiColors.turquoise.terminal,
        borderColor: "#30302C",
        textColor: "#1C1C1C",
        shadowColor: "#30302C",
      };
  
      dispatch({ type: SET_TURQUOISE_THEME, payload: KobayashiColors });
      localStorage.setItem("theme", JSON.stringify(newTheme));
  
      return newTheme;
    };
  
    const setPurpleColor = () => {
      const newTheme = {
        ...theme,
        backgroundColor: KobayashiColors.purple.background,
        terminalColor: KobayashiColors.purple.terminal,
        borderColor: "#30302C",
        textColor: "#1C1C1C",
        shadowColor: "#30302C",
      };
  
      dispatch({ type: SET_PURPLE_THEME, payload: KobayashiColors });
      localStorage.setItem("theme", JSON.stringify(newTheme));
  
      return newTheme;
    };
  
    const setBlueColor = () => {
      const newTheme = {
        ...theme,
        backgroundColor: KobayashiColors.blue.background,
        terminalColor: KobayashiColors.blue.terminal,
        borderColor: "#30302C",
        textColor: "#1C1C1C",
        shadowColor: "#30302C",
      };
  
      dispatch({ type: SET_BLUE_THEME, payload: KobayashiColors });
      localStorage.setItem("theme", JSON.stringify(newTheme));
  
      return newTheme;
    };
  
    const themeChangeMap = {
      blue: setBlueColor,
      peach: setPeachColor,
      turquoise: setTurquoiseColor,
      purple: setPurpleColor,
      pink: setPinkColor,
    };
  
    return (
      <ThemeContext.Provider
        value={{
          theme,
          themeChangeMap,
          setDarkTheme,
          setLightTheme,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeState;