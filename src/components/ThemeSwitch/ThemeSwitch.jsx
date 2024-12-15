import styles from './ThemeSwitch.module.css';
import { WebContext } from '../../WebContext/WebContext';
import { useContext } from 'react';
import Sun from '../../assets/images/sun.png';
import Moon from '../../assets/images/moon.png';

const ThemeSwitch = () => {
    const { toggleTheme, theme, isLightTheme } = useContext(WebContext);

    return (
        <div className={styles.container}>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={!isLightTheme}
                    onChange={toggleTheme}
                />
                <span className={styles.slider}>
                    {isLightTheme ? (
                        <img src={Moon} alt="Dark mode" className={styles.light} />
                    ) : (
                        <img src={Sun} alt="Light mode" className={styles.dark} />
                    )}
                </span>
            </label>
        </div>
    );
};

export default ThemeSwitch;
