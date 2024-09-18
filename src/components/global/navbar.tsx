import { cn } from "@/lib/utils";
import Link from "next/link";
import { geistSans } from "@/lib/font";
import { MenuIcon } from "lucide-react";
import AppLogo from "../logo/app-logo";

const NAV_LINKS = [
  {
    name: "Products",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/about",
  },
  {
    name: "Clients",
    href: "/clients",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Documentation",
    href: "/documentation",
  },
  {
    name: "Enterprise",
    href: "/enterprise",
  },
];

const Navbar = async () => {
  const user = false;
  return (
    <header
      className={cn(
        "z-[100] flex items-center justify-between border-b-[1px] border-neutral-600/20 bg-body px-8 py-2 backdrop-blur-md dark:border-none",
        geistSans.className,
      )}
    >
      <aside className="flex items-center">
        <AppLogo
          // width={250}
          // height={250}
          className="mx-auto"
        />
      </aside>
      <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
        <ul className="flex list-none items-center gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-neutral-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E6ABAC_0%,#FDDCDF_50%,#F472B6_100%)]" /> */}
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-3xl">
            {user ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
