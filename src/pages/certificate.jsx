// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import imgCertificate1 from "@/assets/img/certificate1.png";
import imgCertificate2 from "@/assets/img/certificate2.png";
import imgCertificate3 from "@/assets/img/certificate3.png";
import imgCertificate4 from "@/assets/img/certificate4.png";
import imgCertificate5 from "@/assets/img/certificate5.png";
import imgCertificate6 from "@/assets/img/certificate6.png";

export default function Certificate() {
  const certificates = [
    {
      title: "Cloud Practitioner Essentials",
      description: "Fundamental concepts of cloud computing and AWS services.",
      image: imgCertificate1,
    },
    {
      title: "Basic of JavaScript Programming",
      description:
        "Introduction to JavaScript programming and its core concepts.",
      image: imgCertificate2,
    },
    {
      title: "Basic of Web Programming",
      description:
        "Introduction to web development, covering HTML, CSS, and JavaScript.",
      image: imgCertificate3,
    },
    {
      title: "Front End for Beginners",
      description:
        "Foundational skills in front-end development using HTML, CSS, and JavaScript.",
      image: imgCertificate4,
    },
    {
      title: "Front End Engineers - React JS",
      description: "Advanced React.js concepts for front-end engineers.",
      image: imgCertificate5,
    },
    {
      title: "Information Technology - Internship",
      description:
        "Hands-on experience in IT, focusing on practical applications of technology.",
      image: imgCertificate6,
    },
  ];
  return (
    <div
      className="container flex min-h-screen w-full items-center justify-center py-16"
      id="certificates"
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
            <h1 className="">CERTIFICATES</h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg">
            Here you can find a collection of my certificates, showcasing my
            commitment to continuous learning and professional development in
            the field of technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="space-y-4 text-center"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ amount: 0.5 }}
            >
              <img src={certificate.image} alt={certificate.title} />
              <h2 className="text-base font-bold lg:text-lg">
                {certificate.title}
              </h2>
              <p className="text-sm lg:text-base">{certificate.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
