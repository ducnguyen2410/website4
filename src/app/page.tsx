import Image from "next/image";
import banner from "./../../public/banner.png";
import dogLogo from "./../../public/dogLogo.png";
import pumpfund from "../../public/EmT4yP6S_400x400.jpg";
import telegram from "../../public/teleIcon.svg";
import twitter from "../../public/twitterIcon.svg";
import website2_logo from "../../public/website3_logo.jpg";
import website2_banner from "../../public/website3_banner.jpg";
import m1 from "../../public/website3_1.jpg"
// import m2 from "../../public/website2_2.jpg"

export default function Home() {
  return (
    <div className="w-full h-screen overflow-auto flex flex-col items-center">
      <div className="mt-20 items-center gap-10 flex flex-col">
        <span className="text-[3rem] text-white">$CHARIZERD</span>
        <Image
          src={website2_banner}
          alt=""
          className="border-[3px] border-solid border-white rounded-[10px]"
        />
      </div>
      <div className="mt-20 p-6 border-solid border-[3px] border-white rounded-[10px] w-[60%] flex justify-center">
        <span className="text-white text-[2rem]">
          CA: Not available
        </span>
      </div>
      <div className="flex flex-col gap-5 mt-20 items-center">
        <Image src={website2_logo} alt="" width={300} />
        <span className="font-[600] text-white">Most previous pokemon</span>
      </div>
      <div className="flex flex-row mt-20 gap-10">
        <Image  src={m1} alt="" width={400}/>
      </div>
      <div className="flex flex-col mt-20 w-full items-center">
        <span className="text-white font-bold text-[2rem]">
          Buy this through
        </span>
        <div className="flex flex-row gap-20 mt-10 p-10 border-white border-[3px] rounded-full border-solid w-[60%] justify-center">
          <a
            href="https://t.me/charizerdsol"
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
            href="https://x.com/charizerdsolana"
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
            href="https://t.me/charizerdsol"
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
