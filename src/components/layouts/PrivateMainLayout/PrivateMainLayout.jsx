import React, { useCallback, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { PrivateMaintStyle } from "./headerMaintLayout.style";
import PrivateMainLayoutContext from "./context/PrivateMainLayoutContext";

const PrivateMainLayout = ({ iconLeft, children }) => {
  const [title, settitle] = useState("");
  const [subtitle, setsubtitle] = useState("@loveting100"); //example
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
