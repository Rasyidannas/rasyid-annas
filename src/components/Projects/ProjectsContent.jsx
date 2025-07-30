import { useContext } from "react";
import filterContext from "../../store/filter-context";
import ProjectItem from "./ProjectItem";

const data = [
  {
    title: "_single_price_grid",
    desc: "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ouvhkqeq9dhokut9payi.jpg",
    pathImg: "/src/assets/projects/_single_price_grid.webp",
    tags: ["html", "css"],
    urlLive: "https://peaceful-colden-822632.netlify.app/",
  },
  {
    title: "_qr_code",
    desc: "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/cybxdhr4wewlscvco9dd.jpg",
    pathImg: "/src/assets/projects/_qr_code.webp",
    tags: ["html", "css"],
    urlLive: "https://rasyidannas.github.io/Percobaan-16-FrontEnd-Mentor/",
  },
  {
    title: "_interactive_rating",
    desc: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/dm3s8oqtz0mwcaygqjhy.jpg",
    pathImg: "/src/assets/projects/_interactive_rating.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://guileless-malabi-e6da4e.netlify.app/",
  },
  {
    title: "_age_calculator",
    desc: "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/jmzygkuazktqtg2akkkx.jpg",
    pathImg: "/src/assets/projects/_age_calculator.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://peppy-chaja-eb13fd.netlify.app/",
  },
  {
    title: "_interactive_pricing",
    desc: "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/pnoljknuewnetbngzmto.jpg",
    pathImg: "/src/assets/projects/_interactive_rating.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://glittering-blini-0da88b.netlify.app/",
  },
  {
    title: "_multistep_form",
    desc: "An excellent test for your form-building and JS skills, this project will pose many challenges along the way to completion.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vxqbpnpbamodg5ioplbj.jpg",
    pathImg: "/src/assets/projects/_multistep_form.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://endearing-longma-c8021c.netlify.app/",
  },
  {
    title: "_time_tracking_dashboard",
    desc: "A perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch, we provide a JSON data file to practice working with data.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/dgmrkrfyzvyzwuwl7vac.jpg",
    pathImg: "/src/assets/projects/_time_tracking_dashboard.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://time-tracking-frontendmentor.onrender.com/",
  },
  {
    title: "_space_tourism_multipage",
    desc: "This project is a fun collaboration with Scrimba and Kevin Powell! If you like, you can follow along and watch Kevin complete the project on Scrimba. Lots to learn!",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/x8skdsukkmwiwxejthio.jpg",
    pathImg: "/src/assets/projects/_space_tourism_multipage.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://incomparable-dragon-cd18f4.netlify.app/",
  },
  {
    title: "_todo_app",
    desc: "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/llcq9eiv3ney5tkxgdtu.jpg",
    pathImg: "/src/assets/projects/_todo_app.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://fantastic-monstera-f7a6b0.netlify.app/",
  },
  {
    title: "_ip_address_tracker",
    desc: "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    urlImg:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ld4kxbjoxpqpjenak8w6.jpg",
    pathImg: "/src/assets/projects/_ip_address_tracker.webp",
    tags: ["html", "css", "react"],
    urlLive: "https://sunny-snickerdoodle-c06a91.netlify.app/",
  },
  {
    title: "_yelp_camp",
    desc: "Practice Colt Steele's project YelpCamp, covers everything from HTML to Advanced JS.",
    urlImg: "",
    pathImg: "",
    tags: ["html", "css", "laravel"],
    urlLive: "https://yelpcamp-ftu6.onrender.com/camps",
  },
  {
    title: "_hacker_news",
    desc: "In this challenge, I'm using Hacker News API and I also redesigned this page own.",
    urlImg: "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/c3aa6b7bbdd4507757d6324160ae5eb8?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECfFxAQcpZFTK9Xt%2BI84YaIOXXVieyY8nQEP9aiwj%2FfAiEA8PCp67HKuLlcxD9bqUEplwJQlSjLAEy56BOUvJvPEhkqmQUIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDPB6iOXCy94FS5aIQyrtBExFVol5sllxZyFz7mOzp07JCarwGC5ua9FuNzOAW890St%2F2jSpjexqyqXvC3iIr6gtmVCcqn0Z7OQF2iTwKv3jazmkpgGgr1A8FkndLTbmo5YgxJrV15HBkcvm0zHhObFX2b72Wh9igVVQ22ShFo7pcN2KDk2hORF8fQXV8FxgIBW5Z%2BB2SJ%2BFY%2BPDaXMdfFztImkITMEVxwHtq9p%2F4%2Bs2kkIU72NsShqSfF2kfLAA42m%2F%2BpQOvuPWBXnaAYi7GEWPGqUiuMXQk1aPHNRvh6AEI6QTSnC79ymML12d7Mmz7CinNM%2F8WpJjFsheowkEv9i%2F2itxSFJALdQ3dfjW%2Few90WTmGoikcRIdzDK6%2Fi%2B2xo6i3qVE1W797zrE4%2BQvua72zz3cB7t14cPmKve2i%2FH57M2K0J1OQUM%2F4sS7V4qcJc5zbxxzdBVnwpXo7Wx5URSGETPdKDBN8%2BT9qsK8caRBf7uxquqoa8rRBwXIg9UKT0e%2Bj5eSWaSAS7CitWt3EMAI7Tq7sRtIyOgO%2BvWCUDXTwrcmK%2Bt3GqDwcKy11u%2BZisRx47otLQF31jHUHAnGt2sS6HyodIJLEKAwr6lMv8sVkBWfAOYqx0Ma%2FMiW0I91IyDFxw1OjcMPpXFMQOSbwhbbf%2BRJaeDUjbzuA%2FSsi0u4noBhie1HSnwMOZG%2BXQVdxRofH5cupG6e5JG1J11UGrH1Y9Qx5n%2Fot8Aet8Nosc5lHG%2BPt9IaE6VPvOVb9Jzl1jMQNgcpCZfY6Pe%2Bp9k1sfQC5QXBKbVFQn%2FLQVQGWzqN69K8Mx9Z1Z5lN3LlIGEvAP9bd4oFsmYCL3eEhRzDZlajEBjqbAWNNIG20gI%2BxdSWZ83X2ADoUsrvG1qGwYn5quj4QIQuo0gSuPhHkfuBhKb4RhC%2BPt1Qf7YQ4UB66ziUFhSHDd8HJkB3xx0trPyVV7wiiPORYDoPoxlAvJIzIN9An0LpGu6Tus96p1MqIanLcMghU3Uao8CtO%2Fsnyv%2FqaGqAk8PCdE24CHhseCs%2B%2BrgcQI9K9fO7hMAcaG3KReIiQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250730T121409Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5X2XYR2LZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ac53d618fc39297cb548c261beb87b2f1c99f06dd54b3096572a6113b70bbbdd",
    pathImg: "/src/assets/projects/hacker_news.jpg",
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
