import GradientText from "../components/ui/GradientText";
import Marquee from "react-fast-marquee";

export function Sponsors() {
  const sponsors = [
    {
      id: 1,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a46539001a51355604/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 2,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a46527002efeb323b2/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 3,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aed88e0014c9661621/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 4,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aef8530004a2ffde82/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 5,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aef88a00250f76d44f/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 6,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aeff8900057aa02a6f/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 7,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aeffbd00271878d38c/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 8,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aeffda001d8c293498/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 9,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aeffea002fd94bc704/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 10,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67aefffc002b22552fb1/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 11,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af0014001fb4a9dd9d/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 12,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af003a0007abf492ca/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 13,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af0048000e3a6f119a/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 14,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af00e9000336d97d20/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 15,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af00f100049fc4d56e/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 16,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af00fa0033bb2e9b50/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 17,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af010b0033864a9a38/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 18,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af011500073570f20a/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 19,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af011c0033f04cb64e/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 20,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af01230032a62183f5/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      id: 21,
      logo: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67af012a000eb04f05ad/view?project=6756a8dc000c0d24754b&mode=admin",
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
