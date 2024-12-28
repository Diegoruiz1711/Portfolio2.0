import styles from './RightMenu.module.css';
import AccessButton from '../../assets/images/accessButton.png';
import { useContext } from 'react';
import { WebContext } from '../../WebContext/WebContext';
import AccessSwitch from '../../components/AccessSwitch/AccessSwitch';


const RightMenu = () => {
    const { codeValue, handleAccessCode, numbers, handleAccessGaranted } = useContext(WebContext);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.accessLights}>
                    <AccessSwitch />
                </div>
                <div className={styles.accessControl}>
                    <div className={styles.visor}>
                        {codeValue}
                    </div>
                    <div className={styles.numbers}>
                        {numbers.map((element, index) => (
                            <button
                                key={index}
                                className={styles.button}
                                onClick={() => handleAccessCode(element)}
                            >
                                {element}
                            </button>
                        ))}
                    </div>
                    <button className={styles.accessButton} onClick={handleAccessGaranted}>
                        <img src={AccessButton} alt="Access Button" className={styles.accessImg} />
                    </button>
                </div>
            </div>
    

        </>
    );
};

export default RightMenu;
