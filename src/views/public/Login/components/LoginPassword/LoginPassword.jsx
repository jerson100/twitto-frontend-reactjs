import React, { useCallback, useState } from "react";
import Button from "../../../../../components/common/Button";
import JeLink from "../../../../../components/common/JeLink";
import Paragraph from "../../../../../components/common/Paragraph";
import Space from "../../../../../components/common/Space";
import { InputStyle } from "../../../../../components/styleComponents/input.style";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import { LoginPasswordContainerStyle } from "./passwordForm.style";

const LoginPassword = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { onLogin } = useAuthContext();
  //   const navigate = useNavigate();

  const handleClick = useCallback(async () => {
    try {
      await onLogin(email, password);
      //   navigate("/home", {
      //     replace: true,
      //   });
    } catch (e) {
      console.log(e);
    }
  }, [email, password]);
  return (
    <LoginPasswordContainerStyle>
      <Paragraph type="h4" as="h1">
        Inicia sesión en twitto
      </Paragraph>
      <InputStyle
        type="text"
        placeholder="correo"
        value={email}
        onChange={({ target }) => setemail(target.value)}
      />
      <InputStyle
        type="password"
        placeholder="password"
        value={password}
        onChange={({ target }) => setpassword(target.value)}
      />
      <Paragraph type="h6" as="p">
        <JeLink color="BLUE">¿Olvidaste tu contraseña?</JeLink>
      </Paragraph>
      <Space size="80px" />
      <Button
        type="GOSTH"
        color="BLUE"
        rounded
        block={false}
        handleClick={handleClick}
      >
        Iniciar Sesión
      </Button>
      <Space />
    </LoginPasswordContainerStyle>
  );
};

export default LoginPassword;
