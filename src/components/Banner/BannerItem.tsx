import { BannerItemProps } from "./BannerItem.type";
import styles from './styles/BannerItem.module.scss';

const BannerItem = (props: BannerItemProps) => {

    return (<div className={styles['bannerItem__wrapper']}>
        {props.content}
    </div>)
}

export default BannerItem;