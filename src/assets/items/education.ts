import { type Education } from "@/types";

export const education: Education[] = [
  {
    id: "university-of-manchester",
    title: "BSc Computer Science with Industrial Experience",
    subtitle: "The University of Manchester",
    type: "education",
    startDate: new Date("2015-09-01"),
    endDate: new Date("2020-08-01"),
    mainImage: "images/university-of-manchester.jpg",
    shortDescription: `- Achieved a **First Class Honours** degree while balancing both part time and volunteer work.
- Covered a range of topics including cognitive robotics, cryptography, network security, hardware engineering, and assembly.
- Involved in a number of societies including the Hackathon, Archery, and Cybersecurity societies.
- Regularly attended events and workshops, including Hackathon and Capture the Flag events.`,
  },
  {
    id: "sir-john-deane-college",
    title: "A Levels",
    subtitle: "Sir John Deane's College",
    type: "education",
    startDate: new Date("2013-09-01"),
    endDate: new Date("2015-05-01"),
  },
  {
    id: "the-heath-school",
    title: "GCSEs",
    subtitle: "The Heath School",
    type: "education",
    startDate: new Date("2008-09-01"),
    endDate: new Date("2013-05-01"),
  },
];
