import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-9 text-center md:flex-row md:px-8 md:text-left">
        <Logo />
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} iJob. Connecting local people with local opportunities.</p>
        <p className="text-sm text-slate-500">created by Mosa</p>
        <a href="#home" className="text-sm font-bold text-[#168a45] transition hover:text-[#0d6b35]">Back to top ↑</a>
      </div>
    </footer>
  );
}
