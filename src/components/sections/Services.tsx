import React from 'react';
import { Layout, Layers, Monitor, Frame } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';

const services = [
  {
    title: 'Automated Lead Contacting',
    description:
      'Our AI seamlessly integrates with platforms like Clickfunnels, Systeme.io, and Facebook to automatically reach out to all your leads in under five minutes. This ensures that you never miss an opportunity to connect with potential customers.',
    icon: Layout,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Continuous Improvement',
    description:
      'With the ability to manage tens of thousands of conversations daily, our AI is designed to continuously learn and improve. It adapts its responses based on real-time interactions, allowing it to effectively handle objections and enhance customer satisfaction.',
    icon: Monitor,
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Comprehensive Reporting',
    description:
      'Gain insights into your business performance with our real-time dashboard. You can track all AI conversations and access detailed statistics, enabling you to make informed decisions based on data-driven insights.',
    icon: Layers,
    gradient: 'from-orange-500 to-red-500',
  },
];

const Services = () => {
  return (
    <section className="py-16 relative" id="services">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8 text-white"
      >
        What I Can Offer You with Orsay AI
      </motion.h2>
      <div className="space-y-6">
        {services.map((service, index) => (
          <Card key={index} className="group overflow-hidden">
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4"
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-medium mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
