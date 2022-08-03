// import styles from './Swatch.module.css'

import { findByLabelText } from "@testing-library/react"

const Swatch = ({ colour }) => {
  const style = {
    height: 200,
    width: 200,
    margin: "1rem",
    borderRadius: "4px",
    background: colour,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    // {`text-white py-2 px-4 rounded ${styles[props.bgColor]}`}
    // <span className={styles.swatchShape}>
    <span style={style}>Swatch</span>
  )
}

export default Swatch