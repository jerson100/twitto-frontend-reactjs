import React from "react";
import JeLink from "../../../../../components/common/JeLink";
import { AuthFooterStyled, AuthNavigationStyled } from "./authFooter.style";

const AuthFooter = () => {
  return (
    <AuthFooterStyled>
      <AuthNavigationStyled>
        <JeLink className="authNavigationLink">Acerca de</JeLink>
        <JeLink className="authNavigationLink">Centro de ayuda</JeLink>
        <JeLink className="authNavigationLink">Condiciones de Servicio</JeLink>
        <JeLink className="authNavigationLink">Política de Privacidad</JeLink>
        <JeLink className="authNavigationLink">Política de cookies</JeLink>
        <JeLink className="authNavigationLink">Accesibilidad</JeLink>
        <JeLink className="authNavigationLink">Información de anuncios</JeLink>
        <JeLink className="authNavigationLink">Blog</JeLink>
        <JeLink className="authNavigationLink">Estado</JeLink>
        <JeLink className="authNavigationLink">Empleos</JeLink>
        <JeLink className="authNavigationLink">Recursos para marcas</JeLink>
        <JeLink className="authNavigationLink">Publicidad</JeLink>
        <JeLink className="authNavigationLink">Marketing</JeLink>
        <JeLink className="authNavigationLink">Twitter para empresas</JeLink>
        <JeLink className="authNavigationLink">Desarrolladores</JeLink>
        <JeLink className="authNavigationLink">Guía</JeLink>
        <JeLink className="authNavigationLink">Configuración</JeLink>
        <JeLink className="authNavigationLink">© 2022 Twitter, Inc.</JeLink>
      </AuthNavigationStyled>
    </AuthFooterStyled>
  );
};

export default AuthFooter;
