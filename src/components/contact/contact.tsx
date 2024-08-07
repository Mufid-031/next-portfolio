import * as React from "react";

export const Contact = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    return (
        <div className="flex flex-col justify-center h-screen w-[80%] mx-auto md:mx-0">
            <h1 className="text-[60px] dark:text-black text-white font-bold">Contact</h1>
            <form className="w-full max-w-xl mt-20">
                <div className="relative z-0 mb-10 w-full group">
                    <input className="block py-2.5 px-0 w-full text-sm dark:text-black text-white bg-transparent border-0 border-b-2 dark:border-black border-white appearance-none focus:outline-none focus:ring-0 peer" type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    <label className={`absolute text-2xl  dark:text-black text-white duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:top-0 ${name ? "top-0 text-gray-400" : "top-8"}`} htmlFor="name">Your name</label>
                </div>
                <div className="relative z-0 mb-10 w-full group">
                    <input className="block py-2.5 px-0 w-full text-sm dark:text-black text-white bg-transparent border-0 border-b-2 dark:border-black border-white appearance-none focus:outline-none focus:ring-0 peer" type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <label className={`absolute text-2xl dark:text-black text-white duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:top-0 ${email ? "top-0 text-gray-400" : "top-8"}`} htmlFor="email">Your email</label>
                </div>
                <div className="relative z-0 mb-10 w-full group">
                    <input className="block py-2.5 px-0 w-full text-sm dark:text-black text-white bg-transparent border-0 border-b-2 dark:border-black border-white appearance-none focus:outline-none focus:ring-0 peer" type="text" name="subject" id="subject" onChange={(e) => setSubject(e.target.value)} />
                    <label className={`absolute text-2xl dark:text-black text-white duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:top-0 ${subject ? "top-0 text-gray-400" : "top-8"}`} htmlFor="subject">subject</label>
                </div>
                <div className="relative z-0 mb-10 w-full group">
                    <textarea rows={4} className="block py-2.5 px-0 w-full text-sm dark:text-black text-white bg-transparent border-0 border-b-2 dark:border-black border-white appearance-none focus:outline-none focus:ring-0 peer" name="message" id="message" onChange={(e) => setMessage(e.target.value)} />
                    <label className={`absolute text-2xl dark:text-black text-white duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:top-0 ${message ? "top-0 text-gray-400" : "top-8"}`} htmlFor="message">Message</label>
                </div>
            </form>
        </div>
    );
}