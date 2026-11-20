# Datos pendientes — Soul Café Bar

Checklist de cada dato entre corchetes que falta llenar. Busca el texto exacto (Ctrl+F) en cada archivo y reemplázalo.
Los textos que empiezan con **SI APLICA / SI HAY / SI SON / SI NO** son instrucciones: deja el párrafo si aplica (borrando el corchete) o elimínalo completo.

## Ya completados con datos de Instagram (@soulsgm) — confirmar
- [ ] Teléfono y WhatsApp: **311 483 1951** (`+573114831951`). Confirmar que ese número tiene WhatsApp; si es otro, cambiarlo en todas las páginas y en `main.js` (`CONFIG.whatsapp`).
- [ ] Instagram: https://www.instagram.com/soulsgm/
- [ ] Logo: `assets/logo.svg` es una recreación de placeholder. Reemplazar por el archivo oficial (mismo nombre) y regenerar `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` y `og-image.png` (1200×630).
- [ ] Sugerencia: en Instagram la categoría dice *Grocery Store*; cámbiala a *Restaurante*, *Cafetería* o *Bar* para que Meta y Google la clasifiquen bien.

## Placeholders

| ✓ | Dato | Dónde aparece |
|---|---|---|
| [ ] | `[DOMINIO]` | Todas las páginas (footer, encabezado o metadatos) + robots.txt, sitemap.xml |
| [ ] | `[CORREO]` | Todas las páginas (footer, encabezado o metadatos) + main.js |
| [ ] | `[DIRECCIÓN]` | Todas las páginas (footer, encabezado o metadatos) |
| [ ] | `[FACEBOOK]` | Todas las páginas (footer, encabezado o metadatos) |
| [ ] | `[HORARIOS]` | Todas las páginas (footer, encabezado o metadatos) |
| [ ] | `[NIT]` | Todas las páginas (footer, encabezado o metadatos) |
| [ ] | `[RAZÓN SOCIAL]` | Todas las páginas (footer, encabezado o metadatos) |
| [ ] | `[FECHA]` | Todas las políticas (fecha de actualización) |
| [ ] | `[DÍAS DE CONSERVACIÓN DE VIDEO]` | normas.html, privacidad.html |
| [ ] | `[DÍAS HÁBILES PARA REEMBOLSO]` | domicilios.html, reembolsos.html |
| [ ] | `[PLAZO PARA REPORTAR, ej. 60 minutos]` | domicilios.html, reembolsos.html |
| [ ] | `[% ANTICIPO]` | reservas.html |
| [ ] | `[AJUSTAR SEGÚN LA CARTA]` | alergenos.html |
| [ ] | `[ANTICIPACIÓN RECOMENDADA]` | reservas.html |
| [ ] | `[CONDICIONES PARA PRODUCTOS EXTERNOS]` | reservas.html |
| [ ] | `[CONDICIÓN SOBRE EL ANTICIPO, ej. el anticipo queda como saldo a favor por 60 días]` | reservas.html |
| [ ] | `[COSTO ZONA 1]` | domicilios.html |
| [ ] | `[COSTO ZONA 2]` | domicilios.html |
| [ ] | `[COSTO ZONA 3]` | domicilios.html |
| [ ] | `[DÍAS DE CUSTODIA]` | normas.html |
| [ ] | `[DÍAS PARA CONFIRMAR RECIBO]` | eliminacion-datos.html |
| [ ] | `[FECHA-ISO]` | sitemap.xml |
| [ ] | `[HORARIO DE DOMICILIOS]` | domicilios.html |
| [ ] | `[HORARIO DOMINGOS Y FESTIVOS]` | index.html |
| [ ] | `[HORARIO LUNES A VIERNES]` | index.html |
| [ ] | `[HORARIO PERMITIDO PARA MENORES]` | alcohol.html |
| [ ] | `[HORARIO SÁBADOS]` | index.html |
| [ ] | `[HORARIOS EN FORMATO SCHEMA, ej. Mo-Fr 07:00-22:00]` | index.html |
| [ ] | `[HORAS DE ANTICIPACIÓN PARA CANCELAR GRUPOS]` | reservas.html |
| [ ] | `[HORAS DE ANTICIPACIÓN PARA CANCELAR]` | reservas.html |
| [ ] | `[ID-ANALYTICS]` | main.js |
| [ ] | `[LINK DE GOOGLE MAPS]` | index.html |
| [ ] | `[MEDIOS DE PAGO, ej. efectivo, transferencia, Nequi, Daviplata, datáfono, link de pago]` | domicilios.html |
| [ ] | `[MINUTOS DE TOLERANCIA]` | reservas.html |
| [ ] | `[MOCKTAILS / OPCIONES SIN ALCOHOL]` | alcohol.html |
| [ ] | `[MÉTODO DE REPARTO, ej. en partes iguales entre el personal de servicio, cocina y barra del turno, cada semana]` | propinas.html |
| [ ] | `[NÚMERO DE PERSONAS]` | reservas.html |
| [ ] | `[OPCIONES DISPONIBLES O ELIMINAR]` | alergenos.html |
| [ ] | `[OTRAS PLATAFORMAS DE DOMICILIO]` | domicilios.html |
| [ ] | `[OTRAS PLATAFORMAS]` | privacidad.html |
| [ ] | `[PASARELAS DE PAGO]` | privacidad.html |
| [ ] | `[PEDIDO MÍNIMO]` | domicilios.html |
| [ ] | `[PERMITIDAS/NO PERMITIDAS]` | normas.html |
| [ ] | `[PLAZO EFECTIVO]` | reembolsos.html |
| [ ] | `[PROVEEDOR DE ATENCIÓN AUTOMATIZADA]` | privacidad.html |
| [ ] | `[PROVEEDORES DE SOFTWARE]` | privacidad.html |
| [ ] | `[SI APLICA:]` | privacidad.html |
| [ ] | `[SI APLICA]` | privacidad.html |
| [ ] | `[SI HAY CÁMARAS:]` | normas.html |
| [ ] | `[SI HAY ZONA EXTERIOR PARA FUMADORES:]` | normas.html |
| [ ] | `[SI NO SE PIDE ANTICIPO, ELIMINAR ESTE PÁRRAFO]` | reservas.html |
| [ ] | `[SI SE INSTALA]` | cookies.html |
| [ ] | `[SI SON PERMITIDAS:]` | normas.html |
| [ ] | `[TIEMPO DE CONSERVACIÓN]` | privacidad.html |
| [ ] | `[TIEMPO ESTIMADO DE ENTREGA]` | domicilios.html |
| [ ] | `[ZONA 1]` | domicilios.html |
| [ ] | `[ZONA 2]` | domicilios.html |
| [ ] | `[ZONA 3]` | domicilios.html |
| [ ] | `[ZONA EXTERIOR PERMITIDA]` | normas.html |
| [ ] | `[ZONAS CON CÁMARAS]` | normas.html |
| [ ] | `[ZONAS PERMITIDAS]` | normas.html |

## Avisos
- Reemplazar `[DOMINIO]` también en `sitemap.xml`, `robots.txt` y en las etiquetas `canonical`/`og:` de cada página.
- `[FECHA]` es la fecha de última actualización de las políticas (por ejemplo, *20 de noviembre de 2026*). `[FECHA-ISO]` en `sitemap.xml` va en formato `2026-11-20`.
- Mapa: en `index.html`, cambiar el `src` del `iframe` por el código de inserción de Google Maps del negocio (Compartir → Insertar un mapa).
- Todas las políticas tienen el comentario `<!-- Revisar con abogado antes de publicar -->`. Hacerlas revisar antes de publicarlas.
