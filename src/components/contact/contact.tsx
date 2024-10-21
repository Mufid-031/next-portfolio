"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import Card3D from "../3D/Card";
import { Input } from "./Input";
import { ControllsAnimationType } from "@/types/controllsAnimation.type";
import { useControllsAnimation } from "@/hooks/useControllsAnimation";
import { VariantAnimationProps } from "@/types/variantAnimation.type";
import { useVariantAnimation } from "@/hooks/useVariantAnimation";
import { useSectionRefContext } from "@/contexts/sectionRefContext";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { contactRef } = useSectionRefContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const publicKey = process.env.PUBLIC_KEY;
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(serviceId!, templateId!, form.current!, {
      publicKey: publicKey,
    })
      .then(() => {
        console.log("Email sent!");
        setIsLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    );
  };

  const isInView = useInView(contactRef);
  const ctrls = useAnimation();
  const form = useRef<HTMLFormElement | null>(null);

  const controllsAnimation: ControllsAnimationType = {
    ctrls,
    isInView,
    once: true,
  };

  useControllsAnimation(controllsAnimation);

  const animationProps: VariantAnimationProps = {
    isX: true,
    value: 0,
    duration: 1,
  };

  const animation = useVariantAnimation(animationProps);

  return (
    <section ref={contactRef} className="mt-10 min-h-screen flex flex-col md:flex-row dark:bg-white bg-[#1a1a1a]">
      {isInView && <Card3D />}
      <motion.div initial="hidden" variants={animation} animate={ctrls} className="flex flex-col justify-center h-screen w-[80%] mx-auto md:mx-0">
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
      </motion.div>
    </section>
  );
};

