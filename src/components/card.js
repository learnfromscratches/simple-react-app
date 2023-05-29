import styles from './card.module.css'
import { useRouter } from 'next/router';

const Card = props =>{

    const router = useRouter()
    return(
        <div className={styles.card} >
            <img src={props.thumbnailImage} alt='Failed to load image'/>
            <h3>{props.title}</h3>
            <span>MRP</span>
            <span>Offer details</span>
        </div>
    )
}
export default Card;