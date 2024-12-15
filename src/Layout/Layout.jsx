import { Outlet } from 'react-router-dom';
import LeftMenu from '../Home/LeftMenu/LeftMenu';
import RightMenu from '../Home/RightMenu/RightMenu';
import TopMenu from '../Home/TopMenu/TopMenu';
import BottomMenu from '../Home/BottomMenu/BottomMenu';
import styles from './Layout.module.css'

const Layout = () => {
    return (
        <div className={styles.container}>
            <LeftMenu />
            <RightMenu />
            <TopMenu />
            <BottomMenu />
            <Outlet/>
        </div>
    )
}

export default Layout;