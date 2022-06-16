import styled from "styled-components";

const ProfileInformationStyle = styled.div``;
const BannerStyle = styled.div`
  height: 115px;
  background-color: ${({ theme }) => theme.COLORS.PANEL_BG};
`;

const ActionsStyle = styled.div`
  display: flex;
`;
const ImageStyle = styled.img`
  width: 85px;
  height: 85px;
  border: solid 3px black;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  object-fit: cover;
`;
const TopStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const GroupDescriptionStyle = styled.div`
  display: flex;
  > div:first-child {
    margin-right: 0.4rem;
  }
`;

export {
  ProfileInformationStyle,
  BannerStyle,
  ActionsStyle,
  TopStyle,
  ImageStyle,
  GroupDescriptionStyle,
};
