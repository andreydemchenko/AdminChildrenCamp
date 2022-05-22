import { useState, useEffect } from 'react'; // hooks
import './App.css';
import { db } from './firebase-config'; // import db
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'; // smth idk
import ActualEvents from './components/ActualEvents';
import PastEvents from './components/PastEvents';

function App() {

  const [users, setUsers] = useState([]); // state of users
  const [actualEvents, setActualEvents] = useState([]);
  // const [pastEvents, setPastEvents] = useState([]);


  const usersCollectionRef = collection(db, "users");
  const actualEventsRef = collection(db, "actual_events");
  const pastEventsRef = collection(db, "past_events");


  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  // }

  // const updateUser = async (id, age) => {
  //   const userDoc = doc(db, "users", id)
  //   const newFields = { age: +age + 1 }
  //   await updateDoc(userDoc, newFields)
  // }

  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  // }

  // useEffect(() => {

  //   const getUsers = async () => { // async request
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   }

  //   getUsers()
  // }, [users])

  const [events, setEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])

  // useEffect(() => {


  // }, [events])


  const getEvents = async () => {
    const data = await getDocs(actualEventsRef);

    await new Promise(resolve => setTimeout(resolve, 5000));

    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  getEvents();

  const getPastEvents = async () => {
    const data = await getDocs(pastEventsRef);

    await new Promise(resolve => setTimeout(resolve, 5000));

    setPastEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  getPastEvents();

return (
  <div className="App">

    <ActualEvents events={events} />


    <PastEvents event={events} pastEvents={pastEvents} getPastEvents={getPastEvents()}/>
  </div>
);
}

export default App;
