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
      link: "https://capstone-theta-tan.vercel.app/",
    },
    {
      title: "ReadRealm. - Book Collection App",
      description:
        "A web-based application that leverages the Google Books API to present an extensive collection of books. Users can save their favorite titles, leave comments, and interact with an integrated chatbot to quickly find book-related information. Access to in-depth book details is secured through a login system, ensuring a personalized and interactive user experience.",
      image: imgProject2,
      link: "https://readrealm.vercel.app/",
    },
    {
      title: "Dian Nuswantoro University Collaboration (Admin)",
      description:
        "A web-based internal system built for universities to manage institutional partnerships through structured handling of MoU, MoA, and IA agreements. The platform offers features for administrators to monitor collaboration statuses, upload and update agreement documents, and organize activities under each agreement in a centralized dashboard.",
      image: imgProject3,
      link: "https://lkui.dinus.id/",
    },
    {
      title: "Dian Nuswantoro University Collaboration (Landing Page)",
      description:
        "A clean and responsive landing page designed to introduce the university's collaboration platform to the public. It highlights key features, outlines types of partnerships (MoU, MoA, IA), and guides potential partners through the process of initiating collaborations. Built with accessibility and informative structure in mind.",
      image: imgProject4,
      link: "https://kui-landing-cooperation.vercel.app/",
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
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                viewport={{ amount: 0.5 }}
              >
                <img src={project.image} alt={project.title} />
              </motion.div>
              <motion.div
                key={index}
                className="space-y-4 text-center lg:text-left"
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                viewport={{ amount: 0.5 }}
              >
                <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="font-jakarta-sans dark-button rounded-xl px-6 py-2 text-xs font-semibold md:text-base lg:px-8 lg:py-2 lg:text-lg">
                      View Live
                    </button>
                  </a>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
