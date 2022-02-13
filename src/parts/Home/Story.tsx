import Image from "next/image";

import story from "public/img/story.jpg";
import userStory from "public/img/user-story.jpg";
import { LogoNationalGeographic } from "public/img/components/Illustrations/LogoNationalGeographic";
import { LogoBarcelo } from "public/img/components/Illustrations/LogoBarcelo";
import { LogoGoogle } from "public/img/components/Illustrations/LogoGoogle";

export const Story = () => {
  return (
    <div className="flex flex-col px-4 py-10 lg:py-[160px] xl:flex-row xl:px-[90px] 2xl:px-[160px]">
      <div className="relative mx-auto h-[340px] w-full sm:h-[540px] sm:w-[464px] xl:mx-0">
        <Image
          src={story}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Angelina Cameroon Story"
        />
      </div>
      <div className="mt-[70px] xl:mt-0 xl:ml-[70px]">
        <div className="text-center xl:text-left">
          <h2 className="text-sm font-semibold text-[#FF9050] lg:text-lg">
            OUR GOAL
          </h2>
          <p className="mt-[5px] font-serif text-2xl font-bold text-[#2B312E] sm:text-4xl">
            Set The Destiny <br /> You Can’t Refuse
          </p>
        </div>

        <div className="mx-auto w-full sm:w-[400px] lg:w-[583px] xl:mx-0 xl:pl-10">
          <div className="relative w-full">
            <div className="absolute -top-24 left-0 font-serif text-[200px] text-[#EFEDF3] lg:-left-12">
              “
            </div>
            <blockquote className="relative mt-[87px] text-center text-lg font-normal text-[#6B6A6A] lg:text-[22px] lg:leading-[42px] xl:text-left">
              At first, we have no clue where to go for the entire session. Lora
              convinced us to take the special package that suits for our
              family, and it was pretty worthy
            </blockquote>
          </div>
          <div className="mt-5 flex items-center justify-center xl:justify-start">
            <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full">
              <Image
                src={userStory}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Angelina Cameroon"
              />
            </div>
            <div className="ml-4">
              <p className="text-lg text-[#2B312E]">Angelina Cameroon</p>
              <p className="text-sm text-[#787676]">Ex. Website Developer</p>
            </div>
          </div>
          <div className="mt-[100px] flex flex-col items-center justify-center space-y-10 sm:-ml-12 sm:flex-row sm:space-y-0 sm:space-x-10">
            <LogoNationalGeographic />
            <LogoBarcelo />
            <LogoGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};
