import Image from "next/image"
import Link from "next/link"
import NFT from "../images/image-equilibrium.jpg"
import EthIcon from "../images/icon-ethereum.svg"
import ClockIcon from "../images/icon-clock.svg"
import AuthorImg from "../images/image-avatar.png"
import styles from "../styles/Modal.module.css"

export default function Modal() {
    return (
        <div className={styles.Modal}>
            <div className={styles.ModalNFTImage}>
                <Image src={NFT} alt="nft" width={350} height={350}/>
            </div>
            <div className={styles.ModalHeader}>
                <h3 className={styles.ModalHeaderHeading}>Equilibrium #3429</h3>
                <p className={styles.ModalHeaderDescrip}>Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <div className={styles.ModalInfo}>
                <p className={styles.ModalInfoPrice}>
                    <span className={styles.ModalInfoPriceIcon}>
                        <Image src={EthIcon} alt="ethereum icon" width={10} height={15}/>
                    </span>
                    0.041 eth
                </p>
                <p className={styles.ModalInfoExpireDate}>
                    <span className={styles.ModalInfoExpireDateIcon}>
                        <Image src={ClockIcon} alt="clock" width={15} height={15}/>
                    </span>
                    3 days left
                </p>
            </div>
            <span className={styles.ModalSeparator}></span>
            <div className={styles.ModalAuthor}>
                <div className={styles.ModalAuthorImg}>
                    <Image src={AuthorImg} alt="author" width={30} height={30}/>
                </div>
                <p className={styles.ModalAuthorText}>
                    Creation of
                    <Link href="/"><a className={styles.ModalAuthorLink}>Jules Wyvern</a></Link>
                </p>
            </div>
        </div>
    )
}
