import SMTPTransport from 'nodemailer/lib/smtp-transport';

export type EmailSender = (params: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) => Promise<SMTPTransport.SentMessageInfo>;

export type GMailUserJson = {
  type: string;
  client_id: string;
  client_secret: string;
  refresh_token: string;
};
