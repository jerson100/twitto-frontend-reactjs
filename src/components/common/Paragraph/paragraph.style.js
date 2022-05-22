import styled, { css } from "styled-components";

const headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

const ParagraphStyle = styled.p`
  color: ${({ theme: { COLORS }, color }) =>
    color
      ? color === "SECONDARY"
        ? COLORS.SECONDARY
        : color
      : COLORS.PRIMARY};
  ${({ theme: { TEXT }, $type, ass }) => {
    const TYPE = $type ? $type.toUpperCase() : "P";
    if (headings.includes(TYPE)) {
      return css`
        ${TEXT.FONT.TITLE.TAGS[TYPE]}
        font-weight: ${ass !== "p" ? TEXT.FONT.TITLE.WEIGHT : "normal"};
      `;
    } else {
      return css`
        font-size: ${TEXT.FONT.PARAGRAPH.SIZE};
        margin-bottom: ${TEXT.FONT.PARAGRAPH.MARGIN};
        font-weight: ${TEXT.FONT.PARAGRAPH.WEIGHT};
      `;
    }
  }};
  ${({ size }) => size && `font-size:${size} !important`}
  ${({ marginBottom }) =>
    !marginBottom &&
    css`
      margin-bottom: initial;
    `}
`;

export { ParagraphStyle };
