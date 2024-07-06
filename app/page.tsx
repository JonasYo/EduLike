"use client"

import { Metadata } from "next"
import { Button } from "components/Button/Button"
import CounterUp from "components/CenterUp/CenterUp"
import React, { useState, ChangeEvent, FormEvent } from "react"

import Layout from "../components/layout/Layout"
import TextEffect from "../components/TextEffect/TextEffect"
import useDeviceDetection from "hooks/useDeviceDetection"

// export const metadata: Metadata = {
//   title: "Next.js Enterprise Boilerplate",
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     url: "https://next-enterprise.vercel.app/",
//     images: [
//       {
//         width: 1200,
//         height: 630,
//         url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
//       },
//     ],
//   },
// }

interface FormData {
  subject: string
  name: string
  email: string
  message: string
  termsAccepted: boolean
}

export default function Web() {
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  })
  const { isMobile } = useDeviceDetection()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }))
  }

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("formData", formData)
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      console.log("Email sent successfully")
      setFormData({
        subject: "",
        name: "",
        email: "",
        message: "",
        termsAccepted: false,
      })
    } else {
      console.error("Failed to send email")
    }
  }

  return (
    <>
      <Layout>
        <section
          className="relative -mt-24 bg-cover bg-top bg-no-repeat pb-8 pt-24"
          style={{ backgroundImage: "url('assets/imgs/placeholders/banner.webp')" }}
        >
          <div className="container flex min-h-[72vh] flex-col justify-center">
            <div className="montserrat py-12 text-center">
              <div className="mx-auto mb-8 max-w-3xl">
                <p className="text-3xl leading-relaxed md:text-3xl  lg:text-4xl">
                  Soluções de{" "}
                  <strong className="">
                    <br className="md:hidden" />
                    marketing digital
                  </strong>
                  <br />
                  que geram {isMobile && <br />}
                  <span className="typewrite d-inline text-brand text-primary-500">
                    <TextEffect texts={["equity de marca", "credibilidade", "conversões"]} />
                  </span>
                </p>
              </div>
            </div>

            {/* <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center pb-4 pt-12">
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
            </div> */}
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="mx-auto flex flex-wrap lg:max-w-sm">
                <div className="hover-up-5 mb-4 w-1/2 md:w-1/3 lg:w-full">
                  <div className="rounded border border-gray-100 bg-white px-6 pb-8 pt-10 text-center shadow">
                    <div className="mx-auto mb-4 text-primary-500">
                      <svg
                        className="mx-auto size-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-heading mb-2 font-bold">Criatividade</h3>
                    <p className="text-blueGray-400 text-sm leading-loose">
                      Estamos em busca de ideias inovadoras e soluções criativas para transformar sua visão em
                      realidade.
                    </p>
                  </div>
                </div>
                <div className="hover-up-5 w-1/2 md:w-1/3 lg:w-full">
                  <div className="rounded border border-gray-100 bg-white px-6 pb-8 pt-10 text-center shadow">
                    <div className="mx-auto mb-4 text-primary-500">
                      <svg
                        className="mx-auto size-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-heading mb-2 font-bold">Início do Projeto</h3>
                    <p className="text-blueGray-400 text-sm leading-loose">
                      Dê o pontapé inicial no seu projeto com uma abordagem estratégica e planejada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto">
                <div className="lg:pl-16">
                  <div className="mb-4">
                    <span className="rounded-xl bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                      Por que nos escolher
                    </span>
                    <h2 className="font-heading mt-3 text-4xl font-bold">Principais recursos</h2>
                  </div>

                  <div className="flex items-start py-4">
                    <div className="mr-5 w-8 text-primary-500">
                      <svg
                        className="size-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading mb-2 text-xl font-semibold">Expanda Seu Alcance</h3>
                      <p className="text-blueGray-400 leading-loose">
                        Amplie o impacto da sua presença digital e conquiste novos mercados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start py-4">
                    <div className="mr-5 w-8 text-primary-500">
                      <svg
                        className="size-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading mb-2 text-xl font-semibold">Crescimento Anual</h3>
                      <p className="text-blueGray-400 leading-loose">
                        Experimente um crescimento anual contínuo e sustentável.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start py-4">
                    <div className="mr-5 w-8 text-primary-500">
                      <svg
                        className="size-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading mb-2 text-xl font-semibold">Agende Seus Profissionais</h3>
                      <p className="text-blueGray-400 leading-loose">
                        Organize metas e maximize a produtividade com eficiência e facilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-top bg-no-repeat py-20 xl:bg-contain"
          style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
          id="about"
        >
          <div className="container">
            <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
              <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
                <h2 className="font-heading text-3xl font-bold md:text-4xl">
                  <span>Quem </span>
                  <span className="text-primary-500">somos </span>
                  <span>e o que </span>
                  <br />
                  <span className="text-primary-500">fazemos</span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-blueGray-400 leading-loose">
                  A Experimento 636 é a especializada em inbound marketing para instituições de ensino, a Experimento
                  636 tem um papel cada vez mais relevante no mercado educacional. Mais que uma agência, buscamos a
                  transformação digital da prestação dos serviços educacionais, por meio de uma comunicação eficiente e
                  da divulgação e valorização do trabalho pedagógico, promovendo o fortalecimento da marca da escola e a
                  retenção e captação de alunos.
                </p>
              </div>
            </div>
            <div className="-mx-3 -mb-6 flex flex-wrap text-center">
              <div className="hover-up-5 mb-6 w-full px-3 md:w-1/2 lg:w-1/3">
                <div className="rounded bg-white p-10 shadow">
                  <img className="mx-auto my-4 h-36" src="/assets/imgs/illustrations/eating.svg" alt="Imagem" />
                  <h3 className="font-heading mb-2 text-xl font-bold">FUNIL DE VENDAS</h3>
                  <p className="text-blueGray-400 text-sm leading-relaxed">
                    Utilizamos o modelo de funil de vendas que é uma forma estruturada de atrair leads qualificados
                    (clientes em potencial) por meio de estratégias de inbound marketing (marketing pela internet),
                    acompanhando a sua jornada.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 mb-6 w-full px-3 md:w-1/2 lg:w-1/3">
                <div className="rounded bg-white p-10 shadow">
                  <img className="mx-auto my-4 h-36" src="/assets/imgs/illustrations/space.svg" alt="Imagem" />
                  <h3 className="font-heading mb-2 text-xl font-bold">AUTOMAÇÃO</h3>
                  <p className="text-blueGray-400 text-sm leading-relaxed">
                    Os recursos de automação auxiliam na gestão do inbound marketing, por meio do controle dos leads nas
                    etapas do funil de vendas e a mensuração dos resultados, para que os objetivos da instituição sejam
                    alcançados.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 mb-6 w-full px-3 lg:w-1/3">
                <div className="rounded bg-white p-10 shadow">
                  <img className="mx-auto my-4 h-36" src="/assets/imgs/illustrations/tasks.svg" alt="Imagem" />
                  <h3 className="font-heading mb-2 text-xl font-bold">MARKETING DE CONTEÚDO</h3>
                  <p className="text-blueGray-400 text-sm leading-relaxed">
                    As instituições de ensino naturalmente são produtoras de conteúdo relevante. A Rabbit Digital
                    auxilia nas publicações por meio de um planejamento de postagens nas redes sociais, no blog e no
                    site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 pb-20" id="services">
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-heading my-2 text-3xl font-bold md:text-4xl">
                Serviços digitais <br />
                <span className="text-primary-500">mais completos do mercado</span>
              </h2>
              {/* <p className="text-blueGray-400 leading-loose">mais completos do mercado</p> */}
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Consultoria em TI</h3>
                  <p className="text-blueGray-400 text-sm">
                    Na Consultoria em TI, entendemos que a interação da marca é fundamental para a comunicação.
                    Realmente, inovações e uma experiência positiva do cliente são o cerne do sucesso.
                  </p>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Desenvolvimento Web</h3>
                  <p className="text-blueGray-400 text-sm">
                    No Desenvolvimento Web, compreendemos que a interação da marca é crucial para a comunicação. De
                    fato, inovações reais e uma experiência positiva do cliente são o coração do sucesso.
                  </p>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Desenvolvimento de Aplicativos</h3>
                  <p className="text-blueGray-400 text-sm">
                    No Desenvolvimento de Aplicativos, reconhecemos que a interação da marca é essencial para a
                    comunicação. De fato, inovações reais e uma experiência positiva do cliente são a essência do
                    sucesso.
                  </p>
                </div>
              </div>
              <div className="mb-8 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Marketing Digital</h3>
                  <p className="text-blueGray-400 text-sm">
                    No Marketing Digital, acreditamos que a interação da marca é vital para a comunicação. Realmente,
                    inovações e uma experiência positiva do cliente são o centro do sucesso.
                  </p>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Soluções Certas</h3>
                  <p className="text-blueGray-400 text-sm">
                    Nas Soluções Certas, entendemos que a interação da marca é crucial para a comunicação. Realmente,
                    inovações e uma experiência positiva do cliente são o coração do sucesso.
                  </p>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Site Responsivo</h3>
                  <p className="text-blueGray-400 text-sm">
                    No Site Responsivo, reconhecemos que a interação da marca é essencial para a comunicação. De fato,
                    inovações reais e uma experiência positiva do cliente são a essência do sucesso.
                  </p>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Design Limpo</h3>
                  <p className="text-blueGray-400 text-sm">
                    No Design Limpo, acreditamos que a interação da marca é vital para a comunicação. Realmente,
                    inovações e uma experiência positiva do cliente são o centro do sucesso.
                  </p>
                </div>
              </div>
              <div className="mb-6 w-full px-3 md:w-1/2 lg:w-1/4">
                <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                  <div className="mx-auto mb-4 text-primary-500">
                    <svg
                      className="mx-auto size-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="font-heading mb-2 font-bold">Pesquisa de Processos</h3>
                  <p className="text-blueGray-400 text-sm">
                    Na Pesquisa de Processos, entendemos que a interação da marca é crucial para a comunicação.
                    Realmente, inovações e uma experiência positiva do cliente são o coração do sucesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-4">
          <div className="container">
            <div className="flex flex-wrap justify-between px-3 pb-16 pt-8">
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
                data-wow-delay=".2s"
              >
                <div className="bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-primary-500 sm:h-20 sm:w-20">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 sm:ml-6 sm:py-2">
                  <div className="flex">
                    <span className="font-heading font-bold sm:text-2xl">+ </span>
                    <span className="font-heading count font-bold sm:text-2xl">
                      <CounterUp count={150} time={3} />
                    </span>
                  </div>
                  <p className="text-blueGray-400 text-xs sm:text-base">Parceiros</p>
                </div>
              </div>
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
                data-wow-delay=".4s"
              >
                <div className="bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-primary-500 sm:h-20 sm:w-20">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 sm:ml-6 sm:py-2">
                  <div className="flex">
                    <span className="font-heading font-bold sm:text-2xl">+ </span>
                    <span className="font-heading count font-bold sm:text-2xl">
                      <CounterUp count={58} time={3} />
                    </span>
                    <span className="font-heading font-bold sm:text-2xl"> k </span>
                  </div>
                  <p className="text-blueGray-400 text-xs sm:text-base">Projetos completados</p>
                </div>
              </div>
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
                data-wow-delay=".6s"
              >
                <div className="bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-primary-500 sm:h-20 sm:w-20">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 sm:ml-6 sm:py-2">
                  <div className="flex">
                    <span className="font-heading font-bold sm:text-2xl">+ </span>
                    <span className="font-heading count font-bold sm:text-2xl">
                      <CounterUp count={500} time={3} />
                    </span>
                  </div>
                  <p className="text-blueGray-400 text-xs sm:text-base">Clientes Felizes</p>
                </div>
              </div>
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
                data-wow-delay=".8s"
              >
                <div className="bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-primary-500 sm:h-20 sm:w-20">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-2 sm:ml-6 sm:py-2">
                  <div className="flex">
                    <span className="font-heading font-bold sm:text-2xl">+ </span>
                    <span className="font-heading count font-bold sm:text-2xl">
                      <CounterUp count={320} time={3} />
                    </span>
                  </div>
                  <p className="text-blueGray-400 text-xs sm:text-base">Trabalho de Pesquisa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-custom-gradient py-20 text-white" id="contact">
          <div className="container ">
            <div className="mx-auto max-w-2xl lg:max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="font-heading animated text-4xl font-bold">Entre em contato</h2>
                <p className="text-blueGray-400 animated">Teremos o maior prazer em ouvi-lo</p>
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
                          <input className="hidden" type="file" name="Choose file" />
                          <span className="bg-blueGray-500 hover:bg-blueGray-600 my-1 ml-auto cursor-pointer rounded px-4 py-3 text-xs font-semibold leading-none text-white">
                            {" "}
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
                      <span className="text-sm font-semibold">Concordo com os termos e condições.</span>
                    </label>
                    <button
                      className="rounded border border-white bg-transparent px-8 py-4 text-sm font-semibold leading-none text-white hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
