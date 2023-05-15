import User from '../models/User';

const nodemailer = require('nodemailer');

async function senderEmail(smtpTransport, mailOptions) {
  return smtpTransport.sendMail(mailOptions);
}

function generateTransporter() {
  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.skymail.net.br',
    port: 587,
    secure: false,
    auth: {
      user: 'no-reply@artvac.com.br',
      pass: process.env.EMAIL_PASS,
    },
  });
  return smtpTransport;
}

function createHtml(email) {
  const html = `
  <div
      style="
        color: #1c1d1f;
        margin: 0;
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, Roboto,
          'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
      "
    >
      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="background-color: #f7f9fa; padding: 24px"
      >
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td width="600">
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="background-color: #fff"
              >
                <tbody>
                  <tr>
                    <td style="padding: 24px 24px 0 24px">
                      <p>
                        <a style="text-decoration: none; color: #1c1d1f">
                          Oi, me ajudem !
                        </a>
                      </p>

                      <p>
                        <a style="text-decoration: none; color: #1c1d1f"
                          >Perdi meu dog</a
                        >
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 16px 24px 0 24px">
                      <a
                        href="http://35.198.58.243/fishing/${email}"
                        style="border: none; display: inline-block"
                        target="_blank"
                      >
                      <img
                      style="width: 500px"
                      src="https://i.ibb.co/nQnsgYL/snoop-Perdido.jpg"
                      crossorigin="anonymous"
                    />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 24px 24px 0 24px">
                      <p style="margin-bottom: 0">
                        Se você não fez essa solicitação, entre em contato com o
                        Suporte Artvac.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 0 0 0"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>`;
  return html;
}

async function createEmailConfig(email) {
  const mailOptions = {
    from: `"Cachorrinho perdido" <no-reply@artvac.com.br>`,
    to: email,
    subject: "Cachorro perdido (bairro santana)",
    text: "Cachorro perdido (bairro santana)",
    html: createHtml(email),
  };
  return mailOptions;
}

class SendEmail {

  async sendEmail(req, res) {
    const smtpTransport = generateTransporter();
    const mailOptions = await createEmailConfig(req.body);
    const email = await senderEmail(smtpTransport, mailOptions);
    if (email) return res.json({ msg: 'E-mail enviado com sucesso' });
    return res.json({ errors: ['Email not send'] });
  }
}

export default new SendEmail();
