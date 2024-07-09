'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
  subject: string;
  name: string;
  email: string;
  message: string;
  termsAccepted: boolean;
}

const Contact = () => {
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
    <section className="bg-custom-gradient py-20 text-white" id="contact">
      <div className="container ">
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading animated text-4xl font-bold">
              Entre em contato
            </h2>
            <p className="text-blueGray-400 animated">
              Teremos o maior prazer em ouvi-lo
            </p>
          </div>
          <div className="-mx-3 flex flex-wrap text-center">
            <div className="animated mb-12 w-1/2 px-3 lg:w-1/3">
              <svg
                className="mx-auto mb-6 size-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-blueGray-400 text-sm">Telefone</span>
                <p>41 54430-309</p>
                <p>41 65320-309</p>
              </div>
            </div>
            <div className="animated mb-12 w-1/2 px-3 lg:w-1/3">
              <svg
                className="mx-auto mb-6 size-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-blueGray-400 text-sm">E-mail</span>
                <p>falecomigo@gmail.com</p>
                <p>pat@example.com</p>
              </div>
            </div>
            <div className="animated mb-12 w-full px-3 lg:w-1/3">
              <svg
                className="mx-auto mb-6 size-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-blueGray-400 text-sm">Endereço</span>
                <p>15 de abril</p>
                <p>Curitiba/PR, 83311777</p>
              </div>
            </div>
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

export default Contact;
