// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import imgProject1 from "@/assets/img/project1.png";
import imgProject2 from "@/assets/img/project2.png";
import imgProject3 from "@/assets/img/project3.png";
import imgProject4 from "@/assets/img/project4.png";

export default function Project() {
  const projects = [
    {
      title: "Tourease App - Travel Planner",
      description:
        "A web-based platform built to manage the Tourease App's data, providing an intuitive interface to organize tourist destinations, update information, and streamline content management. This ensures that the mobile app always delivers accurate and up-to-date travel recommendations for users.",
      image: imgProject1,
    },
    {
      title: "ReadRealm. - Book Collection App",
      description:
        "A web-based application that leverages the Google Books API to present an extensive collection of books. Users can save their favorite titles, leave comments, and interact with an integrated chatbot to quickly find book-related information. Access to in-depth book details is secured through a login system, ensuring a personalized and interactive user experience.",
      image: imgProject2,
    },
    {
      title: "Project Three",
      description:
        "A brief description of the project, highlighting its main features and technologies used.",
      image: imgProject3,
    },
    {
      title: "Project Four",
      description:
        "A brief description of the project, highlighting its main features and technologies used.",
      image: imgProject4,
    },
  ];
  return (
    <div
      className="container flex min-h-screen w-full items-center justify-center py-16"
      id="projects"
    >
      <div className="dark-text font-jakarta-sans space-y-16">
        <motion.div
          className="space-y-8 text-center"
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ amount: 0.5 }}
        >
          <div className="font-titan-one dark-title text-3xl underline underline-offset-8 md:text-4xl lg:text-5xl">
            <h1 className="">PROJECTS</h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg">
            You'll find a selection of personal and client projects I've built,
            each presented with its own detailed case study.
          </p>
        </motion.div>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ amount: 0.5 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg">
                  {project.description}
                </p>
                <button className="hover:transform-y font-jakarta-sans dark-button rounded-xl px-6 py-2 text-xs font-semibold md:text-base lg:px-8 lg:py-2 lg:text-lg">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
