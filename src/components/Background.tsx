import styles from '@/styles/background.module.css';
import classNames from "classnames";


export const Background = ({children}: {children: React.ReactNode})  => {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.space__bg)}>
                <div className={styles.lin}>
                    {children}
                </div>
            </div>
        </div>
    );
  }
  