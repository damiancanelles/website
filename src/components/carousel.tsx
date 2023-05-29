import projects from '../utils/data/projects.json'
import Image from 'next/image';

export default function Carousel() {

    return (
        <section id="projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-auto px-6 md:px-40 py-10 md:py-20">
                <div className="col-span-full mb-4 text-4xl font-bold">Projects</div>
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-md">
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
                    </div>
                ))}
            </div>
        </section>
      );    
}