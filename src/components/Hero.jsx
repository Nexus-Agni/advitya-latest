import GradientText from "./ui/GradientText";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words1 = ["Creativity", "Innovation", "Talent", "Learning", "Energy"];
  const words2 = [
    "Celebration",
    "Tradition",
    "Opportunity",
    "Fun",
    "Excellence",
  ];

  return (
    <section
      className="relative min-h-[calc(100vh-50px)] overflow-hidden py-16 "
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dkjhkep0m/image/upload/v1735828654/advityabg1_hl54eu.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="dark:border-dark-border absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="dark:border-dark-border col-span-1 flex h-full items-center justify-center border-x border-white/10" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      
      <figure className="bg-accent-500/40 pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]" />
      <figure className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block" />
      <figure className="bg-surfce-primary dark:bg-dark-surface-primary pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block" />
      <div className="dark:divide-dark-border relative z-10 flex flex-col divide-y divide-black/10 pt-[35px] md:pt-0">
        <div className="flex flex-col items-center justify-end">
          <div className="dark:border-dark-border flex items-center gap-2 !border !border-b-0 border-black/5 px-4 py-2">
            <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm tracking-tight"></p>
          </div>
        </div>
        <div>
          <div className="mx-auto flex h-auto max-w-[90vw] shrink-0 flex-col items-center justify-center gap-2 px-2  sm:px-10 lg:px-24">
            {/* <div >
              <img src="https://res.cloudinary.com/dkjhkep0m/image/upload/v1733809264/Advitya25_logo_yscnk6.png" alt="" className="h-[30rem] w-[30rem]"/>
            </div> */}
            <img src="https://res.cloudinary.com/dkjhkep0m/image/upload/v1733809264/Advitya25_logo_yscnk6.png" alt="AdVITya Logo" className="md:h-[32rem] md:w-[30rem] h-[20rem] w-[20rem] "/>
            {/* <h2 className="text-text-primary dark:text-dark-text-primary text-pretty text-center text-3xl  md:text-4xl lg:text-[clamp(50px,7vw,75px)] font-medium leading-none tracking-[-1.44px] md:max-w-screen-lg md:tracking-[-2.16px] text-gray-200">20th - 22nd Feb, 2025</h2> */}
            <h1 className="text-text-primary dark:text-dark-text-primary text-pretty text-center text-3xl  md:text-5xl  font-medium leading-none tracking-[-1.44px] md:max-w-screen-lg md:tracking-[-2.16px] text-gray-200">
              Join us from{" "}
              {/* <span className="bg-purple-600  py-1 px-3 rounded-full hover:scale-105 ease-in-out duration-300">
                <GradientText
                  animationSpeed={4}
                  showBorder={false}
                  display="inline"
                  className="font-bold"
                  //TODO change colors here
                  colors={["#00BFFF", "#7FFF00", "#FFD700"]}
                >
                  Feb 20 to 22,
                </GradientText>
              </span> */}
              <div className="block md:inline bg-purple-600 bg-opacity-60 text-white text-3xl md:text-4xl py-1 px-3 rounded-full hover:scale-105 ease-in-out duration-300 backdrop-blur-md ">
                20<sup>th</sup> to 22<sup>nd</sup> Feb 2025
              </div>
            </h1>
            <h1 className="text-text-primary dark:text-dark-text-primary text-pretty text-center text-3xl sm:text-4xl md:text-5xl font-medium leading-none tracking-[-1.44px] md:max-w-screen-lg md:tracking-[-2.16px] text-white">
              where{" "}
              <span className="font-bold">
                <FlipWords words={words1} />
              </span>{" "}
              meets{" "}
              <span className="text-[#FFD700] font-bold">
                <FlipWords words={words2} />
              </span>
            </h1>
            {/* <h2 className="text-md text-text-tertiary dark:text-dark-text-tertiary max-w-2xl text-pretty text-center md:text-lg text-white">
              and unforgettable moments are made.
            </h2> */}
          </div>
        </div>
        <div className="dark:divide-dark-border flex items-start justify-center divide-y divide-black/10 px-8 sm:px-24">
          <div className="flex w-full max-w-[90vw] flex-col items-center justify-start md:!max-w-[392px]">
            <a href="/docs" className="cursor-pointer w-full"></a>
          </div>
        </div>
        {/* <div className="mx-auto max-w-7xl">
          <AnimatedLogoCloud />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

const logos = [
  {
    name: "Vercel",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },
  {
    name: "Nextjs",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  },
  {
    name: "Prime",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
  },
  {
    name: "Trustpilot",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
  {
    name: "Webflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },
  {
    name: "Airbnb",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
  },
  {
    name: "Tina",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
  },
  {
    name: "Stackoverflow",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
  },
  {
    name: "mistral",
    url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-x-slider flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 w-28 px-2 flex-none brightness-0 dark:invert"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
