import styled, { css } from "styled-components";

const heading = ["H1", "H2", "H3", "H4", "H5", "H6"];

const ParagraphStyle = styled.p`
  color: ${({ theme: COLORS }) => COLORS.PRIMARY};
  ${({ theme: { TEXT }, $type }) => {
    const TYPE = $type ? $type.toUpperCase() : "P";
    return heading.includes(TYPE)
      ? css`
          font-size: ${TEXT.FONT.TITLE.TAGS[TYPE].SIZE};
          margin-bottom: ${TEXT.FONT.TITLE.TAGS[TYPE].MARGIN};
          font-weight: ${TEXT.FONT.TITLE.WEIGHT};
        `
      : css`
          font-size: ${TEXT.FONT.PARAGRAPH.SIZE};
          margin-bottom: ${TEXT.FONT.PARAGRAPH.MARGIN};
          font-weight: ${TEXT.FONT.PARAGRAPH.WEIGHT};
        `;
  }};
  ${({ size }) => size && `font-size:${size}`}
`;

export { ParagraphStyle };
