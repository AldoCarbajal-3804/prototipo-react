import logo from '@/assets/images/logo.png';

export const NavLogo = () => (
    <menu className="flex items-center gap-3 group cursor-pointer">
        <img src={logo} alt="J&A Logo" className="w-10 md:w-12 transition-transform group-hover:scale-110" />
        <span className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">J&A Partners</span>
    </menu>
);