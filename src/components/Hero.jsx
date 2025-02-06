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
        backgroundImage: `url(https://cloud.appwrite.io/v1/storage/buckets/679e48ae0017ce0d8b62/files/679f7627002fd5836268/view?project=6756a8dc000c0d24754b&mode=admin)`,
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
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/679e48ae0017ce0d8b62/files/679f7618000f4d8454c4/view?project=6756a8dc000c0d24754b&mode=admin"
              alt="AdVITya Logo"
              className="md:h-[32rem]  h-[20rem]  "
            />

            <h1 className="text-text-primary dark:text-dark-text-primary text-pretty text-center text-3xl  md:text-5xl  font-medium leading-none tracking-[-1.44px] md:max-w-screen-lg md:tracking-[-2.16px] text-gray-200">
              Join us from{" "}
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
          </div>
        </div>
        <div className="dark:divide-dark-border flex items-start justify-center divide-y divide-black/10 px-8 sm:px-24">
          <div className="flex w-full max-w-[90vw] flex-col items-center justify-start md:!max-w-[392px]">
            <a href="/docs" className="cursor-pointer w-full"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


