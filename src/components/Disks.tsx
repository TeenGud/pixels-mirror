import styles from '@/styles/disks.module.css';
import SpeedFirst from "../../public/disks/speed1.png";
import SpeedSecond from "../../public/disks/speed2.png";
import SpeedThird from "../../public/disks/speed3.png";
import SpeedFourth from "../../public/disks/speed4.png";
import SpeedFith from "../../public/disks/speed5.png";
import SpeedSix from "../../public/disks/speed6.png";
import Image from 'next/image';


export const Disks = ()  => {
    return (
        <div className={styles.container}>
            <Image src={SpeedFirst} alt='Disks' width={2537} height={1549} className={styles.first}/>
            <Image src={SpeedSecond} alt='Disks' width={2537} height={1549} className={styles.second}/>
            <Image src={SpeedThird} alt='Disks' width={2537} height={1549} className={styles.third}/>
            <Image src={SpeedFourth} alt='Disks' width={2537} height={1549} className={styles.fourth}/>
            <Image src={SpeedFith} alt='Disks' width={1959} height={1439} className={styles.five}/>
            <Image src={SpeedSix} alt='Disks' width={2537} height={1549} className={styles.six}/>
        </div>
    );
  }
  