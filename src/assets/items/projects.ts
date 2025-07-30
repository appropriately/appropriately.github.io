import { type Project } from "@/types";

export const projects: Project[] = [
  {
    id: "language-pdf-generator-api",
    title: "Language PDF Generator API",
    type: "project",
    subtitle: "Personal Project",
    startDate: new Date("2025-07-05"),
    ongoing: true,
    skills: ["Fastify", "TypeScript", "Jest", "Typebox", "Gemini"],
    repoUrl: "https://github.com/Appropriately/language-pdf-generator-api",
    shortDescription:
      "A simple API built using **Fastify** and **TypeScript**, leveraging **Gemini** to generate structured PDF documents. Automatic OpenAPI documentation is generated and provided at `/docs`, leveraging **Typebox** for schema validation.",
  },
  {
    id: "simple-extension-analyser",
    title: "Simple Extension Analyser",
    type: "project",
    subtitle: "Personal Project",
    startDate: new Date("2025-04-18"),
    ongoing: true,
    skills: ["React", "Typescript", "Vite", "TailwindCSS", "Rust"],
    liveUrl: "https://appropriately.github.io/simple-extension-analyser/",
    repoUrl: "https://github.com/Appropriately/simple-extension-analyser",
    shortDescription:
      "A simple extension analyser built using **React** and **Typescript**, leveraging a **Rust** WASM Web Worker for the extension analyser. Built to experiment with a number of technologies, including the implementation of some light Google Gemini support.",
  },
  {
    id: "puzzle-code",
    title: "puzzleCode",
    type: "project",
    subtitle: "The University of Manchester",
    startDate: new Date("2020-01-29"),
    endDate: new Date("2020-05-12"),
    mainImage: "images/puzzle-code.png",
    videoUrl: "https://www.youtube.com/embed/6Af6Ljtnpho",
    skills: ["Unity", "C#", "WebGL", "Android"],
    liveUrl: "https://appropriately.github.io/programming-tool/",
    repoUrl: "https://github.com/Appropriately/programming-tool",
    shortDescription:
      "Third year project for University, designed to leverage gamification to teach basic programming concepts.",
    longDescription: `Built as my **third year project** for University, heavy focus on the concept of _accessability_. This was from both a design and device perspective. 

Unity was chosen for the game engine as it allowed cross-compilation. The final version was released as a \`WebGL\` & \`Android\` game but was tested as a \`windows.exe\` file too.

More information and a playable \`WebGL\` version can be found on the [project's site](https://appropriately.github.io/programming-tool/).
    `,
  },
  {
    id: "markdown-reader",
    title: "Markdown Reader",
    type: "project",
    subtitle: "Personal Project",
    startDate: new Date("2018-11-16"),
    skills: ["Bootstrap", "JavaScript", "Showdown JS", "showdown-toc"],
    liveUrl: "https://appropriately.github.io/markdown-reader/",
    repoUrl: "https://github.com/Appropriately/markdown-reader",
    mainImage: "images/markdown-reader.jpg",
    shortDescription:
      "A Markdown Reader built using **Showdown JS**, which is a JavaScript library that allows markdown to be easily converted into HTML.",
    longDescription: `*ANOTHER* Markdown Reader. I wanted something to put together to host my own notes online. It is built using **Showdown JS**, which is a JavaScript library that allows markdown to be easily converted into HTML.

An additional plugin for Showdown JS, called **showdown-toc**, was used for generating table of contents. This allows table of contents to be dynamically generated using a \`[TOC]\` tag in markdown. The generated TOC also includes anchor links to the contents of the page.

The web application was initially created for personal note taking, but it proved convenient for converting my **markdown** documentation into HTML.
    `,
  },
  {
    id: "little-lander",
    title: "Little Lander",
    type: "project",
    subtitle: "Personal Project",
    startDate: new Date("2016-11-15"),
    skills: ["Unity", "C#", "WebGL", "Android"],
    mainImage: "images/little-lander.png",
    shortDescription:
      "Little Lander was my first proper attempt at producing an Android game. I had the spent the summer before looking into Unity development, initially Javascript but eventually settling on C#. It was live on the app store for a few years before 32-bit support was dropped.",
  },
  {
    id: "lazy-holiday-planner",
    title: "Lazy Holiday Planner",
    type: "project",
    subtitle: "HackUPC 2018",
    startDate: new Date("2018-10-19"),
    endDate: new Date("2018-10-21"),
    skills: ["Bootstrap", "Python", "Django"],
    repoUrl: "https://github.com/Appropriately/lazy-holiday-planner",
    videoUrl: "https://www.youtube.com/embed/fAY-we_trxg",
    shortDescription:
      "A holiday planner designed for people who hate planning. Utilised **Google Maps API** for getting recommended locations, as well as the **Skyscanner API** for getting flight details.",
    longDescription: `
A holiday planner designed for people who hate planning. Initially you create an account, which gains you access to the ability to just quickly generate a full holiday. This is done by simply specifying some details including location and the dates you want to be there. You can also share the trip with friends as well as add landmarks and scheduled events.

- Simple _TypeForm_ for inputting desired duration, location and ticket type.
- _Skyscanner API_ for getting the cheapest flight details.
- _Google Maps API_ for getting recommended locations at the destination.
  - Recommended locations are based on popularity.
  - Each one is represented at the top of the trip page and can be quickly added.
  - Trip page's header image is pulled from the API request, giving each page a unique look.
- Automatic scheduling, locations added to the plan are automatically allocated and can be dragged around and re-ordered.
- _Collaboration_ features; depending on the number of tickets booked other people can be invited to join the trip. They are able to add and organise locations to visit.
    `,
  },
  {
    id: "almost-pong",
    title: "Almost Pong",
    type: "project",
    subtitle: "Personal Project",
    startDate: new Date("2017-09-04"),
    skills: ["Unity", "C#", "WebGL", "Android"],
    mainImage: "images/almost-pong.jpg",
    shortDescription:
      "A simple pong game with a twist. Utilised procedural generation to create different levels, all centred around the theme of a _pong_ game.",
    longDescription: `**Almost Pong** was a game I worked on after completing Little Lander. Like the aforementioned game, it too was based on an older title. The idea was simple, the bottom half would always play like regular pong while the top would change to different *levels*. Initially it too would play like pong, but each level would have different *win* conditions.

The game was never released on the app store, although it was basically feature complete by the time I dropped it. The plan was for the game to be free but with advertisements. Player retention was taken into account, with the user being served advertisements at a rate based on how long their play session took. For example, a player who loses after the second level would not be served an advert whereas a player who had completed 20 has *some* chance of seeing one.

## Features

- Various levels
  - Levels are fixed but have randomly generated elements.
  - There is a _difficulty_ factor that is taken into account.
  - The levels were modelled after other games, such as _space invaders_ and _pachinko_.
- Customisable theme
  - You can choose both a primary and secondary colours.
- Shop feature
  - Upgrades can be bought.
  - New colours can be purchased.
- A simple 2-player mode  
    `,
  },
  {
    id: "pixel-miner",
    title: "Pixel Miner",
    subtitle: "Personal Project",
    type: "project",
    startDate: new Date("2017-10-27"),
    skills: ["Unity", "C#", "WebGL", "Android"],
    liveUrl: "https://appropriately.github.io/pixel-miner/",
    repoUrl: "https://github.com/Appropriately/pixel-miner",
    mainImage: "images/pixel-miner.jpg",
    shortDescription:
      "A simple clicker game, built to experiment with AngularJS.",
    longDescription: `A "clicker game" I started working on as an excuse to experiment with AngularJS but decided to continue working on it. It was built just before a hackathon, to build up some skills with AngularJS.

The game works like your average 'clicker' game, with a user initially gathering 'pixels' by clicking. Once they have gathered enough, they are capable of buying a 'building' to automatically gather some pixels per second. 'Upgrades' can be bought for both the buildings and the user's clicking, to increase the rate at which they are gathered.

The user data is saved locally, so games can be paused and accessed again. An autosave feature was built to facilitate this.`,
  },
];
