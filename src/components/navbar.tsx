import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-9">
                  <Link legacyBehavior href="#header">
                      <a className="nav-link text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium">DC</a>
                  </Link>
                  <Link legacyBehavior href="#skills">
                      <a className="nav-link text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium">Skills</a>
                  </Link>
                  <Link legacyBehavior href="#projects">
                      <a className="nav-link text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium">Projects</a>
                  </Link>
                  <Link legacyBehavior href="#resume">
                      <a className="nav-link text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium">Resume</a>
                  </Link>
                </div>
              </div>
              <div className="md:hidden">
                <div className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium">
                  DC Portafolio
                </div>
              </div>
            </div>
          </div>
        </nav>
      );    
}