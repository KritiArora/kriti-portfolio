import React, { useState, useEffect } from "react";
import "./name.css";

const roles = [
	"Frontend Engineer",
	"Software Engineer",
	"Performance-first",
	"Machine Learning Practitioner",
];

const techs = [
	"React",
	"Tailwind",
	"TypeScript",
	"Vite",
	"Jest",
	"Cypress",
	"Python",
	"TensorFlow",
	"PyTorch",
	"scikit-learn",
	"NumPy",
];

const Name = () => {
	const [roleIndex, setRoleIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setRoleIndex((i) => (i + 1) % roles.length);
		}, 2600);
		return () => clearInterval(id);
	}, []);

	return (
			<div className="flex flex-col gap-8 items-start w-full">
				<div className="space-y-4">
					<h1 className="hero-name text-left text-4xl md:text-5xl font-bold text-white">Hey, I'm Kriti</h1>
					<div className="flex items-center gap-3 mt-2">
						<div className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold">
							{roles[roleIndex]}
						</div>
					</div>
				</div>

				<div className="glass-effect p-6 rounded-2xl shadow-2xl border border-white/6 max-w-2xl bg-gradient-to-br from-white/3 to-transparent">
					<h2 className="text-lg md:text-xl font-semibold mb-2 text-white/95">
						I build delightful, fast, and scalable systems.
					</h2>
					<p className="text-white/80 leading-relaxed">
						I focus on component-driven development, measurable performance gains,
						and pixel-perfect UI. I enjoy collaborating with design and backend
						teams to ship production-ready features. I'm a Full-stack Software Engineer with 3+ years of work experience building scalable web applications, REST APIs, and cloud-native systems.
					</p>

					<div className="mt-4">
						<a
							href="https://drive.google.com/file/d/1RPT8aZurogGQP7N0b94LcNMfFAdAdzXJ/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
						>
							View Resume
						</a>
					</div>
				</div>
			</div>
	);
};

export default Name;