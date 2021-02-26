import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent-gru1-1.cdninstagram.com/v/t51.2885-19/s150x150/88224789_1131875587157573_7030898000838787072_n.jpg?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_ohc=XkvSpZVaxBcAX8TfcED&tp=1&oh=7c1013aa2ed14783685fb6c2eb67effa&oe=6060D2D9" alt="Suelen Ferreira"/>
            <div>
                <strong>Suelen Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}