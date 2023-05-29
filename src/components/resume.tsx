import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Resume() {

    return (
        <section id="resume">
            <div className='flex items-center gap-4 w-auto px-6 md:px-40 pb-10 md:pb-20 pt-15 md:pt-10' >
                <div className="col-span-full mb-4 text-4xl font-bold">Download my resume here:</div>
                <Link legacyBehavior href="/resume.pdf" passHref>
                    <a download>
                        <Image src="/arrow-down.svg" alt="download" width={40} height={40} />
                    </a>
                </Link>
            </div>
        </section>
      );    
}