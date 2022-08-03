import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase'
import { onSnapshot, collection } from 'firebase/firestore';
// components
import Swatch from '../Swatch/Swatch'
// styles
import styles from './Main.module.css'


const Main = () => {
  const [colours, setColours] = useState([{ name: "Loading...", id: "initial"}])

  console.log(colours);
  useEffect (() =>
    onSnapshot(collection(db, "colours"), (snapshot) => {
      setColours(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    }), [])


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

        {colours.map((colour) => (
          <li key={colour.id} className={styles.mainCardWrap}>
            <div className={styles.swatchDiv}>
              <Swatch colour={colour.value} name={colour.name} />
            </div>
            <div className={styles.mainSwatchBtns}>
              <button className='rainbowButton' onClick={handleEdit}>Edit</button>
              <button className='rainbowButton' onClick={handleDelete}>Delete</button>
            </div>
          </li>

        ))}

        {/* <li className={styles.mainCardWrap}>
          <div className={styles.swatchDiv}>
            <Swatch colour="#d0f" />
          </div>
          <div className={styles.mainSwatchBtns}>
            <button className='rainbowButton' onClick={handleEdit}>Edit</button>
            <button className='rainbowButton' onClick={handleDelete}>Delete</button>
          </div>
        </li> */}

      </ul>
    </div>
  )
}

export default Main