import styles from './Projects.module.css'
import { useContext, useEffect } from 'react'
import { WebContext } from '../../../WebContext/WebContext'
import { useTranslation } from 'react-i18next';

import Chokolade from './projectsTabs/Chokolade/Chokolade'
import Lumatic from './projectsTabs/Lumatic/Lumatic'
import JSCalculator from './projectsTabs/JSCalculator/JSCalculator'
import MyToDoApp from './projectsTabs/MyToDoApp/MyToDoApp'

const Projects = () => {

    const { t } = useTranslation();

    const {
        activeComponent,
        setActiveComponent,
        toggleComponent,
        selectedInstitute,
        handleInstituteClick,
        educationZIndex,
        isLightTheme
    } = useContext(WebContext);

    useEffect(() => {
        setActiveComponent(null);
        return () => setActiveComponent(null);
    }, []);


    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`} style={{ zIndex: educationZIndex }}>
            <div className={styles.titlesSection}>
                <h2 className={styles.title}>{t('projects')}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    {activeComponent === 'Chokolade' && <Chokolade />}
                    {activeComponent === 'Lumatic' && <Lumatic />}
                    {activeComponent === 'Calculator' && <JSCalculator />}
                    {activeComponent === 'ToDo' && <MyToDoApp />}
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button}
                        style={{ transform: selectedInstitute === 'Chokolade' ? 'scale(0.9)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('Chokolade');
                            handleInstituteClick('Chokolade');
                        }}>CHOKOLADE LA PLATA</div>
                    <div className={styles.button}
                        style={{ transform: selectedInstitute === 'Lumatic' ? 'scale(0.9)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('Lumatic');
                            handleInstituteClick('Lumatic');
                        }}>LUMATIC EVENTS</div>

                    <div className={styles.button}
                        style={{ transform: selectedInstitute === 'Calculator' ? 'scale(0.9)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('Calculator');
                            handleInstituteClick('Calculator');
                        }}>CALCULADORA SIMPLE</div>

                    <div className={styles.button}
                        style={{ transform: selectedInstitute === 'ToDo' ? 'scale(0.9)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('ToDo');
                            handleInstituteClick('ToDo');
                        }}>MY TODO APP</div>
                </div>
            </div>
        </div>
    )
}

export default Projects;