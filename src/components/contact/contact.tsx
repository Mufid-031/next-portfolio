import * as React from "react";
import { useInView } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import Card3D from "../3D/Card.jsx";
import { Input } from "./Input";
import emailjs from "@emailjs/browser";

export const Contact = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const isInView = useInView(contactRef);
  const form = React.useRef<any>(null);

  const serviceID: any = process.env.SERVICE_ID_EMAILJS;
  const templateID: any = process.env.TEMPLATE_ID_EMAILJS;
  const publicKey: any = process.env.PUBLIC_KEY_EMAILJS;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("sending email...");
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  return (
    <section ref={contactRef} className="mt-10 min-h-screen flex flex-col md:flex-row dark:bg-white bg-[#1a1a1a]">
      {isInView && <Card3D />}
      <div className="flex flex-col justify-center h-screen w-[80%] mx-auto md:mx-0">
        <h1 className="text-[60px] dark:text-black text-white font-bold">Contact</h1>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl mt-20">
          <Input label="Your name" input type="text" id="name" state={name} setState={setName} />
          <Input label="Your email" input type="email" id="email" state={email} setState={setEmail} />
          <Input label="Subject" input type="text" id="subject" state={subject} setState={setSubject} />
          <Input label="Message" textarea type="text" id="message" state={message} setState={setMessage} />
          <button type="submit" className="flex justify-center items-center gap-1 w-[100px] bg-white dark:bg-[#0d0d0d] text-black dark:text-white font-bold py-2 px-4 rounded">
            <MdOutlineMail size={20} />
            <p>{isLoading ? "Sending..." : "Send"}</p>
          </button>
        </form>
      </div>
    </section>
  );
};
