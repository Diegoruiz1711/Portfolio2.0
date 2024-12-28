import { Outlet } from 'react-router-dom';
import LeftMenu from '../Home/LeftMenu/LeftMenu';
import RightMenu from '../Home/RightMenu/RightMenu';
import TopMenu from '../Home/TopMenu/TopMenu';
import BottomMenu from '../Home/BottomMenu/BottomMenu';
import styles from './Layout.module.css'
import Door from '../assets/images/bgDoor.png'
import Door1 from '../assets/images/door1.png'
import Door2 from '../assets/images/door2.png'
import { useContext } from 'react';
import { WebContext } from '../WebContext/WebContext';

const Layout = () => {

    const { doorsOpen, doorsClose } = useContext(WebContext);

    return (
        <>
            <div className={styles.top}>
                <TopMenu />
            </div>
            <div className={styles.left}>
                <LeftMenu />
            </div>
            <div className={styles.right}>
                <RightMenu />
            </div>
            <div className={styles.bottom}>
                <BottomMenu />
            </div>
            <div className={styles.outlet}>
                <img src={Door} alt="Marco de la puerta" className={styles.door} />
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
                <Outlet />

        </>
    );
};
export default Layout;