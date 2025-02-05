import { ArrowRight } from "lucide-react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Leadership() {
  const LeadershipItems = [
    {
      title: "Dr. G. Viswanathan",
      description: "Chancellor",
      img: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1da6200323b6714c0/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      title: "Mr. Sankar Viswanathan",
      description: "Vice President",
      img: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1da7d003c48ea9091/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      title: "Ms. Kadhambari S Viswanathan",
      description: "Assistant Vice President",
      img: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1da00001fbbf2370e/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      title: "Prof. T. B. Sridharan",
      description: "Pro-Vice Chancellor",
      img: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1da9d002e903bf922/view?project=6756a8dc000c0d24754b&mode=admin",
    },
    {
      title: "Mr. K.K. Nair",
      description: "Acting Registrar",
      img: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1daa80023d5170ac7/view?project=6756a8dc000c0d24754b&mode=admin",
    },
  ];
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl text-white"
        >
          Meet Our Leadership
        </motion.h1>
      </LampContainer>
      <motion.div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row flex-wrap items-center justify-center bg-zinc-950 rounded-2xl">
        <HoverEffect items={LeadershipItems} />
        <div className="py-3">
          <Link to="/team">
            <button className="text-white text-xl bg-purple-600 py-2 px-5 rounded-lg hover:bg-purple-800 ease-in-out duration-300">
              <div className="flex gap-1">
                Meet Our Team <ArrowRight size={24} />
              </div>
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
