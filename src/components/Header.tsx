import Button from "./Button";
import PrimaryLink from "./PrimaryLink";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();

  const isLoggedIn = !!session.data;
  return (
    <header className="flex h-16 items-center justify-between px-4 dark:bg-gray-800">
      <div className="container mx-auto flex justify-between">
        <PrimaryLink href="/">GenIco</PrimaryLink>
        <nav>
          <ul>
            <li>
              <PrimaryLink href="/generate">Generate</PrimaryLink>
            </li>
          </ul>
          <ul>
            {isLoggedIn && (
              <li className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => {
                    signOut().catch(console.error);
                  }}
                >
                  Logout
                </Button>
              </li>
            )}
            {!isLoggedIn && (
              <li className="flex gap-2">
                <Button
                  onClick={() => {
                    signIn().catch(console.error);
                  }}
                >
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </nav>
        <div>Account buttons</div>
      </div>
    </header>
  );
};

export default Header;
