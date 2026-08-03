"use client";

import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["Technology", "#technology"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4">
      <nav className="glass mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between rounded-[1.7rem] px-4 shadow-[0_10px_40px_rgba(15,80,39,.08)] md:px-6">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-[#168a45]">
              {label}
            </a>
          ))}
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-[#168a45] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-[#0d6b35]"
          >
            <Download size={16} /> Download
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center rounded-xl bg-green-50 text-[#168a45] md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="absolute left-0 right-0 top-[4.7rem] glass rounded-[1.7rem] p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="font-semibold text-slate-700">
                  {label}
                </a>
              ))}
              <a href="#download" onClick={() => setOpen(false)} className="rounded-xl bg-[#168a45] px-4 py-3 text-center font-bold text-white">
                Download Android App
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
