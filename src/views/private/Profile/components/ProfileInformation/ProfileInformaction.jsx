import React from "react";
import Button from "../../../../../components/common/Button";
import FollowButton from "../../../../../components/common/FollowButton/FollowButton";
import Icon from "../../../../../components/common/Icon/Icon";
import JeLink from "../../../../../components/common/JeLink/JeLink";
import Paragraph from "../../../../../components/common/Paragraph";
import Row from "../../../../../components/common/Row/Row";
import Space from "../../../../../components/common/Space";
import { ContentStyle } from "../../../../../components/styleComponents/content.style";
import {
  FollowContaierStyle,
  FollowNumberStyle,
  FollowTextStyle,
} from "../../../../../components/styleComponents/tweet";
import {
  ProfileInformationStyle,
  BannerStyle,
  ActionsStyle,
  ImageStyle,
  TopStyle,
  GroupDescriptionStyle,
} from "./profileInformaction.style";

const ProfileInformaction = () => {
  return (
    <ProfileInformationStyle>
      <BannerStyle />
      <ContentStyle>
        <TopStyle>
          <ImageStyle src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg" />
          <ActionsStyle>
            <Button
              rounded
              size="SMALLER"
              type="GOSTH"
              Icon={<Icon size="SMALL" svg="option" />}
            />
            <div>
              <FollowButton size="SMALLER" />
            </div>
          </ActionsStyle>
        </TopStyle>
        <Space type="SMALL" />
        <Paragraph ass="h1" type="h3" marginbottom={false}>
          loveting100
        </Paragraph>
        <Paragraph ass="p" color="SECONDARY" type="h5" marginbottom={false}>
          @loveting100
        </Paragraph>
        <Space type="SMALL" />
        <Paragraph ass="p" marginbottom={false}>
          AVISO LEGAL: Si nos envías un tweet, estás permitiendo que ESPN lo
          muestre en cualquiera de sus plataformas, incluyendo los diferentes
          canales de televisión.
        </Paragraph>
        <Space type="SMALL" />
        <Row>
          <Row.Column col={12}>
            <GroupDescriptionStyle>
              <Icon svg="location" size="SMALLER" color="SECONDARY" />
              <Paragraph color="SECONDARY" marginbottom={false}>
                San Diego, CA
              </Paragraph>
            </GroupDescriptionStyle>
          </Row.Column>
          <Row.Column col={12}>
            <GroupDescriptionStyle>
              <Icon svg="link" size="SMALLER" color="SECONDARY" />
              <JeLink href="https://www.google.com.pe" color="BLUE">
                ESPN.com
              </JeLink>
            </GroupDescriptionStyle>
          </Row.Column>
          <Row.Column>
            <GroupDescriptionStyle>
              <Icon svg="calendar" size="SMALLER" color="SECONDARY" />
              <Paragraph color="SECONDARY" marginbottom={false}>
                Se unió en junio de 2010
              </Paragraph>
            </GroupDescriptionStyle>
          </Row.Column>
        </Row>
        <Space type="SMALL" />
        <Row>
          <Row.Column>
            <FollowContaierStyle>
              <FollowNumberStyle>1.581 </FollowNumberStyle>
              <FollowTextStyle>Siguiendo</FollowTextStyle>
            </FollowContaierStyle>
          </Row.Column>
          <Row.Column>
            <FollowContaierStyle>
              <FollowNumberStyle>2.8 M </FollowNumberStyle>
              <FollowTextStyle>Seguidores</FollowTextStyle>
            </FollowContaierStyle>
          </Row.Column>
        </Row>
      </ContentStyle>
      <Space type="SMALL" />
      <Paragraph>En progreso...</Paragraph>
    </ProfileInformationStyle>
  );
};

export default ProfileInformaction;
