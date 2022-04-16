type MainProps = Omit<React.HtmlHTMLAttributes<HTMLElement>, "children"> & {
  leftPanel: JSX.Element;
  rightPanel: JSX.Element;
};

const Main = ({ leftPanel, rightPanel, className, ...props }: MainProps) => {
  return (
    <main className="play-main" {...props}>
      <div className="border border-transparent play-main-panel border-r-primary-400 dark:border-r-primary-500">{leftPanel}</div>
      <div className="border border-transparent play-main-panel border-l-primary-400 dark:border-l-primary-500">{rightPanel}</div>
    </main>
  );
};

export default Main;
