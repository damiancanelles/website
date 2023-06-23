"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Resume() {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = document.getElementById('resume');
            
            if (sectionElement) {
                const sectionRect = sectionElement.getBoundingClientRect();
                const threshold = 100;
                if (sectionRect.top - threshold <= window.innerHeight) {
                  setDisplay(true)
                }
              }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    },[])

    return (
        <section id="resume">
            <motion.div animate={ display ? { x: [-200,0], opacity: [0,1] }: {} } transition={{ duration: 3 }} className='opacity-0 flex items-center gap-4 w-auto px-6 md:px-40 pb-10 md:pb-20 pt-15 md:pt-10' >
                <div className="col-span-full mb-4 text-4xl font-bold">Download my resume here:</div>
                <Link legacyBehavior href="/resume.pdf" passHref>
                    <a download>
                        <Image src="/arrow-down.svg" alt="download" width={40} height={40} />
                    </a>
                </Link>
            </motion.div>
        </section>
      );    
}