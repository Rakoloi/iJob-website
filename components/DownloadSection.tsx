"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Smartphone } from "lucide-react";

const BUILD_URL = "https://expo.dev/accounts/ijop-pty/projects/ijop/builds/e842c51e-3395-4681-9c91-f0a69288f1b4";

export default function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-28 px-5 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="green-glow mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#168a45] px-7 py-16 text-center text-white md:px-16"
      >
        <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-white/15">
          <Smartphone size={31} />
        </div>
        <h2 className="mt-7 text-4xl font-black tracking-[-.04em] md:text-5xl">Ready to put iJob to work?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50/80">
          Download the latest Android build and explore a simpler way to post local jobs, discover opportunities, and connect with people nearby.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={BUILD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-black text-[#168a45] shadow-xl transition hover:-translate-y-1"
          >
            <Download size={20} /> Download Android App
          </a>
          <a
            href={BUILD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/15"
          >
            View latest build <ExternalLink size={18} />
          </a>
        </div>
        <p className="mt-5 text-xs font-semibold text-green-100/60">The download opens the latest iJob build on Expo.</p>
      </motion.div>
    </section>
  );
}
