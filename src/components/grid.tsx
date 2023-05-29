import Image from 'next/image';
import skills from '../utils/data/skills.json'

export default function Grid() {
    return (
        <section id="skills">
            <div className='w-auto px-6 md:px-40'>
                <div className="col-span-full mb-4 text-4xl font-bold text-center md:text-start">Skills</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((item) => (
                        <div key={item.name} className="bg-gray-200 p-4 rounded-lg">
                        <Image src={item.image} alt={item.name} width={300} height={200} />
                        <div className="mt-2">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      );    
}