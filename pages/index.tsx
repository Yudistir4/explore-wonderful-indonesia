import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import Menu from '@/components/Menu';
import { useState } from 'react';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
});
export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-hidden w-full relative h-screen">
      <Head>
        <title>Explore Indonesia</title>
        <meta name="description" content="Explore indonesia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className} overflow-hidden  `}>
        <Navbar setShow={setShow} />
        <Menu show={show} />
      </main>
    </div>
  );
}
