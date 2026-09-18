export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    cvPdfUrl?: string,
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
    title: "Data Analyst",
    location: "Bogor, Indonesia",
    locationLink: "https://www.google.com/maps/place/Bogor+Regency",
    about: "Data Analyst focused on extracting business insights, data visualization, and building data-driven solutions.",
    summary: `Data Analyst focused on data visualization, statistical analysis, and business intelligence,
    with experience developing core platforms in National Account Statistics, HR management, and healthcare systems.`,
    personalWebsiteUrl: "https://nagarizki.github.io/site",
    cvPdfUrl: "/CV_Rizki_Nagari_2026_Data_Analyst.pdf",
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
            title: "Data Analyst",
            start: "January 2021",
            end: "Present",
            description: `Developed end-to-end data platforms, business intelligence dashboards, and web-based data entry systems supporting core National Account Statistics, healthcare operational management, and financial analysis.`,
            achievements: [
                "Built interactive dashboards using React.js, Looker Studio, and Superset to visualize key operational metrics and business insights for stakeholders.",
                "Developed an automated ETL platform using R and Python to collect, process, and analyze financial statement data from the Indonesia Stock Exchange.",
                "Engineered secure data solutions and APIs using SQL Server, Prisma, GraphQL, and Fastify to ensure data integrity and availability.",
                "Built real-time web applications for data entry, processing, and monitoring, with automated data validation workflows.",
                "Managed SQL Server database evolution and performance monitoring to maintain high system availability."
            ],
            badges: ["Python", "R", "SQL Server", "Looker Studio", "Superset", "React JS", "TypeScript", "GraphQL", "Fastify", "Prisma", "Docker", "REST", "Excel"],
        },
        {
            company: "BPS-Statistics Indonesia",
            link: "https://www.bps.go.id",
            title: "Data Analyst",
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
            badges: ["Visual Basic", "Excel", "Google Sheets", "Adobe Indesign", "Adobe Illustrator", "Adobe Photoshop",
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
        "Python","R", "Git", "SQL", "Airflow", "AWS", "GCP", "Google Analytics", "Google Tag Manager", "JavaScript", "TypeScript",
        "Node.js", "React/Next JS", "Vanilla JS", "JQuery", "Tailwind", "Ant Design", "CSS Animation", "TanStack-Query", "REST",
        "GraphQL", "Data Visualization", "Looker Studio", "Tableau", "Power BI", "Superset"
    ],
};