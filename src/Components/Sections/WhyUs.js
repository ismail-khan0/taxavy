import React from 'react';
import { FaUserTie, FaHandHoldingUsd, FaClock, FaBusinessTime } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const features = [
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Qualified Chartered Accountant",
      description: "Our team is led by a certified professional with extensive experience in taxation and corporate services."
    },
    {
      icon: <FaHandHoldingUsd className="text-3xl" />,
      title: "Affordable & Transparent Pricing",
      description: "No hidden costs. We provide clear pricing for all our services upfront."
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Timely Filing & Compliance",
      description: "We ensure all your filings are completed before deadlines to avoid penalties."
    },
    {
      icon: <FaBusinessTime className="text-3xl" />,
      title: "Customized Business Support",
      description: "Tailored solutions that fit your specific business needs and requirements."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="why-us" className="py-16 px-4 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Taxavy?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Professional services that make the difference for your business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-blue-700/50 hover:bg-blue-700/70 backdrop-blur-sm p-6 rounded-xl border border-blue-600/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600 p-3 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-3 bg-blue-600/30 rounded-full border border-blue-400/30">
            <p className="text-xl font-medium">
              Trusted by <span className="font-bold text-yellow-300">100+</span> Happy Clients Across Pakistan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;