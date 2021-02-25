import { 
    createTransport, 
    Transporter, 
    createTestAccount, 
    getTestMessageUrl 
} from 'nodemailer'

import fs from 'fs';
import handlebars from 'handlebars';

class SendMailService {
    private client: Transporter;

    constructor() {
        this.createMailTransport();
    }

    public async execute(to: string, subject: string, variables: object, path: string) {
        const templateFileContent = fs.readFileSync(path).toString("utf-8");

        const mailTemplateParse = handlebars.compile(templateFileContent);
        const html = mailTemplateParse(variables);

        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: "NPS <noreply@rocketseat.com.br>"
        });

        console.log("Message sent: %s", message.messageId);
        console.log("Preview URL: %s", getTestMessageUrl(message));

    }

    private async createMailTransport() {
        const account = await createTestAccount();

        const transporter = createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: account.user, // generated ethereal user
              pass: account.pass, // generated ethereal password
            },
        });

        this.client = transporter;
    }
}

export default new SendMailService();
