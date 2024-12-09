import './Style.css';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[680px] rounded-xl bg-black/80 px-4 py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6">
        <div className="text-xl font-semibold text-white Tom-logo">Tom</div>
        <div className="text-xl font-semibold text-white Tom-logo">
          Let's Connact
        </div>
        <div className="text-sm text-neutral-400">
          © 2024 Tom. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
