import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aarogya Website",
    description: "Developed a responsive website for a campus health club promoting healthier lifestyles among students.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "https://www.aarogyanitj.in/",
    githubUrl: "https://github.com/architaagg/aarogya-club",
  },
  {
    id: 2,
    title: "Cipher2026",
    description:
      "A responsive conference website built to manage event details, schedules, and participant engagement.",
    image: "/projects/project2.png",
    tags: ["TailwindCSS", "React"],
    demoUrl: "https://cipher2026.com/",
    githubUrl: "https://github.com/xceed-nitj/Proj5-ece-cipher",
  },
  {
    id: 3,
    title: "T1Dxpert",
    description:
      "An interactive dashboard enabling doctors to monitor and analyze diabetic patients’ health data for better decision-making.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/xceed-nitj/proj4_T1Dixpert",
    status:"Ongoing",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="bg-card rounded-lg shadow h-[250px] flex flex-col justify-between p-6">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="p-1.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1 text-left">{project.title}</h3>
                    <p className="text-muted-foreground text-sm text-left">{project.description}</p>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex space-x-3">
                      {project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>

                    {project.status === "Ongoing" && (
                      <span className="px-3 py-1 rounded-2xl font-semibold text-sm bg-green-500 text-green-900">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
