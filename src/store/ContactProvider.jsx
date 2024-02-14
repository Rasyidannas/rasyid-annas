import { useReducer } from "react";
import ContactContext from "./contact-context";

const defaultContactState = { name: "", email: "", message: "" };

const contactReducer = (state, action) => {
  if (action.type === "NAME") {
    return {
      ...state,
      name: action.value,
    };
  }

  if (action.type === "EMAIL") {
    return {
      ...state,
      email: action.value,
    };
  }

  if (action.type === "MESSAGE") {
    return {
      ...state,
      message: action.value,
    };
  }
};

function ContactProvider({ children }) {
  const [contactState, dispatchContactAction] = useReducer(
    contactReducer,
    defaultContactState
  );

  const setNameHandler = (value) => {
    dispatchContactAction({ type: "NAME", value: value });
  };

  const setEmailHandler = (value) => {
    dispatchContactAction({ type: "EMAIL", value: value });
  };

  const setMessageHandler = (value) => {
    dispatchContactAction({ type: "MESSAGE", value: value });
  };

  const contactContext = {
    name: contactState.name,
    email: contactState.email,
    message: contactState.message,
    setName: setNameHandler,
    setEmail: setEmailHandler,
    setMessage: setMessageHandler,
  };

  return (
    <ContactContext.Provider value={contactContext}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
