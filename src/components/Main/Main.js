import { useEffect, useState } from 'react';
import { handleEdit, handleDelete } from '../../utils/utils';
// firebase
import { db } from '../../firebase/firebase'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
// components
import Swatch from '../Swatch/Swatch'
// styles
import styles from './Main.module.css'


const Main = () => {
  const [colours, setColours] = useState([{ name: "Loading...", id: "initial"}])

  // useEffect is where we get data from the database
  // onSnapshot sets up listeners for changes to the collection
  useEffect(() => {
    const collectionRef = collection(db, "colours");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    // unsubscribe from this socket whenever the component unmounts
    const unsub = onSnapshot(q, (snapshot) =>
      setColours(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);


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
              <button className='rainbowButton' onClick={() => handleEdit(colour.id)}>Edit</button>
              <button className='rainbowButton' onClick={() => handleDelete(colour.id)}>Delete</button>
            </div>
          </li>

        ))}

      </ul>
    </div>
  )
}

export default Main