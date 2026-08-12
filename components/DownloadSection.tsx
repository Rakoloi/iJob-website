"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  MapPinned,
  UserRound,
  BriefcaseBusiness, } from "lucide-react";

const BUILD_URL = "https://expo.dev/accounts/ijop-pty/projects/ijop/builds/e842c51e-3395-4681-9c91-f0a69288f1b4";

const journey = [
  {
    id: 1,
    title: "Login",
    shortTitle: "Get started",
    description:
      "Create your iJob account and get access to local jobs and opportunities.",
    image: "/images/Login.png",
    icon: UserRound,
  },
  {
    id: 2,
    title: "Create a job",
    shortTitle: "Post work",
    description:
      "Have something that needs to be done? Create a job and tell local providers what you need.",
    image: "/images/job created.png",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "View the job",
    shortTitle: "Find opportunities",
    description:
      "Explore job details, location, description and offered value before accepting.",
    image: "/images/view job.png",
    icon: MapPinned,
  },
  {
    id: 4,
    title: "Active jobs",
    shortTitle: "Track progress",
    description:
      "Keep track of your work and manage active jobs from one simple place.",
    image: "/images/active jobs.png",
    icon: CheckCircle2,
  },
];

export default function DownloadSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = journey[activeIndex];
  const ActiveIcon = activeSlide.icon;

  // Automatically move through the app journey
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % journey.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % journey.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + journey.length) % journey.length
    );
  };

  return (
    <section
      id="download"
      className="scroll-mt-28 overflow-hidden px-5 py-24 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="green-glow relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#168a45] text-white"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 size-[30rem] rounded-full bg-green-300/10 blur-3xl" />

          <div className="absolute left-[8%] top-[15%] size-2 rounded-full bg-white/30" />
          <div className="absolute right-[12%] top-[30%] size-3 rounded-full bg-white/20" />
          <div className="absolute bottom-[18%] right-[25%] size-2 rounded-full bg-white/30" />
        </div>

        <div className="relative grid items-center gap-10 px-6 py-14 sm:px-10 md:grid-cols-[0.9fr_1.1fr] md:px-16 md:py-20">

          {/* =========================================
              LEFT — TEXT / DOWNLOAD CTA
          ========================================== */}
          <div className="relative z-10 text-center md:text-left">

            <motion.div
              key={`icon-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-auto grid size-16 place-items-center rounded-2xl bg-white/15 shadow-lg backdrop-blur md:mx-0"
            >
              <ActiveIcon size={30} />
            </motion.div>

            <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-green-100/80">
              Your iJob journey
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                  {activeSlide.title}
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-green-50/85">
                  {activeSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Download buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row md:justify-start">
              <a
                href={BUILD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-black text-[#168a45] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Download size={20} />
                Download Android App
              </a>

              <a
                href={BUILD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                View build
                <ExternalLink size={18} />
              </a>
            </div>

            <p className="mt-5 text-xs font-semibold text-green-100/60">
              The download opens the latest iJob Android build on Expo.
            </p>

            {/* =========================================
                JOURNEY NAVIGATION
            ========================================== */}
            <div
              className="mt-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-green-100/60">
                  Explore the app
                </span>

                <span className="text-xs font-bold text-green-100/60">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(journey.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {journey.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group relative overflow-hidden rounded-xl p-2 text-left transition ${
                        isActive
                          ? "bg-white/20"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <StepIcon
                          size={15}
                          className={
                            isActive
                              ? "text-white"
                              : "text-green-100/50"
                          }
                        />

                        <span
                          className={`hidden text-[10px] font-bold sm:block ${
                            isActive
                              ? "text-white"
                              : "text-green-100/50"
                          }`}
                        >
                          {step.shortTitle}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                        {isActive ? (
                          <motion.div
                            key={`progress-${activeIndex}`}
                            initial={{ width: "0%" }}
                            animate={{
                              width: isPaused ? "100%" : "100%",
                            }}
                            transition={{
                              duration: 4.5,
                              ease: "linear",
                            }}
                            className="h-full rounded-full bg-white"
                          />
                        ) : (
                          <div
                            className={`h-full rounded-full ${
                              index < activeIndex
                                ? "w-full bg-white/40"
                                : "w-0"
                            }`}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT — PHONE SLIDESHOW
          ========================================== */}
          <div
            className="relative flex min-h-[520px] items-center justify-center md:min-h-[650px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Large glow */}
            <div className="absolute left-1/2 top-1/2 size-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute size-[420px] rounded-full border border-white/10 md:size-[520px]"
            />

            {/* Previous button */}
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous app screen"
              className="absolute left-0 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:left-4"
            >
              <ChevronLeft size={21} />
            </button>

            {/* Phone */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlide.id}
                initial={{
                  opacity: 0,
                  x: 80,
                  rotate: 8,
                  scale: 0.88,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: activeIndex % 2 === 0 ? -3 : 3,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                  rotate: -8,
                  scale: 0.88,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative z-20 ${
                  activeSlide.id === 2
                    ? "w-[190px] sm:w-[230px] md:w-[330px]"
                    : "w-[250px] sm:w-[300px] md:w-[430px]"
                }`}
              >
                <motion.img
                  //src={activeSlide.image}
                  src={`${process.env.NODE_ENV === "production" ? "/iJob-website" : ""}${activeSlide.image}`}
                  alt={`iJob ${activeSlide.title} screen`}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-auto w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next app screen"
              className="absolute right-0 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-4"
            >
              <ChevronRight size={21} />
            </button>

            {/* Floating screen label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`label-${activeIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-black/10 px-5 py-2 text-xs font-bold text-white backdrop-blur-md"
              >
                {String(activeIndex + 1).padStart(2, "0")} ·{" "}
                {activeSlide.title}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

