import * as React from "react";
import Card3D from "../3D/card";
import { useInView } from "framer-motion";
import { Input } from "./input";

export const Contact = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="mt-10 min-h-screen flex flex-col md:flex-row dark:bg-white bg-[#1a1a1a]">
      {isInView && <Card3D />}
      <div className="flex flex-col justify-center h-screen w-[80%] mx-auto md:mx-0">
        <h1 className="text-[60px] dark:text-black text-white font-bold">Contact</h1>
        <form className="w-full max-w-xl mt-20">
          <Input label="Your name" input type="text" id="name" state={name} setState={setName} />
          <Input label="Your email" input type="email" id="email" state={email} setState={setEmail} />
          <Input label="Subject" input type="text" id="subject" state={subject} setState={setSubject} />
          <Input label="Message" textarea type="text" id="message" state={message} setState={setMessage} />
        </form>
      </div>
    </section>
  );
};
