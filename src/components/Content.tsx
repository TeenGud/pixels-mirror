import Image from 'next/image';
import styles from '../styles/content.module.css';
import Bg from '../../public/bg.png';
import Tg from '../../public/tg.png';
import TgFull from '../../public/tg full.png';
import Qr from '../../public/qr.png';
import classNames from 'classnames';

export const Content = ()  => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.container, styles.animation)}>
                <Image src={Bg} width={1920} height={1200} className={styles.bg} alt='bg'/>
                <div className={styles.container}>
                    <Image src={Tg} width={1920} height={1200} className={styles.tg} alt='tg'/>
                </div>
                <div className={classNames(styles.container)}>
                    <Image src={TgFull} width={1920} height={1200} className={styles.tgFull} alt='tg'/>
                    <a href="#" className={styles.hover}></a>
                </div>
                <div className={styles.container}>
                    <Image src={Qr} width={1920} height={1200} className={styles.tg} alt='tg'/>
                </div>
            </div>
        </div>
    );
  }
  