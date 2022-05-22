import { React, useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

export default function PastEvents({ events, pastEvents }) {

    const usersCollectionRef = collection(db, "users");
    const actualEventsRef = collection(db, "actual_events");
    const pastEventsRef = collection(db, "past_events");

    const deleteEvent = async (id) => {
        const userDoc = doc(db, "actual_events", id);
        await deleteDoc(userDoc);
    }

    // const createPastEvent = async (event) => {
    //     await addDoc(pastEventsRef, { ...event });
    // }

    // const cutting = async (event) => {
    //     try {
    //         await createPastEvent(event);
    //     }

    //     catch (e) {
    //         console.log(e);
    //     }
    // }
    // const filteredArray = events.filter((event) => {
    //     const timeInMs = Date.now();
    //     const data2 = event.date;
    //     const data3 = event.time;

    // if (Date.parse(`${data2} ${data3}`) < timeInMs) {
    //     return updatingTable(event)
    // };

    // return Date.parse(`${data2} ${data3}`) < timeInMs;
    // });

    const filteredArray = events.filter(async (event) => {
        const timeInMs = Date.now();
        const data2 = event.date;
        const data3 = event.time;

        if (Date.parse(`${data2} ${data3}`) < timeInMs) {
            {console.log("Here >> 50:")}
        }

        return Date.parse(`${data2} ${data3}`) < timeInMs;
    });



    return (
        <div>
            <h1>Прошедшие события</h1>

            {/* {filteredArray.map((event, i) => {
                updatingTable(event);
                filteredArray.splice(i, 1);
                // return updatingTable(event)
            })} */}

            {pastEvents.map((event, i) => {
                return <div key={i} className="event-block">
                    <div>{event.name}</div>
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                    <div>{event.description}</div>
                    <div>{event.images}</div>
                    <div>{event.type}</div>
                </div>
            })}
        </div>
    )
}
