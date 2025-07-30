import { useEffect, useState } from "react";
import ExperienceHeader from "./ExperienceHeader";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";
import Button from "../UI/Button";

function ExperienceItem({ client }) {
  const [expanded, setExpanded] = useState(false);

  const expandedHandler = (value) => {
    setExpanded(value);
  };

  const closeExpandedHandler = () => {
    setExpanded(false);
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const markdown = `\`\`\`php
    class StoryaCompany extends Experience {
      public $role, $testimonials;
      
      public function __construct($title, $testimonials) {
         $this->role = $role;
         $this->testimonials = $testimonials;
      }
    }
  \`\`\``;

  return (
    <div className="flex flex-col gap-4 mt-3">
      <ExperienceHeader client={client} onRunning={expandedHandler} />

      {/* code editor */}
      <div
        className="experience-code"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>

      {expanded && (
        <div className="flex gap-4 border-t border-lines-10 pt-3">
          <div className="text-code text-secondary-10 opacity-70 italic">
            <p>{client.testimonials}</p>
            <span className="text-secondary-40 not-italic">
              {" "}
              [as {client.role}]
            </span>
          </div>
          <Button
            onClick={closeExpandedHandler}
            className="self-start p-1 hover:text-secondary-40 transition-all"
          >
            <i className="ri-close-fill"></i>
          </Button>
        </div>
      )}
    </div>
  );
}

export default ExperienceItem;
