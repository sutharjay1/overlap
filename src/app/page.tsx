'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Navbar from '@/components/global/navbar';
import { geistMono } from '@/lib/font';
import { cn } from '@/lib/utils';

export default function Home() {
	return (
		<main className="relative min-h-screen bg-background">
			<Navbar />
			<div className="absolute inset-0 h-screen [background:radial-gradient(125%_125%_at_50%_10%,transparent_35%,#ff8000_500%)]"></div>

			{/* Hero Section */}
			<section className="relative bg-[#140300] flex h-full pt-24 w-full flex-col items-center justify-center overflow-hidden px-4 ">
				<div className="z-10 w-full max-w-6xl">
					<div
						className={cn(
							'grid grid-cols-1 lg:grid-cols-2 items-center justify-center place-items-center',
							geistMono.className
						)}
					>
						<div className="w-full md:mb-0">
							<Image
								src="/mobile.avif"
								alt="Mobile device"
								className="w-auto h-[40rem] max-w-md mx-auto object-contain"
								width={200}
								height={200}
								draggable={false}
							/>
						</div>

						<div className="relative w-full pb-16 lg:pb-0 ">
							<motion.div
								initial={{
									rotate: -12,
									x: '-4rem',
									scale: 1.0,
								}}
								whileHover={{
									rotate: 12,
									x: '-70px',
									scale: 1.1,
								}}
								transition={{
									type: 'spring',
									stiffness: 300,
									damping: 20,
								}}
								className="absolute top-11 lg:top-[4.5rem] left-8 lg:left-0 w-fit h-fit max-w-md mx-auto"
							>
								<Image
									src="/logo.avif"
									alt="logo"
									className="w-[10rem] h-[10rem] lg:w-[16rem] lg:h-[16rem] object-contain"
									width={200}
									height={200}
									draggable={false}
								/>
							</motion.div>

							<Image
								src="/text.svg"
								alt="Text overlay"
								className="w-full h-auto object-contain"
								width={890}
								height={559}
								draggable={false}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="relative bg-primary/40 px-4 py-16 sm:px-6 lg:px-8  w-full bg-[#ffbb99]">
				<svg
					viewBox="0 0 1440 58"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-0 left-0 w-full bg-[#ffbb99] "
				>
					<path
						d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
						fill="#140300"
					></path>
				</svg>

				<section className=" py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-5xl mx-auto pt-16">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-8">
							Your AI-powered podcast assistant
						</h1>
						<p className="text-xl text-center text-gray-700 mb-8">
							Overlap is an AI-powered podcast assistant. Ask it
							about any topic or person, and it&#39;ll give you a
							custom podcast playlist of clips relevant to what
							you asked for. It&#39;s a breakthrough way to listen
							to podcasts.
						</p>
						<div className="flex justify-center">
							<a
								href="#"
								className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
							>
								Download on the App Store
							</a>
						</div>
					</div>
				</section>

				<section className=" py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-5xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							<div>
								<h2 className="text-3xl font-bold mb-4 text-red-600">
									❌ The Problem
								</h2>
								<p className="text-lg text-gray-700">
									There are 5 million hours of new podcast
									content each week, distributed via archaic
									RSS feeds. The moments that make people love
									podcasts are often lost in the deluge.
									Sifting through hours of content to find the
									best clips is time-consuming and
									overwhelming.
								</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold mb-4 text-green-600">
									✨ Our Solution
								</h2>
								<p className="text-lg text-gray-700">
									Overlap is the first podcast experience that
									uses LLMs to curate the best moments in any
									given episode. It creates personalized
									playlists of clips based on your interests.
									Ask about any topic, and it can retrieve the
									most relevant, high-value clips from a wide
									range of shows. It makes the podcast
									universe a joy to explore.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className=" py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center">
							🔥 Community Favorite Features
						</h2>
						<ul className="space-y-4">
							<li className="flex items-start">
								<span className="text-2xl mr-4">👉</span>
								<p className="text-lg">
									Every day, Overlap curates the best clips
									from your favorite shows into custom
									playlists.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-2xl mr-4">👉</span>
								<p className="text-lg">
									Ask about any topic, and Overlap will take
									you down a rabbit hole.
								</p>
							</li>
							<li className="flex items-start">
								<span className="text-2xl mr-4">👉</span>
								<p className="text-lg">
									Share your favorite clips with your friends.
								</p>
							</li>
						</ul>
					</div>
				</section>

				<section className=" py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-8">
							🙏 How You Can Help
						</h2>
						<ul className="space-y-4 text-lg mb-8">
							<li>
								Try Overlap: It&#39;s available on the App
								Store.
							</li>
							<li>
								Feedback: Book a time to share your thoughts
								with us.
							</li>
							<li>
								Share it: If you like it, make it your go-to
								podcast app.
							</li>
							<li>Follow: Join us on Twitter.</li>
						</ul>
						<p className="text-xl font-semibold">
							- Jonathan, Buzz, Casey
						</p>
					</div>
				</section>

				<svg
					viewBox="0 0 1440 58"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-0 left-0 "
				>
					<path
						transform="rotate(180) translate(-1440, -60)"
						d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
						fill="#140300"
					></path>
				</svg>
			</section>

			<footer className="bg-[#140300] text-white py-8 px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto text-center">
					<p className="mb-4">© 2023 Overlap. All rights reserved.</p>
					<a
						href="#"
						className="text-primary hover:underline"
					>
						View our Privacy Policy
					</a>
				</div>
			</footer>
		</main>
	);
}
