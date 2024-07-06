import Link from "next/link"
import React from "react";

const Footer = () => {
    return (
      <>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="-mx-3 mb-12 flex flex-wrap text-center lg:mb-20 lg:text-left">
              <div className="mb-6 w-full px-3 lg:mb-0 lg:w-1/5">
                <Link href="/">
                  <p className="mx-auto inline-block text-3xl font-semibold leading-none lg:mx-0">
                    <img className="h-10" src="/media-logo.png" alt="Monst" />
                  </p>
                </Link>
              </div>
              
              <div className="mb-8 w-full lg:mb-0 lg:w-2/5">
                <p className="text-blueGray-400 mx-auto max-w-md leading-relaxed lg:mx-0 lg:max-w-full lg:text-lg">
                  Ajudando você a <strong>maximizar</strong> o gerenciamento de operações com a digitalização
                </p>
              </div>

              <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/5">
                <p className="font-heading text-blueGray-800 mb-2 font-bold lg:mb-4 lg:text-lg">Experimento 636</p>
                <p className="text-blueGray-400 lg:text-lg">Rua Alameda, 234, Curitiba/PR</p>
              </div>
              <div className="w-full px-3 lg:w-1/5">
                <p className="font-heading text-blueGray-800 mb-2 font-bold lg:mb-4 lg:text-lg">Jonas</p>

                <p className="text-blueGray-400 lg:text-lg">jonas@gmail.no</p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <p className="text-blueGray-400 text-sm">
                &copy; 2024. All rights reserved. Designed by{" "}
                <a
                  className="text-primary-400"
                  href="https://lp-portfolio-frontend-cvtmosbr9-jonasyo.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jonas Marcelino
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    )
};

export default Footer;
