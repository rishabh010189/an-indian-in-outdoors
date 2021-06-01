import Filter from '../../components/events/Filter';
import {getAllEvents, getFilteredEventsBasedOnActivity} from '../../dummy-data';
import Card from '../../components/events/Card';
import styles from '../../styles/Home.module.scss';
import React, { useState, useEffect } from "react";

const Events = () => {
    let initEvents = [];
    const allEvents = getAllEvents();

    useEffect(() => {
        setFilteredEvents(allEvents);
    }, [])

    function onFilterChangedEvent(eventKey){
        let filteredEvents = [];
        if(eventKey === 'All Events'){
            filteredEvents = allEvents;
        }
        else{
            filteredEvents = getFilteredEventsBasedOnActivity(eventKey);
        }
        setFilteredEvents(filteredEvents);
    }
    
    const [filteredEvents, setFilteredEvents] = useState([...initEvents]);
    // const allEvents = getAllEvents();

    return (
        <div className="container my-5">
            <Filter onFilterChange={onFilterChangedEvent}/>
            <div className={['my-5', styles.featured].join(' ')}>
            {filteredEvents.map((item) => (
              <Card key={item.id} data={item}></Card>
            ))}
            </div>
            {/* <h1>This is an Events Page</h1> */}
        </div>
    )
}

export default Events;