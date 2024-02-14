import { useFetcher } from "react-router-dom";
import TextField from "../UI/TextField";
import { useContext, useEffect, useState } from "react";
import TextArea from "../UI/TextArea";
import useInput from "../../hooks/use-input";
import ContactContext from "../../store/contact-context";

const ContactForm = () => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      setFormSuccess(true);
    }
  }, [data, state]);

  //validation for form
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: resetNameHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: resetEmailHandler,
  } = useInput(isEmail);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    resetHandler: resetMessageHandler,
  } = useInput(isNotEmpty);

  //this is for context
  const contactCtx = useContext(ContactContext);
  console.log(contactCtx);

  useEffect(() => {
    contactCtx.setName(nameValue);
    contactCtx.setEmail(emailValue);
    contactCtx.setMessage(messageValue);
  }, [nameValue, emailValue, messageValue]);

  return (
    <div className="border-t border-lines-10 overflow-y-scroll">
      {formSuccess ? (
        <div className="text-center flex flex-col gap-3 mt-8">
          <h2 className=" text-subheadline">{data.title}</h2>
          <p className="text-body text-secondary-10">{data.message}</p>
          <a
            href="/contact"
            className="px-4 py-2 bg-lines-10 rounded-lg mt-6 disabled:opacity-40 self-center"
          >
            send-new-message
          </a>
        </div>
      ) : (
        <fetcher.Form
          method="post"
          action="/contact"
          className="w-72 mx-auto mt-8 flex flex-col gap-4"
        >
          <TextField
            id="name"
            label="_name:"
            placeholder="enter your full name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            hasError={nameHasError}
            required={true}
          />
          <TextField
            id="email"
            label="_email:"
            placeholder="example@email.com"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            hasError={emailHasError}
            required={true}
          />
          <TextArea
            id="message"
            label="_message:"
            placeholder="write your message"
            cols="70"
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            required={true}
          />
          <button
            className="px-4 py-2 bg-lines-10 rounded-lg mt-6 disabled:opacity-40"
            disabled={!nameIsValid || !emailIsValid}
          >
            submit-message
          </button>
        </fetcher.Form>
      )}
    </div>
  );
};

export default ContactForm;
