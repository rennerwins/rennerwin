import { PageTitle } from '@components/elements';
import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="text-neutral-400">Contact page</div>
    </>
  );
};

export default ContactPage;
