(function(){
 const characters=[
  {name:'PIKACHU',cn:'皮卡丘',image:'img/pikachu-stream.png',line:'Pika pika! ⚡',cheer:'Pika-chuuu! ⚡',sky:'#bcebd6',ground:'#a1c980'},
  {name:'CHARMANDER',cn:'小火龙',image:'img/pok/gen1/charmander.png',line:'Ready to glow! 🔥',cheer:'小火龙喷出小火花！',sky:'#ffdec1',ground:'#d1b681'},
  {name:'SQUIRTLE',cn:'杰尼龟',image:'img/pok/gen1/squirtle.png',line:'Splash time! 💧',cheer:'杰尼龟开心地转圈！',sky:'#b9e6f4',ground:'#9bcac0'},
  {name:'BULBASAUR',cn:'妙蛙种子',image:'img/pok/gen1/bulbasaur.png',line:'Let it bloom! 🌿',cheer:'妙蛙种子伸出了藤鞭！',sky:'#d5edb9',ground:'#a8c782'},
  {name:'EEVEE',cn:'伊布',image:'img/pok/gen1/eevee.png',line:'Adventure awaits! ✨',cheer:'伊布开心地跳起来！',sky:'#eddbc6',ground:'#b9bf91'},
  {name:'JIGGLYPUFF',cn:'胖丁',image:'img/pok/gen1/jigglypuff.png',line:'A song for you! ♪',cheer:'胖丁为你唱了一首歌 ♪',sky:'#f4d2e3',ground:'#c4b7d5'}
 ];
 const id=x=>document.getElementById(x),stage=id('ph'),sprite=stage.querySelector('.pika-sprite'),performer=id('pika-performer'),bubble=id('pika-greeting'),button=id('pika-cheer');
 let index=0,auto=!matchMedia('(prefers-reduced-motion: reduce)').matches,timer,cheerTimer;
 characters.forEach(c=>{const image=new Image();image.src=c.image;});
 function render(){
  clearTimeout(cheerTimer);performer.classList.remove('cheering');
  const c=characters[index];sprite.src=c.image;sprite.alt=c.cn;
  bubble.textContent=c.line;
  id('character-title').textContent=c.name+"'S PLAYROOM";
  id('character-description').textContent=c.cn+'正在和你打招呼';
  id('character-counter').textContent=String(index+1).padStart(2,'0')+' / 06';
  button.textContent='和'+c.cn+'打招呼 ✦';
  stage.style.background='linear-gradient('+c.sky+', #f3f4d7)';
  stage.querySelector('.pika-ground').style.backgroundColor=c.ground;
  stage.setAttribute('aria-label',c.cn+'动画演示');
 }
 function schedule(){clearInterval(timer);if(auto)timer=setInterval(()=>{if(!document.hidden){index=(index+1)%characters.length;render();}},8000);}
 id('character-next').onclick=()=>{index=(index+1)%characters.length;render();schedule();};
 id('character-prev').onclick=()=>{index=(index+characters.length-1)%characters.length;render();schedule();};
 const toggle=id('character-auto');
 function updateToggle(){toggle.textContent=auto?'暂停轮换':'自动轮换';toggle.setAttribute('aria-pressed',String(auto));}
 toggle.onclick=()=>{auto=!auto;updateToggle();schedule();};
 button.onclick=()=>{
  clearTimeout(cheerTimer);performer.classList.remove('cheering');void performer.offsetWidth;performer.classList.add('cheering');
  bubble.textContent=characters[index].cheer;button.textContent='收到你的招呼啦！';
  cheerTimer=setTimeout(render,1800);schedule();
 };
 render();updateToggle();schedule();
})();