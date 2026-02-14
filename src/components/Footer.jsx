import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="w-full bg-neutral-800 text-white py-16 px-6 mt-0">
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Sheriff West</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            A passionate frontend developer focused on building modern and
            responsive user interfaces.
          </p>
        </motion.section>

        {/* Quick Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              Projects
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Services
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </motion.nav>

        {/* Contact & Socials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p className="text-gray-300 text-sm">Email: okpakovwevusheriff31@gmail.com</p>

          <div className="flex items-center gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              Twitter
            </motion.a>
          </div>
        </motion.section>
      </section>

      {/* Bottom */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} Sheriff West. All rights reserved.
      </motion.section>
    </footer>
  );
}
