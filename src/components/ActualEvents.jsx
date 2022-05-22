import { React, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function ActualEvents({ events }) {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [images, setImages] = useState("");
    const [description, setDescription] = useState("");
    const [countResponses, setCountResponses] = useState(0);
    const [type, setType] = useState("");

    const actualEventsRef = collection(db, "actual_events");

    const outputObject = {
        name: name,
        date: date,
        time: time,
        images: images,
        description: description,
        countResponses: countResponses,
        type: type,
        id: Math.random().toString(36),
    }

    const createEvent = async (outObj) => {
        await new Promise(resolve => setTimeout(resolve, 10000));
        await addDoc(actualEventsRef, { ...outObj });
    }


    return (
        <div>
            <h1>Actual Events</h1>

            <div>
                Добавление события:
            </div>

            <div className="actual-events">
                <div className="adding-event">
                    <div className="new-event">
                        <div>Название</div>
                        <div><input type="text" onChange={(event) => setName(event.target.value)} /></div>
                    </div>
                    <div className="new-event">
                        <div>Дата</div>
                        <div><input type="date" onChange={(event) => setDate(event.target.value)} /></div>
                    </div>
                    <div className="new-event">
                        <div>Время</div>
                        <div><input type="text" onChange={(event) => setTime(event.target.value)} /></div>
                    </div>
                    <div className="new-event">
                        <div>Изображение</div>
                        <div><input type="text" onChange={(event) => setImages(event.target.value)} /></div>
                    </div>
                    <div className="new-event">
                        <div>Описание</div>
                        <div><input type="text" onChange={(event) => setDescription(event.target.value)} /></div>
                    </div>
                    <div className="new-event">
                        <div>Количество откликов</div>
                        <div><input type="number" onChange={(event) => setCountResponses(event.target.value)} /></div>
                    </div>
                    <div className="new-event">
                        <div>Тип</div>
                        <div><input type="text" onChange={(event) => setType(event.target.value)} /></div>
                    </div>

                    <button onClick={() => createEvent(outputObject)}>Добавить событие</button>
                </div>

                <div>
                    <h4>Текущие события</h4>
                    {events.map((event, i) => {
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
            </div>
        </div>
    )
}

export default ActualEvents;