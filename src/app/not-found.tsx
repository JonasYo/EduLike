import Image from 'next/image';
import Link from 'next/link';

import Layout from '../components/layout/Layout';

const NotFound = () => {
  return (
    <>
      <Layout>
        <section className="pb-32 pt-20">
          <div className="container text-center">
            <div className="mx-auto mb-4 md:max-w-md">
              <Image
                src="/assets/imgs/illustrations/error2.png"
                alt="Icone de divisão de seção"
                width={400}
                height={400}
              />
            </div>

            <span className="font-heading text-4xl font-bold text-primary-500">
              Error 404
            </span>
            <h2 className="font-heading mb-2 text-4xl font-bold">
              Algo deu errado!
            </h2>
            <p className="mb-6">
              Desculpe, mas não é possível abrir essa página.
            </p>
            <div>
              <Link href="/">
                <p className="mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold leading-none text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block">
                  Voltar para Home
                </p>
              </Link>
              <Link href="/contact">
                <p className="block rounded bg-gray-50 px-8 py-4 text-center text-xs font-semibold leading-none text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:inline-block">
                  Fale Conosco
                </p>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
