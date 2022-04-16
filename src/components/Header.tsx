type HeaderProps = Omit<React.HtmlHTMLAttributes<HTMLElement>, "children"> & {
  leftSide: JSX.Element;
  rightSide: JSX.Element;
};

const Header = ({ leftSide, rightSide, className, ...props }: HeaderProps) => {
  return (
    <header className="play-header" {...props}>
      <div className="play-header-side">{leftSide}</div>
      <div className="play-header-side">{rightSide}</div>
    </header>
  );
};

export default Header;
