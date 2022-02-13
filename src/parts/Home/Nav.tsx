import { useState } from "react";

import Link from "next/link";

import { Logo } from "src/components/Icons/logo";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={[
        "z-10 flex w-full flex-col px-4 pt-[30px] lg:absolute lg:flex-row lg:items-center lg:justify-between lg:px-[90px]",
        isOpen
          ? "fixed inset-0 z-20 bg-white pt-[30px]"
          : "absolute right-0 top-0 left-0",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <Logo fill={isOpen ? "black" : "white"} />
        <button
          className="lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={["h-8 w-8", isOpen ? "text-black" : "text-white"].join(
              " "
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <ul
        className={[
          "items-center space-y-8 text-lg text-white lg:flex lg:space-y-0 lg:space-x-8",
          isOpen
            ? "flex h-[85%] flex-col justify-center text-center text-black"
            : "hidden",
        ].join(" ")}
      >
        <li>
          <Link href="#">
            <a className="hover:underline">Landing</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="hover:underline">Packages</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="hover:underline">Stories</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="hover:underline">Product</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="hover:underline">Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="border-white hover:underline lg:border-l lg:pl-8">
              Sign Up
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="hover:underline">Log In</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
