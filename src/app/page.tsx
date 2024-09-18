// import Image from "next/image";

// import CommunityFavFeature from "@/components/global/community-fav-feature";
// import Icon from "@/components/global/icon";
// import Navbar from "@/components/global/navbar";
// import { Button } from "@/components/ui/button";
// import { geistMono, geistSans } from "@/lib/font";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { IoLogoApple } from "react-icons/io";

// export default function Home() {
//   return (
//     <main
//       className={cn("relative min-h-screen bg-background", geistSans.className)}
//     >
//       <Navbar />
//       <div className="absolute inset-0 h-screen [background:radial-gradient(125%_125%_at_50%_10%,transparent_35%,#ff8000_500%)]"></div>

//       <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-body px-4 pt-24">
//         <div className="z-10 w-full max-w-6xl">
//           <div
//             className={cn(
//               "grid grid-cols-1 place-items-center items-center justify-center lg:grid-cols-2",
//               geistMono.className,
//             )}
//           >
//             <div className="w-full md:mb-0">
//               <Image
//                 src="/mobile.avif"
//                 alt="Mobile device"
//                 className="mx-auto h-[40rem] w-auto max-w-md object-contain"
//                 width={200}
//                 height={200}
//                 draggable={false}
//               />
//             </div>

//             <div className="relative flex w-full flex-col space-y-8 pb-16 lg:pb-0">
//               <Icon />

//               <Image
//                 src="/text.svg"
//                 alt="Text overlay"
//                 className="h-auto w-full object-contain"
//                 width={890}
//                 height={559}
//                 draggable={false}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative w-full bg-[#fff8f4] px-4 py-16 sm:px-6 lg:px-8">
//         <svg
//           viewBox="0 0 1440 58"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute left-0 top-0 w-full bg-[#fff8f4]"
//         >
//           <path
//             d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
//             fill="#140300"
//           ></path>
//         </svg>

//         <section className="px-4 py-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-5xl pt-16">
//             <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//               Your AI-powered podcast assistant
//             </h1>
//             <p className="mb-8 text-center text-xl text-gray-700">
//               Overlap is an AI-powered podcast assistant. Ask it about any topic
//               or person, and it&#39;ll give you a custom podcast playlist of
//               clips relevant to what you asked for. It&#39;s a breakthrough way
//               to listen to podcasts.
//             </p>
//             <div className="z-50 flex justify-center">
//               <Button
//                 variant="default"
//                 className="mx-auto w-fit cursor-pointer rounded-xl px-6 py-6 font-semibold text-white transition-colors"
//                 asChild
//               >
//                 <Link
//                   href="https://apps.apple.com/us/app/overlap-explore-conversations/id6449747632"
//                   target="_blank"
//                 >
//                   <div className="flex items-center gap-2">
//                     <IoLogoApple size={28} />
//                     Download on the App Store
//                   </div>
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-5xl">
//             <div className="relative grid grid-cols-1 place-items-start gap-0 md:grid-cols-2 md:gap-12">
//               <div className="group relative overflow-hidden rounded-2xl bg-background p-5 md:p-6">
//                 <div className="relative w-full">
//                   <div className="flex w-full items-center gap-4">
//                     <h2 className="mb-4 text-balance text-3xl font-bold text-red-600">
//                       ❌ The Problem
//                     </h2>
//                   </div>
//                   <p className="mt-6 pb-6 font-medium text-muted-foreground">
//                     There are 5 million hours of new podcast content each week,
//                     distributed via archaic RSS feeds. The moments that make
//                     people love podcasts are often lost in the deluge. Sifting
//                     through hours of content to find the best clips is
//                     time-consuming and overwhelming.
//                   </p>
//                 </div>
//               </div>

//               <div className="group relative overflow-hidden rounded-2xl bg-background p-5 md:p-6">
//                 <div className="relative w-full">
//                   <div className="flex w-full items-center gap-4">
//                     <h2 className="mb-4 text-balance text-3xl font-bold text-green-600">
//                       ✨ Our Solution
//                     </h2>
//                   </div>
//                   <p className="mt-6 pb-6 font-medium text-muted-foreground">
//                     Overlap is the first podcast experience that uses LLMs to
//                     curate the best moments in any episode. It creates
//                     personalized playlists of clips based on your interests. Ask
//                     about any topic, and it can retrieve the most relevant,
//                     high-value clips from a wide range of shows.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <CommunityFavFeature />

