const projects = [
  {
    id: 1,
    title: "Modern Luxury Living Room",
    category: "Living Room",
    image: "/project-living-room.jpg",
  },
  {
    id: 2,
    title: "Minimal Bedroom",
    category: "Bedroom",
    image: "/project-bedroom.jpg",
  },
  {
    id: 3,
    title: "Modern Modular Kitchen",
    category: "Kitchen",
    image: "/project-kitchen.jpg",
  },
  {
    id: 4,
    title: "Complete 3BHK Interior",
    category: "Full Home",
    image: "/project-full-home.jpg",
  },
  {
    id: 5,
    title: "Premium Apartment Interior",
    category: "Apartment",
    image: "/project-apartment.jpg",
  },
  {
    id: 6,
    title: "Contemporary Home",
    category: "Full Home",
    image: "/project-home.jpg",
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section">

      <div className="projects-heading">

        <div>

          <p className="section-label">
            OUR PORTFOLIO
          </p>

          <h2>
            Spaces We've
            <br />
            Transformed.
          </h2>

        </div>

        <p>
          Explore some of our completed interior projects
          for homes and apartments.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-info">

              <p>
                {project.category}
              </p>

              <h3>
                {project.title}
              </h3>

              <a
                href={`/portfolio/${project.id}`}
              >
                View Project →
              </a>

            </div>

          </div>

        ))}

      </div>

      <div className="projects-button">

        <a href="/portfolio">
          View All Projects →
        </a>

      </div>

    </section>
  );
}

export default ProjectsSection;