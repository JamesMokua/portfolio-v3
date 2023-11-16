"use client"
import React, { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('https://submit-form.com/XxNABXLHj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        formValues,
      }),
    });
    alert('Form submitted');
  };

  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-[#7D8487]">
              Contact Me
            </h1>
            <p className="lg:w-2/3 sm:text-2xl mx-auto leading-relaxed text-base text-[#7D8487]">
             Let&apos;s work together.
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formValues.name}
                      onChange={onChange}
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formValues.email}
                      onChange={onChange}
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      onChange={onChange}
                      value={formValues.message}
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto sm:text-2xl    bg-[#1A1A1C]  rounded-2xl px-5 py-2  flex-col justify-start hover:cursor-pointer
                    transition-colors duration-500 ease-in-out hover:bg-[#E27625]  text-lg"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
