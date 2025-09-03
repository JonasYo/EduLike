import { render } from '@react-email/components';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { Confirmation, Interest } from 'components/EmailTemplates';

interface RequestBody {
  subject: string;
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.HOSTINGER_EMAIL,
    pass: process.env.HOSTINGER_PASSWORD,
  },
});

export async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as RequestBody;
    const { subject, name, email, message } = body;
    const logoUrl = process.env.LOGO_URL;

    const interestEmailHtml = await render(
      Interest({ name, email, subject, message, logoUrl }),
    );

    const mailOptions = {
      from: process.env.HOSTINGER_EMAIL,
      to: process.env.HOSTINGER_EMAIL,
      subject: `Likedu - Novo contato comercial: ${name}/${subject}`,
      html: interestEmailHtml,
    };

    const info = await transporter.sendMail(mailOptions);

    const confirmationEmailHtml = await render(Confirmation({ name, logoUrl }));
    const confirmationMailOptions = {
      from: process.env.HOSTINGER_EMAIL,
      to: email,
      subject: `Likedu - Confirmação de contato: ${name}/${subject}`,
      html: confirmationEmailHtml,
    };

    const confirmationInfo = await transporter.sendMail(
      confirmationMailOptions,
    );

    return NextResponse.json(
      { data: { info, confirmationInfo } },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
