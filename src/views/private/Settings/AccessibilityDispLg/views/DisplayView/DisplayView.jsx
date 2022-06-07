import React, { useCallback } from "react";
import Button from "../../../../../../components/common/Button";
import Paragraph from "../../../../../../components/common/Paragraph";
import SelectColorGroup from "../../../../../../components/common/SelectColorGroup";
import Separator from "../../../../../../components/common/Separator";
import Tweet from "../../../../../../components/common/Tweet";
import { ContentStyle } from "../../../../../../components/styleComponents/content.style";
import { useChangeMainHeaderLayout } from "../../../../../../hooks/useChangeMainHeaderLayout";
import { useThemeContext } from "../../../../../../hooks/useThemeContext";

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

const THEMES = {
  "Predet.": "DEFAULT",
  "Noche Clara": "LIGHT_NIGHT",
  Oscuro: "DARK_NIGHT",
};

const DisplayView = () => {
  useChangeMainHeaderLayout("Mostrar");

  return (
    <>
      <ContentStyle>
        <Paragraph ass="p" color="SECONDARY" type="h5" marginbottom={false}>
          Administra el fondo, color y tamaño de la fuente. Esta configuración
          afecta a todas las cuentas de Twitter en este navegador.
        </Paragraph>
      </ContentStyle>
      <Tweet {...tweet} />
      <ContentStyle>
        <Paragraph ass="h2" type="h1">
          Tamaño de la fuente
        </Paragraph>
        <Paragraph color="SECONDARY">En proceso</Paragraph>
      </ContentStyle>
      <Separator />
      <ContentStyle>
        <Paragraph ass="h2" type="h2">
          Color
        </Paragraph>
        <SelectColorGroup
          colors={[
            "rgb(29, 155, 240)",
            "rgb(255, 212, 0)",
            "rgb(249, 24, 128)",
            "rgb(120, 86, 255)",
            "rgb(255, 122, 0)",
            "rgb(0, 186, 124)",
          ]}
          selectedItem="red"
        />
      </ContentStyle>
      <Separator />
      <BackgroundImage />
    </>
  );
};

const BackgroundImage = () => {
  const { changeTheme } = useThemeContext();
  const changeThemeAUX = useCallback((e) => {
    changeTheme(THEMES[e.target.textContent]);
  }, []);
  return (
    <ContentStyle>
      <Paragraph ass="h2" type="h1">
        Imagen de fondo
      </Paragraph>
      <Button color="NORMAL" size="VERY_BIG" handleClick={changeThemeAUX}>
        Predet.
      </Button>
      <Button color="LIGHT_NIGHT" size="VERY_BIG" handleClick={changeThemeAUX}>
        Noche Clara
      </Button>
      <Button color="BLACK" size="VERY_BIG" handleClick={changeThemeAUX}>
        Oscuro
      </Button>
    </ContentStyle>
  );
};

export default DisplayView;
