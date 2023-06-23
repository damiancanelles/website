"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <section id="header">
            <header className="flex flex-col-reverse md:flex-row items-center justify-around w-auto px-6 md:px-40 py-10 md:py-20">
                <motion.div animate={{ x: [-200,0], opacity: [0,1] }} transition={{ duration: 3 }} className="w-4/5 md:w-3/5 md:mr-10 opacity-0">
                <h1 className="text-center md:text-start text-4xl md:text-6xl font-bold">Damian Canelles Gomez</h1>
                <h3 className="text-lg md:text-xl text-gray-500 mt-4 md:mt-6">Software and Application Developer passionate about creating cutting-edge products for the clients. Strong work ethic and dedicated to quality assurance. Adept at working with teams or independently in fast-paced settings.</h3>
                </motion.div>
                <motion.div animate={{ x: [-200,0], opacity: [0,1] }} transition={{ duration: 3 }} className="w-48 md:w-72 h-48 md:h-72 opacity-0 border border-gray-500 clip-hexagon relative mt-6 md:mt-0">
                <Image
                    src="/assets/profile_image.jpg"
                    alt="Hexagonal Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
                </motion.div>
            </header>
        </section>
      );    
}