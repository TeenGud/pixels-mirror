import Image from 'next/image';
import styles from '../styles/content.module.css';
import Bg from '../../public/bg.png';

export const Content = ()  => {
    return (
        <div className={styles.container}>
            <Image src={Bg} width={1920} height={1200} className={styles.bg} alt='bg'/>
        </div>
    );
  }
  