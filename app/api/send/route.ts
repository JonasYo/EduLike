import { Interest, Confirmation } from 'components/EmailTemplates';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
interface CustomEmailOptions {
  from: string;
  to: string[];
  subject: string;
  react: any;
}

interface RequestBody {
  subject: string;
  name: string;
  email: string;
  message: string;
  phone: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RequestBody;
    const { subject, name, email, message, phone } = body;

    console.log('email: ' + email);
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `EduLike - ${subject}`,
      react: Interest({
        subject,
        name,
        email,
        message,
        phone,
      }),
    });
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `EduLike - ${subject}`,
      react: Confirmation({
        subject,
        name,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
