import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "kai",
    title: "Technical Lead",
    subtitle: "Kai Conversations, Manchester",
    type: "experience",
    mainImage: "images/kai.png",
    websiteUrl: "https://kaiconversations.com/",
    startDate: new Date("2025-09-22"),
    shortDescription: `- Built, managed, and mentored a high-performing, cross-functional engineering team across the UK and India, fostering a culture of technical excellence and collaborative growth.
- Standardised organisational model consumption by architecting an LLM proxy layer (**LiteLLM**), significantly reducing development overhead and increasing deployment resiliency.
- Accelerated product innovation by delivering high-impact MVP platforms, leveraging advanced AI capabilities like **Claude Design** with **Jira MCP** connectivity.
- Spearheaded the migration of legacy **ECS**, **Lambda**, and **Google Cloud Run** microservices to an **EKS**-driven **Knative Serving** deployment, substantially improving processing performance and system observability.
- Architected and deployed scalable, production-ready conversational AI pipelines leveraging **AWS SQS** and **Knative Serving** for high-throughput, asynchronous processing.
- Engineered core features for a cross-platform **Expo (React Native)** application, owning the end-to-end lifecycle from **TestFlight** beta testing through to automated **App Store** and **Play Store** rollouts.
- Standardised development practices and automated testing suites by engineering robust **GitHub Actions** workflows, drastically reducing lead time from ideation to production.`,
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
