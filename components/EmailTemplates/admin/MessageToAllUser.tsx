import * as React from 'react';

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
import { Markdown } from '@react-email/markdown';

interface VercelInviteUserEmailProps {
  username: string;
  title: string;
  message: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const MessageToAllUsers = ({
  title,
  message,
  username,
}: VercelInviteUserEmailProps) => {
  const previewText = 'Message to all users from:' + baseUrl;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded-md border border-solid border-slate-300 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              {title}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Message from {baseUrl} Admin</strong>
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {'Hello ' + username + ','}
            </Text>
            <Markdown>{message}</Markdown>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-muted-foreground text-xs text-black">
              You received this email because you are a user of the{' '}
              {process.env.NEXT_PUBLIC_APP_NAME} app:{' '}
              {process.env.NEXT_PUBLIC_APP_URL}. If you think you received this
              email by mistake, please contact us at info@nextcrm.dev
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageToAllUsers;
