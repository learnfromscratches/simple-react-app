import styles from "./navbar.module.css"
import { BsSearch, BsBagHeart,BsCart4, BsChatRightQuote } from "react-icons/bs"

const Navbar = () => {
    return (
        <div className={styles.navbody}>
            <span className={styles.branding}>Shoppers Stop</span>
            <div className={styles.navIcons}>
                <BsSearch className={styles.icons} />
                <BsBagHeart className={styles.icons} />
                <BsCart4 className={styles.icons}/>
                {/* <span><BsChatRightQuote />Chat with us</span> */}
            </div>
        </div>
    )
}
export default Navbar;