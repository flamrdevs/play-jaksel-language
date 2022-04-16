const Container = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <div className="play-container" {...props} />;
};

export default Container;
