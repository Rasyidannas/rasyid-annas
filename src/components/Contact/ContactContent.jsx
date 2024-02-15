import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";
import { useContext, useEffect } from "react";
import ContactContext from "../../store/contact-context";

function ContactContent({ className }) {
  const contactCtx = useContext(ContactContext);

  const name = contactCtx.name;
  const email = contactCtx.email;
  const message = contactCtx.message;

  useEffect(() => {
    hljs.highlightAll();
  }, [name, email, message]);

  const markdown = `\`\`\`javascript
  const button = document.querySelector('#sendBtn');

  const message = {
   name: "${name}",
   email: "${email}",
   message: "${message}"
  }

  button.addEventListener('click', () => {
   form.send(message);
  });
\`\`\``;

  return (
    <div
      className={`border-l border-lines-10 ${className} bg-primary-30 hidden lg:flex flex-col`}
    >
      <div className="h-12 flex-none flex items-center px-4 border-r border-lines-10 bg-primary-20">
        <h2>contact_info</h2>
      </div>

      <div
        className="contact-code h-full"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
}

export default ContactContent;
