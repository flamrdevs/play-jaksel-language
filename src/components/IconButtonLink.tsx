import { forwardRef, useMemo } from "react";

import classNames from "classnames";

type IconButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconButtonLink = forwardRef<HTMLAnchorElement, IconButtonLinkProps>(function IconButtonLinkWithRef({ className, ...props }, ref) {
  const _className = useMemo(() => {
    return classNames(
      "block p-2 bg-transparent text-neutral-500 rounded-full",
      "hover:bg-neutral-200 hover:text-neutral-700",
      "dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200",
      "focus:outline-none",
      "transition-colors",
      className
    );
  }, [className]);

  return <a ref={ref} className={_className} {...props} />;
});

export default IconButtonLink;
