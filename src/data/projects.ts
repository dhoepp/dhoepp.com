export interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    writeup?: string;
}

export const projects: Project[] = [
    {
        title: "Math Learning App",
        description: "FastAPI education application for homeschool curriculum with TypeScript frontend",
        tech: ["Python", "FastAPI", "TypeScript", "Swagger"],
        github: "https://github.com/dhoepp/math-practice-app",
        demo: "https://math-practice-app-eta.vercel.app/"
    },
    {
        title: "Wordle-ish",
        description: "Wordle-style word game built with a volunteer Chingu Voyage 61 team, piloting AI-assisted development workflows",
        tech: ["React", "Vite", "Supabase", "GitHub Actions"],
        github: "https://github.com/chingu-voyages/V61-tier3-team-99",
        demo: "https://wordle-ish.vercel.app",
        writeup: "/writing/wordle-ish"
    },
    {
        title: "Developer Portfolio",
        description: "Portfolio site featuring sub-1KB procedural background animation with 25-minute loop cycle",
        tech: ["Astro", "TypeScript", "CSS"],
        github: "https://github.com/dhoepp/dhoepp.com",
        //demo: "https://dhoepp.com"
    },


  // add more projects
];