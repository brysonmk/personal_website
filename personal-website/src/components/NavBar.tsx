
export default function NavBar(){
    return (
        <div className="m-8 bg-primary text-surface rounded-lg shadow-lg p-6">
            <div className="mt-8 mb-8">
                <div className="text-4xl font-bold">Bryson Kushner</div>
                <div className="text-2xl">Software Engineer</div>
            </div>
            <div className="flex flex-col mt-4 space-y-4">
                <a href="#about" className="text-lg hover:text-blue-500">About</a>
                <a href="#education" className="text-lg hover:text-blue-500">Education</a>
                <a href="#experience" className="text-lg hover:text-blue-500">Experience</a>
                <a href="#projects" className="text-lg hover:text-blue-500">Projects</a>
            </div>
        </div>
    )
}