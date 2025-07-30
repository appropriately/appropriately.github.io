import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "opentext",
    title: "Technical Lead (Senior Software Engineering Manager)",
    subtitle: "OpenText, Manchester",
    type: "experience",
    ongoing: true,
    mainImage: "images/opentext.png",
    startDate: new Date("2024-05-02"),
    shortDescription: `Pillr was acquired by OpenText, a global leader in Information Management, to expand its SMB product portfolio.

- Managed and mentored a team of 4 engineers, leading code reviews, sprint planning, and professional development.
- Maintained a 70/30 split between hands-on development and management responsibilities.
- Led high-level architecture planning for integration and expansion efforts post-acquisition.
- Integrated a proprietary OpenText Large Language Model (LLM) to analyze and summarize security alerts,
significantly reducing alert fatigue for analysts.
- Managed **Kubernetes** cluster availability and performance, deploying and maintaining Helm charts.
- Contributed to cross-team integration projects, collaborating with teams across multiple timezones.`,
  },
  {
    id: "pillr",
    title: "Technical Lead (VP)",
    subtitle: "Pillr, Manchester",
    type: "experience",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2024-05-01"),
    mainImage: "images/pillr.png",
    videoUrl: "https://www.youtube.com/embed/45Fnu2ryCgI",
    shortDescription: `Pillr was spun out of Novacoast as a start up, offering a SOC-as-a-Service (SOCaaS) platform. Data is collected
from devices and third-party integrations for normalisation and correlation.

- Built, managed, and mentored a high-performing team of 10 engineers, overseeing the full lifecycle of hiring,
onboarding, and performance reviews.
- Spearheaded the design and implementation of a legacy PHP application to a modern microservice architecture,
building a **Vite** + **TypeScript** SPA frontend and a **Python** **FastAPI** microservice-driven backend. This
modernization **slashed page load times by 90%**, driving significant gains in user retention and customer
acquisition.
- Solely implemented a data visualisation mechanism, utilising **Opensearch** for data querying. Provided customer's
the ability to filter through PBs of data with queries typically taking under a minute.
- Re-architected critical services in **GoLang** and **Kafka**, boosting ingestion performance. Upgraded REST APIs to
**Gin**, including overhauling ingress authentication, slashing response times from seconds to nanoseconds.
- Designed and implemented **Kafka**-driven ingest pipelines processing petabytes of data, supporting data visualisation
dashboards and reporting.
- Expanded **Redis** usage across the platform for cross-service caching, reducing API response latency.
- Migrated operations into a standardised task queue using **Celery**.
- Acted as the primary technical point of contact for major customer engagements, ensuring successful delivery and
satisfaction.
- Championed best practices in an agile environment, fostering a culture of innovation and continuous improvement.
`,
  },
  {
    id: "novacoast",
    title: "Consultant/Developer",
    subtitle: "Novacoast, Manchester",
    type: "experience",
    mainImage: "images/novacoast.jpg",
    startDate: new Date("2018-05-01"),
    endDate: new Date("2022-09-01"),
    shortDescription: `Novacoast is a cybersecurity services, software, and integration company with a global presence.

- Consulted for customers across Europe and North America, working on both greenfield and brownfield projects.
- Utilised **Java** for a number of projects, including maintaining SDKs for end-user consumption.
- Designed and maintained **C#** **.NET Framework** applications for customers across the United States and Europe.
- Utilised **Python** for complex data collection and forwarding in complex banking environments.
- Built a number of proof of concepts utilising numerous **Javascript** and **Python** frameworks.
- Received company award for Most Valuable New Developer (2019) due to my efforts.
- Concurrently served as UK Resource Manager (from April 2021), handling office management and staff coordination. Managed the end-to-end recruitment process for 10+ technical and administrative roles.`,
  },
];
