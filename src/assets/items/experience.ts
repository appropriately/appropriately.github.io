import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "strand",
    title: "Founding Engineer",
    subtitle: "Strand Intelligence, Manchester",
    type: "experience",
    mainImage: "images/strand.png",
    websiteUrl: "https://strandintelligence.com/",
    startDate: new Date("2026-09-01"),
    shortDescription: `Strand Intelligence is a Manchester-based cybersecurity startup applying agentic AI to digital forensics and incident response (**DFIR**), helping security teams investigate incidents across cloud and endpoint environments.`,
  },
  {
    id: "kai-contract",
    title: "Contract Technical Lead",
    subtitle: "KAI Conversations, Manchester",
    type: "experience",
    websiteUrl: "https://kaiconversations.com/",
    startDate: new Date("2026-09-01"),
    shortDescription: `Continuing to support KAI Conversations in a contract capacity following the full-time Technical Lead role.`,
  },
  {
    id: "kai",
    title: "Technical Lead",
    subtitle: "KAI Conversations, Manchester",
    type: "experience",
    mainImage: "images/kai.png",
    websiteUrl: "https://kaiconversations.com/",
    startDate: new Date("2025-09-22"),
    endDate: new Date("2026-09-01"),
    shortDescription: `- Managed and mentored a high-performing, cross-functional engineering team across the UK and India, fostering a culture of technical excellence and collaborative growth.
- Accelerated product innovation by delivering high-impact MVP platforms, leveraging AI tooling like **Claude Design** with **Jira MCP** connectivity.
- Built and maintained the microservices behind conversation transcription and analysis, improving scalability, reliability and performance.
- Migrated legacy **ECS**, **Lambda**, and **Google Cloud Run** microservices to an **EKS**-driven **Knative Serving** deployment, substantially improving processing performance and system observability.
- Developed and shipped capabilities across **iOS** and **Android**, including background recording, for enterprise client rollouts.
- Spiked and implemented **LLM**-routing and cost-reporting infrastructure and an **MCP** server, and built **ML** models for recommendations and conversation analysis.
- Introduced **GraphQL**-based reporting APIs over **MongoDB** and delivered client-configurable reporting and dashboards.
- Owned a broad security-hardening programme: vulnerability remediation, pen-test resolution, **AWS** network hardening, **MDM** policy management, and **DLP** policy refinement.`,
  },
  {
    id: "opentext",
    title: "Technical Lead (Senior Software Engineering Manager)",
    subtitle: "OpenText, Manchester",
    type: "experience",
    mainImage: "images/opentext.png",
    websiteUrl: "https://cybersecurity.opentext.com/",
    startDate: new Date("2024-05-02"),
    endDate: new Date("2025-09-19"),
    shortDescription: `Pillr was acquired by OpenText, a global leader in Information Management, to expand its Small and Medium Business (SMB) Cybersecurity product portfolio.

- Managed and mentored a team of 4 engineers, driving professional development, leading code reviews, and steering agile sprint planning while maintaining a 70/30 split between hands-on development and management responsibilities.
- Led high-level architecture planning for integration and expansion efforts following the Pillr acquisition. Spearheaded the architectural design of a combined endpoint agent, unifying the core capabilities of the Pillr and Webroot agents into a single, high-performance cross-platform executable.
- Directed cross-team integration projects across multiple timezones, managing connections with numerous marketplaces. Engineered **Single Sign-On (SSO)** support and drove the architectural transition to integrate the Pillr platform as a cohesive **Micro Frontend** within the broader corporate ecosystem.
- Championed the development and implementation of an AI agent within the Pillr platform, enabling automated summarisation and interactive, natural-language engagement with security alerts to reduce analyst triage time.
- Managed **Kubernetes** cluster availability, scaling, and performance, directly deploying and maintaining **Helm** charts to ensure robust system reliability.`,
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
  {
    id: "student-inspire-network",
    title: "Web Developer",
    subtitle: "The Student Inspire Network, Manchester",
    type: "experience",
    startDate: new Date("2017-03-01"),
    endDate: new Date("2017-11-01"),
    shortDescription: `- Work towards developing an online video/news platform.
- Web platform aimed to inspire students to look for placements and internships.`,
  },
];
