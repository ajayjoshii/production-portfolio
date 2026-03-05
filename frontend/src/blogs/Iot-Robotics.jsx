import { motion } from "framer-motion";

const projects = [
  {
    title: "IoT-Based Wildlife Intrusion Detection System",
    desc: "Designed a solar-powered IoT system using motion sensors, IR cameras, and ultrasonic emitters. Implemented mobile alerts and automated deterrent systems.",
  },
  {
    title: "Smart Blind Stick (Sensor Stick)",
    desc: "Designed a smart cane using ultrasonic sensors to detect obstacles. Provided vibration and buzzer alerts for visually impaired users. Included optional IoT-based location sharing.",
  },
  {
    title: "Smart Doorbell System",
    desc: "Developed an internet-connected doorbell with camera integration and real-time mobile notifications.",
  },
];

export default function IoTRoboticsProjects() {
  return (
    <section className="bg-gray-950 py-25 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-green-500 bg-clip-text "
        >
          IoT & Robotics Projects
        </motion.h2>

        {/* Images Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <img
            src="/images/farm.png"
            className="rounded-2xl h-60 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="IoT Image 1"
          />
          <img
            src="/images/blind.jfif"
            className="rounded-2xl h-60 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="IoT Image 2"
          />
          <img
            src="/images/doorbell.jpg"
            className="rounded-2xl h-60 w-100 shadow-lg hover:scale-105 transition duration-500"
            alt="IoT Image 3"
          />
        </div>

        {/* Projects Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/20 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {project.title}
              </h3>
              <p className="text-gray-300 text-justify">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}