import { useEffect } from "react";
import { usePrivateMainLayoutContext } from "./usePrivateMainLayoutContext";

const useChangeMainHeaderLayout = (title, subtitle) => {
  const { changeTitle, changeSubtitle } = usePrivateMainLayoutContext();
  useEffect(() => {
    if (title) changeTitle(title);
    if (subtitle) changeSubtitle(subtitle);
  }, [title, subtitle, changeTitle, changeSubtitle]);
};

export { useChangeMainHeaderLayout };
