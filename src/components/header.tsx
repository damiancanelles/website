import Image from 'next/image';

export default function Header() {
    return (
        <section id="header">
            <header className="flex items-center justify-between px-40 py-20">
                <div className="w-3/5">
                    <h1 className="text-4xl font-bold">Damian Canelles Gomez</h1>
                    <h3 className="text-xl text-gray-500">Software and Application Developer passionate about creating cutting-edge products for the clients. Strong
                        work ethic and dedicated to quality assurance. Adept at working with teams or independently in fast-paced
                        settings.
                    </h3>
                </div>
                <div className="w-96 h-96 border border-gray-500 clip-hexagon relative">
                    <Image
                    src="/assets/profile_image.jpg"
                    alt="Hexagonal Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    />
                </div>
            </header>
        </section>
      );    
}