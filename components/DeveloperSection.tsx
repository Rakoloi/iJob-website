"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Github,
  ExternalLink,
  Sparkles,
  ChevronDown,
  BriefcaseBusiness,
} from "lucide-react";
import { useState } from "react";

const REPOSITORY_URL =
  "https://github.com/Rakoloi/labourQuest";

const GITHUB_PROFILE_URL =
  "https://github.com/Rakoloi";

export default function DeveloperSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const expanded = isHovered || isOpen;

  return (
    <section
      id="developer"
      className="scroll-mt-28 bg-white px-5 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Small section label */}
        <div className="mb-6 text-center">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#168a45]">
            Built by
          </span>
        </div>

        {/* Interactive Developer Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen((prev) => !prev)}
          animate={{
            height: expanded ? "auto" : "108px",
          }}
          className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-green-100 bg-[#f7fcf8] shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-green-900/10"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{
              opacity: expanded ? 1 : 0,
              scale: expanded ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-green-200/40 blur-3xl"
          />

          {/* Decorative dots */}
          <motion.div
            animate={{
              rotate: expanded ? 180 : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute right-8 top-8 hidden md:block"
          >
            <div className="grid grid-cols-3 gap-2 opacity-30">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="size-1.5 rounded-full bg-[#168a45]"
                />
              ))}
            </div>
          </motion.div>

          {/* Main content */}
          <div className="relative z-10 flex items-center gap-4 p-3 md:gap-5 md:p-4">

            {/* Developer Image */}
            <motion.div
              animate={{
                width: expanded ? 150 : 82,
                height: expanded ? 180 : 82,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative shrink-0 overflow-hidden rounded-[1.4rem] border-4 border-white bg-green-100 shadow-lg"
            >
              <Image
                src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}/images/Mosa.jpeg`}
                alt="Rakoloi Mosa, creator of iJob"
                fill
                sizes="180px"
                priority
                className="object-cover object-center transition duration-700 group-hover:scale-105"
              />

              {/* Image edge glow - DOES NOT COVER IMAGE */}
              <motion.div
                animate={{
                  opacity: expanded ? 0.25 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute inset-0 rounded-[1rem] ring-2 ring-inset ring-green-300"
              />

              {/* Creator badge */}
              <motion.div
                animate={{
                  scale: expanded ? 1 : 0.8,
                  opacity: expanded ? 1 : 0,
                }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-2 left-2 right-2 rounded-lg bg-white/90 px-2 py-1 text-center text-[10px] font-black text-[#168a45] shadow-lg backdrop-blur"
              >
                CREATOR
              </motion.div>
            </motion.div>

            {/* Developer heading */}
            <div className="min-w-0 flex-1">

              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  className="shrink-0 text-[#168a45]"
                />

                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#168a45]">
                  iJob Developer
                </span>
              </div>

              <h2 className="mt-1 truncate text-xl font-black tracking-tight text-slate-950 md:text-2xl">
                Rakoloi Mosa
              </h2>

              <p className="mt-0.5 text-sm font-semibold text-slate-500">
                Software Developer
              </p>

              {/* Expand hint */}
              <AnimatePresence mode="wait">
                {!expanded ? (
                  <motion.p
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-1 text-xs font-medium text-slate-400"
                  >
                    
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Expand button */}
            <motion.div
              animate={{
                rotate: expanded ? 180 : 0,
              }}
              transition={{ duration: 0.35 }}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-green-200 bg-white text-[#168a45] shadow-sm"
            >
              <ChevronDown size={19} />
            </motion.div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 px-4 pb-5 md:pl-[174px] md:pr-6"
              >
                <div className="border-t border-green-100 pt-5">

                  {/* Intro */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 }}
                  >
                    <div className="flex items-center gap-2">
                      <Code2
                        size={18}
                        className="text-[#168a45]"
                      />

                      <h3 className="font-black text-slate-900">
                        Building iJob
                      </h3>
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                      Software Engineer with hands-on experience designing,
                      building, testing and deploying full-stack web and
                      mobile applications. iJob was created to make it easier
                      for people to connect with local service providers and
                      opportunities.
                    </p>
                  </motion.div>

                  {/* Technology pills */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {[
                      "TypeScript",
                      "React",
                      "React Native",
                      "Next.js",
                      "Firebase",
                      "Playwright",
                      "CI/CD",
                    ].map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-green-100 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 }}
                    className="mt-6 flex flex-col gap-3 sm:flex-row"
                  >
                    <a
                      href={GITHUB_PROFILE_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/button inline-flex items-center justify-center gap-2 rounded-xl bg-[#168a45] px-5 py-3 text-sm font-black text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-[#0d6b35]"
                    >
                      <Github size={17} />

                      GitHub Profile

                      <ExternalLink
                        size={14}
                        className="transition-transform group-hover/button:translate-x-0.5"
                      />
                    </a>

                    <a
                      href={REPOSITORY_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-[#168a45] hover:text-[#168a45]"
                    >
                      <Code2 size={17} />
                      View iJob Repository
                    </a>
                  </motion.div>

                  {/* Bottom status */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-400"
                  >
                    <span className="size-2 rounded-full bg-[#168a45] shadow-[0_0_10px_rgba(22,138,69,0.6)]" />

                    Designed, developed and tested with modern technologies.
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}