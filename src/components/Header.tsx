import Button from "./Button";
import PrimaryLink from "./PrimaryLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from "@/hooks/useBuyCredits";

const Header = () => {
  const session = useSession();
  const { buyCredits } = useBuyCredits();

  const isLoggedIn = !!session.data;
  return (
    <header className="flex h-16 items-center justify-between px-4 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <PrimaryLink href="/">GenIco</PrimaryLink>
        <nav>
          <ul>
            <li>
              <PrimaryLink href="/generate">Generate</PrimaryLink>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            {isLoggedIn ? (
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => {
                    buyCredits().catch(console.error);
                  }}
                >
                  Buy Credits
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    signOut().catch(console.error);
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  signIn().catch(console.error);
                }}
              >
                Login
              </Button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
