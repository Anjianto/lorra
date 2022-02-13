import { useState } from "react";

import Image from "next/image";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import heroImage from "public/img/hero.jpeg";

export const Header = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [adult, setAdult] = useState(12);
  const [isAdultFocus, setIsAdultFocus] = useState(false);
  const [kid, setKid] = useState(3);
  const [isKidFocus, setIsKidFocus] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <header className="relative h-[630px] w-full">
      <Image
        src={heroImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        alt="People who are rowing"
      />

      <div className="absolute top-1/2 left-4 right-4 z-10 grid -translate-y-40 lg:left-[90px] lg:right-[90px] lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-2xl font-bold text-white sm:text-4xl lg:text-5xl lg:leading-[65px]">
            Find Your True <br /> Adventure Soul
          </h1>
          <p className="mt-2 text-sm text-white sm:text-base lg:mt-5 lg:text-lg">
            Time to reconstruct your imagination <br /> with what we provide
            special just for you
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <form
            onSubmit={onSubmit}
            className="mx-auto w-full space-y-5 bg-white p-[30px] shadow sm:w-2/3 lg:mx-0 lg:ml-auto lg:w-[400px]"
          >
            <div>
              <label
                htmlFor="activity"
                className="block text-[#AEAFAE] lg:text-lg"
              >
                Activity
              </label>
              <input
                type="text"
                name="activity"
                id="activity"
                className="mt-1.5 w-full border border-[#F1F2F3] bg-[#FAFAFB] p-2 text-sm focus-visible:outline-none lg:p-3.5 lg:text-base"
                defaultValue="Nature & Adventure"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-[#AEAFAE] lg:text-lg"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="mt-1.5 w-full border border-[#F1F2F3] bg-[#FAFAFB] p-2 text-sm focus-visible:outline-none lg:p-3.5 lg:text-base"
                defaultValue="Bandung, Indonesia"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-[#AEAFAE] lg:text-lg">
                Date
              </label>
              <DatePicker
                dateFormat="EEEE, MMMM dd, yyy"
                onChange={(date) => setDate(date)}
                selected={date}
                className="mt-1.5 w-full border border-[#F1F2F3] bg-[#FAFAFB] p-2 text-sm focus-visible:outline-none lg:p-3.5 lg:text-base"
                name="date"
                id="date"
              />
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="adult"
                  className="block text-[#AEAFAE] lg:text-lg"
                >
                  Adult
                </label>
                <input
                  type="text"
                  name="adult"
                  id="adult"
                  className="mt-1.5 w-full border border-[#F1F2F3] bg-[#FAFAFB] p-2 text-sm focus-visible:outline-none lg:p-3.5 lg:text-base"
                  value={isAdultFocus ? adult : `${adult} People`}
                  onFocus={() => setIsAdultFocus(true)}
                  onInput={(e) => {
                    // @ts-ignore
                    const value = e.target.value as string;

                    if (!value || isNaN(parseInt(value))) {
                      return setAdult(adult);
                    }
                    setAdult(parseInt(value));
                  }}
                  onBlur={() => {
                    setIsAdultFocus(false);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="kid"
                  className="block text-[#AEAFAE] lg:text-lg"
                >
                  Kid
                </label>
                <input
                  type="text"
                  name="kid"
                  id="kid"
                  className="mt-1.5 w-full border border-[#F1F2F3] bg-[#FAFAFB] p-2 text-sm focus-visible:outline-none lg:p-3.5 lg:text-base"
                  value={isKidFocus ? kid : `${kid} People`}
                  onFocus={() => setIsKidFocus(true)}
                  onInput={(e) => {
                    // @ts-ignore
                    const value = e.target.value as string;

                    if (!value || isNaN(parseInt(value))) {
                      return setKid(kid);
                    }
                    setKid(parseInt(value));
                  }}
                  onBlur={() => {
                    setIsKidFocus(false);
                  }}
                />
              </div>
            </div>
            <button className="mt-10 w-full bg-[#539592] py-5 text-center font-bold text-white lg:text-lg">
              EXPLORE NOW
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
