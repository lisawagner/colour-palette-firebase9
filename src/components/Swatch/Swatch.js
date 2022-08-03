// import styles from './Swatch.module.css'

const Swatch = ({ colour, name }) => {
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
    <span style={style}>{name}</span>
  )
}

export default Swatch