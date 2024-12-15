import styles from './RightMenu.module.css';
import AccessButton from '../../assets/images/accessButton.png';
import { useContext } from 'react';
import { WebContext } from '../../WebContext/WebContext';
import Door1 from '../../assets/images/door1.png';
import Door from '../../assets/images/bgDoor.png';
import Door2 from '../../assets/images/door2.png';
import AccessSwitch from '../../components/AccessSwitch/AccessSwitch';

const RightMenu = () => {
    const { codeValue, handleAccessCode, numbers, handleAccessGaranted, accessLight, doorsOpen, doorsClose, openModal } = useContext(WebContext);

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
            <div className={styles.background}>
                <img
                    src={Door}
                    alt="Marco de la puerta"
                    className={`${styles.door}`}
                />
                <img
                    src={Door1}
                    alt="Puerta izquierda"
                    className={`${styles.door1} ${doorsOpen ? styles.doorOpen : ''}
                                                ${doorsClose ? styles.doorClose : ''}`}
                />
                <img
                    src={Door2}
                    alt="Puerta derecha"
                    className={`${styles.door2} ${doorsOpen ? styles.doorOpen : ''}
                                                ${doorsClose ? styles.doorClose : ''}`}
                />
            </div>

        </>
    );
};

export default RightMenu;
