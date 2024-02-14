import React from "react";
import ContactNav from "../components/Contact/ContactNav";
import ContactTab from "../components/Contact/ContactTab";
import ContactForm from "../components/Contact/ContactForm";
import ContactContent from "../components/Contact/ContactContent";
import ContactProvider from "../store/ContactProvider";

const Contact = () => {
  return (
    <ContactProvider>
      <section className="flex w-full h-full">
        <ContactNav className="w-1/4" />

        <div className="flex flex-col w-[35%]">
          {/* Tab */}
          <ContactTab />

          {/* Form */}
          <ContactForm />
        </div>
        <ContactContent className="w-[40%]" />
      </section>
    </ContactProvider>
  );
};

export default Contact;

//send email function
function sendEmail(subject, body) {
  const mailtoLink = `mailto:rasshit.dsgn@gmial.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the default email client with the mailto link
  window.location.href = mailtoLink;
}

export async function action({ request }) {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  if (name && email) {
    sendEmail(
      "message_for_rasyid-annas",
      `${name} - ${email}, \n message: ${message}`
    );
    return {
      title: "Thank you! 🤘",
      message:
        "Your message has been accepted. You will recieve answer really soon!",
    };
  }
  console.log(email, name, message);
  return {
    title: "Sorry, try again!",
    message: "Your message has not been accepted",
  };
}
