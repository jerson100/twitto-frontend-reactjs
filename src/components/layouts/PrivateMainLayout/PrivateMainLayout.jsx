import React, { useCallback, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { PrivateMaintStyle } from "./headerMaintLayout.style";
import PrivateMainLayoutContext from "./context/PrivateMainLayoutContext";

const PrivateMainLayout = ({
  iconLeft,
  children,
  title: propTitle,
  subtitle: propSubtitle,
}) => {
  const [title, settitle] = useState(propTitle);
  const [subtitle, setsubtitle] = useState(propSubtitle); //example
  const changeTitle = useCallback((title) => {
    settitle(title);
  }, []);
  const changeSubtitle = useCallback((subtitle) => {
    setsubtitle(subtitle);
  }, []);

  return (
    <PrivateMaintStyle>
      <PrivateMainLayoutContext.Provider
        value={{ title, subtitle, changeSubtitle, changeTitle }}
      >
        <Header iconLeft={iconLeft} />
        <Main>{children}</Main>
      </PrivateMainLayoutContext.Provider>
    </PrivateMaintStyle>
  );
};

export default PrivateMainLayout;
