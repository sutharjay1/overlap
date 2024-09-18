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

      {/* Hero Section */}
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
                alt="Mobile device"
                className="mx-auto h-[40rem] w-auto max-w-md object-contain"
                width={200}
                height={200}
                draggable={false}
              />
            </div>

            <div className="relative flex w-full flex-col space-y-8 pb-16 lg:pb-0">
              <Icon />

              <Image
                src="/text.svg"
                alt="Text overlay"
                className="h-auto w-full object-contain"
                width={890}
                height={559}
                draggable={false}
              />

              <Button variant="secondary" className="mx-auto w-fit" asChild>
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
          <div className="mx-auto max-w-5xl pt-16">
            <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Your AI-powered podcast assistant
            </h1>
            <p className="mb-8 text-center text-xl text-gray-700">
              Overlap is an AI-powered podcast assistant. Ask it about any topic
              or person, and it&#39;ll give you a custom podcast playlist of
              clips relevant to what you asked for. It&#39;s a breakthrough way
              to listen to podcasts.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Download on the App Store
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="group relative mt-12 overflow-hidden rounded-2xl border bg-background p-5 md:p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-tr from-teal-700/80 via-rose-300/50 to-rose-400/40 opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                />
                <div className="relative w-full">
                  <div className="flex w-full items-center gap-4">
                    {/* <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-border shadow-sm">
											<Icon
											className="w-6 h-6"
											aria-hidden="true"
										/>
										</div> */}
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

              <div className="group relative mt-12 overflow-hidden rounded-2xl border bg-background p-5 md:p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-tr from-teal-700/80 via-rose-300/50 to-rose-400/40 opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                />
                <div className="relative w-full">
                  <div className="flex w-full items-center gap-4">
                    {/* <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-border shadow-sm">
											<Icon
											className="w-6 h-6"
											aria-hidden="true"
										/>
										</div> */}
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
        {/*  <section className="py-16 px-4 sm:px-6 lg:px-8 ">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
							🔥 Community Favorite Features
						</h2>
						<ul className="space-y-4 mx-auto w-full">
							<li className="flex items-center justify-center">
								<p className="text-lg text-gray-800">
									Every day, Overlap curates the best clips
									from your favorite shows into custom
									playlists.
								</p>
							</li>
							<li className="flex items-center justify-center">
								<p className="text-lg text-gray-800">
									Ask about any topic, and Overlap will take
									you down a rabbit hole.
								</p>
							</li>
							<li className="flex items-center justify-center">
								<p className="text-lg text-gray-800">
									Share your favorite clips with your friends.
								</p>
							</li>
						</ul>
					</div>
				</section> */}

        <CommunityFavFeature />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-800">
              🙏 How You Can Help
            </h2>
            <ul className="mb-8 space-y-4 text-lg text-gray-700">
              <li>Try Overlap: It&pros;s available on the App Store.</li>
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

      <footer className="bg-[#140300] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4">© 2023 Overlap. All rights reserved.</p>
          <a href="#" className="text-primary hover:underline">
            View our Privacy Policy
          </a>
        </div>
      </footer>
    </main>
  );
}
