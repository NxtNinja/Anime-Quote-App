import Display from "@/components/Display";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ThemeAtom from "@/utils/ThemeAtom";
import { useAtom } from "jotai";
import { useEffect } from "react";

const index = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Navigation />

      <Display />

      <Footer />
    </>
  );
};

export default index;
