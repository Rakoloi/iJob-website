"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  CheckCircle2,
  Download,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const BUILD_URL =
  "https://expo.dev/accounts/ijop-pty/projects/ijop/builds/e842c51e-3395-4681-9c91-f0a69288f1b4";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="grid-pattern relative isolate min-h-screen overflow-hidden pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[55%] top-20 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-green-300/30 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-15rem] top-[20%] -z-10 h-[32rem] w-[32rem] rounded-full bg-emerald-200/20 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-20 pt-8 md:min-h-[calc(100vh-80px)] md:grid-cols-[1fr_0.9fr] md:px-8 lg:gap-4">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-bold text-[#168a45] shadow-sm backdrop-blur"
          >
            <Sparkles size={16} />
            Your local services marketplace
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[5.2rem]">
            Find work.
            <span className="block text-[#168a45]">
              Get things done.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            iJob connects people who need work done with local service
            providers looking for opportunities. Post a job, discover work
            nearby, connect, and turn everyday skills into income.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={BUILD_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#168a45] px-7 py-4 font-extrabold text-white shadow-xl shadow-green-700/25 transition hover:bg-[#0d6b35]"
            >
              <Download
                size={20}
                className="transition group-hover:translate-y-0.5"
              />
              Download for Android
            </motion.a>

            <motion.a
              href="#features"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-green-200 bg-white/80 px-7 py-4 font-bold text-slate-700 shadow-sm backdrop-blur transition hover:border-[#168a45] hover:text-[#168a45]"
            >
              Explore iJob
              <ArrowDown size={18} />
            </motion.a>
          </div>

          {/* Trust points */}
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#168a45]" />
              Built for local opportunities
            </span>

            <span className="inline-flex items-center gap-2">
              <MapPin size={18} className="text-[#168a45]" />
              Location-aware
            </span>
          </div>

          {/* Small stats */}
          <div className="mt-10 flex items-center gap-8 border-t border-slate-200 pt-6">
            <div>
              <p className="text-2xl font-black text-slate-950">1 app</p>
              <p className="text-sm text-slate-500">for both sides</p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-black text-slate-950">Local</p>
              <p className="text-sm text-slate-500">opportunities</p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <p className="text-2xl font-black text-slate-950">Simple</p>
              <p className="text-sm text-slate-500">job management</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — PHONE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto flex w-full max-w-[560px] justify-center md:-mr-10 lg:-mr-16"
        >
          {/* Main green glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/40 blur-[90px]" />

          {/* Decorative circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 -z-10 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-200/60"
          />

          {/* Phone */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-2.5, -1, -2.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-[300px] sm:w-[350px] md:w-[430px] lg:w-[480px]"
          >
            <Image
              // src=""
              src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}/images/available jobs.png`}
              alt="iJob available jobs screen"
              width={1254}
              height={1254}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

          {/* Floating card — opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="absolute right-0 top-[18%] z-30 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:block lg:-right-2"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-green-100 text-[#168a45]">
                <BriefcaseIcon />
              </span>

              <div>
                <p className="text-sm font-black text-slate-900">
                  New opportunities
                </p>
                <p className="text-xs text-slate-500">
                  Available near you
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating card — location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="absolute bottom-[20%] left-0 z-30 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:block lg:-left-4"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-green-100 text-[#168a45]">
                <MapPin size={21} />
              </span>

              <div>
                <p className="text-sm font-black text-slate-900">
                  Jobs near you
                </p>

                <p className="flex items-center gap-1 text-xs text-slate-500">
                  <CheckCircle2 size={12} className="text-[#168a45]" />
                  Location aware
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating users badge */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[7%] right-[3%] z-30 hidden rounded-full border border-green-100 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2"
          >
            <Users size={17} className="text-[#168a45]" />
            <span className="text-xs font-bold text-slate-700">
              Connect locally
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold text-slate-400 md:flex"
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </svg>
  );
}
