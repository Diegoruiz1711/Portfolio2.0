import styles from './Education.module.css';
import { useContext, useEffect } from 'react';
import { WebContext } from '../../../WebContext/WebContext';
import { useTranslation } from 'react-i18next';

import NuclioLogo from '../../../assets/images/nuclio.png';
import UTNLogo from '../../../assets/images/utnLogo.png';
import CaCLogo from '../../../assets/images/codoAcodo.png';
import CFPLogo from '../../../assets/images/cfp.png';
import CourseraLogo from '../../../assets/images/coursera.png';

import UTN from './institutions/UTN/UTN';
import Nuclio from './institutions/Nuclio/Nuclio';
import CaC from './institutions/CaC/CaC';
import CFP from './institutions/CFP/CFP';
import Coursera from './institutions/Coursera/Coursera';

const Education = () => {

    const {t}= useTranslation();

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
                <h2 className={styles.title}>{t('education')}</h2>
            </div>

            <div className={styles.content}>

                <div className={styles.buttons}>
                    <div
                        className={styles.institution}
                        style={{ transform: selectedInstitute === 'Nuclio' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('Nuclio');
                            handleInstituteClick('Nuclio');
                        }}
                    >
                        <img src={NuclioLogo} alt="Nuclio Logo" className={styles.institutionLogo} />
                    </div>
                    <div
                        className={styles.institution}
                        style={{ transform: selectedInstitute === 'CodoACodo' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('CodoACodo');
                            handleInstituteClick('CodoACodo');
                        }}
                    >
                        <img src={CaCLogo} alt="Codo a Codo Logo" className={styles.institutionLogo} />
                    </div>
                    <div
                        className={styles.institution}
                        style={{ transform: selectedInstitute === 'CFP' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('CFP');
                            handleInstituteClick('CFP');
                        }}
                    >
                        <img src={CFPLogo} alt="CFP Logo" className={styles.institutionLogo} />
                    </div>
                    <div
                        className={styles.institution}
                        style={{ transform: selectedInstitute === 'UTN' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('UTN');
                            handleInstituteClick('UTN');
                        }}
                    >
                        <img src={UTNLogo} alt="UTN Logo" className={styles.institutionLogo} />
                    </div>
                    <div
                        className={styles.institution}
                        style={{ transform: selectedInstitute === 'Coursera' ? 'scale(0.8)' : 'scale(1)' }}
                        onClick={() => {
                            toggleComponent('Coursera');
                            handleInstituteClick('Coursera');
                        }}
                    >
                        <img src={CourseraLogo} alt="Coursera Logo" className={styles.institutionLogo} />
                    </div>
                </div>

                <div className={styles.description}>
                    {activeComponent === 'UTN' && <UTN />}
                    {activeComponent === 'Nuclio' && <Nuclio />}
                    {activeComponent === 'CodoACodo' && <CaC />}
                    {activeComponent === 'CFP' && <CFP />}
                    {activeComponent === 'Coursera' && <Coursera />}
                </div>
            </div>
        </div>
    );
};

export default Education;
