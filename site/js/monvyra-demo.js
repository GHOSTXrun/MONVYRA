(function(){
 const epoch=1791796231582;
 const team=[
  ['Pikachu','pikachu','ELECTRIC',22,62],
  ['Bulbasaur','bulbasaur','GRASS',18,56],
  ['Charmander','charmander','FIRE',19,58],
  ['Squirtle','squirtle','WATER',18,60],
  ['Pidgey','pidgey','FLYING',16,48],
  ['Eevee','eevee','NORMAL',17,54]
 ];
 window.monvyraDemoState=function(){
  const seconds=Math.max(0,Math.floor((Date.now()-epoch)/1000)), tick=Math.floor(seconds/2);
  const owned=Math.min(151,12+Math.floor(tick/9));
  return {startedAt:epoch-1080000,badges:Math.min(8,2+Math.floor(tick/90)),pokedexOwned:owned,pokedexSeen:Math.min(151,owned+16),
   caught:12+Math.floor(tick/9),battles:24+Math.floor(tick/5),steps:2450+tick*3,
   map:['Route 3','Mt. Moon','Cerulean City','Route 24'][Math.floor(tick/30)%4],
   stepsPerMin:84+tick%16,party:team.map(function(m,i){return {name:m[0],sprite:m[1],type:m[2],level:m[3]+Math.floor(tick/120),maxhp:m[4],hp:m[4]-((Math.floor(tick/4)+i*3)%15)};})};
 };
})();