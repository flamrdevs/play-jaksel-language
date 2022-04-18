import { forwardRef, useMemo } from "react";

import classNames from "classnames";

type IconButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconButtonLink = forwardRef<HTMLAnchorElement, IconButtonLinkProps>(function IconButtonLinkWithRef({ className, ...props }, ref) {
  const _className = useMemo(() => {
    return classNames(
      "block p-2 bg-transparent text-neutral-500 rounded-full",
      "hover:bg-neutral-100 hover:text-neutral-800",
      "dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      "transition-colors",
      className
    );
  }, [className]);

  return <a ref={ref} className={_className} {...props} />;
});

export default IconButtonLink;
