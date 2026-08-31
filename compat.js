// Hidden compatibility nodes used by the original CRM renderer.
(function(){
  const wrap=document.createElement('div');
  wrap.hidden=true;
  wrap.innerHTML='<div id="stats"></div><input id="q"><select id="district"><option value="all">all</option></select><select id="need"><option value="all">all</option></select><select id="status"><option value="all">all</option></select><span id="count"></span><div id="grid"></div>';
  document.body.appendChild(wrap);
})();