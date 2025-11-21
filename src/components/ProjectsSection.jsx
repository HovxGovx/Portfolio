import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        Description: "A personal portfolio website to showcase my projects and skills.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "E-commerce Platform",
        Description: "An online store with a user-friendly interface and secure payment gateway.",
        image: "/projects/project2.png",
        tags: ["Next.js", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Blog Application",
        Description: "A full-featured blog application with user authentication and content management.",
        image: "/projects/project3.png",
        tags: ["Vue.js", "Firebase", "CSS"],
        demoUrl: "#",
        githubUrl: "#"
    },
]

export const ProjectsSection = () => {
    return <>
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured
                    <span className="text-primary"> Projects
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci cumque exercitationem aliquid.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-center gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.Description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tetx-center mt-12">
                    <a href="#" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    </>
};
export default ProjectsSection; 