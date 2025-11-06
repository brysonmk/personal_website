type ProjectCardProps = {
    name: string
}

export default function ProjectCard({ name }: ProjectCardProps) {


  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
      Project: {name}
    </div>
  );
}