interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title = 'Home' }: PageTitleProps) => {
  return (
    <h1 className="mb-10 text-2xl font-bold tracking-wider text-neutral-600">
      {title}
    </h1>
  );
};
