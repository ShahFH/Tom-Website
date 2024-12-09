import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Orsay',
    role: 'CEO & Product',
    period: 'Apr 2024 - Present',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQE6CdFhj2VYwg/company-logo_200_200/company-logo_200_200/0/1715278614203/doorstepsio_logo?e=1741824000&v=beta&t=hhps8_-_gKaaGBPzxLczl55veiXsQKK2Plgqgftex7g',
    description:
      'Driving innovation as the CEO, I lead strategic product design initiatives and cultivate a high-performing design team to deliver cutting-edge solutions that enhance user experience and market competitiveness.',
  },
  {
    company: 'Antler ',
    role: 'Founder in Residence',
    period: 'Apr 2024 - Nov 2024',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGcO8WhScYJvg/company-logo_200_200/company-logo_200_200/0/1630652634929/antlerglobal_logo?e=1741824000&v=beta&t=ogZsR33HX2EHaI04C5tmwo6Ip2hASa9bm4Oh27JkIvo',
    description:
      'As a Founder in Residence, I spearheaded the development of robust design systems that streamlined workflows and significantly boosted team efficiency, fostering a culture of creativity and collaboration.',
  },
  {
    company: 'Minea',
    role: 'Co-Founder',
    period: 'Feb 2020 - Aug 2022',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEWt28PffK6KQ/company-logo_200_200/company-logo_200_200/0/1696940754833/minea_app_logo?e=1741824000&v=beta&t=4J5yPZSoOjmNwefyJQoV-3kYpFCcicPYrdU8X8n5w7Q',
    description:
      'In my role as Co-Founder, I established and optimized comprehensive design systems that enhanced operational efficiency and empowered teams to achieve their creative potential.',
  },
];

const Experience = () => {
  return (
    <section className="py-16 relative" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, once: true }}
        className="text-2xl font-semibold mb-8 text-white"
      >
        Working experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.2, // Staggered animation
                once: true
              }
            }}
            viewport={{ once: true }}
          >
            <Card className="hover:bg-white/5">
              <div className="flex gap-6">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 rounded-full object-cover ring-1 ring-white/10"
                />
                <div className="space-y-2">
                  <div>
                    <h3 className="font-medium text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;