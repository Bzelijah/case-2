import styles from "./header.module.css"

type Props = {}

export const Header: React.FC<Props> = () => {
    return (
        <header className={styles.header}>
            header
        </header>
    )
}
