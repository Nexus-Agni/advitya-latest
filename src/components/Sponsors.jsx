import GradientText from "../components/ui/GradientText";
import Marquee from "react-fast-marquee";

export function Sponsors() {
  const sponsors = [
    {
      id: 1,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f42e00292c5a851b/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 2,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f438002d950771b0/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 3,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f440000770ff72f2/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 4,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4470001d208ed29/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 5,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4500011d186add3/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 6,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f45800340fbbf552/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 7,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f463001ce6d9e5e7/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 8,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f46c002b5b6464d8/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 9,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4760030c7c9476e/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 10,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f481002276b8582c/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 11,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f48c001cdefeb3dd/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 12,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f49d0014c8e3ad2e/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 13,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4aa00169c9e4f35/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 14,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4b4003a9febabef/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 15,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4c0000344c600bb/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 16,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4c9000d8efeb4bd/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 17,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4d0003b71666752/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 18,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4df0029e6b2b051/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 19,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f4f10020ddeff83b/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 20,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f5100019e4bdd2e7/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 21,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f751003b85075bec/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 22,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f78e001a7132e970/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 23,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b2f7990000d322b132/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 24,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b5b8e7002e22a0bb20/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 25,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67b5b8ed00379a81f824/view?project=6756a8dc000c0d24754b&mode=admin",
    },
  ];

  return (
    <div className="sponsors-container overflow-hidden w-full py-4">
      <div className="pt-6">
        <div className="pt-6">
          <GradientText className="text-left pl-4 text-6xl font-bold uppercase">
            Our Sponsors
          </GradientText>
        </div>
      </div>
      <div className="w-full mt-6">
        <Marquee
          gradient={false}
          speed={80}
          className="flex gap-0"
          direction="left"
        >
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div key={index} className="flex-none w-3/4 md:w-2/3 px-0.5">
              <img
                src={sponsor.logo}
                alt="Sponsor logo"
                className="w-full h-48 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