//         <section className="px-4 py-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-5xl text-center">
//             <h2 className="mb-8 text-3xl font-bold text-gray-800">
//               🙏 How You Can Help
//             </h2>
//             <ul className="mb-8 space-y-4 text-lg text-gray-700">
//               <li>Try Overlap: It&pros;s available on the App Store.</li>
//               <li>Feedback: Book a time to share your thoughts with us.</li>
//               <li>Share it: If you like it, make it your go-to podcast app.</li>
//               <li>Follow: Join us on Twitter.</li>
//             </ul>
//             <p className="text-xl font-semibold text-gray-800">
//               - Jonathan, Buzz, Casey
//             </p>
//           </div>
//         </section>

//         <svg
//           viewBox="0 0 1440 58"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute bottom-0 left-0"
//         >
//           <path
//             transform="rotate(180) translate(-1440, -60)"
//             d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
//             fill="#140300"
//           ></path>
//         </svg>
//       </section>

//       <footer className="relative z-50 overflow-hidden bg-[#140300] px-4 py-8 text-white sm:px-6 lg:px-8">
//         <div className="relative z-50 h-60 w-full" aria-hidden="true">
//           <div className="absolute left-1/2 -z-10 -translate-x-1/2 translate-y-1/4 text-center text-[348px] font-bold leading-none">
//             <span className="shadow-text select-none bg-gradient-to-b from-transparent to-neutral-700/50 bg-clip-text text-transparent">
//               overlap
//             </span>
//           </div>
//           <div
//             className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
//             aria-hidden="true"
//           >
//             <div className="h-56 w-56 rounded-full border-[20px] border-[#ff8000]/60 blur-[80px]"></div>
//           </div>
//         </div>

//         <div className="absolute left-0 right-0 top-5 mx-auto w-full max-w-5xl text-center">
//           <p className="mb-4">© 2023 Overlap. All rights reserved.</p>
//           <Link href="/privacypolicy" className="text-blue-500 hover:underline">
//             View our Privacy Policy
//           </Link>
//         </div>
//       </footer>
//       <footer className="relative z-50 hidden overflow-hidden bg-[#140300] px-4 py-8 text-white sm:px-6 lg:px-8">
//         <div className="relative z-50 h-64 w-full" aria-hidden="true">
//           <div className="after:[text-shadow:0_1px_0_white, inset 0px 4px 6px rgba(0, 0, 0, 0.5)] pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 translate-y-[25%] text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['overlap'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['overlap']"></div>
//         </div>

//         <div className="absolute left-0 right-0 top-5 mx-auto w-full max-w-5xl text-center">
//           <p className="mb-4">© 2023 Overlap. All rights reserved.</p>
//           <Link href="/privacypolicy" className="text-blue-500 hover:underline">
//             View our Privacy Policy
//           </Link>
//         </div>
//       </footer>
//     </main>
//   );
// }

import Image from "next/image";

import CommunityFavFeature from "@/components/global/community-fav-feature";
import Icon from "@/components/global/icon";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { geistMono, geistSans } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoLogoApple } from "react-icons/io";

