# MJM Leads V2

CRM y buscador de prospectos para **MJM Systems**, preparado para GitHub Pages.

## Qué trae la V2

- Búsqueda de negocios reales por rubro + zona usando Google Places.
- Trae datos públicos disponibles: nombre, rubro, dirección, teléfono, web, Google Maps, rating y reseñas.
- Scoring automático de 1 a 99.
- Detecta señales comerciales como negocio sin web, teléfono público y actividad/reseñas.
- Recomienda qué vender: Web / catálogo, Inventario / POS, Automatización / CRM o Sistema a medida.
- Botón para pasar un resultado directamente al CRM.
- Pipeline: Nuevo → Contactado → Interesado → Reunión → Ganado / Perdido.
- Filtros, alta, edición y eliminación de leads.
- Accesos a WhatsApp, web y Google Maps.
- Exportación CSV.
- Persistencia local con `localStorage`.
- Responsive para móvil y escritorio.

## Activar búsquedas reales en GitHub Pages

La web funciona sin backend. Para usar el buscador real necesitas una Google Maps Platform API key.

1. En Google Cloud crea o selecciona un proyecto.
2. Habilita **Maps JavaScript API**.
3. Habilita **Places API (New)**.
4. Crea una API key.
5. En restricciones de aplicación selecciona **Websites / HTTP referrers**.
6. Permite únicamente tu URL de GitHub Pages, por ejemplo `https://TUUSUARIO.github.io/MJM-Leads/*`.
7. En restricciones de API limita la clave a Maps JavaScript API y Places API (New).
8. Abre MJM Leads → `Buscar clientes reales` → pega la clave y presiona `Guardar clave`.

La clave queda guardada en `localStorage` del navegador. No se escribe en el repositorio.

## Cómo usarlo

Busca términos concretos como:

- `ferreterías` + `San Miguel, Lima, Perú`
- `dentistas` + `Callao, Perú`
- `tiendas de ropa` + `Miraflores, Lima, Perú`
- `distribuidoras` + `Lima, Perú`

Los resultados se ordenan por score. Revisa la oportunidad sugerida y añade al CRM solo los prospectos que tengan sentido comercial.

## Importante

MJM Leads utiliza información pública disponible a través del proveedor configurado. Verifica los datos antes de contactar. No está diseñado para spam, envío masivo ni recolección de datos privados.
