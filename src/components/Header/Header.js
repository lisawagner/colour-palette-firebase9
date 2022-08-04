import { handleAdd, handleQueryDelete } from '../../utils/utils'

// styles
import styles from './Header.module.css'

const Header = () => {

  return (
    <div className={styles.headerWrap}>
        <h1 className={styles.headerTitle}>Colour Palette Builder</h1>
        <div className={styles.headerBtns}>
          <button className={styles.rainbowButton} onClick={handleQueryDelete}>Query Delete</button>
          <button className={styles.rainbowButton} onClick={handleAdd}>Add New Colour</button>
        </div>

    </div>
  )
}

export default Header