export default function Home() {
  return (
    <main
      className={cn("relative min-h-screen bg-background", geistSans.className)}
    >
      <Navbar />
      <div className="absolute inset-0 h-screen [background:radial-gradient(125%_125%_at_50%_10%,transparent_35%,#ff8000_500%)]"></div>

      <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-body px-4 pt-24">
        <div className="z-10 w-full max-w-6xl">
          <div
            className={cn(
              "grid grid-cols-1 place-items-center items-center justify-center lg:grid-cols-2",
              geistMono.className,
            )}
          >
            <div className="w-full md:mb-0">
              <Image
                src="/mobile.avif"
                alt="Illustration of a mobile podcast app"
                className="mx-auto h-[40rem] w-auto max-w-md object-contain"
                width={200}
                height={200}
                draggable={false}
                loading="lazy"
                quality={100}
              />
            </div>

            <div className="relative flex w-full flex-col space-y-8 pb-16 lg:pb-0">
              <Icon />

              <Image
                src="/text.svg"
                alt="Text overlay reading 'Overlap'"
                className="h-auto w-full object-contain"
                width={890}
                height={559}
                draggable={false}
                loading="lazy"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#fff8f4] px-4 py-16 sm:px-6 lg:px-8">
        <svg
          viewBox="0 0 1440 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 w-full bg-[#fff8f4]"
        >
          <path
            d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
            fill="#140300"
          ></path>
        </svg>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl md:pt-16">
            <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Your AI-powered podcast assistant
            </h1>
            <p className="mb-8 text-center text-xl text-gray-700">
              Overlap is an AI-powered podcast assistant. Ask it about any topic
              or person, and it&#39;ll give you a custom podcast playlist of
              clips relevant to what you asked for. It&#39;s a breakthrough way
              to listen to podcasts.
            </p>
            <div className="z-50 flex justify-center">
              <Button
                variant="default"
                className="mx-auto w-fit cursor-pointer rounded-xl px-6 py-6 font-semibold text-white transition-colors"
                asChild
              >
                <Link
                  href="https://apps.apple.com/us/app/overlap-explore-conversations/id6449747632"
                  target="_blank"
                >
                  <div className="flex items-center gap-2">
                    <IoLogoApple size={28} />
                    Download on the App Store
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative grid grid-cols-1 place-items-start gap-0 md:grid-cols-2 md:gap-12">
              <div className="group relative overflow-hidden rounded-2xl bg-background p-5 md:p-6">
                <div className="relative w-full">
                  <div className="flex w-full items-center gap-4">
                    <h2 className="mb-4 text-balance text-3xl font-bold text-red-600">
                      ❌ The Problem
                    </h2>
                  </div>
                  <p className="mt-6 pb-6 font-medium text-muted-foreground">
                    There are 5 million hours of new podcast content each week,
                    distributed via archaic RSS feeds. The moments that make
                    people love podcasts are often lost in the deluge. Sifting
                    through hours of content to find the best clips is
                    time-consuming and overwhelming.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-background p-5 md:p-6">
                <div className="relative w-full">
                  <div className="flex w-full items-center gap-4">
                    <h2 className="mb-4 text-balance text-3xl font-bold text-green-600">
                      ✨ Our Solution
                    </h2>
                  </div>
                  <p className="mt-6 pb-6 font-medium text-muted-foreground">
                    Overlap is the first podcast experience that uses LLMs to
                    curate the best moments in any episode. It creates
                    personalized playlists of clips based on your interests. Ask
                    about any topic, and it can retrieve the most relevant,
                    high-value clips from a wide range of shows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CommunityFavFeature />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">
              🙏 How You Can Help
            </h2>
            <ul className="mb-8 space-y-4 text-lg text-gray-700">
              <li>Try Overlap: It&#39;s available on the App Store.</li>
              <li>Feedback: Book a time to share your thoughts with us.</li>
              <li>Share it: If you like it, make it your go-to podcast app.</li>
              <li>Follow: Join us on Twitter.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-800">
              - Jonathan, Buzz, Casey
            </p>
          </div>
        </section>

        <svg
          viewBox="0 0 1440 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0"
        >
          <path
            transform="rotate(180) translate(-1440, -60)"
            d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
            fill="#140300"
          ></path>
        </svg>
      </section>

      <footer className="relative overflow-hidden bg-[#140300] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="relative z-40 h-60 w-full" aria-hidden="true">
          <div className="absolute left-1/2 -z-10 -translate-x-1/2 translate-y-[16%] text-center text-[348px] font-bold leading-none">
            <span className="shadow-text select-none bg-gradient-to-b from-transparent to-neutral-700/50 bg-clip-text text-transparent">
              overlap
            </span>
          </div>
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
            aria-hidden="true"
          >
            <div className="h-56 w-56 rounded-full border-[20px] border-[#ff8000]/60 blur-[80px]"></div>
          </div>
        </div>

        <div className="absolute left-0 right-0 top-5 z-50 mx-auto w-full max-w-5xl text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Overlap. All rights reserved.
          </p>
          <Link
            href="/privacypolicy"
            className="text-primary transition-all ease-in-out hover:underline hover:underline-offset-4"
          >
            View our Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
