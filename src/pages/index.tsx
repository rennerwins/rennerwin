import { PageTitle } from '@components/elements';
import { BottomNavbar, Sidebar } from '@components/layouts';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <PageTitle title="Rennerwin" />

      <div className="space-y-8 leading-relaxed tracking-wide text-neutral-300">
        <p>
          <b>Hey, I'm Win.</b> I'm a Head of Front-End Developer at{' '}
          <a
            href="https://www.morphos.is/"
            className="text-teal-400 hover:underline"
          >
            Morphosis Apps
          </a>
          , a digital agency company based in Bangkok, Thailand.
        </p>

        <p>
          I'm a passionate web developer who like to convert designs into codes,
          solving problem and creating new things.
        </p>
      </div>
    </>
  );
};

export default Home;
