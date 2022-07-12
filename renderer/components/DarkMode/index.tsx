import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Theme } from 'renderer/types/ui';

const DarkMode: FC = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const getTheme = () => (theme === Theme.LIGHT_THEME ? Theme.DARK_THEME : Theme.LIGHT_THEME);

  const changeTheme = () => {
    setTheme(getTheme());
  };

  useEffect(() => {
    setDarkMode(theme === Theme.DARK_THEME);
  }, [theme]);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={changeTheme}
      moonColor={Theme.MOON_COLOR}
      sunColor={Theme.SUM_COLOR}
      size={32}
    />
  );
};
export default DarkMode;
