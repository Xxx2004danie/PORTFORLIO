import { motion } from "framer-motion";

function SkillsSection() {
  const skills = [
    {
      skill: "HTML",
      level: "Advanced",
      description: "Strong understanding of semantic HTML, SEO structure, and accessibility.",
    },
    {
      skill: "CSS",
      level: "Advanced",
      description: "Skilled in responsive design, animations, layouts (Flexbox & Grid).",
    },
    {
      skill: "JavaScript",
      level: "Intermediate",
      description: "Good knowledge of DOM manipulation, ES6+, and working with APIs.",
    },
    {
      skill: "Git & GitHub",
      level: "Intermediate",
      description: "Experience with version control, branching, pull requests, and collaboration.",
    },
    {
      skill: "TailwindCSS",
      level: "Advanced",
      description: "Efficient at building modern UI components quickly using utility classes.",
    },
    {
      skill: "React.js",
      level: "Intermediate",
      description: "Experience with components, props, hooks, and building reusable UIs.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center p-6">
      <section className="max-w-4xl w-full grid gap-8">
        <h2 className="text-4xl font-bold text-center"> Web Technologies Used</h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <section className="bg-neutral-900 border border-neutral-700 shadow-lg rounded-2xl hover:shadow-xl transition-all p-5">
                <h1 className="text-xl font-semibold">{skill.skill}</h1>
                <p className="text-neutral-400 mt-2">{skill.description}</p>
                <p className="mt-3 text-sm text-blue-400 font-medium">{skill.level}</p>
              </section>
            </motion.div>
          ))}
        </section>
      </section>
    </section>
  );
}

export default SkillsSection;
