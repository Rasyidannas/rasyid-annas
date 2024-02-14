import { createContext } from "react";

const ContactContext = createContext({
  name: "",
  email: "",
  message: "",
  setName: (value) => {},
  setEmail: (value) => {},
  setMessage: (value) => {},
});

export default ContactContext;
