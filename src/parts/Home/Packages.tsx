import Image from "next/image";

import { Union } from "src/components/Illustrations/Union";

import Package1 from "public/img/packages-1.jpg";
import Package2 from "public/img/packages-2.jpg";
import Package3 from "public/img/packages-3.jpg";
import Package4 from "public/img/packages-4.jpg";

const packages = [
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package1,
  },
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package2,
  },
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package3,
  },
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package4,
  },
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package1,
  },
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package2,
  },
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package3,
  },
  {
    name: "Pastelina Hurra",
    place: "Jambi, Indonesia",
    img: Package4,
  },
];

export const Packages = () => {
  return (
    <section className="px-4 lg:px-[90px]">
      <div className="relative mt-80 overflow-x-hidden lg:mt-[233px]">
        <Union />
        <div className="absolute inset-0 pt-10">
          <h2 className="text-center text-lg font-semibold text-[#FF9050]">
            YOUR DREAMS
          </h2>
          <p className="mt-[5px] text-center font-serif text-4xl font-bold text-[#2B312E]">
            We Have Few Packages <br /> With Friendly Price
          </p>
          <div className="w-full">
            <div className="scroll mt-[70px] w-full snap-x space-x-10 overflow-x-auto whitespace-nowrap">
              {packages.map((pkg, index) => (
                <div
                  className="relative inline-block h-[400px] min-w-[285px] max-w-[285px] snap-start transition-transform duration-200 ease-in-out hover:-translate-y-1"
                  key={index}
                >
                  <Image
                    src={pkg.img}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt={pkg.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <div className="absolute bottom-[30px] left-[30px]">
                    <h3 className="text-xl font-medium text-white">
                      {pkg.name}
                    </h3>
                    <p className="mt-2.5 text-white">{pkg.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
