import { motion } from "framer-motion";

const projects = [
  {
    title: "Network Stress Testing Simulation (DDoS Research Project)",
    desc: "Simulated distributed traffic flooding techniques in a virtual lab environment. Studied server resilience, traffic filtering, and mitigation techniques.",
  },
  {
    title: "MAC & IP Rotation Script",
    desc: "Built an automation script to change MAC and IP addresses periodically for privacy research and network testing.",
  },
  {
    title: "Network Scanner",
    desc: "Developed a custom tool to discover live hosts, open ports, and running services within a network.",
  },
  {
    title: "Keylogger (Security Awareness Project)",
    desc: "Developed a keylogging tool to understand input monitoring risks and defensive countermeasures.",
  },
  {
    title: "Vulnerability Scanner",
    desc: "Created a basic vulnerability scanning tool to detect misconfigurations and weak services.",
  },
  {
    title: "Malware Classification System",
    desc: "Built a machine learning-based model to classify malware samples based on extracted features.",
  },
];

export default function CybersecurityProjects() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-green-500"
        >
          Cybersecurity Projects
        </motion.h2>

        {/* Images Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <img
            src="/images/cyber1.jfif"
            className="rounded-2xl h-62 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="Cyber Image 1"
          />
          <img
            src="/images/ip.png"
            className="rounded-2xl h-62 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="Cyber Image 2"
          />

          <img
            src="/images/networkscan.jpg"
            className="rounded-2xl h-62 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="Cyber Image 3"
          />

          <img
            src="/images/keylog.jfif"
            className="rounded-2xl h-62 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="Cyber Image 4"
          />

          <img
            src="/images/vulscan.jfif"
            className="rounded-2xl h-62 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="Cyber Image 5"
          />

          <img
            src="/images/malclass.jpg"
            className="rounded-2xl h-62 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="Cyber Image 6"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/20 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}