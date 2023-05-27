import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Resume() {

    return (
        <section id="resume">
            <div className='flex gap-4 px-40 pt-10 pb-20'>
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