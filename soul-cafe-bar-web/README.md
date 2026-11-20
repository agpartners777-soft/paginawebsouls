# Soul Café Bar — Sitio de políticas

Sitio estático (HTML + CSS + JS, sin frameworks ni build) con la información y todas las políticas legales y de servicio de **Soul Café Bar** (Manizales, Caldas). Sirve como URL pública para Google Business Profile, Meta (WhatsApp Business API, Instagram, anuncios), Rappi y los clientes.

Para verlo, abre `index.html` con doble clic.

## Antes de publicar

1. Llena los datos de [`DATOS-PENDIENTES.md`](DATOS-PENDIENTES.md). Todo lo que está entre `[CORCHETES]` se ve resaltado en amarillo en el sitio.
2. Reemplaza `assets/logo.svg` por el logo oficial y genera la imagen para compartir `assets/og-image.png` (1200×630 px).
3. Haz revisar las políticas por un abogado. Cada una tiene el comentario `<!-- Revisar con abogado antes de publicar -->`.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Inicio: horarios, ubicación, botones de contacto y tracklist de políticas |
| `privacidad.html` | Política de Tratamiento de Datos Personales (Ley 1581 de 2012) |
| `aviso-privacidad.html` | Aviso de privacidad (versión corta) |
| `eliminacion-datos.html` | Solicitud de eliminación de datos (URL que pide Meta) |
| `terminos.html` | Términos y Condiciones |
| `cookies.html` | Política de Cookies |
| `domicilios.html` | Domicilios y Pedidos |
| `reservas.html` | Reservas y Cancelaciones |
| `reembolsos.html` | Garantías, Cambios y Reembolsos |
| `propinas.html` | Política de Propina |
| `alcohol.html` | Consumo Responsable de Alcohol |
| `alergenos.html` | Alérgenos e Información Alimentaria |
| `normas.html` | Normas de la Casa y Derecho de Admisión |
| `pqrs.html` | PQRS con formulario (abre WhatsApp o el correo, sin backend) |
| `404.html` | Página de error |
| `styles.css` | Todos los estilos. **La paleta está en las variables de `:root`** al inicio del archivo |
| `main.js` | Menú móvil, banner de cookies, formulario PQRS. El número de WhatsApp y el correo del formulario están en `CONFIG` |
| `sitemap.xml`, `robots.txt` | SEO. Reemplaza `[DOMINIO]` |

El header y el footer están copiados en cada página. Si cambias uno, cámbialo en **todas** (Buscar y reemplazar en todos los archivos de tu editor, por ejemplo VS Code: `Ctrl+Shift+H`).

## URLs para cada plataforma

| Plataforma | Campo | URL |
|---|---|---|
| Meta (app / WhatsApp Business API) | Política de privacidad | `https://[DOMINIO]/privacidad.html` |
| Meta (app / WhatsApp Business API) | Eliminación de datos | `https://[DOMINIO]/eliminacion-datos.html` |
| Meta (app) | Condiciones del servicio | `https://[DOMINIO]/terminos.html` |
| Google Business Profile | Sitio web | `https://[DOMINIO]/` |
| Instagram (bio) | Sitio web | `https://[DOMINIO]/` |
| Rappi / otras plataformas | Políticas | `https://[DOMINIO]/domicilios.html` |

## Publicar gratis en Netlify (arrastrar y soltar)

1. Crea una cuenta en <https://app.netlify.com> (puedes entrar con Google o GitHub).
2. Ve a **Sites** → **Add new site** → **Deploy manually**.
3. Arrastra la carpeta `soul-cafe-bar-web` completa a la zona de carga.
4. En unos segundos tendrás una URL como `https://nombre-aleatorio.netlify.app`. Puedes cambiar el nombre en **Site configuration** → **Change site name** (por ejemplo, `soulcafebar.netlify.app`).
5. Para actualizar el sitio, entra en **Deploys** y vuelve a arrastrar la carpeta.

Netlify usa `404.html` automáticamente como página de error.

## Publicar gratis en GitHub Pages

1. Crea un repositorio en GitHub (puede ser público) y sube **el contenido** de esta carpeta, de modo que `index.html` quede en la raíz del repositorio. También puedes dejarlo dentro de una carpeta `/docs`.
2. En el repositorio entra a **Settings** → **Pages**.
3. En **Build and deployment** elige **Deploy from a branch**, la rama `main` y la carpeta `/ (root)` o `/docs`, según dónde quedó `index.html`. Guarda.
4. En uno o dos minutos el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Conectar un dominio propio (ej. `soulcafebar.com`)

Compra el dominio en cualquier registrador (GoDaddy, Namecheap, Cloudflare, Hostinger, etc.). Para un `.com.co` o `.co` puedes usar cualquier registrador autorizado.

**En Netlify**
1. **Domain management** → **Add a domain** → escribe tu dominio.
2. Netlify te indica los registros DNS. Lo más simple: en tu registrador crea un registro `CNAME` para `www` que apunte a `TU-SITIO.netlify.app`, y para el dominio sin `www` usa el registro `A` o `ALIAS` que te indique Netlify. También puedes cambiar los *nameservers* del dominio por los de Netlify.
3. El certificado HTTPS se activa solo (Let's Encrypt).

**En GitHub Pages**
1. **Settings** → **Pages** → **Custom domain** → escribe `www.tudominio.com` y guarda.
2. En tu registrador crea un `CNAME` para `www` que apunte a `TU-USUARIO.github.io`. Para el dominio sin `www`, crea cuatro registros `A` con las IP que indica la documentación de GitHub Pages (*Managing a custom domain for your GitHub Pages site*).
3. Marca **Enforce HTTPS** cuando esté disponible.

Los cambios de DNS pueden tardar desde minutos hasta 48 horas.

**Después de conectar el dominio:** reemplaza `[DOMINIO]` en todas las páginas, `sitemap.xml` y `robots.txt`, vuelve a publicar y envía el sitemap en Google Search Console.

## Cookies, analítica y píxel de Meta

Hoy el sitio no carga analítica ni el píxel de Meta. Si los instalas, pega su código dentro de la función `cargarCookiesOpcionales()` en `main.js`, así solo se activan si el visitante acepta las cookies, y actualiza la tabla de `cookies.html`.
