import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Suresh Koochana",
  initials: "SK",
  url: "https://sureshkoochana.vercel.app/",
  location: "Hyderabad, Telangan, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description: "Software Engineer, I love building things and helping people.",
  summary:
    "I’m a full-stack developer with a primary focus on front-end technologies and a growing interest in Go and Rust. Over the years, I’ve worked on various web projects and contributed to open-source initiatives. I’m adaptable to different tech stacks and always eager to learn new things. I stay updated with the latest trends and advancements by following tech blogs and exploring information online..",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "RestFul API",
    "GraphQL",
    "Postgres",
    "Docker",
    "Kubernetes"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" }
  ],
  contact: {
    email: "kuchana123.suresh@gmail.com",
    tel: "+91 9550963920",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SureshKuchana",
        icon: Icons.github,

        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/suresh-koochana-945950133/",
        icon: Icons.linkedin,

        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/sk4u1996",
        icon: Icons.x,
        navbar: true
      },
      email: {
        name: "Send Email",
        url: "kuchana123.suresh@gmail.com",
        icon: Icons.email,
        navbar: false
      }
    }
  },
  work: [
    {
      company: "Infinite Blue",
      href: "https://infiniteblue.com/",
      badges: [],
      location: "Hyderabad",
      title: "Software Engineer II",
      logoUrl: "/ib.svg",
      start: "May 2021",
      end: "Currently working",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."
    },
    {
      company: "FortunaPIX",
      badges: [],
      href: "https://fortunapix.com/",
      location: "Hyderabad",
      title: "Software Engineer",
      logoUrl: "/fortunapix.jpeg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes."
    }
  ],
  projects: [
    {
      title: "Issue Tracker",
      href: "https://issue-tracker-one-gilt.vercel.app",
      dates: "Sep 2023 - Aug 2024",
      active: true,
      description: "Issue tracker where we can track issue's",
      technologies: [
        "Next.js",
        "Typescript",
        "Clerk",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://issue-tracker-one-gilt.vercel.app",
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: "/issue-tracker.jpeg",
      video: ""
    },
    {
      title: "Product Hunt",
      href: "https://product-hunt-liard.vercel.app/",
      dates: "June 2022",
      active: true,
      description: "Simple version of Product.",
      technologies: ["React", "Vite"],
      links: [
        {
          type: "Website",
          href: "https://product-hunt-liard.vercel.app",
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: "/produc-hunt.png",
      video: ""
    },
    {
      title: "Trello Clone",
      href: "https://trello-app-gilt.vercel.app/",
      dates: "June 2022",
      active: true,
      description: "Trello Clone",
      technologies: ["React", "Vite", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://trello-app-gilt.vercel.app/",
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: "/trello-clone.png",
      video: ""
    },
    {
      title: "CSS animation",
      href: "https://sureshkuchana.github.io/palette.supply-clone/",
      dates: "June 2022",
      active: true,
      description: "Palette supple clone",
      technologies: ["HTML", "CSS", "JS"],
      links: [
        {
          type: "Website",
          href: "https://sureshkuchana.github.io/palette.supply-clone/",
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: "",
      video: ""
    }
  ]
} as const;
