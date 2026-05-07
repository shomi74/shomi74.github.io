export default function PortfolioHome() {
  const projects = [
    {
      title: "TUCAN B0 Ultra-Stable Current Source",
      description:
        "Precision analog current-source platform developed for neutron EDM magnetic-field generation with sub-ppm stability.",
      tags: ["Precision Analog", "Mixed-Signal PCB", "Instrumentation", "Low Noise"],
    },
    {
      title: "64-Channel Shim Current Supply",
      description:
        "Scalable multi-channel precision current-control system for magnetic shim coils using LTC2688 DAC architecture.",
      tags: ["DAC Systems", "Analog Control", "Scientific Electronics"],
    },
    {
      title: "IWCD Imaging Platform",
      description:
        "CM5 + Teensy based embedded detector imaging platform with PoE architecture, camera control, and power-path management.",
      tags: ["Embedded Systems", "CM5", "PoE", "Camera Control"],
    },
    {
      title: "Hyper-K Detector Electronics",
      description:
        "Embedded imaging and detector-control hardware for Hyper-Kamiokande instrumentation systems.",
      tags: ["Detector Electronics", "Embedded Hardware", "Sensors"],
    },
  ];

  const skills = [
    "Mixed-Signal PCB Design",
    "Precision Analog Electronics",
    "Embedded Hardware Systems",
    "CM5 / SBC Integration",
    "Power Electronics",
    "Scientific Instrumentation",
    "Low-Noise Systems",
    "KiCad",
    "LTspice",
    "Python",
    "C/C++",
    "System Integration",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-400 text-lg mb-4">Electrical Engineer • Scientific Instrumentation Developer</p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Shomi Ahmed
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Designing precision analog, embedded, and detector instrumentation electronics for scientific research systems including TUCAN nEDM, Hyper-Kamiokande, and large-scale imaging platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/shomi74"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-slate-600 hover:border-cyan-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">Engineering Focus</h2>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 rounded-2xl p-4 text-sm text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="mb-12">
          <p className="text-cyan-400 mb-3">Portfolio</p>
          <h2 className="text-4xl font-bold">Featured Engineering Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-4 py-2 rounded-full bg-slate-800 text-cyan-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-cyan-400 mb-3">Experience</p>
            <h2 className="text-4xl font-bold mb-6">Scientific Hardware Development</h2>

            <p className="text-slate-300 leading-relaxed">
              Experience developing precision current supplies, detector electronics, embedded imaging platforms, and scientific instrumentation systems for large-scale experimental physics projects.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Carleton University</h3>
              <p className="text-slate-400 mb-3">Electrical Engineer • Major Resource Support</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Detector electronics, embedded imaging systems, CM5 integration, scientific instrumentation, and system-level hardware development.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">University of Winnipeg</h3>
              <p className="text-slate-400 mb-3">Scientific Electronics Development</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Precision analog current-control systems, magnetic-field stabilization hardware, and neutron EDM instrumentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
        © 2026 Shomi Ahmed • Scientific Instrumentation & Embedded Hardware Engineering
      </footer>
    </div>
  );
}
