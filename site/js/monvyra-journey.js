(function(){
 const id=x=>document.getElementById(x);
 const names=['Boulder','Cascade','Thunder','Rainbow','Soul','Marsh','Volcano','Earth'];
 const symbols=['◆','💧','ϟ','✿','♥','✦','♨','✧'];
 const colors=['#b5a18d','#72bad9','#e9c551','#89be89','#cd87ac','#dbae62','#e18269','#88b595'];
 const sprites=['pikachu','bulbasaur','charmander','squirtle','pidgey','eevee','caterpie','rattata','geodude','zubat','jigglypuff','clefairy'];
 let lastLive=0;
 function text(key,value){id(key).textContent=value;}
 function apply(s,real){
  text('journey-mode',real?'LIVE · 机器人实时数据':'DEMO · 模拟旅程，与 Live 页面同步更新，非真实游戏或链上记录。');
  const count=Math.max(0,Math.min(8,Number(s.badges)||0));
  text('badgeCount',count);id('badgeRow').replaceChildren();
  names.forEach((name,i)=>{
   const tile=document.createElement('div');tile.className='badge-tile'+(i<count?' earned':'');
   const badge=document.createElement('div');badge.className='badge'+(i<count?' on':'');badge.style.backgroundColor=i<count?colors[i]:'#e9ede4';badge.textContent=symbols[i];
   const label=document.createElement('strong');label.textContent=name;
   const status=document.createElement('small');status.textContent=i<count?'EARNED':'LOCKED';
   tile.append(badge,label,status);id('badgeRow').append(tile);
  });
  const owned=Math.min(151,Math.max(0,Number(s.pokedexOwned)||0));
  text('dexOwned',owned);text('dexSeen',s.pokedexSeen||0);
  id('dexBar').style.width=(100*owned/151)+'%';
  id('dex-preview').replaceChildren();
  if(!real)sprites.forEach((name,i)=>{
   const cell=document.createElement('div');cell.className='dex-mini';
   const image=document.createElement('img');image.src='img/pok/gen1/'+name+'.png';image.alt=name;
   const caption=document.createElement('span');caption.textContent=name;
   cell.append(image,caption);id('dex-preview').append(cell);
  });
  id('party').replaceChildren();
  (s.party||[]).forEach(m=>{
   const card=document.createElement('article');card.className='mon';
   const sprite=String(m.sprite||m.name||'').toLowerCase();
   if(sprites.includes(sprite)){const img=document.createElement('img');img.src='img/pok/gen1/'+sprite+'.png';img.alt=m.name;card.append(img);}
   const name=document.createElement('div');name.className='nm';name.textContent=m.name||'Unknown';
   const level=document.createElement('div');level.className='party-level';level.textContent='Lv. '+(m.level||'?')+' · '+(m.type||'PARTY');
   const hp=Math.max(0,Math.min(100,m.maxhp?100*m.hp/m.maxhp:0));
   const bar=document.createElement('div');bar.className='hpbar';const fill=document.createElement('span');fill.style.width=hp+'%';bar.append(fill);
   const label=document.createElement('small');label.textContent='HP '+(m.hp||0)+' / '+(m.maxhp||0);
   card.append(name,level,bar,label);id('party').append(card);
  });
  if(!s.party||!s.party.length)id('party').textContent='Waiting for party data…';
  text('tSteps',(s.steps||0).toLocaleString());text('tCaught',s.caught||0);text('tBattles',s.battles||0);
  const sec=s.startedAt?Math.max(0,Math.floor((Date.now()-s.startedAt)/1000)):0;
  text('tTime',Math.floor(sec/3600)+'h '+Math.floor(sec/60)%60+'m '+sec%60+'s');
  text('tLoc',s.map||'Unknown');
  id('route-stops').replaceChildren();
  ['Pallet Town','Pewter City','Mt. Moon','Cerulean City'].forEach((name,i)=>{
   const stop=document.createElement('span');stop.className='route-stop';stop.textContent=(i+1)+' / '+name;id('route-stops').append(stop);
  });
  text('next-goal',real?'Current location: '+(s.map||'Unknown'):'DEMO objective: explore '+s.map+' · Next badge: '+(names[count]||'All eight collected'));
 }
 function refresh(){if(Date.now()-lastLive>10000)apply(window.monvyraDemoState(),false);}
 refresh();setInterval(refresh,2000);
 const endpoint='https://briefly-sunday-cambridge-sticker.trycloudflare.com/';
 async function poll(){try{const response=await fetch(endpoint,{cache:'no-store',signal:AbortSignal.timeout(4000)});if(!response.ok)return;const data=await response.json();if(typeof data.steps!=='number')return;lastLive=Date.now();apply(data,true);}catch(e){}}
 poll();setInterval(poll,5000);
})();