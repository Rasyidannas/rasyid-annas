import { useContext } from "react";
import filterContext from "../../store/filter-context";
import ProjectItem from "./ProjectItem";

const data = [
  {
    title: "_single_price_grid",
    desc: "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ouvhkqeq9dhokut9payi.jpg",
    tags: ["html", "css"],
    urlLive: "https://peaceful-colden-822632.netlify.app/",
  },
  {
    title: "_qr_code",
    desc: "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/cybxdhr4wewlscvco9dd.jpg",
    tags: ["html", "css"],
    urlLive: "https://rasyidannas.github.io/Percobaan-16-FrontEnd-Mentor/",
  },
  {
    title: "_interactive_rating",
    desc: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/dm3s8oqtz0mwcaygqjhy.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://guileless-malabi-e6da4e.netlify.app/",
  },
  {
    title: "_age_calculator",
    desc: "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/jmzygkuazktqtg2akkkx.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://peppy-chaja-eb13fd.netlify.app/",
  },
  {
    title: "_interactive_pricing",
    desc: "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/pnoljknuewnetbngzmto.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://glittering-blini-0da88b.netlify.app/",
  },
  {
    title: "_multistep_form",
    desc: "An excellent test for your form-building and JS skills, this project will pose many challenges along the way to completion.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vxqbpnpbamodg5ioplbj.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://endearing-longma-c8021c.netlify.app/",
  },
];

function ProjectsContent() {
  const filterCtx = useContext(filterContext);
  const activeFilter = filterCtx.filters;

  const filteredItem = data.filter((item) =>
    activeFilter.every((filter) => item.tags.includes(filter))
  );

  return (
    <div className="w-full h-full flex flex-wrap gap-6 gap-y-10 p-12 overflow-y-scroll border-t border-lines-10">
      {filteredItem.map((item, i) => (
        <div key={i} className="project-card flex flex-col gap-4">
          <ProjectItem item={item} num={i} />
        </div>
      ))}

      {/* No Content */}
      {!filteredItem.length && (
        <div className="m-auto text-secondary-10">
          <p>not found file</p>
        </div>
      )}
    </div>
  );
}

export default ProjectsContent;
