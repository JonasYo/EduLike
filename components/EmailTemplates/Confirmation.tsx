import * as React from 'react';

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface ConfirmationProps {
  subject: string;
  name: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const Confirmation = ({ subject, name }: ConfirmationProps) => {
  return (
    <Html>
      <Head />
      <Preview>Confirmação de Recebimento: {subject}</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded-md border border-solid border-slate-300 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Confirmação de Recebimento: {subject}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Agradecemos por entrar em contato conosco! Recebemos com sucesso o
              seu interesse em nossos serviços/produtos.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Nossa equipe já está apurando as informações que você nos enviou.
              Faremos uma análise detalhada e entraremos em contato em breve
              para discutir mais detalhes sobre suas necessidades e como podemos
              ajudar.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Se tiver alguma dúvida urgente ou precisar de assistência
              imediata, não hesite em nos contatar pelo telefone [Inserir
              Telefone] ou por este email.
            </Text>

            <Text className="my-[32px] text-[14px] leading-[24px] text-black">
              Atenciosamente,
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-muted-foreground text-[12px] leading-[24px] text-slate-500">
              EduLike
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Confirmation;
