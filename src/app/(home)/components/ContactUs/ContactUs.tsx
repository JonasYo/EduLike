'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { toast } from 'react-toastify';

import { ContactUsProps } from 'common/types';
import { CustomTitle } from 'components';
import useDeviceDetection from 'hooks/useDeviceDetection';

interface FormData {
  subject: string;
  name: string;
  email: string;
  message: string;
}

const ContactUs = ({ title, subtitle }: ContactUsProps) => {
  const { isMobile } = useDeviceDetection();

  const [formData, setFormData] = useState<FormData>({
    subject: '',
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setIsLoading(false);

    if (response.ok) {
      setFormData({
        subject: '',
        name: '',
        email: '',
        message: '',
      });
      toast.dark('Email enviado com sucesso! 👌');
      return;
    }

    console.error('Failed to send email');
    toast.dark('Algo deu errado 😞. Tente novamente mais tarde.');
  };

  return (
    <section className="bg-white py-16 lg:py-28" id="contact">
      <div className="container" data-aos="fade-up">
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          <div className="mb-12 text-black">
            {title && (
              <CustomTitle
                title={title}
                partTextColor="text-secondary-500"
                styles="mx-auto max-w-7xl pl-4 text-center font-sans text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl"
              />
            )}
            {subtitle && (
              <p className="animated mx-auto mt-4 max-w-xl text-center font-sans text-sm font-normal text-[#645e80] md:text-base">
                {subtitle}
              </p>
            )}
          </div>

          <div>
            <form onSubmit={sendEmail}>
              <div className="animated -mx-3 mb-4 flex flex-wrap">
                <div className="mb-4 w-full px-3 lg:mb-0 lg:w-1/2">
                  <div className="mb-4">
                    <input
                      className="w-full rounded-xl bg-[#F7F5FF] p-4 text-sm font-semibold leading-none text-black outline-none"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full rounded-xl bg-[#F7F5FF] p-4 text-sm font-semibold leading-none text-black outline-none"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Seu email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full rounded-xl bg-[#F7F5FF] p-4 text-sm font-semibold leading-none text-black outline-none"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto"
                    />
                  </div>

                  {!isMobile && (
                    <div className="flex items-center justify-between">
                      <button
                        className="text-md max-h-12 w-full rounded-xl bg-[#8472EC] px-8 py-4 font-semibold leading-none text-white hover:opacity-90 disabled:opacity-50"
                        type="submit"
                        aria-label="Enviar"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="mx-auto size-5 animate-spin rounded-full border-b-2 border-current" />
                        ) : (
                          'Enviar'
                        )}
                      </button>
                    </div>
                  )}
                </div>

                <div className="w-full px-3 lg:w-1/2">
                  <textarea
                    className="size-full resize-none rounded-xl bg-[#F7F5FF] p-4 text-sm font-semibold leading-none text-black outline-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensagem..."
                  ></textarea>
                </div>
              </div>

              {isMobile && (
                <div className="flex items-center justify-between">
                  <button
                    className="text-md max-h-12 w-full justify-items-center rounded-xl bg-[#8472EC] px-8 py-4 font-semibold leading-none text-white hover:opacity-90 disabled:opacity-50"
                    type="submit"
                    aria-label="Enviar"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="size-5 animate-spin rounded-full border-b-2 border-current" />
                    ) : (
                      'Enviar'
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
