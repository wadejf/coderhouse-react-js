import icon from '../../assets/images/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div>
            <img src={icon} className={styles.Logo}/>
        </div>
    )
};

export default Logo;