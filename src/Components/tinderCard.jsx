import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore"
import { db } from '../firebaseConfig';
import TinderCard from 'react-tinder-card';
import SwipeButton from './swipeButton';
import "../Styles/tinderCard.css";



function TinderCards() {
        const [people, setPeople] = useState([]);

        useEffect(() => {
                const unsubscribe = onSnapshot(collection(db, "people"), (snapshot) => {
                        setPeople(snapshot.docs.map((doc) => doc.data()));
                });

                return () => {
                        unsubscribe();
                };
        }, []);

        // useEffect(() => {

        //         // this where your code runs
        //         const unsubscribe =
        //                 database
        //                         .collection("people")
        //                         .onSnapshot((snapshot) =>
        //                                 setPeople(snapshot.docs.map((doc) => doc.data()))
        //                         );
        //         return () => {
        //                 unsubscribe();
        //         };
        // }, [])

        return (
                <>
                        <div>
                                <div className='tinderCards__cardcontainer'>
                                        <h1>Tinder Cards</h1>
                                        {people && people.map((person) => (
                                                <TinderCard
                                                        className='swipe'
                                                        key={person.id}
                                                        preventSwipe={["up", "down"]}
                                                >
                                                        <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
                                                                <h3>{person.name}</h3>
                                                        </div>
                                                </TinderCard>
                                        ))}

                                </div>
                                <div className='Buttons'>
                                        <SwipeButton />
                                </div>
                        </div>

                </>
        );
}

export default TinderCards;
