"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CircleDollarSign, MapPinned, Star, UserRoundPlus, Workflow, ArrowRight } from "lucide-react";

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

    <section
      id="features"
      className="scroll-mt-28 overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-black uppercase tracking-[.22em] text-[#168a45]">
            Everything in one app
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-slate-950 md:text-5xl">
            Built for both sides
            <span className="block text-[#168a45]">
              of the job.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you need help or are looking for work, iJob gives you
            a simple place to connect, discover opportunities and get things
            done.
          </p>
        </motion.div>


        {/* PHONE SHOWCASE */}
        <div className="relative mt-20">

          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/70 blur-3xl" />

          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* LOGIN PHONE */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute inset-12 -z-10 rounded-full bg-green-200/50 blur-3xl transition duration-500 group-hover:bg-green-300/60" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto w-full max-w-[520px]"
              >
                <img
                  src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}/images/Login.png`}
                  alt="iJob mobile application login screen"
                  className="h-auto w-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Caption */}
              <div className="relative mx-auto -mt-8 max-w-[400px] rounded-3xl border border-green-100 bg-white/90 p-5 text-center shadow-xl backdrop-blur">
                <div className="mx-auto mb-3 grid size-10 place-items-center rounded-xl bg-green-100 text-[#168a45]">
                  <UserRoundPlus size={20} />
                </div>

                <h3 className="text-lg font-black text-slate-900">
                  Simple to get started
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Create an account and start discovering local opportunities.
                </p>
              </div>
            </motion.div>


            {/* JOB DETAILS PHONE */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-12 -z-10 rounded-full bg-green-200/50 blur-3xl transition duration-500 group-hover:bg-green-300/60" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto w-full max-w-[560px]"
              >
                <img
                  src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}/images/view job.png`}
                  alt="iJob mobile application job details and location screen"
                  className="h-auto w-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Caption */}
              <div className="relative mx-auto -mt-8 max-w-[400px] rounded-3xl border border-green-100 bg-white/90 p-5 text-center shadow-xl backdrop-blur">
                <div className="mx-auto mb-3 grid size-10 place-items-center rounded-xl bg-green-100 text-[#168a45]">
                  <MapPinned size={20} />
                </div>

                <h3 className="text-lg font-black text-slate-900">
                  Understand the job
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  See the job description, value and location before accepting.
                </p>
              </div>
            </motion.div>

          </div>
        </div>


        {/* FEATURE CARDS */}
        <div className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <span className="text-sm font-black uppercase tracking-[.2em] text-[#168a45]">
                Why iJob
              </span>

              <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                Everything you need to get moving.
              </h3>
            </div>

          </motion.div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -7 }}
                  className="group rounded-[1.8rem] border border-green-100 bg-[#f8fcf9] p-7 transition duration-300 hover:border-green-300 hover:bg-white hover:shadow-xl hover:shadow-green-950/5"
                >
                  <span className="grid size-13 place-items-center rounded-2xl bg-green-100 text-[#168a45] transition duration-300 group-hover:scale-110 group-hover:bg-[#168a45] group-hover:text-white">
                    <Icon size={25} />
                  </span>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#168a45] opacity-0 transition duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
