ZETARIA — ENVÍO DE CORREO CON CONSENTIMIENTO

IMPORTANTE
- La web muestra una casilla de autorización expresa, separada de las otras casillas.
- El correo solo se intenta enviar después de marcarla y pulsar «Iniciar aplicación».
- El servidor obtiene la IP de la conexión. No se recopila la MAC: los navegadores no la exponen a páginas web.
- El archivo HTML por sí solo no puede enviar correo de forma segura. Hace falta desplegar este servidor.
- No introduzcas la contraseña de Gmail dentro del HTML ni la publiques en un repositorio.

CONFIGURACIÓN
1. Instala Node.js en el equipo/hosting donde se ejecutará la aplicación.
2. En esta carpeta ejecuta: npm install
3. Copia .env.example a un archivo llamado .env.
4. En .env configura GMAIL_USER con la cuenta remitente, GMAIL_APP_PASSWORD con una contraseña de aplicación de Google y RECIPIENT_EMAIL con el correo destinatario.
5. En Gmail, la cuenta remitente debe tener verificación en dos pasos y una contraseña de aplicación habilitada. No uses la contraseña normal de Gmail.
6. Ejecuta: npm start
7. Publica el contenido de esta carpeta en un hosting que permita ejecutar Node.js y sirva la carpeta public desde el mismo dominio.

PRIVACIDAD Y LIMITACIONES
La IP y la respuesta que expresa apoyo político son datos sensibles o potencialmente sensibles. El texto de autorización informa qué se enviará y a qué dirección. Recoge y conserva estos datos solo con una base legal válida, limita el acceso y define un plazo de eliminación. El servidor de ejemplo no guarda los votos en una base de datos.

La IP puede ser la del router, VPN o proxy, no necesariamente identificar a una persona. La dirección MAC no puede obtenerse desde el navegador.
