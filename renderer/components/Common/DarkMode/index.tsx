import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Theme } from 'renderer/types/ui';
import persistStore from 'renderer/utils/persistStore';

const DarkMode: FC = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const getTheme = () => (theme === Theme.LIGHT_THEME ? Theme.DARK_THEME : Theme.LIGHT_THEME);

  const changeTheme = () => {
    setTheme(getTheme());
    persistStore.set('theme', getTheme());
  };

  useEffect(() => {
    setDarkMode(theme === Theme.DARK_THEME);
  }, [theme]);

  return (
    <button className="btn btn-circle btn-ghost">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={changeTheme}
        moonColor={Theme.MOON_COLOR}
        sunColor={Theme.SUM_COLOR}
        size={32}
      />
    </button>
  );
};
export default DarkMode;
