import { images, toolIcons } from "../constants";

export const works = [
  {
    title: "app for passing programming tests",
    description: `its is website main purpose of it is passing tests on programing
     languages(makes code formatted like in code editor) has big descriptive main page with good design. 
  possibility to chose some category and then tests
      from this category, separate pages for all tests, and all categories, and test by one categories, for 
      can perform both multi-answer question as well as on answer question. For convenience added breadcrumb component,
       so user an go back to previous pages`,
    imgUrls: [images.tests2, images.tests1, images.tests4],
    projectLink: "https://interviewboom.com/",
    codeLink:
      "https://bitbucket.org/modelfak27/interview-public/commits/branch/develop",

    tags: ["React JS"],
    tools: [
      toolIcons.TbBrandNextjs,
      toolIcons.SiTypescript,
      toolIcons.TbBrandSass,
    ],
  },
  {
    title: "Streaming service",
    description: `presenting part of streaming service, user can watch movies
     list, details of single show, 
      filter movies by different categories, he can choose several categories to filter, 
       register and log in, only registered users can add movies to favorites add movies to favorites, 
       they  have their private cabinet where they can watch list of movies, they liked. 
       You can also see the list of all registered users `,
    imgUrls: [images.stream, images.stream2, images.stream3],
    projectLink: "https://streaming-service2.vercel.app",
    codeLink: "https://gitlab.com/MariaBoi/streaming-service2",
    tags: ["React JS"],
    tools: [toolIcons.DiNodejs],
  },
  {
    title: "Table with memoization",
    description: `It is web app main purpose of which is using memoization working with large-sized table, 
    it highlights values(amount user can specify in X-input) most close to cell, 
    user is hovering, memoization helps boost performance, 
    since react does not re-render every cell, but only the cells whose color should change.
    At the end of each row there is a cell with the sum of all elements in a row, 
    when hovering on this cell all cells in this row change percentage of its contribution to the total sum of the row
    Below each column the is a cell which shows average amount of the column.
    After clicking the cell in table value of a cell is incremented by one, sum of the roe and average value of column also changes.`,
    imgUrls: [images.table, images.table2, images.table3],
    projectLink: "https://table-henna.vercel.app",
    codeLink: "https://gitlab.com/MariaBoi/streaming-service2",

    tags: ["React JS"],
    tools: [toolIcons.SiTypescript],
  },
];
