import React from 'react'
// styles
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <h1>Colour Palette Builder</h1>
      <button>Add</button>
    </div>
  )
}

export default Header