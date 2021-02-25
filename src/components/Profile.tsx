import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
        <img src="https://github.com/pedrolgarcia.png" alt="Pedro Lopes" />
        <div>
            <strong>Pedro Lopes</strong>
            <p>
                <img src="icons/level.svg" alt="Level" />
                Level 1
            </p>
        </div>
    </div>
  );
}
