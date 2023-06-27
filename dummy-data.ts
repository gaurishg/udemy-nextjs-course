export interface DataModel {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
}


const DUMMY_EVENTS: DataModel[] = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
    {
      id: "1",
      title: "The Big Game",
      description: "The annual football match between the two biggest teams in the country",
      location: "Levi's Stadium, Santa Clara, CA",
      date: "2023-09-10",
      image: "images/football.jpg",
      isFeatured: true
    },
    {
      id: "2",
      title: "The Concert",
      description: "A performance by your favorite band",
      location: "Madison Square Garden, New York, NY",
      date: "2023-10-20",
      image: "images/concert.jpg",
      isFeatured: false
    },
    {
      id: "3",
      title: "The Festival",
      description: "A three-day music and arts festival",
      location: "Golden Gate Park, San Francisco, CA",
      date: "2023-08-25",
      image: "images/festival.jpg",
      isFeatured: true
    },
    {
      id: "4",
      title: "The Conference",
      description: "A two-day conference on the latest trends in technology",
      location: "Moscone Center, San Francisco, CA",
      date: "2023-11-14",
      image: "images/tech.jpg",
      isFeatured: false
    },
    {
      id: "5",
      title: "The Art Show",
      description: "A showcase of the work of local artists",
      location: "DeYoung Museum, San Francisco, CA",
      date: "2023-09-15",
      image: "images/art.jpg",
      isFeatured: true
    },
    {
      id: "6",
      title: "The Food Festival",
      description: "A celebration of food from around the world",
      location: "Golden Gate Park, San Francisco, CA",
      date: "2023-09-23",
      image: "images/food.jpg",
      isFeatured: false
    },
    {
      id: "7",
      title: "The Comedy Show",
      description: "A night of laughs with your favorite comedians",
      location: "The Fillmore, San Francisco, CA",
      date: "2023-10-12",
      image: "images/comedy.jpg",
      isFeatured: true
    },
    {
      id: "8",
      title: "The Theater Show",
      description: "A performance of a classic play",
      location: "The Old Globe, San Diego, CA",
      date: "2023-11-04",
      image: "images/theatre.jpg",
      isFeatured: false
    },
    {
      id: "9",
      title: "The Museum Exhibit",
      description: "A new exhibit at the de Young Museum",
      location: "DeYoung Museum, San Francisco, CA",
      date: "2023-09-01",
      image: "images/museum.jpg",
      isFeatured: true
    }];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter: {year: number, month: number}) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById<T>(id: T) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }