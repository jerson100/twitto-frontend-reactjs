import styled, { css } from "styled-components";

const headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

const ParagraphStyle = styled.p`
  color: ${({ theme: { COLORS }, color }) =>
    color
      ? color === "SECONDARY"
        ? COLORS.SECONDARY
        : color
      : COLORS.PRIMARY};
  ${({ theme: { TEXT }, $type }) => {
    const TYPE = $type ? $type.toUpperCase() : "P";
    return headings.includes(TYPE)
      ? css`
          ${TEXT.FONT.TITLE.TAGS[TYPE]}
          font-weight: ${TEXT.FONT.TITLE.WEIGHT};
        `
      : css`
          font-size: ${TEXT.FONT.PARAGRAPH.SIZE};
          margin-bottom: ${TEXT.FONT.PARAGRAPH.MARGIN};
          font-weight: ${TEXT.FONT.PARAGRAPH.WEIGHT};
        `;
  }};
  ${({ size }) => size && `font-size:${size} !important`}
`;

export { ParagraphStyle };
