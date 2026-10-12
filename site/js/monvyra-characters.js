(function(){
 const characters=[
  {name:'PIKACHU',displayName:'Pikachu',image:'img/pikachu-stream.png',line:'Pika pika! ⚡',cheer:'Pika-chuuu! ⚡',sky:'#bcebd6',ground:'#a1c980'},
  {name:'CHARMANDER',displayName:'Charmander',image:'img/pok/gen1/charmander.png',line:'Ready to glow! 🔥',cheer:'Charmander sends out little sparks!',sky:'#ffdec1',ground:'#d1b681'},
  {name:'SQUIRTLE',displayName:'Squirtle',image:'img/pok/gen1/squirtle.png',line:'Splash time! 💧',cheer:'Squirtle spins with joy!',sky:'#b9e6f4',ground:'#9bcac0'},
  {name:'BULBASAUR',displayName:'Bulbasaur',image:'img/pok/gen1/bulbasaur.png',line:'Let it bloom! 🌿',cheer:'Bulbasaur stretches out its vines!',sky:'#d5edb9',ground:'#a8c782'},
  {name:'EEVEE',displayName:'Eevee',image:'img/pok/gen1/eevee.png',line:'Adventure awaits! ✨',cheer:'Eevee jumps with joy!',sky:'#eddbc6',ground:'#b9bf91'},
  {name:'JIGGLYPUFF',displayName:'Jigglypuff',image:'img/pok/gen1/jigglypuff.png',line:'A song for you! ♪',cheer:'Jigglypuff sings a song for you ♪',sky:'#f4d2e3',ground:'#c4b7d5'}
 ];
 const id=x=>document.getElementById(x),stage=id('ph'),sprite=stage.querySelector('.pika-sprite'),performer=id('pika-performer'),bubble=id('pika-greeting'),button=id('pika-cheer');
 let index=0,auto=!matchMedia('(prefers-reduced-motion: reduce)').matches,timer,cheerTimer;
 characters.forEach(c=>{const image=new Image();image.src=c.image;});
 function render(){
  clearTimeout(cheerTimer);performer.classList.remove('cheering');
  const c=characters[index];sprite.src=c.image;sprite.alt=c.displayName;
  bubble.textContent=c.line;
  id('character-title').textContent=c.name+"'S PLAYROOM";
  id('character-description').textContent=c.displayName+' is saying hello';
  id('character-counter').textContent=String(index+1).padStart(2,'0')+' / 06';
  button.textContent='Say hello to '+c.displayName+' ✦';
  stage.style.background='linear-gradient('+c.sky+', #f3f4d7)';
  stage.querySelector('.pika-ground').style.backgroundColor=c.ground;
  stage.setAttribute('aria-label',c.displayName+' animated preview');
 }
 function schedule(){clearInterval(timer);if(auto)timer=setInterval(()=>{if(!document.hidden){index=(index+1)%characters.length;render();}},8000);}
 id('character-next').onclick=()=>{index=(index+1)%characters.length;render();schedule();};
 id('character-prev').onclick=()=>{index=(index+characters.length-1)%characters.length;render();schedule();};
 const toggle=id('character-auto');
 function updateToggle(){toggle.textContent=auto?'Pause rotation':'Resume rotation';toggle.setAttribute('aria-pressed',String(auto));}
 toggle.onclick=()=>{auto=!auto;updateToggle();schedule();};
 button.onclick=()=>{
  clearTimeout(cheerTimer);performer.classList.remove('cheering');void performer.offsetWidth;performer.classList.add('cheering');
  bubble.textContent=characters[index].cheer;button.textContent='Hello to you too!';
  cheerTimer=setTimeout(render,1800);schedule();
 };
 render();updateToggle();schedule();
})();