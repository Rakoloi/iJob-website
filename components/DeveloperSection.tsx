"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  Code2,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const REPOSITORY_URL = "https://github.com/Rakoloi/labourQuest";
const GITHUB_PROFILE_URL = "https://github.com/Rakoloi";

export default function DeveloperSection() {
  return (
    <section
      id="developer"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-green-100 bg-[#f7fcf8]">
          <div className="grid items-center gap-12 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-14">
            
            {/* Developer Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group relative mx-auto"
            >
              <div className="absolute -inset-8 rounded-full bg-green-200/50 blur-3xl" />

              <div className="relative size-60 overflow-hidden rounded-full border-8 border-white bg-[#168a45] shadow-2xl shadow-green-900/20">
                
                <Image
                    //src="/images/Mosa.jpeg"
                    src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}/images/Mosa.jpeg`}
                    alt="Rakoloi Mosa, Software Developer and creator of iJob"
                    fill
                    sizes="(max-width: 768px) 220px, 240px"
                    className="object-cover object-center transition duration-500 group-hover:scale-110"
                    priority
                />
               

                {/* Appears when hovering */}
                <div className="absolute inset-0 grid place-items-center rounded-full bg-[#0b3d25]/90 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  <div className="text-center text-white">
                    <Code2 className="mx-auto mb-3" size={32} />
                    <p className="font-bold">
                      Software Developer
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 shadow-lg">
                <Sparkles
                  size={16}
                  className="text-[#168a45]"
                />
                <span className="text-xs font-black text-slate-700">
                  Creator
                </span>
              </div>
            </motion.div>

            {/* Developer Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-black uppercase tracking-[.22em] text-[#168a45]">
                Meet the creator
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-slate-950 md:text-5xl">
                Rakoloi Mosa
              </h2>

              <p className="mt-2 text-lg font-bold text-[#168a45]">
                Software Developer
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                iJob was designed and developed as a local services
                marketplace that connects people who need work done
                with service providers looking for opportunities.
                The project combines modern mobile development,
                cloud technologies, and a practical solution to
                everyday employment and service needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* GitHub Profile */}
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#168a45] px-6 py-4 font-black text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-1 hover:bg-[#0d6b35]"
                >
                  <Github size={20} />
                  GitHub Profile
                  <ExternalLink
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                {/* Project Repository */}
                <a
                  href={REPOSITORY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-green-200 bg-white px-6 py-4 font-black text-slate-700 transition hover:border-[#168a45] hover:text-[#168a45]"
                >
                  <Code2 size={20} />
                  GitHub Repository
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}