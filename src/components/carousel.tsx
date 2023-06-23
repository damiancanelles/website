"use client"

import { motion } from 'framer-motion';
import projects from '../utils/data/projects.json'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Carousel() {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = document.getElementById('projects');
            
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
        <section id="projects">
            <motion.div animate={ display ? { x: [-200,0], opacity: [0,1] } : {} } transition={{ duration: 3 }} className="opacity-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-auto px-6 md:px-40 py-10 md:py-20">
                <div className="col-span-full mb-4 text-4xl font-bold">Projects</div>
                {projects.map((project, index) => (
                    <motion.div whileHover={{ y: -10 }} key={index} className="bg-white p-4 shadow-md rounded-md">
                    <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <ul className="mb-4">
                        {project.skills.map((skill, index) => (
                        <li key={index} className="inline-block bg-gray-200 text-gray-700 rounded-md py-1 px-2 mr-2">
                            {skill}
                        </li>
                        ))}
                    </ul>
                    <div className="flex justify-center">
                        {project.images.map((image, index) => (
                        <div key={index} className="w-1/3 mx-2 rounded-md">
                            <Image src={image} alt={`Project ${index + 1}`} width={400} height={300} />
                        </div>
                        ))}
                    </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
      );    
}