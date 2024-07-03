import Image from "next/image";
import banner from "./../../public/kiwi_banner.jpg";
import kiwi from "./../../public/kiwi_logo.jpg";
import pumpfund from "../../public/EmT4yP6S_400x400.jpg";
import telegram from "../../public/teleIcon.svg";
import twitter from "../../public/twitterIcon.svg";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-auto flex flex-col items-center">
      <div className="mt-20 items-center gap-10 flex flex-col">
        <span className="text-[3rem] text-white">$KIWI $KIWI</span>
        <Image
          src={banner}
          alt=""
          className="border-[3px] border-solid border-white rounded-[10px]"
        />
      </div>
      <div className="mt-20 p-6 border-solid border-[3px] border-white rounded-[10px] w-[60%] flex justify-center">
        <span className="text-white text-[2rem]">CA: 9N2uDiC3tYbmNeeHVR5YhgUgp7uwbvrZiPhiDjdepump</span>
      </div>
      <div className="flex flex-col gap-5 mt-20 items-center">
        <Image src={kiwi} alt="" width={300}/>
        <span className="font-[600] text-white">A cat that can meow all day</span>
      </div>
      <div className="flex flex-col mt-20 w-full items-center">
        <span className="text-white font-bold text-[2rem]">Buy this kitten at</span>
        <div className="flex flex-row gap-20 mt-10 p-10 border-white border-[3px] rounded-full border-solid w-[60%] justify-center contacts">
          <a
            href=""
            className="rounded-full border-[3px] border-solid border-black"
            target="_blank"
          >
            <Image
              src={telegram}
              alt="Telegram"
              width="65"
              className="rounded-full"
            />
          </a>
          <a
            href="https://x.com/kiwikawaiicat"
            className="rounded-full border-[3px] border-solid border-black"
            target="_blank"
          >
            <Image
              src={twitter}
              alt="Twitter"
              width="65"
              className="rounded-full"
            />
          </a>
          <a
            href="https://pump.fun/9N2uDiC3tYbmNeeHVR5YhgUgp7uwbvrZiPhiDjdepump"
            className="rounded-full border-[3px] border-solid border-black"
            target="_blank"
          >
            <Image
              src={pumpfund}
              alt="Pump Fund"
              height="65"
              width="65"
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}