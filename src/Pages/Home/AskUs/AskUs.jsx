import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqItems = [
  {
    question: "Can I afford an interior designer?",
    answer: "Our services are flexible and can be tailored to your budget. We offer different packages based on your needs."
  },
  {
    question: "Can you work within my budget?",
    answer: "Absolutely! We customize our solutions to match your budget while ensuring great design quality."
  },
  {
    question: "What is your project process?",
    answer: "We start with a consultation, followed by design planning, execution, and final walkthroughs to ensure satisfaction."
  },
  {
    question: "What if I am unhappy with the final design?",
    answer: "We offer revisions based on your feedback, ensuring that the final design meets your expectations at all costs."
  },
  {
    question: "Can you work with my existing contractor?",
    answer: "Yes, we collaborate with your contractors to bring your vision to life smoothly and efficiently. Your satisfaction is our priority"
  }
];

const AskUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-10 md:flex items-center gap-16 lg:px-60 pb-32">
      {/* Left Section */}
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <p className="uppercase tracking-widest text-gray-400 mb-2 font-ysab font-bold text-sm">Questions & Answers</p>
        <h2 className="text-5xl font-bold mt-2 font-syne">Have any questions?</h2>
        <p className="text-gray-400 mt-4 font-quicksand">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <motion.button 
          className="mt-6 bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold font-ysab"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Right Section - FAQ List */}
      <motion.div 
        className="md:w-1/2 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            {/* Question Row */}
            <motion.div 
              className="flex justify-between items-center py-4 cursor-pointer hover:text-orange-500 transition"
              whileHover={{ x: 15,
                transition: { 
                    duration: 0.1, 
                    ease: "linear"  // Uniform speed
                  }
               }}
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-quicksand">{item.question}</span>
              <motion.div 
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-gray-400" />
              </motion.div>
            </motion.div>

            {/* Answer Dropdown */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-gray-400 text-sm font-quicksand overflow-hidden"
                >
                  <p className="py-2">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AskUs;
