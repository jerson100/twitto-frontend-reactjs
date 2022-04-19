import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../../../../components/common/Button";
import DescriptionText from "../../../../../components/common/DescriptionText";
import JeLink from "../../../../../components/common/JeLink";
import Paragraph from "../../../../../components/common/Paragraph";
import Separator from "../../../../../components/common/Separator";
import Space from "../../../../../components/common/Space";
import { InputStyle } from "../../../../../components/styleComponents/input.style";
import { LoginContentStyle } from "../../login.style";

const LoginContent = ({ handleNext }) => {
  return (
    <LoginContentStyle>
      <Paragraph type="h4" as="h1">
        Inicia sesión en twitto
      </Paragraph>
      <Button
        rounded
        size="BIG"
        color="normal"
        // maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faGoogle} />}
      >
        Iniciar sesión con google
      </Button>
      <Button
        rounded
        size="BIG"
        color="normal"
        // maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faApple} />}
      >
        Iniciar sesión con apple
      </Button>
      <Separator text="O" />
      <InputStyle type="text" />
      <Button
        rounded
        size="BIG"
        color="NORMAL"
        handleClick={handleNext}
        //    maxWidth="300px"
      >
        Siguiente
      </Button>
      <Button
        rounded
        size="BIG"
        color="NORMAL"
        type="GOSTH"
        //    maxWidth="300px"
      >
        Olvidaste tu contraseña
      </Button>
      <Space />
      <DescriptionText>
        <Paragraph as="p" type="p" size="14px">
          ¿No tienes una cuenta?
          <JeLink color="BLUE"> Registrate</JeLink>
        </Paragraph>
      </DescriptionText>
    </LoginContentStyle>
  );
};

export default LoginContent;
