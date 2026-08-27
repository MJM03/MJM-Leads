# MJM Leads V2

CRM de prospección para **MJM Systems**, funcionando directamente en GitHub Pages.

## Arquitectura

La V2 no necesita backend, Google Cloud, API keys ni servicios externos para funcionar.

- Frontend estático en GitHub Pages.
- Base curada de prospectos públicos dentro del repositorio.
- CRM y cambios del usuario guardados con `localStorage`.
- Exportación CSV desde el navegador.

## Qué trae

- Prospectos reales obtenidos de fuentes públicas y verificables.
- Nombre, rubro, distrito, teléfono/WhatsApp cuando está publicado, web y fuente.
- Scoring comercial de 1 a 100.
- Recomendación de qué vender: Web / catálogo, Inventario / POS, Automatización / CRM o Sistema a medida.
- Señales y notas comerciales por prospecto.
- Pipeline: Nuevo → Contactado → Interesado → Reunión → Ganado / Perdido.
- Filtros por distrito, oportunidad y estado.
- Alta, edición y eliminación de leads.
- Accesos directos a WhatsApp, web y fuente pública.
- Exportación CSV.
- Responsive para móvil y escritorio.

## Cómo se actualiza la base

La base pública se actualiza editando `app.js` en el repositorio. De esta forma la web sigue siendo gratuita y simple, como Inventory Leads.

El CRM local usa una copia de esa base en el navegador. El botón `Restaurar base` vuelve a cargar la versión curada incluida actualmente en el repositorio.

## Importante

Los datos provienen de fuentes públicas. Deben verificarse antes de contactar. MJM Leads está pensado para prospección manual y personalizada, no para spam ni envío masivo.