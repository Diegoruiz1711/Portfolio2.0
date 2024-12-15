import styles from './Skills.module.css'
import { useContext } from 'react'
import { WebContext } from '../../../WebContext/WebContext'

import Bootstrap from '../../../assets/images/bootstrap.png'
import TypeScript from '../../../assets/images/typeScript.png'
import Java from '../../../assets/images/java.png'
import React from '../../../assets/images/react.png'
import ReactNative from '../../../assets/images/reactNative.png'
import Node from '../../../assets/images/node.png'
import Cypress from '../../../assets/images/cypress.png'
import Insomnia from '../../../assets/images/insomnia.png'
import MongoDB from '../../../assets/images/mongoDB.png'
import Javascript from '../../../assets/images/javascript.png'
import Express from '../../../assets/images/express.png'
import HTML from '../../../assets/images/html.png'
import CSS from '../../../assets/images/css.png'
import Figma from '../../../assets/images/figma.png'
import Corel from '../../../assets/images/corelDraw.png'
import { useTranslation } from 'react-i18next';

const Skills = () => {

    const { isLightTheme, educationZIndex } = useContext(WebContext)

    const { t } = useTranslation()
    return (
            <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`} style={{ zIndex: educationZIndex }}>
                <div className={styles.titlesSection}>
                    <h2 className={styles.title}>{t('skills')}</h2>
                </div>

                <div className={styles.skillsContainer}>
                    <div className={styles.skill}>
                        <img src={HTML} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>HTML5</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={CSS} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>CSS3</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Javascript} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>JavaScript</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={React} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>React</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Node} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>NodeJs</div>
                    </div>

                    <div className={styles.skill}>
                        <img src={ReactNative} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>React Native</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Java} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>Java</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Cypress} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>Cypress</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Insomnia} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>Insomnia</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={MongoDB} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>MongoDB</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Express} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>Express</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={TypeScript} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>TypeScript</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Bootstrap} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>Bootstrap</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Figma} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>Figma</div>
                    </div>
                    <div className={styles.skill}>
                        <img src={Corel} alt="" className={styles.skillImage} />
                        <div className={styles.skillName}>CorelDraw</div>
                    </div>
                </div>
            </div>
    )
}

export default Skills;