import React from 'react';
import Image from 'next/image';

export default function Footer() {
    const email = 'dcanellesgomez@gmail.com';
    const website = 'https://damiancanelles.tech';
    const linkedin = 'https://www.linkedin.com/in/damian-canelles-gomez-a5a710181/';
    const github = 'https://github.com/damiancanelles';

    return (
        <footer className="bg-gray-900 text-white p-4">
            <div className="flex items-center justify-between"> 
                <div className='text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium'>
                    <p>Damian Canelles Gomez Portafolio</p>
                </div>           
                <div className='flex'>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
                        <Image src="/linkedin.svg" alt="linkedin" width={30} height={30} />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
                        <Image src="/github.svg" alt="github" width={30} height={30} />
                    </a>
                    <a href={`mailto:${email}`} className="text-gray-300 hover:text-white mr-4">
                        <Image src="/email.svg" alt="email" width={30} height={30} />
                    </a>
                    <a href={website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <Image src="/internet.svg" alt="internet" width={30} height={30} />
                    </a>
                </div>
            </div>
        </footer>
      );    
}