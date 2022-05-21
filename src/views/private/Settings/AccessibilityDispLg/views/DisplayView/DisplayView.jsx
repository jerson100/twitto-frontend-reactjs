import React from "react";
import Button from "../../../../../../components/common/Button";
import Paragraph from "../../../../../../components/common/Paragraph";
import Separator from "../../../../../../components/common/Separator";
import Tweet from "../../../../../../components/common/Tweet";
import { ContentStyle } from "../../../../../../components/styleComponents/content.style";
import { useChangeMainHeaderLayout } from "../../../../../../hooks/useChangeMainHeaderLayout";

const tweet = {
  user: {
    img: "https://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_x96.jpg",
    username: "Twitter",
    gmail: "@Twitter",
  },
  content:
    "La esencia de Twitter son mensajes breves llamados Tweets, como este, que pueden incluir fotos, videos, enlaces, texto, hashtags y menciones en el formato ",
  date: "7h",
  comments: 120,
  likes: 10,
  retwitts: 1,
};

const DisplayView = () => {
  useChangeMainHeaderLayout("Mostrar");
  return (
    <>
      <ContentStyle>
        <Paragraph ass="P" color="SECONDARY" type="h6" marginBottom={false}>
          Administra el fondo, color y tamaño de la fuente. Esta configuración
          afecta a todas las cuentas de Twitter en este navegador.
        </Paragraph>
      </ContentStyle>
      <Tweet {...tweet} />
      <Separator />
      <ContentStyle>
        <Paragraph ass="h2" type="h2">
          Tamaño de la fuente
        </Paragraph>
        <Paragraph color="SECONDARY">En proceso</Paragraph>
      </ContentStyle>
      <Separator />
      <ContentStyle>
        <Paragraph ass="h2" type="h2">
          Color
        </Paragraph>
        <Paragraph color="SECONDARY">En proceso</Paragraph>
      </ContentStyle>
      <Separator />
      <ContentStyle>
        <Paragraph ass="h2" type="h2">
          Imagen de fondo
        </Paragraph>
        <Button color="NORMAL" size="VERY_BIG">
          Predt.
        </Button>
        <Button color="NORMAL" type="GOSTH" size="VERY_BIG">
          Noche clara
        </Button>
        <Button color="BLACK" size="VERY_BIG">
          Oscuro
        </Button>
      </ContentStyle>
      <Separator />
    </>
  );
};

export default DisplayView;
