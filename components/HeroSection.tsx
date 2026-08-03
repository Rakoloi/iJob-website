"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, ShieldCheck, Sparkles } from "lucide-react";

const BUILD_URL = "https://expo.dev/accounts/ijop-pty/projects/ijop/builds/e842c51e-3395-4681-9c91-f0a69288f1b4";

export default function HeroSection() {
  return (
    <section id="home" className="grid-pattern relative isolate pt-36">
      <div className="absolute left-1/2 top-28 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-green-200/35 blur-3xl" />

      <div className="mx-auto grid min-h-[760px] max-w-6xl items-center gap-12 px-5 pb-16 md:grid-cols-[1.05fr_.95fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-bold text-[#168a45] shadow-sm">
            <Sparkles size={16} /> Your local services marketplace
          </div>

          <h1 className="text-5xl font-black leading-[.98] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Find work.
            <span className="block text-[#168a45]">Get things done.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            iJob connects people who need work done with local service providers looking for opportunities.
            Post a job, discover work nearby, connect, and turn everyday skills into income.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={BUILD_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#168a45] px-7 py-4 font-extrabold text-white shadow-xl shadow-green-700/25 transition hover:-translate-y-1 hover:bg-[#0d6b35]"
            >
              <Download size={20} className="transition group-hover:translate-y-0.5" />
              Download for Android
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-green-200 bg-white/80 px-7 py-4 font-bold text-slate-700 transition hover:border-[#168a45] hover:text-[#168a45]">
              Explore features <ArrowDown size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={18} className="text-[#168a45]" /> Built with modern mobile technology</span>
            <span className="inline-flex items-center gap-2"><MapPin size={18} className="text-[#168a45]" /> Designed for local opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[370px]"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="phone-shadow relative overflow-hidden rounded-[2.7rem] border-[9px] border-slate-950 bg-slate-950"
          >
            <Image
              src="/images/available-jobs.jpeg"
              alt="iJob available jobs screen"
              width={720}
              height={1280}
              priority
              className="h-auto w-full rounded-[2.15rem]"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="green-glow absolute -left-16 bottom-16 hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur md:flex md:items-center md:gap-3"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-green-100 text-[#168a45]"><BriefcaseIcon /></span>
            <span><b className="block text-sm">New opportunities</b><small className="text-slate-500">Available near you</small></span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BriefcaseIcon() {
  return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>;
}
