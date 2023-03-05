import icon from '../../assets/images/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div>
            <img alt="ikigai-logo" src={icon} className={styles.Logo}/>
        </div>
    )
};

export default Logo;