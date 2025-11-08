
export default function NavBar(){
    return (
        <div>
            <div className="text-4xl">Navbar Component</div>
            <div className="flex flex-col mt-4 space-y-4">
                <a href="#about" className="text-lg hover:text-blue-500">About</a>
                <a href="#education" className="text-lg hover:text-blue-500">Education</a>
                <a href="#experience" className="text-lg hover:text-blue-500">Experience</a>
                <a href="#projects" className="text-lg hover:text-blue-500">Projects</a>
            </div>
        </div>
    )
}