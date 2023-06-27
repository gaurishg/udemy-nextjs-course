import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/dummy-data';
import { Inter, Lato } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const lato = Lato({ subsets: ['latin'], weight: ["700"]});

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={`${lato.className}`}>
      <EventList items={featuredEvents}/>
    </div>
  );
}
