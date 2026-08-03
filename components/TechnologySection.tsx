"use client";

import { motion } from "framer-motion";
import { Braces, Database, FileCheck2, Flame, FormInput, Smartphone, Triangle } from "lucide-react";

const tech = [
  { icon: Smartphone, name: "Expo", role: "Mobile development and app tooling" },
  { icon: Triangle, name: "React Native", role: "Cross-platform mobile user interface" },
  { icon: Braces, name: "TypeScript", role: "Type-safe application development" },
  { icon: Flame, name: "Firebase Authentication", role: "Secure user authentication" },
  { icon: Database, name: "Cloud Firestore", role: "Cloud-hosted application data" },
  { icon: FormInput, name: "React Hook Form", role: "Efficient form state management" },
  { icon: FileCheck2, name: "Zod", role: "Schema-based form and data validation" },
  { icon: Smartphone, name: "Expo / EAS Build", role: "Cloud builds and app distribution" },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="scroll-mt-28 bg-[#0b3d25] py-24 text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-[.22em] text-green-300">Technical foundation</span>
            <h2 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">Modern tools behind iJob.</h2>
            <p className="mt-5 text-lg leading-8 text-green-100/75">A practical mobile stack focused on maintainability, validation, cloud data, and a smooth cross-platform experience.</p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-green-200">Hover over a tool to learn its role</span>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group min-h-48 rounded-[1.7rem] border border-white/10 bg-white/[.06] p-6 backdrop-blur transition hover:border-green-300/40 hover:bg-green-400/10"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-green-400/15 text-green-300 transition group-hover:rotate-6 group-hover:bg-green-400 group-hover:text-[#0b3d25]">
                  <Icon size={24} />
                </span>
                <h3 className="mt-7 font-black">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-green-100/60 transition group-hover:text-green-100">{item.role}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
