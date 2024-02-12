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
  {
    title: "_time_tracking_dashboard",
    desc: "A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/dgmrkrfyzvyzwuwl7vac.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://time-tracking-frontendmentor.onrender.com/",
  },
  {
    title: "_space_tourism_multipage",
    desc: "This project is a fun collaboration with Scrimba and Kevin Powell! If you like, you can follow along and watch Kevin complete the project on Scrimba. Lots to learn!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/x8skdsukkmwiwxejthio.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://incomparable-dragon-cd18f4.netlify.app/",
  },
  {
    title: "_todo_app",
    desc: "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/llcq9eiv3ney5tkxgdtu.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://fantastic-monstera-f7a6b0.netlify.app/",
  },
  {
    title: "_ip_address_tracker",
    desc: "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ld4kxbjoxpqpjenak8w6.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://sunny-snickerdoodle-c06a91.netlify.app/",
  },
  {
    title: "_yelp_camp",
    desc: "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    urlImg:
      "https://codewell-storage-bucket.s3.us-east-2.amazonaws.com/Yelp_Camp_Slider_Thumbnail_2_e9c095623e.jpg",
    tags: ["html", "css", "laravel"],
    urlLive: "https://yelpcamp-ftu6.onrender.com/camps",
  },
  {
    title: "_hacker_news",
    desc: "In this challenge, I'm using Hacker News API and I also redesigned this page own.",
    urlImg: "https://i.ibb.co/P5b1bTk/Hacker-News-Thumb.jpg",
    tags: ["html", "css", "react"],
    urlLive: "https://eclectic-chebakia-9338c1.netlify.app/",
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
