import { useEffect } from "react";

const useHiddenBodyScroll = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.overflow = "";
    };
  }, []);
};

export { useHiddenBodyScroll };
