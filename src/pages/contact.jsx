// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const form = useRef();
  const [verified, setVerified] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!verified) {
      alert("Verifikasi CAPTCHA terlebih dahulu.");
      return;
    }

    emailjs
      .sendForm(
        "service_o1xqf09", // Ganti dengan SERVICE ID kamu
        "template_p27it7g", // Ganti dengan TEMPLATE ID kamu
        form.current,
        "7wfg7w22Z8tWDle2E", // Ganti dengan PUBLIC KEY kamu
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan berhasil dikirim!");
        },
        (error) => {
          console.log(error.text);
          alert("Gagal mengirim pesan.");
        },
      );

    e.target.reset(); // reset form setelah submit
  };
  return (
    <div
      className="container flex min-h-screen w-full items-center justify-center py-16"
      id="contacts"
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
            <h1 className="">CONTACT</h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg">
            If you have any questions, feedback, or just want to say hello, feel
            free to reach out. I'm always open to connecting with fellow
            developers and tech enthusiasts.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ amount: 0.5 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-8 lg:mx-48">
            <div className="space-y-2">
              <label className="block">Name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-md border bg-gray-300 p-2 dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block">Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-md border bg-gray-300 p-2 dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block">Message</label>
              <textarea
                required
                name="message"
                placeholder="Your Message"
                className="h-32 w-full rounded-md border bg-gray-300 p-2 dark:bg-gray-700"
              ></textarea>
            </div>
            <ReCAPTCHA
              sitekey="6LdtkqMrAAAAAOMAJS9527dKxrT9v-LkgrZawrvt" // ← ganti dengan SITE KEY kamu
              onChange={() => setVerified(true)}
              onExpired={() => setVerified(false)}
            />
            <div className="text-right">
              <button
                className="hover:transform-y font-jakarta-sans dark-button rounded-xl px-6 py-2 text-xs font-semibold lg:px-8 lg:py-3 lg:text-base"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
