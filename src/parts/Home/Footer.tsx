import Link from "next/link";

import { Logo } from "src/components/Icons/logo";

export const Footer = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <footer className="relative mt-[127px] w-full xl:pr-[90px]">
      <div className="flex flex-col space-y-20 bg-[#192E46] px-4 pt-56 text-lg text-white lg:flex-row lg:space-y-0 lg:space-x-[100px] lg:py-[140px] lg:px-[90px] xl:space-x-[150px] xl:rounded-tr-[57px]">
        <div>
          <Logo fill="white" />
          <p className="mt-7">
            Travel the place you always <br /> dreaming about, easier.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Company</h4>
          <ul className="mt-[30px] space-y-[15px]">
            <li>
              <Link href="#">
                <a className="font-light transition-colors duration-100 ease-out hover:text-[#539592] hover:underline">
                  Flight Partners
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-light transition-colors duration-100 ease-out hover:text-[#539592] hover:underline">
                  Hotel Group
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-light transition-colors duration-100 ease-out hover:text-[#539592] hover:underline">
                  Accommodations
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-light transition-colors duration-100 ease-out hover:text-[#539592] hover:underline">
                  Packages
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Account</h4>
          <ul className="mt-[30px] space-y-[15px]">
            <li>
              <Link href="#">
                <a className="font-light transition-colors duration-100 ease-out hover:text-[#539592] hover:underline">
                  Refund Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-light transition-colors duration-100 ease-out hover:text-[#539592] hover:underline">
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-light transition-colors duration-100 ease-out hover:text-[#539592] hover:underline">
                  Terms & Conditions
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Account</h4>
          <div className="mt-[30px] space-y-[15px]">
            <p className="font-light">M Building No, 11</p>
            <p className="font-light">cs@lorra.co.id</p>
            <p className="font-light">+021 2208 1996 1993</p>
            <p className="font-light">@lorragroup</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[-70px] flex w-full flex-col rounded-xl bg-white p-[35px] sm:right-4 sm:w-1/2 lg:w-auto lg:flex-row xl:right-[140px]">
        <div>
          <h4 className="font-serif text-xl text-[#2B312E] lg:text-2xl">
            Subscribe for Discount
          </h4>
          <p className="mt-1 text-sm text-[#AEAFAE] lg:mt-2.5 lg:text-base">
            We never send you any spam
          </p>
        </div>
        <form className="flex flex-col lg:flex-row" onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="anjianto06@gmail.com"
            className="mt-8 w-full border border-[#F1F2F3] bg-[#FAFAFB] p-2 text-sm focus-visible:outline-none lg:mt-0 lg:ml-14 lg:w-[287px] lg:p-3.5 lg:text-base"
          />
          <button className="mt-1 bg-[#539592] py-3.5 px-[32px] text-center font-bold text-white lg:mt-0 lg:text-lg">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </footer>
  );
};
