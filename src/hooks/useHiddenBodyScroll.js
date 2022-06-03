import { useEffect } from "react";

const useHiddenBodyScroll = () => {
  useEffect(() => {
    console.log("modal");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
};

export { useHiddenBodyScroll };
