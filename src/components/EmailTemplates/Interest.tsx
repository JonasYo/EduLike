import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';

interface InterestProps {
  subject: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Interest = ({
  subject,
  name,
  email,
  phone,
  message,
}: InterestProps) => {
  return (
    <Html>
      <Head />
      <Preview>Novo Interesse Recebido {subject}</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded-md border border-solid border-slate-300 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Novo Interesse Recebido: {subject}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá, Gostaríamos de informar que recebemos um novo interesse em
              nossos serviços/produtos através do formulário de interesse.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Detalhes do Interessado:</strong>
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              - Nome: {name} <br />- Email: {email} <br />- Telefone: {phone}{' '}
              <br />- Mensagem: {message}
            </Text>

            <Text className="my-[32px] text-[14px] leading-[24px] text-black">
              Estamos apurando as informações e entraremos em contato com o
              cliente o mais rápido possível. Para qualquer questão urgente ou
              para mais informações, por favor, entre em contato diretamente.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-slate-500">
              EduLike
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Interest;
