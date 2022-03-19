import styled from "styled-components";
import { BREAKPOINTS } from "../../../../../configs/style";

const AuthBodyStyleContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;
const RightStyle = styled.div`
  flex: 1 0 auto;
  max-width: 760px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BgImagenStyle = styled.div`
  background-image: url(${({ image }) => image});
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
`;

const LeftStyle = styled.div`
  min-height: 45vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1 0 0;
`;

const SvgStyle = styled.svg`
  fill: #fff;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  width: 100%;
  z-index: 1;
  position: relative;
`;

export {
  AuthBodyStyleContainer,
  RightStyle,
  LeftStyle,
  BgImagenStyle,
  SvgStyle,
};
