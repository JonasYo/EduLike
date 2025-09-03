import {
  Body,
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
  Text,
} from '@react-email/components';

interface InterestProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  logoUrl?: string;
}

export const Interest = ({
  name,
  email,
  phone,
  message,
  logoUrl,
}: InterestProps) => {
  return (
    <Html>
      <Head />
      <Preview>Novo contato comercial</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <table role="presentation" style={{ width: '100%' }}>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  <Img
                    src={logoUrl}
                    width="120"
                    height="36"
                    alt="Likedu"
                    style={{
                      display: 'block',
                      maxWidth: '120px',
                      width: '100%',
                      height: 'auto',
                      margin: '0',
                      border: 'none',
                      outline: 'none',
                    }}
                  />
                </td>
              </tr>
            </table>
          </Section>
          <Heading style={h1}>Novo contato comercial</Heading>
          <Text style={heroText}>
            Recebemos um novo interesse em nossos serviços/produtos através do
            formulário.
          </Text>

          <Text className="text-[14px] leading-[24px] text-black">
            <strong>Detalhes do Interessado:</strong>
          </Text>

          <Text className="text-[14px] leading-[24px] text-black">
            - Nome: {name} <br />- Email: {email} <br />- Telefone: {phone}{' '}
            <br />- Mensagem: {message}
          </Text>

          <Text className="text-[14px] leading-[24px] text-black">
            Devemos apurar as informações e entrar em contato com o cliente o
            mais rápido possível. Para qualquer questão urgente ou para mais
            informações, por favor, entre em contato diretamente.
          </Text>

          <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

          <Text style={text}>Atenciosamente,</Text>
          <Text style={text}>Likedu</Text>

          <Section>
            <Row style={footerLogos}>
              <Column style={{ width: '66%' }}>
                <Img src={logoUrl} width="120" height="36" alt="Likedu" />
              </Column>
              <Column>
                <Section>
                  <Row>
                    <Column>
                      <Link href="https://www.likedu.com.br">
                        <Img
                          src={`https://cdn.icon-icons.com/icons2/2972/PNG/512/twitter_logo_icon_186891.png`}
                          width="32"
                          height="32"
                          alt="Likedu"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.likedu.com.br">
                        <Img
                          src={`https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889652-facebook_82510.png`}
                          width="32"
                          height="32"
                          alt="Likedu"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.likedu.com.br">
                        <Img
                          src={`https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png`}
                          width="32"
                          height="32"
                          alt="Likedu"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>

          <Section>
            <Link
              style={footerLink}
              href="https://www.likedu.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Policies
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://www.likedu.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help center
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://www.likedu.com/community"
              target="_blank"
              rel="noopener noreferrer"
              data-auth="NotApplicable"
              data-linkindex="6"
            >
              Likedu Community
            </Link>
            <Text style={footerText}>
              ©2022 Likedu <br />
              <br />
              All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Interest;

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left' as const,
  marginBottom: '50px',
};

const footerLink = {
  color: '#b7b7b7',
  textDecoration: 'underline',
};

const footerLogos = {
  marginBottom: '32px',
  paddingLeft: '8px',
  paddingRight: '8px',
  width: '100%',
};

const socialMediaIcon = {
  display: 'inline',
  marginLeft: '32px',
};

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: '0 auto',
  padding: '0px 20px',
};

const logoContainer = {
  marginTop: '32px',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px',
};

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
};
