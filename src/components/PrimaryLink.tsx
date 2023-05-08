import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

const PrimaryLink = (props: LinkProps & { children: ReactNode }) => {
  return (
    <Link className="hover:text-cyan-200" {...props}>
      {props.children}
    </Link>
  );
};

export default PrimaryLink;
