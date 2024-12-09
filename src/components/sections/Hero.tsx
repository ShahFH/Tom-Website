import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[400px,1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="sticky top-32">
            <div className="space-y-4">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGkvaD9Fc0PQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726482047752?e=1739404800&v=beta&t=xyXmdnkI2NIzp8B65-wKulZc7WwxY2Be8Ti0RlQXxWE"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  I'm Tom Adrien
                </h2>
                <p className="text-white/60">
                  CEO @Orsay | We contact all your inbound leads with AI
                  (WhatsApp, Instagram)
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 font-medium group"
                >
                  <a href="mailto:hi@tomadrien.com">
                    Contact me
                  </a>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif"
          >
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent inline-block">
              Contacting all your leads
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                in less than 5 minutes
              </span>
              <br />
              is now possible
            </span>
          </motion.h1>
          <div className="rounded-2xl shadow-sm backdrop-blur-sm ">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-white dark:text-gray-300">
              I am an innovative entrepreneur with a strong background in growth
              hacking and AI technologies. Currently, I serve as the CEO of
              Orsay, where I focus on optimizing lead contact through advanced
              AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
