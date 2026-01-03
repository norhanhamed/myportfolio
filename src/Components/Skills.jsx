const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section>
      <h3 className="text-3xl font-semibold mb-6">Skills</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 rounded-full bg-[#121212] border border-[#FF9F1C]/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
