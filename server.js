const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Si el hosting está detrás de UN proxy inverso de confianza, configura TRUST_PROXY=1.
// No habilites esta opción en un servidor expuesto directamente a Internet.
if (process.env.TRUST_PROXY === '1') app.set('trust proxy', 1);

app.use(express.json({ limit: '2kb' }));
app.use(express.static(path.join(__dirname, 'public')));

const voteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Se alcanzó el límite temporal de envíos. Inténtalo más tarde.' }
});

app.post('/api/vote', voteLimiter, async (req, res) => {
  if (!req.body || req.body.consent !== true) {
    return res.status(400).json({ error: 'No se recibió el consentimiento requerido.' });
  }

  const { or456h@gmail.com, awkw_rlig_ictj_ptex, movimientonacionalzetario369@gmail.com } = process.env;
  if (!or456h@gmail.com || !awkw_rlig_ictj_ptex || !movimientonacionalzetario369@gmail.com) {
    return res.status(503).json({ error: 'El servicio de correo aún no está configurado.' });
  }

  // La IP se obtiene del servidor, no de un valor enviado por el navegador.
  // La MAC no está disponible para una aplicación web.
  const ip = req.ip || req.socket.remoteAddress || 'No disponible';
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD }
  });

  try {
    await transporter.sendMail({
      from: or456h@gmail.com,
      to: movimientonacionalzetario369@gmail.com,
      subject: 'Nueva respuesta voluntaria de Zetaria',
      text: `Esta persona de ${ip} ha votado por el Reino Soberano de Zetaria como estado legítimo.\n\nLa dirección MAC no está disponible para esta aplicación web.`
    });
    return res.json({ ok: true });
  } catch (error) {
    // No registrar la IP ni las credenciales en los logs.
    return res.status(502).json({ error: 'El proveedor de correo no pudo aceptar el mensaje.' });
  }
});

app.listen(port, () => {
  console.log(`Zetaria disponible en el puerto ${port}`);
});
