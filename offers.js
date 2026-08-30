// Recomendaciones comerciales por prospecto/rubro para MJM Leads.
// Se carga después de app.js y leads-extra.js para no tocar el CRM guardado.
(function(){
  const exact={
    'Importadora Leisac':{main:'Sistema de inventario + pedidos + cotizaciones + trazabilidad de productos.',extra:'CRM comercial para seguimiento de clientes, cotizaciones y cierres.',hook:'Centralizar stock, pedidos y cotizaciones para reducir trabajo manual y errores.'},
    'Senvilab':{main:'Inventario especializado + control de lotes + pedidos y alertas de stock.',extra:'Portal/catálogo B2B para pedidos recurrentes de clientes.',hook:'Dar trazabilidad al stock y agilizar pedidos de productos especializados.'},
    'LS Group Perú':{main:'Inventario de almacén + pedidos B2B + cotizaciones + reportes.',extra:'CRM comercial con seguimiento automático de oportunidades.',hook:'Unificar almacén y ventas para saber qué hay, qué salió y qué se debe atender.'},
    'Proditec Perú':{main:'Inventario + cotizador rápido + catálogo B2B conectado a WhatsApp.',extra:'CRM para seguimiento de empresas y cotizaciones pendientes.',hook:'Cotizar más rápido y saber en tiempo real qué productos sí están disponibles.'},
    'Veterinaria Socialvet':{main:'Agenda de citas + historial de mascotas/clientes + recordatorios.',extra:'Inventario de farmacia/insumos y campañas de seguimiento por WhatsApp.',hook:'Reducir citas olvidadas y tener toda la atención de cada mascota en un solo lugar.'},
    'Clínica Veterinaria Dr. Paws':{main:'Agenda veterinaria + ficha clínica digital + recordatorios por WhatsApp.',extra:'Inventario conectado entre servicios y tienda online.',hook:'Conectar citas, pacientes y productos para evitar registros separados.'},
    'Veterinaria Tilda':{main:'Agenda multisede + historial clínico + resultados y seguimiento.',extra:'Recordatorios automáticos y CRM de clientes recurrentes.',hook:'Tener las sedes sincronizadas y disminuir coordinación manual por WhatsApp.'},
    'DiagnoPet':{main:'Sistema de citas + seguimiento de exámenes + entrega/estado de resultados.',extra:'CRM para veterinarias referidoras y recordatorios automáticos.',hook:'Ordenar el flujo desde la cita hasta la entrega del resultado.'},
    'Family Pets':{main:'Inventario de farmacia + agenda + historial de pacientes.',extra:'CRM y automatización de recordatorios, vacunas y controles.',hook:'Integrar farmacia, servicios y clientes en una sola herramienta.'},
    'Veter Perú':{main:'Inventario + pedidos B2B + trazabilidad + alertas de reposición.',extra:'Portal de clientes frecuentes con listas y pedidos recurrentes.',hook:'Procesar pedidos de WhatsApp sin perder control del stock disponible.'},
    'Veterstore / Medixik SAC':{main:'Inventario especializado + pedidos + alertas de stock y vencimiento.',extra:'CRM de clientes y automatización postventa.',hook:'Controlar mejor catálogo, stock y pedidos que llegan por distintos canales.'},
    'SIPFSA':{main:'Inventario multisede + transferencias + cotizador B2B + pedidos.',extra:'Dashboard de ventas por tienda y CRM comercial.',hook:'Saber stock real por sede y evitar consultar manualmente antes de cotizar.'},
    'PIEMAYKA SAC':{main:'Inventario + cotizaciones B2B + pedidos y seguimiento de entregas.',extra:'CRM para cuentas empresariales y oportunidades por sector.',hook:'Centralizar operaciones comerciales para atender clientes industriales más rápido.'},
    'Importaciones Lavsa':{main:'Inventario + cotizaciones + pedidos mayoristas + alertas de reposición.',extra:'Catálogo B2B con solicitud de cotización por WhatsApp.',hook:'Responder cotizaciones con stock real sin revisar productos manualmente.'},
    'Ferrehogar':{main:'Inventario + POS + pedidos + despacho y stock mínimo.',extra:'Catálogo online sincronizado con disponibilidad.',hook:'Evitar vender productos sin stock y acelerar atención de pedidos.'},
    'Ferreterías Callao':{main:'POS + inventario con código de barras + alertas de stock.',extra:'Catálogo web sencillo conectado a WhatsApp.',hook:'Digitalizar ventas y saber qué reponer sin depender de conteos manuales.'},
    'Ferreterías Grupo Choque':{main:'Inventario + POS + pedidos por WhatsApp + control de delivery.',extra:'Catálogo digital con precios y disponibilidad.',hook:'Ordenar pedidos y stock para despachar más rápido.'},
    'La Mafia Perú':{main:'Inventario por talla/color + pedidos + control de stock por variante.',extra:'CRM de clientes y recuperación de compras por WhatsApp.',hook:'Evitar quiebres y confusiones de stock entre tallas, colores y modelos.'},
    "Diana's Style":{main:'Inventario por talla/color/modelo + POS + reportes de rotación.',extra:'Catálogo digital conectado a WhatsApp.',hook:'Saber exactamente qué talla y modelo queda antes de responder al cliente.'},
    'Fast Fashion':{main:'Web/catálogo administrable conectado a WhatsApp y redes.',extra:'Inventario por talla/color + POS.',hook:'Convertir consultas de redes en pedidos con un catálogo más ordenado.'},
    'Dolieh':{main:'Web/catálogo administrable con productos, precios y WhatsApp.',extra:'Inventario básico + POS.',hook:'Darles una vitrina digital propia que convierta consultas en pedidos.'},
    'Blondy':{main:'Inventario + pedidos mayoristas/minoristas + control por modelo.',extra:'Catálogo B2B/B2C con solicitud de pedidos.',hook:'Separar y controlar mejor pedidos al por mayor y menor.'},
    'Casablanca Home':{main:'Inventario multisede + transferencias + pedidos y stock por local.',extra:'Dashboard de ventas y reposición automática sugerida.',hook:'Tener una sola vista del stock disponible en todos los puntos de venta.'},
    'ArtStore Perú':{main:'Inventario multisede + POS + reposición y transferencias.',extra:'Catálogo para pedidos por WhatsApp con stock visible.',hook:'Sincronizar las tiendas y reducir consultas manuales de disponibilidad.'},
    'Sortel Perú - Ventanilla':{main:'Inventario + POS + números de serie/IMEI + servicio técnico.',extra:'CRM para seguimiento postventa y reparaciones.',hook:'Controlar productos tecnológicos desde la venta hasta el servicio técnico.'},
    'INCTEC SAC':{main:'CRM comercial + cotizaciones + seguimiento de oportunidades B2B.',extra:'Inventario de equipos y control de servicios/soporte.',hook:'No perder cotizaciones y tener trazabilidad comercial de cada cliente.'},
    'Label Perú SAC':{main:'CRM de cotizaciones + órdenes de trabajo + seguimiento de producción.',extra:'Portal de clientes para repetir pedidos y aprobar trabajos.',hook:'Convertir cotizaciones en órdenes sin rehacer información manualmente.'},
    'JMH Perú EIRL':{main:'CRM + órdenes de servicio + agenda de técnicos + seguimiento.',extra:'Cotizaciones y reportes de mantenimiento por cliente.',hook:'Controlar desde la cotización hasta el cierre de cada servicio.'},
    'Metálicas Unión':{main:'Sistema de proyectos + cotizaciones + órdenes de trabajo + avances.',extra:'CRM comercial y dashboard de rentabilidad por proyecto.',hook:'Tener trazabilidad de cada trabajo desde la visita técnica hasta la entrega.'},
    'Pulicorp':{main:'CRM de cotizaciones + contratos + seguimiento de servicios.',extra:'Agenda de operaciones y checklist digital por cliente.',hook:'Evitar perder seguimientos y organizar servicios recurrentes.'},
    'Bi Natural Perú':{main:'Sistema de pedidos por WhatsApp + CRM + seguimiento de entregas.',extra:'Inventario y alertas de reposición.',hook:'Convertir conversaciones de WhatsApp en pedidos ordenados y medibles.'}
  };

  function bySector(l){
    const s=((l.sector||'')+' '+(l.need||'')).toLowerCase();
    if(/veter|pet|mascota|diagn[oó]stico/.test(s)) return {main:'Agenda + ficha de clientes/mascotas + recordatorios y seguimiento.',extra:'Inventario de farmacia/insumos y automatización por WhatsApp.',hook:'Centralizar citas, historial y seguimiento para atender mejor y reducir tareas manuales.'};
    if(/ferreter|importadora|distribu|industrial|suministro|agro|almac[eé]n/.test(s)) return {main:'Inventario + pedidos + cotizaciones + alertas de reposición.',extra:'CRM B2B y dashboard comercial.',hook:'Cotizar con stock real y centralizar pedidos, clientes y movimientos.'};
    if(/ropa|moda|retail|tienda|hogar|deportivo|belleza/.test(s)) return {main:'Inventario/POS + catálogo conectado a WhatsApp.',extra:'CRM de clientes y reportes de productos más vendidos.',hook:'Ordenar stock y convertir más consultas en ventas.'};
    if(/mantenimiento|servicio|limpieza|climatiz|metalmec|manufactura/.test(s)) return {main:'CRM + cotizaciones + órdenes de servicio/trabajo + seguimiento.',extra:'Agenda operativa y dashboard de avance.',hook:'Controlar cada servicio desde la cotización hasta la entrega y cobro.'};
    if(/laboratorio/.test(s)) return {main:'Inventario trazable + pedidos + control de lotes/insumos.',extra:'CRM B2B y portal de solicitudes.',hook:'Dar trazabilidad a insumos y agilizar pedidos recurrentes.'};
    if((l.need||'')==='Web / catálogo') return {main:'Web/catálogo administrable con contacto directo a WhatsApp.',extra:'Inventario básico y automatización de consultas.',hook:'Darles una vitrina digital propia para convertir consultas en ventas.'};
    if((l.need||'')==='Automatización / CRM') return {main:'CRM simple + seguimiento + recordatorios automáticos.',extra:'Dashboard y automatización por WhatsApp.',hook:'Evitar oportunidades perdidas y tareas repetitivas.'};
    if((l.need||'')==='Sistema a medida') return {main:'Diagnóstico de proceso + sistema a medida para el cuello de botella principal.',extra:'Dashboard y automatizaciones integradas.',hook:'Eliminar hojas/procesos separados y centralizar la operación.'};
    return {main:'Inventario/POS + pedidos + reportes.',extra:'CRM y automatización por WhatsApp.',hook:'Digitalizar el proceso que hoy consume más tiempo.'};
  }

  function getOffer(l){return exact[l.company]||bySector(l)}
  window.getOffer=getOffer;

  // Sobrescribe solo la presentación de la tarjeta. El CRM y localStorage permanecen intactos.
  card=function(l){
    const o=getOffer(l);
    const wa=l.phone?`<a class="btn green" target="_blank" rel="noopener" href="https://wa.me/51${l.phone.replace(/\D/g,'').replace(/^51/,'')}">WhatsApp</a>`:'';
    const web=l.web?`<a class="btn" target="_blank" rel="noopener" href="${esc(l.web)}">Web</a>`:'';
    const source=l.source?`<a class="btn" target="_blank" rel="noopener" href="${esc(l.source)}">Fuente</a>`:'';
    return `<article class="card"><div class="cardTop"><div><div class="name">${esc(l.company)}</div><div class="meta">${esc(l.sector)} · ${esc(l.district)}</div></div><div class="score ${l.score>=85?'hot':''}">${l.score}</div></div><div class="chips"><span class="chip">${esc(l.need)}</span><span class="chip ${l.status==='Nuevo'?'warn':'good'}">${esc(l.status)}</span>${!l.web?'<span class="chip bad">Sin web propia detectada</span>':''}${l.phone?'<span class="chip good">Con WhatsApp/teléfono</span>':''}</div><div class="salePlan"><div class="saleRow"><span>Oferta principal</span><b>${esc(o.main)}</b></div><div class="saleRow add"><span>Venta adicional</span><b>${esc(o.extra)}</b></div><div class="saleHook"><span>Gancho comercial</span>${esc(o.hook)}</div></div><div class="leadNote">${esc(l.note||'')}</div><div class="actions">${wa}${web}${source}<button class="btn" onclick="editLead('${l.id}')">Editar</button><button class="btn danger" onclick="removeLead('${l.id}')">Eliminar</button></div><div class="actions"><select class="ctl" onchange="setStatus('${l.id}',this.value)">${['Nuevo','Contactado','Interesado','Reunión','Ganado','Perdido'].map(x=>`<option ${x===l.status?'selected':''}>${x}</option>`).join('')}</select></div></article>`;
  };

  const style=document.createElement('style');
  style.textContent=`.salePlan{padding:13px;border-radius:16px;background:#0a1221;border:1px solid var(--line);display:grid;gap:10px}.saleRow{display:grid;gap:4px}.saleRow span,.saleHook span{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#82e6bd;font-weight:800}.saleRow.add span{color:#c9c1ff}.saleRow b{font-size:12.5px;line-height:1.5;color:#eef2fb}.saleHook{padding-top:9px;border-top:1px solid var(--line);font-size:12px;line-height:1.5;color:#cbd3e2}.saleHook span{display:block;color:#ffd28a;margin-bottom:4px}.leadNote{margin-top:10px;font-size:11.5px;line-height:1.5;color:var(--muted)}`;
  document.head.appendChild(style);

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>renderCRM()); else renderCRM();
})();