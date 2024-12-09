import React from 'react';

const projects = [
  {
    title: 'Alunrana',
    description: 'This sophisticated showcase site homepage of the website, featuring sections designed to provide users with a clear and engaging experience.',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3'
  },
  {
    title: 'Flexatory',
    description: 'Your sophisticated showcase site homepage of the website, featuring sections designed to provide users with a clear and engaging experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3'
  },
  {
    title: 'Wancana',
    description: 'This sophisticated showcase site homepage of the website, featuring sections designed to provide users with a clear and engaging experience.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3'
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Selected works</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;