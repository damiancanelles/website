"use client"

import Image from 'next/image';
import skills from '../utils/data/skills.json'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Grid() {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = document.getElementById('skills');
            
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
        <section id="skills">
            <motion.div animate={ display ? { x: [-200,0], opacity: [0,1] } : {} } transition={{ duration: 3 }} className='w-auto px-6 md:px-40 opacity-0'>
                <div className="col-span-full mb-4 text-4xl font-bold text-center md:text-start">Skills</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((item) => (
                        <motion.div whileHover={{ y: -10 }} key={item.name} className="bg-gray-200 p-4 rounded-lg">
                        <Image src={item.image} alt={item.name} width={300} height={200} />
                        <div className="mt-2">{item.name}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
      );    
}