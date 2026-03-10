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
    summary: `A Software Engineer specializing in developing high-performance, scalable projects using Next JS and Flutter. I have extensive experience building core functionalities for complex platforms in National Account Statistics (NAS), HR Management, 
        and Healthcare.`,
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
            description: `Developed solutions for diverse projects, including a healthcare cloud-sync feature, a GIS 
                        visualization platform, and an internal automation tool.`,
            achievements: [
                `Engineer scalable healthcare web app with React JS and Fastify for operational management, financial management,
                human resources, supply chain management, and regulatory compliance.`,
                "Develop secure GraphQL APIs with Prisma and SQL Server for frontend and internal system integration.",
                "Manage SQL Server schema evolution and data integrity using Prisma for database migrations.",
                "Monitor system performance and health to ensure high availability.",
                "Develop dashboards using React.js, Looker Studio, and Superset to visualize key metrics and business insights."
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
            description: "Developed a high-precision, automated end-to-end ETL platform for financial statement data.",
            achievements: [
                `Developed and maintained scalable financial statements data collection platform from Indonesia Stock Exchange website
                using R and Python to support core business processes.`,
                "Engineered data solutions using spreadsheets, BPS Cloud Platform, and SQL Server to ensure data integrity and availability",
                `Built a real-time web application for data entry, processing, and monitoring, incorporating data validation,
                interactive dashboards, and dynamic data forms.`,
                "Designed multiple visualizations to communicate critical data insights to stakeholders."
            ],
            badges: ["R", "Python", "REST", "Google Spreadsheets", "Ms Excel", "PHP", "JQuery", "Yii", "SQL Server",
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
                `Implemented a cloud-based solution on Google Cloud to enable efficient data collection and collaboration,
                supporting core business processes.`,
                "Managed Google Spreadsheets and Ms Excel databases, ensuring data integrity and availability.",
                "Took care of hardware, software, network connection, and map digitization to support statistical activity.",
                "Drafted and prepared publications to effectively communicate official statistical data to the public.",
                "Worked in surveys & census from preparation, data collection, data entry & validation, data analysis, and dissemination."
            ],
            badges: ["Visual Basic", "Ms Excel", "Google Spreadsheets", "Adobe Indesign", "Adobe Illustrator", "Adobe Photoshop",
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
        "JavaScript", "TypeScript", "Node.js", "Next JS", "Astro JS", "Svelte", "Vanilla JS", "Flutter", "JQuery", "Tailwind", "Ant Design",
        "CSS Animation", "TanStack-Query", "SQL", "REST", "GraphQL", "Python", "Data Visualization", "Looker Studio", "Tableau", "Power BI", "Superset"
    ],
};