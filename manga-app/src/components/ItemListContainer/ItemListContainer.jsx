import styles from './ItemListContainer.module.css';

const ItemListContainer = ({greeting}) => {
  return (
      <div className={styles.ItemListContainer}>
        Bienvenido a Ikigai Manga Store! {greeting}
      </div>
  )
}

export default ItemListContainer