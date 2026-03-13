import sqlBeyondImg from "../assets/project-imgs/sqlbeyond.png"
import moneyflowImg from "../assets/project-imgs/moneyflow.png"
import dsImg from "../assets/project-imgs/datastructures.png"

export const projects = [
  {
    id: "moneyflow",
    title: "MoneyFlow",
    tags: ["Fintech", "Full Stack", "Web"],
    summary:
      "A personal finance analytics platform designed to help users track spending, analyze financial habits, and gain deeper insights into their money through interactive dashboards.",

    img: moneyflowImg,

    links: {
      live: null,
      repo: "https://github.com/Luiz161001/moneyflow",
    },

    details: {
      problem:
        "Many budgeting tools only track transactions but don’t provide meaningful insights into financial behavior. MoneyFlow focuses on analytics and visualization, helping users understand where their money goes and how to improve their financial decisions.",

      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
    },
  },

  {
    id: "data-structures",
    title: "Data Structures & Algorithms",
    tags: ["Algorithms", "Computer Science"],
    summary:
      "A repository dedicated to implementing core data structures from scratch and solving algorithmic problems to strengthen fundamentals in data structures, complexity analysis, and problem solving.",

    img: dsImg,

    links: {
      live: null,
      repo: "https://github.com/Luiz161001/data-structures-and-algorithms",
    },

    details: {
      problem:
        "Understanding data structures deeply is essential for writing efficient software. This repository focuses on implementing fundamental structures and applying them to algorithmic problems to reinforce computer science fundamentals.",

      tech: [
        "C++",
        "TypeScript",
        "Algorithms",
        "Data Structures",
        "LeetCode",
      ],
    },
  },

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