// import styles from './AccessSwitch.module.css'
// import { WebContext } from '../../WebContext/WebContext';
// import { useContext } from 'react';
// import RedLight from '../..//assets/images/redLight.png'
// import GreenLight from '../..//assets/images/greenLight.png'

// const AccessSwitch = () => {

//     const { accessLight,handleAccessLight } = useContext(WebContext);

//     return (

//         <div className={styles.container} >
//             <label className={styles.switch}>
//                 <input type="checkbox" checked={accessLight} onChange={handleAccessLight} />
//                 <span className={styles.slider}>
//                     {accessLight ? (
//                         <img src={GreenLight} alt="Red Light" className={styles.light} />
//                     ) : (
//                         <img src={RedLight} className={styles.light} alt="Green Light" />
//                     )}
//                 </span>
//             </label>
//         </div>

//     )
// }

// export default AccessSwitch;

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