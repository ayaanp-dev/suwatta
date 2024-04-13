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
import Navbar from '@/components/ui/navbar';

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
							"#2563eb",
							"#3b82f6",
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
					className="w-full 2xl:w-2/3 h-[260px] absolute z-10 blur-[80px] opacity-70"
				/>
				<h1 className="max-w-5xl text-primary font-bold text-[62px] mx-2 leading-none md:text-8xl z-20">
					Mastering the SAT, {""}
					<motion.mark
						animate={{
							color: ["#FFFFFF", "#808080", "#000000"],
						}}
						style={{
							background:
								"url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-7&color=2563EB')",
						}}
						className="px-4 py-1"
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					>
						the fun way
					</motion.mark>
				</h1>
        <div className="flex gap-3 justify-start z-20">
        <div className="group relative">
						<Button variant="outline"
							className="group relative inline-block h-[45px] w-[140px] md:h-[60px] md:w-[150px] overflow-hidden rounded-full text-lg text-white"
						>

							<span className="absolute inset-0 z-10 m-auto flex w-4/5 items-center justify-center font-semibold">
								Sign up!
							</span>
						</Button>
					</div>
          <div className="group relative">
						<Button variant="outline"
							className="group relative inline-block h-[45px] w-[140px] md:h-[60px] md:w-[150px] overflow-hidden rounded-full text-lg text-white"
						>

							<span className="absolute inset-0 z-10 m-auto flex w-4/5 items-center justify-center font-semibold">
								Login
							</span>
						</Button>
					</div>
          </div>
			</section>
      </div>
		</main>
    </body>
	);
}