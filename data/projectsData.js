import { nanoid } from "nanoid";

export const projects = [
  {
    id: nanoid(),
    img: "/images/projects/listing-alert.png",
    title: "Listing Alert",
    info: "A web app for realtors and real estate companies to manage property listings & agents, receive notifications, etc.",
    info2:
      "This app is built using React, Node, MongoDB, GraphQL, and recently re-designed using Ant Design components. Unfortunately, the code repository is private.",
    url: "https://listing-alert.com/",
    repo: "",
  },
  {
    id: nanoid(),
    img: "/images/projects/kovvi-la_data.png",
    title: "Kovvi",
    info: "A cross-platform mobile app (works for iOS and Android) that provides COVID statistics from across the world.",
    info2:
      "This app is made with React Native & Expo with data from disease.sh API. Users can search by states/provinces, country, state/county (USA), and look at vaccine trial data. This is also the very first mobile app I worked on.",
    url: "",
    repo: "https://github.com/BlackCubes/covidmap-react-native",
  },
  {
    id: nanoid(),
    img: "/images/projects/omnomnom.png",
    title: "Omnomnom",
    info: "A simple recipe app that allows users to pick ingredients they have and get the recipes they need.",
    info2: "Made with React and Spoonacular.",
    url: "https://omnomnom-b8486.web.app/",
    repo: "https://github.com/connielion/omnomnom",
  },
  {
    id: nanoid(),
    img: "/images/projects/toadtv.png",
    title: "ToadTV",
    info: "A responsive front-end React app displaying movie data from OMDB API.",
    info2:
      "Features of the app includes searching by title, viewing details such as, movie rating, plot, actors, and genres.",
    url: "https://toadtv-b4454.web.app/",
    repo: "https://github.com/Lap343/2021-React-Apprenticeship/tree/development/movie-app",
  },
  {
    id: nanoid(),
    img: "/images/projects/auxpack.png",
    title: "Auxpack",
    info: "A Webpack plug-in with dashboard built with D3.js and React showing Webpack build stats (i.e. treeshakable modules, ).",
    info2:
      "Auxpack a configurable Webpack plugin that monitors statistics from your production builds. It allows developers to better understand bundle composition to get a better grasp on optimization strategies.",
    url: "",
    repo: "https://github.com/Auxpack/Auxpack",
  },
];
