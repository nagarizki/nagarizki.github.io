export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    contact: Contact;
    work: Work[];
    education: Education[];
    skills: string[];
}

export interface Contact {
    email: string,
    tel: string,
    social: Social[];
}

export interface Social {
    name: string;
    url: string;
}

export interface Work {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
    achievements?: string[];
    badges?: string[];
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string | null;
}

export const CV_DATA: CV = {
    name: "Rizki Nagari",
    title: "Software Engineer",
    location: "Jakarta, Indonesia",
    locationLink: "https://www.google.com/maps/place/Jakarta",
    about: "Software Engineer focused on building high-quality and scalable products.",
    summary: `Software Engineer focused on building scalable, high-performance applications with Next.js,
    with experience developing core platforms in National Account Statistics, HR management, and healthcare systems.`,
    personalWebsiteUrl: "https://nagarizki.github.io",
    contact: {
        email: "nagari.rizki@gmail.com",
        tel: "+628993145251",
        social: [
            {name: "GitHub", url: "https://github.com/nagarizki"},
            {name: "LinkedIn", url: ""},
        ],
    },
    work: [
        {
            company: "BPS-Statistics Indonesia",
            link: "https://www.bps.go.id",
            title: "Software Engineer",
            start: "January 2024",
            end: "Present",
            description: `Developed software solutions for diverse projects, including EMR systems, supply chain and
            logistics management platforms, and interactive data visualization dashboards.`,
            achievements: [
                `Engineered a scalable healthcare web application using React JS and Fastify for operational management, financial management,
                HR, supply chain, and regulatory compliance.`,
                "Developed secure GraphQL APIs with Prisma and SQL Server for frontend and internal system integrations.",
                "Managed SQL Server schema evolution and ensured data integrity using Prisma migrations.",
                "Monitored system performance and reliability to maintain high availability.",
                "Built dashboards using React.js, Looker Studio, and Superset to visualize key metrics and business insights."
            ],
            badges: ["React JS", "Tailwind", "PrimeReact", "GraphQL", "Fastify", "Vite", "Prisma", "SQL Server", "Looker Studio", "Superset",
                "Docker", "REST", "k6"],
        },
        {
            company: "BPS-Statistics Indonesia",
            link: "https://www.bps.go.id",
            title: "Software and Data Engineer",
            start: "January 2021",
            end: "December 2023",
            description: `Developed a high-precision end-to-end ETL platform for collecting, processing, analyzing,
            and visualizing financial statement data, and built web application for real-time data entry, processing, and monitoring.`,
            achievements: [
                `Developed and maintained a scalable platform for collecting financial statement data from the Indonesia Stock Exchange
                using R and Python to support core business operations.`,
                `Built a real-time web application for data entry, processing, and monitoring, with data validation
                and interactive dashboards.`,
                `Engineered data solutions using R, spreadsheets, cloud storage, and SQL Server to ensure data integrity
                and availability.`,
                "Designed multiple visualizations to communicate data insights to stakeholders effectively."
            ],
            badges: ["R", "Python", "REST", "Google Spreadsheets", "Ms Excel", "PHP", "JQuery", "Yii", "Bootstrap", "SQL Server",
                "Adobe Illustrator"],
        },
        {
            company: "BPS-Statistics Indonesia",
            link: "https://www.bps.go.id",
            title: "Software Developer & IT Specialist",
            start: "January 2019",
            end: "December 2020",
            description: `Developed solutions for diverse projects, including a HR management system, map digitization,
            and an internal automation tool.`,
            achievements: [
                "Built and maintained an employee management and automation tool for enterprise applications using Visual Basic and Excel.",
                `Implemented a cloud-based solution to enable efficient data collection and collaboration,
                supporting core business processes.`,
                "Managed Google Sheets and Excel databases, ensuring data integrity and availability.",
                "Maintained hardware, software, network connections, and performed map digitization to support statistical activities.",
                "Drafted and prepared publications to effectively communicate official statistical data to the public.",
                "Participated in surveys & census, handling preparation, data collection, data entry & validation, analysis, and dissemination."
            ],
            badges: ["Visual Basic", "Ms Excel", "Google Sheets", "Adobe Indesign", "Adobe Illustrator", "Adobe Photoshop",
                "Adobe Premiere Pro", "DaVinci Resolve"],
        }
    ],
    education: [
        {
            school: "Politeknik Statistika STIS",
            degree: "Bachelor's degree, Computational Statistics",
            start: "2014",
            end: "2018",
        },
    ],
    skills: [
        "JavaScript", "TypeScript", "Node.js", "React JS", "Next JS", "Astro JS", "Svelte", "Vanilla JS", "Nest JS", "Express JS",
        "Fastify", "Flutter", "JQuery", "Tailwind", "Ant Design", "Material UI", "shadcn/ui", "CSS Animation", "TanStack-Query",
        "SQL", "REST", "GraphQL", "Python", "Data Visualization", "Looker Studio", "Tableau", "Power BI", "Superset"
    ],
};