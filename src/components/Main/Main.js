import styles from './Main.module.css'
import Swatch from '../Swatch/Swatch'


const Main = () => {


  const handleEdit = () => {
    console.log('handleEdit clicked.');
  }
  const handleDelete = () => {
    console.log('handleDelete clicked.');
  }

  return (
    <div className={styles.mainWrap}>
      <h1>Main</h1>

      <ul className={styles.cardsContainer}>

        <li className={styles.mainCardWrap}>
          <div className={styles.swatchDiv}>
            <Swatch colour="#d0f" />
          </div>
          <div className={styles.mainSwatchBtns}>
            <button className='rainbowButton' onClick={handleEdit}>Edit</button>
            <button className='rainbowButton' onClick={handleDelete}>Delete</button>
          </div>
        </li>

        <li className={styles.mainCardWrap}>
          <div className={styles.swatchDiv}>
            <Swatch colour="#0f0" />
          </div>
          <div className={styles.mainSwatchBtns}>
            <button className='rainbowButton' onClick={handleEdit}>Edit</button>
            <button className='rainbowButton' onClick={handleDelete}>Delete</button>
          </div>
        </li>

        <li className={styles.mainCardWrap}>
          <div className={styles.swatchDiv}>
            <Swatch colour="#F00" />
          </div>
          <div className={styles.mainSwatchBtns}>
            <button className='rainbowButton' onClick={handleEdit}>Edit</button>
            <button className='rainbowButton' onClick={handleDelete}>Delete</button>
          </div>
        </li>

        <li className={styles.mainCardWrap}>
          <div className={styles.swatchDiv}>
            <Swatch colour="#00f" />
          </div>
          <div className={styles.mainSwatchBtns}>
            <button className='rainbowButton' onClick={handleEdit}>Edit</button>
            <button className='rainbowButton' onClick={handleDelete}>Delete</button>
          </div>
        </li>

        <li className={styles.mainCardWrap}>
          <div className={styles.swatchDiv}>
            <Swatch colour="#DD0"/>
          </div>
          <div className={styles.mainSwatchBtns}>
            <button className='rainbowButton' onClick={handleEdit}>Edit</button>
            <button className='rainbowButton' onClick={handleDelete}>Delete</button>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Main