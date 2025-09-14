// src/gmail/gmail.service.ts
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import * as nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

@Injectable()
export class GmailService {
  private readonly logger = new Logger(GmailService.name);

  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // your Gmail address
      pass: process.env.GMAIL_PASS, // your Gmail app password
    },
  });

  async sendEmail(options: EmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"FourSides" <${process.env.GMAIL_USER}>`,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      this.logger.log(`Email sent to ${options.to}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${options.to}`, error.stack);
      throw new InternalServerErrorException('Failed to send email');
    }
  }
}
// private loginJson: GoogleUserJson | null = null;
//   private authClient: google.Auth.OAuth2Client | null = null;

//   private getCredentialJson(): GoogleUserJson {
//     if (this.loginJson) {
//       return this.loginJson;
//     }

//     const content = fs.readFileSync(CREDENTIALS_PATH, { encoding: 'utf-8' });
//     const credentials = JSON.parse(content) as GoogleUserJson;
//     console.log(
//       'credentials:',
//       credentials.client_id,
//       credentials.client_secret,
//       credentials.refresh_token,
//       credentials.type,
//     );
//     this.loginJson = credentials;
//     return credentials;
//   }

//   private getAuthClient(): google.Auth.OAuth2Client | null {
//     if (this.authClient) {
//       return this.authClient;
//     }

//     try {
//       const content = fs.readFileSync(CREDENTIALS_PATH, { encoding: 'utf-8' });
//       const credentials = JSON.parse(content);
//       this.authClient = new google.Auth.OAuth2Client(
//         credentials.client_id,
//         credentials.client_secret,
//         'http://localhost',
//       );
//       return this.authClient;
//     } catch (err) {
//       return null;
//     }
//   }

//   private saveCredentials(client: google.Auth.OAuth2Client) {
//     const content = fs.readFileSync(OAUTH2_CREDENTIAL_PATH, {
//       encoding: 'utf-8',
//     });
//     const keys = JSON.parse(content);
//     const key = keys.installed || keys.web;
//     const payload = JSON.stringify({
//       type: 'authorized_user',
//       client_id: key.client_id,
//       client_secret: key.client_secret,
//       refresh_token: client.credentials.refresh_token,
//     });
//     fs.writeFileSync(CREDENTIALS_PATH, payload);
//   }

//   private async authorize(): Promise<google.Auth.OAuth2Client | void> {
//     if (REQUIRE_LOGIN_FOR_NEW_TOKEN) {
//       let client = this.getAuthClient();
//       if (client) {
//         return client;
//       }
//       console.log('OAUTH2_CREDENTIAL_PATH:', OAUTH2_CREDENTIAL_PATH);
//       console.log('SCOPES:', SCOPES);
//       console.log('Have client!');
//       client = await authenticate({
//         scopes: SCOPES,
//         keyfilePath: OAUTH2_CREDENTIAL_PATH,
//       });
//       console.log('authentication successful!');
//       if (client.credentials) {
//         await this.saveCredentials(client);
//       }

//       return client;
//     }
//     console.log('Google Authorized');
//   }

//   private async getTransporter() {
//     const { client_id, client_secret, refresh_token, type } =
//       this.getCredentialJson();
//     console.log('client_id:', client_id);
//     console.log('client_secret:', client_secret);
//     console.log('refresh_token:', refresh_token);

//     return nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: GOOGLE_API_EMAIL_SEND_ACCOUNT,
//         pass: GOOGLE_API_APP_PASSWORD,
//       },
//     });
//   }

//   // Public method
//   public async sendEmail({
//     html,
//     subject,
//     text,
//     to,
//   }: Parameters<EmailSender>[0]) {
//     const transporter = await this.getTransporter();
//     const result = await transporter.sendMail({
//       html,
//       subject,
//       text,
//       to,
//     });
//     return result;
//   }
