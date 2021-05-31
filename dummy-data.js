const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Water Rafting',
        description : 'Rafting and whitewater rafting are recreational outdoor activities which use an inflatable raft to navigate a river or other body of water. This is often done on whitewater or different degrees of rough water. Dealing with risk is often a part of the experience.',
        location:'Rishikesh, Uttarakhand',
        image: 'images/rafting.jpg',
        date: '2021-05-30',
        isFeatured: true
    },
    {
        id: 'e2',
        title: 'Skiing',
        description : 'Skiing is a means of transport using skis to glide on snow. Variations of purpose include basic transport, a recreational activity, or a competitive winter sport. Many types of competitive skiing events are recognized by the International Olympic Committee, and the International Ski Federation.',
        location:'Auli, Uttarakhand',
        image: 'images/skiing.jpg',
        date: '2021-05-12',
        isFeatured: true
    },
    {
        id: 'e3',
        title: 'Trekking',
        description : 'Being a soft-adventure sport, almost anyone in reasonable physical condition can go trekking. To get initiated into trekking begin with day hikes, returning to your starting point in the evening. Move on to a multi-day trek which is relatively easy, in order to get to know your ability and aptitude.',
        location:'Kheerganga, Himachal',
        image: 'images/trekking.jpg',
        date: '2021-07-12',
        isFeatured: true
    }
]

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }