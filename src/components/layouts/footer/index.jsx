import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="font-jakarta-sans bg-teal-200 transition-colors duration-300 dark:bg-[#012120]">
      <div className="container grid grid-cols-1 gap-4 border-b-2 border-teal-300 py-12 lg:grid-cols-2 dark:border-teal-900">
        <div className="space-y-4">
          <h1 className="font-titan-one text-xl font-extralight md:text-2xl lg:text-3xl">
            ARDI SAPUTRA
          </h1>
          <p className="text-xs text-balance lg:text-sm">
            Dedicated Full Stack Engineer with strong practical experience in
            Front-End and Back-End development, complemented by a sharp
            attention to UI/UX design.
          </p>
        </div>
        <div className="space-y-4 text-right">
          <h1 className="font-titan-one text-xl font-extralight md:text-2xl lg:text-3xl">
            SOCIAL
          </h1>
          <div className="flex justify-end gap-4">
            <a href="mailto:ardi210303@gmail.com">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/ardi-saputra-b49785279/">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/ardi0303/">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="container flex items-center justify-center py-4">
          <p className="text-xs text-balance">
            © {new Date().getFullYear()} Ardi Saputra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
