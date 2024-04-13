"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../components/ui/dialog";
import { WarningIcon } from "../components/ui/icons";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
	return (
    <body>
		<main className="flex-1 w-full md:w-4/5 lg:w-3/5 mx-auto overflow-hidden md:overflow-visible">
			<div className="flex h-screen">
      <section className="relative h-full w-full flex flex-col justify-center items-center gap-12 text-center">
				<motion.div
					animate={{
						scale: [1, 1.1, 1.1, 1, 1],
						// rotate: [0, 0, 180, 180, 0],
						backgroundColor: [
							"#f4f4f430",
							"#ffc905",
							"#fff505",
							"#f4f4f460",
						],
						borderRadius: ["20%", "20%", "30%", "30%", "40%"],
					}}
					transition={{
						duration: 12,
						ease: "easeInOut",
						times: [0, 0.2, 0.5, 0.8, 1],
						repeat: Infinity,
						repeatDelay: 1,
					}}
					className="w-full 2xl:w-2/3 h-[260px] absolute z-10 blur-[80px]"
				/>
				<h1 className="max-w-5xl text-primary font-bold text-[62px] mx-2 leading-none md:text-8xl z-20">
					Suwatta - SAT Prep {""}
					<motion.mark
						animate={{
							color: ["#111F36", "#57495C", "#7A0C38"],
						}}
						style={{
							background:
								"url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-7&color=D0E8E0')",
						}}
						className="px-4 py-1"
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					>
						Gamified
					</motion.mark>
				</h1>
        <div className="flex gap-3 justify-start z-20">
        <div className="group relative">
						<button
							className="group relative inline-block h-[45px] w-[140px] md:h-[60px] md:w-[250px] overflow-hidden rounded-full text-lg text-white"
							disabled
						>
							<div className="h-[inherit] w-[inherit] overflow-hidden rounded-full bg-black [transition:_transform_1.5s_cubic-bezier(.19,1,.22,1)] group-hover:scale-[.94]">
								<span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#cbf55d] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_200ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_270ms]" />
								<span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#7db486] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_300ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_470ms]" />
								<span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#1DB954] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_380ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_670ms]" />
							</div>

							<span className="absolute inset-0 z-10 m-auto flex w-4/5 items-center justify-center font-semibold group-hover:-translate-y-1/3 group-hover:opacity-0 group-hover:[transition:_transform_1s_cubic-bezier(.32,.99,.49,.99),_opacity_.4s]">
								Sign up!
							</span>
							<span className="absolute inset-0 z-10 m-auto flex w-4/5 translate-y-1/3 items-center justify-center font-semibold opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:[transition:_1s_all_cubic-bezier(.32,.99,.49,.99)]">
								Continue
							</span>
						</button>
					</div>
          <div className="group relative">
						<button
							className="group relative inline-block h-[45px] w-[140px] md:h-[60px] md:w-[250px] overflow-hidden rounded-full text-lg text-white"
							disabled
						>
							<div className="h-[inherit] w-[inherit] overflow-hidden rounded-full bg-black [transition:_transform_1.5s_cubic-bezier(.19,1,.22,1)] group-hover:scale-[.94]">
								<span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#cbf55d] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_200ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_270ms]" />
								<span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#7db486] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_300ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_470ms]" />
								<span className="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-[#1DB954] [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_380ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_670ms]" />
							</div>

							<span className="absolute inset-0 z-10 m-auto flex w-4/5 items-center justify-center font-semibold group-hover:-translate-y-1/3 group-hover:opacity-0 group-hover:[transition:_transform_1s_cubic-bezier(.32,.99,.49,.99),_opacity_.4s]">
								Login
							</span>
							<span className="absolute inset-0 z-10 m-auto flex w-4/5 translate-y-1/3 items-center justify-center font-semibold opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:[transition:_1s_all_cubic-bezier(.32,.99,.49,.99)]">
								Continue
							</span>
						</button>
					</div>
          </div>
			</section>
      </div>
		</main>
    </body>
	);
}