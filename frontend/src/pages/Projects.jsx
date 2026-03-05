import { motion } from "framer-motion";

const projects = [
  {
    title: "Cybersecurity Projects",
    description:
      "A collection of hands-on cybersecurity projects focused on network defense, vulnerability assessment, privacy research, and malware analysis. These projects demonstrate practical experience in identifying security risks, building defensive tools, and understanding real-world attack simulations.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
    tech: ["ROS2", "Python", "OpenCV", "TensorFlow", "SLAM"],
    demo: "/projects/cybersecurity-project",
    code: "#",
  },
  {
    title: "IOT and Robotics Projects",
    description:
      "Passionate about building intelligent real-world solutions, these IoT & Robotics projects focus on automation, smart sensing, and connected systems. From wildlife intrusion detection and assistive smart devices to internet-enabled home security solutions, each project combines hardware integration with software intelligence to solve practical problems efficiently and innovatively.",
    image:
      "https://i.ytimg.com/vi/OL7TNx9RquE/maxresdefault.jpg",
    tech: ["IoT", "Raspberry Pi", "MQTT", "Cloud", "ML"],
    demo: "/projects/iot-robotics-project",
    code: "#",
  },
  {
    title: "AI-Powered Image Intelligence",
    description:
      "Deep learning-based image classification and object detection system using CNNs and transfer learning for real-world computer vision applications.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    tech: ["PyTorch", "TensorFlow", "CNN", "OpenCV"],
    demo: "#",
    code: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="bg-[#0b0b0f] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-violet-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            A selection of real-world systems I’ve designed and built
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[#15151c] rounded-xl overflow-hidden shadow-lg hover:shadow-violet-500/20 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-justify text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.code}
                    className="flex-1 text-center text-sm px-4 py-2 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition"
          >
            View More Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
