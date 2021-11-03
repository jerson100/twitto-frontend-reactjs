import styled from "styled-components";
import { BREAKPOINTS } from "../../../../../configs/style";

const AuthBodyStyleContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column-reverse;
  height: 0;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightStyle = styled.div`
  flex: 1 0 auto;
  max-width: 600px;
  padding: 1rem;
`;

const BgImagenStyle = styled.div`
  background-image: url(${({ image }) => image});
  height: 100%;
  width: 100%;
  background-size: cover;
`;

const LeftStyle = styled.div`
  min-height: 45vh;
  position: relative;
  @media screen and (min-width: 600px) {
    flex: 1 0 0;
  }
`;

const SvgStyle = styled.svg`
  fill: #fff;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 100%;
  padding: 1rem;
  display: inline-block;
`;

export {
  AuthBodyStyleContainer,
  RightStyle,
  LeftStyle,
  BgImagenStyle,
  SvgStyle,
};
