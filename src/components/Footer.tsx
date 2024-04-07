import { Link, Navbar } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center border-t-1 fixed bottom-0 h-[10dvh]">
        <Link href="https://animechan.xyz" className="text-center">
          Powered by AnimeChan
        </Link>

        <Link href="https://animechan.xyz" className="text-center">
          https://animechan.xyz
        </Link>
      </div>
    </>
  );
};

export default Footer;
