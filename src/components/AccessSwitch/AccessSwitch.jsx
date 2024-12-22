import styles from './AccessSwitch.module.css';
import { WebContext } from '../../WebContext/WebContext';
import { useContext } from 'react';

const AccessSwitch = () => {
    const { accessLight, handleAccessLight } = useContext(WebContext);

    return (
        <div className={styles.container}>
            <label className={styles.switch}>
                <input type="checkbox" checked={accessLight} onChange={handleAccessLight} />
                <span className={styles.slider}>
                    <span className={`${styles.light} ${accessLight ? styles.green : styles.red}`}></span>
                </span>
            </label>
        </div>
    );
};

export default AccessSwitch;