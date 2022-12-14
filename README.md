# Colour Palette CRUD application

This project was created with Firebase/Firestore v9 and Reactjs. Purpose for this application is to explore Firebase v9 Modular Syntax for web apps.

## Description

User can add colours by name with hexcode to view them together on the palette page. The colour swatches can be updated and deleted. There is also an example query delete function that allows the user to delete items that meet their specific query. 

## Demo

![Colour Palette Page](src/assets/palette-page.png "Colour Palette App Main Page")

[Live Demo](https://colour-palette-builder.web.app "live demo")

### onSnapshot()

Inside a useEffect hook we use `onSnapshot` to set up listeners for changes to the database collection. `useEffect` is where we get the data from the database. An unsubscribe is added to unsub from this socket whenever the component unmounts:

```
  useEffect(() => {
    const collectionRef = collection(db, "colours");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setColours(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);
  ```

### addDoc()

We make an api call handler (with promises or async). `addDoc` tells firestore to generate an id for the newly added document. 
```
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
```
Instead of using a document reference like in `setDoc`, we use a collectionRef with `addDoc`.

```
setDoc(docRef, payload)
addDoc(collectionRef, payload)
```


### setDoc()

`setDoc` allows you to write new data to your firestore database. It takes in two arguments:

```
setDoc(docRef, payload)
```

`setDoc` completely overrides existing documents. if the document doesn't already exist, it creates a new one. Depending on your use case, you may want to consider other methods like `updateDoc`.

### Edit Document Handler

```
export const handleEdit = async (id) => {
  const name = prompt("Enter colour name: ")
  const value = prompt("Enter colour value: ")

  const docRef = doc(db, "colours", id)
  const payload = { name, value, timestamp: serverTimestamp() }

  // setDoc overrides existing doc, so updateDoc is better for this use case
  // await setDoc(docRef, payload)

  // updateDoc only changes the specific properties you indicate in your payload
  await updateDoc(docRef, payload)
  console.log('handleEdit for: ' + id);
}
```

### Query

**Query / delete multiple documents**

A basic delete handler:

```
export const handleDelete = async (id) => {
  const docRef = doc(db, "colours", id)
  await deleteDoc(docRef)
}
```

A Query to delete multiple documents that have the same name:

```
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
```

### Order Documents

We set up the document listing order inside the initial useEffect using orderBy "timestamp":

```
const q = query(collectionRef, orderBy("timestamp", "desc"));
```

To do this query, it is important to have a field called timestamp: `serverTimestamp()` in your add document handler and also in your edit document handler.

## Tech Stack

1. React | create-react-app
2. Firebase 9 | Firestore
