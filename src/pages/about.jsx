// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  const aboutTexts = [
    "Welcome! I'm a dedicated Full Stack Engineer specializing in Front-End Development with React.js and Back-End Development with Laravel & CodeIgniter PHP. With a Bachelor's degree in Informatics Engineering, I'm always driven to explore new possibilities and push the boundaries of technology.",
    "I also have strong skills in UI/UX Design, allowing me to create solutions that are not only functional but also visually appealing and user-friendly. I'm currently open to job opportunities where I can contribute, learn, and grow.",
    "Feel free to connect with me on LinkedIn for content related to web development and programming.",
    "Let's collaborate and turn your ideas into reality!",
  ];
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Java",
    "CodeIgniter",
    "Laravel",
    "TailwindCSS",
    "Bootstrap",
    "React JS",
    "Next JS",
    "MySQL",
    "Firebase",
    "Git",
    "GitHub",
    "Figma",
  ];
  return (
    <div
      className="container flex min-h-screen w-full items-center justify-center py-8"
      id="about"
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
            <h1 className="">ABOUT ME</h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg">
            Here you'll find more insights about me, my professional journey,
            and my current expertise, which is primarily centered around
            programming and technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ amount: 0.5 }}
          >
            <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
              Who Am I?
            </h2>
            <div className="space-y-4">
              {aboutTexts.map((text, index) => {
                if (text.includes("LinkedIn")) {
                  const parts = text.split("LinkedIn");
                  return (
                    <p key={index} className="text-sm md:text-base">
                      {parts[0]}
                      <a
                        href="https://www.linkedin.com/in/ardi-saputra-b49785279/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        LinkedIn
                      </a>
                      {parts[1]}
                    </p>
                  );
                }
                return (
                  <p key={index} className="text-sm md:text-base">
                    {text}
                  </p>
                );
              })}
            </div>
            <button className="font-jakarta-sans dark-button rounded-xl px-6 py-2 text-xs font-semibold md:text-base">
              <a
                href="https://drive.google.com/file/d/1VegzE_5euBCLiUuTxFYxKqt9F17TS0Cn/"
                target="_blank"
              >
                My CV
              </a>
            </button>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ amount: 0.5 }}
          >
            <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
              My Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="hover:transform-y font-jakarta-sans dark-button rounded-xl px-6 py-2 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
