import sqlBeyondImg from "../assets/project-imgs/sqlbeyond.png"

export const projects = [
  {
    id: "sql-beyond",
    title: "SQL Beyond",
    tags: ["Web", "AI"],
    summary:
      "An interactive, gamified SQL learning platform featuring real-world simulations and AI-assisted feedback to accelerate query mastery.",

    img: sqlBeyondImg,

    links: {
      live: null, 
      repo: "https://github.com/hazraimran/SQLBeyond_Official",
    },

    details: {
      problem:
        "Learning SQL is often passive and repetitive. SQL Beyond was built to provide hands-on, real-world query challenges with immediate feedback, making the learning experience more engaging and practical.",

      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
  },
]
