// import styles from './Swatch.module.css'

export default function Swatch({ colour, name }) {
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
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    // {`text-white py-2 px-4 rounded ${styles[props.bgColor]}`}
    // <span className={styles.swatchShape}>
    <span style={style}>
      <div style={divStyle}>
        <div>{name}</div>
        <div>{colour}</div>
      </div>
    </span>
  )
}
