// Inventory Leads-inspired workflow for MJM Leads.
(function(){
  const TRACK_KEY='mjmTrackedIdsV1';
  const customLead=id=>!String(id||'').startsWith('c');
  const readTracked=()=>{try{return new Set(JSON.parse(localStorage.getItem(TRACK_KEY)||'[]'))}catch{return new Set()}};
  let tracked=readTracked();
  leads.forEach(l=>{if(customLead(l.id)||l.status!=='Nuevo') tracked.add(l.id)});
  const saveTracked=()=>localStorage.setItem(TRACK_KEY,JSON.stringify([...tracked]));
  saveTracked();

  const $flow=id=>document.getElementById(id);
  let currentView='home';

  function trackedLeads(){return leads.filter(l=>tracked.has(l.id))}
  function availableLeads(){return leads.filter(l=>!tracked.has(l.id))}
  function options(values,label){return `<option value="all">${label}</option>`+[...new Set(values.filter(Boolean))].sort().map(v=>`<option>${esc(v)}</option>`).join('')}

  function discoveryCard(l){
    const o=getOffer(l);
    const phone=l.phone?`<a class="btn green" target="_blank" rel="noopener" href="https://wa.me/51${l.phone.replace(/\D/g,'').replace(/^51/,'')}">WhatsApp</a>`:'';
    const web=l.web?`<a class="btn" target="_blank" rel="noopener" href="${esc(l.web)}">Web</a>`:'';
    return `<article class="card discoveryCard"><div class="cardTop"><div><div class="name">${esc(l.company)}</div><div class="meta">${esc(l.sector)} · ${esc(l.district)}</div></div><div class="score ${l.score>=85?'hot':''}">${l.score}</div></div><div class="chips"><span class="chip">${esc(l.need)}</span>${l.phone?'<span class="chip good">Contacto público</span>':''}</div><div class="salePlan"><div class="saleRow"><span>Qué ofrecerle</span><b>${esc(o.main)}</b></div><div class="saleHook"><span>Gancho</span>${esc(o.hook)}</div></div><div class="actions">${phone}${web}<button class="btn primary grow" onclick="trackLead('${l.id}')">Agregar al CRM</button></div></article>`
  }

  window.trackLead=function(id){tracked.add(id);saveTracked();toast('Prospecto agregado al CRM');renderFlow()}
  window.untrackLead=function(id){tracked.delete(id);saveTracked();toast('Prospecto quitado del CRM');renderFlow()}
  window.setFlowView=function(view){currentView=view;document.querySelectorAll('.flowView').forEach(x=>x.classList.toggle('active',x.dataset.view===view));document.querySelectorAll('[data-flow-nav]').forEach(x=>x.classList.toggle('active',x.dataset.flowNav===view));renderFlow();window.scrollTo({top:0,behavior:'smooth'})}

  function renderHome(){
    const t=trackedLeads();
    const interested=t.filter(l=>['Interesado','Reunión'].includes(l.status));
    const hot=[...availableLeads()].sort((a,b)=>b.score-a.score).slice(0,4);
    $flow('flowHomeStats').innerHTML=`<div class="stat"><span>Base disponible</span><b>${leads.length}</b></div><div class="stat"><span>En mi CRM</span><b>${t.length}</b></div><div class="stat"><span>Interesados</span><b>${interested.length}</b></div><div class="stat"><span>Ganados</span><b>${t.filter(l=>l.status==='Ganado').length}</b></div>`;
    $flow('homeHot').innerHTML=hot.length?hot.map(discoveryCard).join(''):'<div class="empty">Ya agregaste todos los prospectos disponibles.</div>';
  }

  function renderSearch(){
    const q=($flow('discoverQ').value||'').toLowerCase();
    const district=$flow('discoverDistrict').value;
    const sector=$flow('discoverSector').value;
    const wa=$flow('discoverWhatsapp').checked;
    let pool=availableLeads().filter(l=>(district==='all'||l.district===district)&&(sector==='all'||l.sector===sector)&&(!wa||!!l.phone));
    if(q) pool=pool.filter(l=>`${l.company} ${l.sector} ${l.district} ${l.need} ${l.note}`.toLowerCase().includes(q));
    pool.sort((a,b)=>b.score-a.score);
    $flow('discoverCount').textContent=`${pool.length} resultados`;
    $flow('discoverGrid').innerHTML=pool.length?pool.map(discoveryCard).join(''):'<div class="empty">No encontramos prospectos con esos filtros.</div>';
  }

  function renderProspects(){
    const q=($flow('crmQ').value||'').toLowerCase();
    const status=$flow('crmStatus').value;
    let pool=trackedLeads().filter(l=>status==='all'||l.status===status);
    if(q) pool=pool.filter(l=>`${l.company} ${l.sector} ${l.district} ${l.need} ${l.note}`.toLowerCase().includes(q));
    pool.sort((a,b)=>b.score-a.score);
    $flow('crmCount').textContent=`${pool.length} en seguimiento`;
    $flow('crmGrid').innerHTML=pool.length?pool.map(l=>card(l).replace('</article>',`<button class="removeTrack" onclick="untrackLead('${l.id}')">Quitar del CRM</button></article>`)).join(''):'<div class="empty">Aún no tienes prospectos en tu CRM. Ve a Buscar y agrega los mejores.</div>';
  }

  function renderFollowup(){
    const statuses=['Nuevo','Contactado','Interesado','Reunión','Ganado','Perdido'];
    const t=trackedLeads();
    $flow('pipeline').innerHTML=statuses.map(s=>{const items=t.filter(l=>l.status===s).sort((a,b)=>b.score-a.score);return `<section class="pipelineCol"><div class="pipelineHead"><b>${s}</b><span>${items.length}</span></div>${items.length?items.map(l=>`<article class="miniLead"><div><strong>${esc(l.company)}</strong><small>${esc(l.sector)} · ${esc(l.district)}</small></div><select class="ctl miniStatus" onchange="setStatus('${l.id}',this.value);renderFlow()">${statuses.map(x=>`<option ${x===l.status?'selected':''}>${x}</option>`).join('')}</select><button class="miniOpen" onclick="setFlowView('prospects');setTimeout(()=>{document.getElementById('crmQ').value=${JSON.stringify(l.company)};renderFlow()},10)">Ver ficha</button></article>`).join(''):'<div class="pipelineEmpty">Sin prospectos</div>'}</section>`}).join('')
  }

  window.renderFlow=function(){
    if(!$flow('flowRoot')) return;
    $flow('discoverDistrict').innerHTML=options(leads.map(l=>l.district),'Todos los distritos');
    $flow('discoverSector').innerHTML=options(leads.map(l=>l.sector),'Todos los rubros');
    renderHome();renderSearch();renderProspects();renderFollowup();
  }

  const oldSetStatus=window.setStatus;
  if(typeof oldSetStatus==='function') window.setStatus=function(id,status){oldSetStatus(id,status);tracked.add(id);saveTracked();setTimeout(renderFlow,0)};
  const oldSave=window.saveLead;
  if(typeof oldSave==='function') window.saveLead=function(){oldSave();setTimeout(()=>{const newest=[...leads].sort((a,b)=>String(b.id).localeCompare(String(a.id)))[0];if(newest){tracked.add(newest.id);saveTracked()}renderFlow()},0)};

  function init(){
    document.querySelectorAll('[data-flow-nav]').forEach(b=>b.addEventListener('click',()=>setFlowView(b.dataset.flowNav)));
    ['discoverQ','discoverDistrict','discoverSector','discoverWhatsapp','crmQ','crmStatus'].forEach(id=>{const el=$flow(id);if(el) el.addEventListener(el.tagName==='INPUT'?'input':'change',renderFlow)});
    setFlowView('home');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();