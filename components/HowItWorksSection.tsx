"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  ["01", "Create your profile", "Set up your account and get ready to use iJob as a client, a service provider, or both."],
  ["02", "Post or find work", "Create a job when you need help, or browse available jobs when you are looking for opportunities."],
  ["03", "Connect and complete", "Accept work, follow the job progress, and complete the task with a clear shared view."],
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-28 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-[400px]"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-green-200/50 blur-3xl" />
          {/* <div className="phone-shadow overflow-hidden rounded-[2.7rem] border-[9px] border-slate-950 bg-slate-950"> */}
          <div>
            <Image
              src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}/images/active jobs.png`}
              alt="iJob job details screen with location"
              width={990}
              height={1280}
              className="w-full "
            />
          </div>
        </motion.div>

        <div>
          <span className="text-sm font-black uppercase tracking-[.22em] text-[#168a45]">Simple by design</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-slate-950 md:text-5xl">From opportunity to completed work.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">iJob keeps the experience straightforward, whether you are posting a task or building income through your skills.</p>

          <div className="mt-10 space-y-7">
            {steps.map(([number, title, text]) => (
              <div key={number} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#168a45] font-black text-white shadow-lg shadow-green-700/20">{number}</span>
                <div>
                  <h3 className="text-xl font-black text-slate-900">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-[#168a45]">
            <CheckCircle2 size={17} /> One account, two ways to use iJob
          </div>
        </div>
      </div>
    </section>
  );
}
