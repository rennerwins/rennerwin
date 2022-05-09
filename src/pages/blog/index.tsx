import { PageTitle } from '@components/elements';
import type { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <>
      <PageTitle title="Blogs" />
      <div className="text-neutral-400">Blog page</div>;
    </>
  );
};

export default BlogPage;
