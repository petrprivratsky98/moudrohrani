import nodemailer from 'nodemailer'

export async function POST(req) {
  const {name, email, age, msg} = await req.json()

  if (!name || !email || !msg) {
    return Response.json({ok: false, error: 'Missing fields'}, {status: 400})
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Moudrohraní web" <${process.env.SMTP_USER}>`,
      to: 'info@moudrohrani.cz',
      replyTo: email,
      subject: `Zájem o místo — ${name}`,
      text: `Jméno: ${name}\nEmail: ${email}\nVěk dítěte: ${age || 'neuvedeno'}\n\n${msg}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Věk dítěte:</strong> ${age || 'neuvedeno'}</p>
        <p><strong>Zpráva:</strong><br>${msg.replace(/\n/g, '<br>')}</p>
      `,
    })
    return Response.json({ok: true})
  } catch (err) {
    console.error('Mail error:', err)
    return Response.json({ok: false}, {status: 500})
  }
}
