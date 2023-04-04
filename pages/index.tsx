import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import Menu from '@/components/Menu';
import { useState } from 'react';
import LoadingImage from '@/components/LoadingImage';
import Main from '@/components/Main';
import { AnimatePresence } from 'framer-motion';
import TopDestinations from '@/components/TopDestinations';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
});
export default function Home() {
  const [show, setShow] = useState(false);
  const [showBgNavbar, setShowBgNavbar] = useState(true);
  const [loading, setLoading] = useState(true);
  return (
    <div className={`  w-full relative h-screen `}>
      <Head>
        <title>Explore Indonesia</title>
        <meta name="description" content="Explore indonesia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className} overflow-hidden  `}>
        {!loading && (
          <Navbar
            show={show}
            setShow={setShow}
            setShowBgNavbar={setShowBgNavbar}
            showBgNavbar={showBgNavbar}
          />
        )}
        <Menu show={show} setShowBgNavbar={setShowBgNavbar} />
        <AnimatePresence>
          {loading && <LoadingImage setLoading={setLoading} />}
        </AnimatePresence>
        {!loading && (
          <>
            <Main />
            <TopDestinations />
          </>
        )}
      </main>
    </div>
  );
}
