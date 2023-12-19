import styled from "styled-components";
import { theme } from "../theme/Theme";
import { IStyledProps } from "../interfaces/types";

export interface IStyledWithMobile extends IStyledProps {
  isMobile: boolean;
  mobileHeight: number;
}

export const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  position: relative;
  overflow: hidden;


  /* width */
  *::-webkit-scrollbar {
    width: 30px;
  }

  /* Track */
  *::-webkit-scrollbar-track {
  }

  /* Handle */
  *::-webkit-scrollbar-thumb {
  }

  /* Handle on hover */
  *::-webkit-scrollbar-thumb:hover {
    /* cursor: pointer;
    filter: brightness(50%); */
  }
`;
