import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// api function to add new colour to db
export const handleAdd = async () => {
  const name = prompt("Enter colour name: ")
  const value = prompt("Enter colour value: ")

  const collectionRef = collection(db, "colours")
  const payload = { name, value, timestamp: serverTimestamp() }

  // you can grab the new doc id by creating a const
  const docRef = await addDoc(collectionRef, payload)

  console.log("The new colours ID is: " + docRef.id);
}

export const handleEdit = async (id) => {
  const name = prompt("Enter colour name: ")
  const value = prompt("Enter colour value: ")

  const docRef = doc(db, "colours", id)
  const payload = { name, value, timestamp: serverTimestamp() }

  // setDoc overrides existing doc, so updateDoc better
  // for this use case
  // await setDoc(docRef, payload)

  // updateDoc only changes the specific properties you
  // indicate in your payload
  await updateDoc(docRef, payload)
  console.log('handleEdit for: ' + id);
}

export const handleDelete = async (id) => {
  const docRef = doc(db, "colours", id)
  await deleteDoc(docRef)
}

export const handleQueryDelete = async () => {
  const userInputName = prompt("Enter colour name: ")
  const collectionRef = collection(db, "colours")

  // const q = query(collectionRef, actual query statements here)
  const q = query(collectionRef, where("name", "==", userInputName))

  // fetch the data once (don't add listeners like w/ onSnapshot)
  const snapshot = await getDocs(q)

  const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))

  // Using forEach vs map because we don't want to change the results array
  // We just want to perform a delete operation on specific results
  results.forEach(async result => {
    const docRef = doc(db, 'colours', result.id)
    await deleteDoc(docRef)
  })
}