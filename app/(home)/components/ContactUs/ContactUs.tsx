'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { ContactUsProps } from 'common/types';

interface FormData {
  subject: string;
  name: string;
  email: string;
  message: string;
  termsAccepted: boolean;
}

const ContactUs = ({ title, subtitle }: ContactUsProps) => {
  const [formData, setFormData] = useState<FormData>({
    subject: '',
    name: '',
    email: '',
    message: '',
    termsAccepted: false,
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('formData', formData);
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Email sent successfully');
      setFormData({
        subject: '',
        name: '',
        email: '',
        message: '',
        termsAccepted: false,
      });
    } else {
      console.error('Failed to send email');
    }
  };

  return (
    <section className="purple-gradient py-16 text-white lg:py-24" id="contact">
      <div className="container ">
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading animated text-4xl font-bold">
              {title}
            </h2>
            <p className="text-blueGray-400 animated">{subtitle}</p>
          </div>

          <div>
            <form onSubmit={sendEmail}>
              <div className="animated -mx-3 mb-4 flex flex-wrap">
                <div className="mb-4 w-full px-3 lg:mb-0 lg:w-1/2">
                  <div className="mb-4">
                    <input
                      className="bg-blueGray-50 w-full rounded p-4 text-xs font-semibold leading-none outline-none"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="bg-blueGray-50 w-full rounded p-4 text-xs font-semibold leading-none outline-none"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="bg-blueGray-50 w-full rounded p-4 text-xs font-semibold leading-none outline-none"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Seu email"
                    />
                  </div>
                  <div>
                    <label className="bg-blueGray-50 flex rounded px-2">
                      <input
                        className="hidden"
                        type="file"
                        name="Choose file"
                      />
                      <span className="bg-blueGray-500 hover:bg-blueGray-600 my-1 ml-auto cursor-pointer rounded px-4 py-3 text-xs font-semibold leading-none text-white">
                        {' '}
                        Anexos
                      </span>
                    </label>
                  </div>
                </div>
                <div className="w-full px-3 lg:w-1/2">
                  <textarea
                    className="bg-blueGray-50 size-full resize-none rounded p-4 text-xs font-semibold leading-none outline-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensagem..."
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label>
                  <input
                    className="mr-1"
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  <span className="text-sm font-semibold">
                    Concordo com os termos e condições.
                  </span>
                </label>
                <button
                  className="rounded border border-white bg-transparent px-8 py-4 text-sm font-semibold leading-none text-white hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                  type="submit"
                  aria-label="Enviar"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
