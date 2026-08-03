"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CircleDollarSign, MapPinned, Star, UserRoundPlus, Workflow } from "lucide-react";

const features = [
  { icon: UserRoundPlus, title: "Post a job", text: "Describe what you need and make your request visible to local service providers." },
  { icon: BriefcaseBusiness, title: "Discover work", text: "Browse available opportunities and find jobs that match your skills." },
  { icon: MapPinned, title: "Location aware", text: "Use location and maps to understand where work is needed." },
  { icon: Workflow, title: "Track progress", text: "Keep work organised by following each job through its progress." },
  { icon: CircleDollarSign, title: "Clear job value", text: "See the offered amount before accepting an opportunity." },
  { icon: Star, title: "Build trust", text: "Profiles and ratings help create confidence between clients and providers." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-28 bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-black uppercase tracking-[.22em] text-[#168a45]">Everything in one app</span>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-slate-950 md:text-5xl">Built for both sides of the job.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Whether you need help or are looking for work, iJob gives you a simple place to connect.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -7 }}
                className="group rounded-[1.8rem] border border-green-100 bg-[#f8fcf9] p-7 transition hover:border-green-300 hover:bg-white hover:shadow-xl hover:shadow-green-950/5"
              >
                <span className="grid size-13 place-items-center rounded-2xl bg-green-100 text-[#168a45] transition duration-300 group-hover:scale-110 group-hover:bg-[#168a45] group-hover:text-white">
                  <Icon size={25} />
                </span>
                <h3 className="mt-6 text-xl font-black text-slate-900">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
