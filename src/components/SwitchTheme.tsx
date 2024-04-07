import ThemeAtom from "@/utils/ThemeAtom";
import { Switch } from "@nextui-org/react";
import { useAtom } from "jotai";
import { BiSun, BiMoon } from "react-icons/bi";

const SwitchTheme = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);
  return (
    <>
      <Switch
        defaultSelected
        size="lg"
        color="success"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <BiSun className={className} />
          ) : (
            <BiMoon className={className} />
          )
        }
        isSelected={theme}
        onValueChange={(isSelected: boolean) => setTheme(isSelected)}
      />
    </>
  );
};

export default SwitchTheme;
