import { Inter, Lato } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const lato = Lato({ subsets: ['latin'], weight: ["700"]});

export default function HomePage() {
  return (
    <div className={`${lato.className}`}>
      <h1>The Home Page</h1>
    </div>
  );
}
