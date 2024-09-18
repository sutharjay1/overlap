import { geistSans } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoLogoApple } from "react-icons/io";
import AppLogo from "../logo/app-logo";
import { Button } from "../ui/button";

// const NAV_LINKS = [
//   {
//     name: "Products",
//     href: "/",
//   },
//   {
//     name: "Pricing",
//     href: "/about",
//   },
//   {
//     name: "Clients",
//     href: "/clients",
//   },
//   {
//     name: "Resources",
//     href: "/resources",
//   },
//   {
//     name: "Documentation",
//     href: "/documentation",
//   },
//   {
//     name: "Enterprise",
//     href: "/enterprise",
//   },
// ];

const Navbar = async () => {
  // const user = false;
  return (
    // <header
    //   className={cn(
    //     "z-[100] flex items-center justify-between border-b-[1px] border-neutral-600/20 bg-body px-8 py-2 backdrop-blur-md dark:border-none",
    //     geistSans.className,
    //   )}
    // >
    //   <aside className="flex items-center">
    //     <AppLogo
    //       // width={250}
    //       // height={250}
    //       className="mx-auto"
    //     />
    //   </aside>
    //   <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
    //     <ul className="flex list-none items-center gap-4">
    //       {NAV_LINKS.map((link) => (
    //         <li key={link.name}>
    //           <Link
    //             href={link.href}
    //             className="text-sm font-medium text-neutral-300"
    //           >
    //             {link.name}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    //   <aside className="flex items-center gap-4">
    //     <Link
    //       href="/dashboard"
    //       className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    //     >
    //       {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E6ABAC_0%,#FDDCDF_50%,#F472B6_100%)]" /> */}
    //       <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-3xl">
    //         {user ? "Dashboard" : "Get Started"}
    //       </span>
    //     </Link>
    //     <MenuIcon className="md:hidden" />
    //   </aside>
    // </header>

    <>
      <header
        className={cn("fixed top-2 z-30 w-full md:top-6", geistSans.className)}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-[#fff8f4] px-3 shadow-lg shadow-black/[0.03] backdrop-blur before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            <div className="ml-1 flex flex-1 items-center gap-3">
              <Link
                className="inline-flex text-lg font-bold"
                aria-label="Overlap"
                href="/"
              >
                <AppLogo
                  // width={250}
                  // height={250}
                  className="mx-auto"
                />
              </Link>
            </div>{" "}
            <Button
              variant="default"
              className="mx-auto w-fit rounded-lg py-4"
              asChild
            >
              <Link
                href="https://apps.apple.com/us/app/overlap-explore-conversations/id6449747632"
                target="_blank"
              >
                <div className="flex items-center gap-2">
                  <IoLogoApple size={28} />
                  <span className="flex items-center">
                    <span>Download</span>
                    <span className="hidden md:inline">
                      &nbsp;on the App Store
                    </span>
                  </span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
