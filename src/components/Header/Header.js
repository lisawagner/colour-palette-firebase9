import React from 'react'

// styles
import styles from './Header.module.css'

const Header = () => {
  const handleAdd = () => {
    console.log('handleAdd clicked.');
  }
  return (
    <div className={styles.headerWrap}>
        <h1 className={styles.headerTitle}>Colour Palette Builder</h1>
        <button className={styles.rainbowButton} onClick={handleAdd}>Add New Colour</button>
    </div>
  )
}

export default Header