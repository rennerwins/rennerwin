import { PageTitle } from '@components/elements';
import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <>
      <PageTitle title="About" />
      <div className="text-neutral-400">About page</div>;
    </>
  );
};

export default AboutPage;
