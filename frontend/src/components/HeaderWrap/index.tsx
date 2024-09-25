import Header from "../Header";
import styles from './headerwrap.module.css'

export default function HeaderWrap({ toggleSidebar }: any) {
    return (
        <div className={styles.headerOuter}>
            <Header />
        </div>
    )
}