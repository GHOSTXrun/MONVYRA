// OBJECTS
const r = '<button onclick="random()">random!</button>';

const north = '&#x2191;<br>North ';
const northe = '&#x2197;<br>Northeast ';
const northw = '&#x2196;<br>Northwest ';
const east = '&#x2192;<br>East ';
const west = '&#x2190;<br>West ';
const south = '&#x2193;<br>South ';
const southe = '&#x2198;<br>Southeast ';
const southw = '&#x2199;<br>Southwest ';

const ent = '&#x21b1;<br>Enter ';
const ext = '&#x21b2;<br>Exit ';

//New Bark Town
const m1= {
  title: "A New Day In New Bark Town",
  loc: "New Bark Town",
  pageimg: "/bookpages/pageImg/gs/LFgs1.jpg",
  link: "/bookpages/LFgs#scene1",
  pokemonImages: [
    { src: "/img/pok/gen2/chikorita.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/bayleaf.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/meganium.png", onclick: "greyout4()" },
    { src: "/img/pok/gen2/totodile.png", onclick: "greyout5()" },
    { src: "/img/pok/gen2/croconaw.png", onclick: "greyout6()" },
    { src: "/img/pok/gen2/feraligatr.png", onclick: "greyout7()" },
    { src: "/img/pok/gen2/cydnaquil.png", onclick: "greyout8()" },
    { src: "/img/pok/gen2/quilava.png", onclick: "greyout9()" },
    { src: "/img/pok/gen2/typhlosion.png", onclick: "greyout10()" },
    // Add more Pokémon images as needed
  ],
};
//pokemon academy
const m2 = {
  title:"Mr. Earl Dervish's Pokemon Academy",
  loc: "the Pokemon Academy",
  pageimg:"/bookpages/pageImg/crystal/lfc2.png",
  link:"/bookpages/LFc#scene2",
  pokemonImages: [
    { src: "/img/pok/gen2/smeargle.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/scizor.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/heracross.gif", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//sprout Tower
const m3 = {
  title:"Sprout Tower Sways",
  loc: "Sprout Tower",
  pageimg:"/bookpages/pageImg/gs/LFgs12.png",
  link:"/bookpages/LFgs#scene11",
  pokemonImages: [
    { src: "/img/pok/gen2/bellsprout.png", onclick: "greyout2()" },
    // Add more Pokémon images as needed
  ],
};
//Ruins of Alph
const m4 = {
  title:"Unown at the Ruins of Alph",
  loc: "the Ruins of Alph",
  pageimg:"/bookpages/pageImg/gs/LFgs11.png",
  link:"/bookpages/LFgs#scene12",
  pokemonImages: [
    { src: "/img/pok/gen2/unown.png", onclick: "greyout2()" },
    // Add more Pokémon images as needed
  ],
};
//Route 32
const m5 = {
  title:"A Popular Fishing Spot",
  loc: "Route 32",
  pageimg:"/bookpages/pageImg/gs/LFgs2.jpg",
  link:"/bookpages/LFgs#scene2",
  pokemonImages: [
    { src: "/img/pok/gen2/qwilfish.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/chinchou.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/remoraid.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Azalea Town
const m6 = {
  title:"Azalea Town is Full of Slowpokes!",
  loc: "Azalea Town",
  pageimg:"/bookpages/pageImg/gs/LFgs3.jpg",
  link:"/bookpages/LFgs#scene3",
  pokemonImages: [
    { src: "/img/pok/gen2/slowpoke.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/slowbro.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/slowking.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Ilex Forest
const m7 = {
  title:"Ilex Forest is VERY Dark",
  loc: "Ilex Forest",
  pageimg:"/bookpages/pageImg/crystal/lfc3.png",
  link:"",
  pokemonImages: [
    { src: "/img/pok/gen2/pineco.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/farfetchd.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/forretress.gif", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Pokemon Daycare
const m8 = {
  title:"Pokemon Daycare",
  loc: "the Pokemon Daycare",
  pageimg:"https://letsfindpokemon.info/bookpages/pageImg/crystal/lfc4.png",
  link:"/bookpages/LFc#scene4",
  pokemonImages: [
    { src: "/img/pok/gen2/sneasel.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/elekid.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/teddiursa.gif", onclick: "greyout4()" },
    { src: "/img/pok/gen2/snubbull.gif", onclick: "greyout5()" },
    { src: "/img/pok/gen2/pichu.gif", onclick: "greyout6()" },
    { src: "/img/pok/gen2/togepi.gif", onclick: "greyout7()" },
    { src: "/img/pok/gen2/bellossom.gif", onclick: "greyout8()" },
    { src: "/img/pok/gen2/smoochum.gif", onclick: "greyout9()" },
    { src: "/img/pok/gen2/igglybuff.gif", onclick: "greyout10()" },
    // Add more Pokémon images as needed
  ],
};
//Goldenrod Gym
const m9 = {
  title:"Whitney at Goldenrod Gym!",
  loc: "the Goldenrod Gym",
  pageimg:"/bookpages/pageImg/gs/LFgs4.jpg",
  link:"/bookpages/LFgs#scene4",
  pokemonImages: [
    { src: "/img/pok/gen2/clefairy.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/miltank.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/snubbull.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Goldenrod Train
const m10 = {
  title:"ALL ABOARD!",
  loc: "the Goldenrod-Saffron Train",
  pageimg:"/bookpages/pageImg/crystal/lfc8.JPG",
  link:"/bookpages/LFc#scene8",
  pokemonImages: [
    { src: "/img/pok/gen2/azumarill.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/aipom.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/umbreon.gif", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//National Park
const m11 = {
  title:"Bug Hunt at Nature Park",
  loc: "the National Park",
  pageimg:"/bookpages/pageImg/gs/LFgs5.jpg",
  link:"/bookpages/LFgs#scene5",
  pokemonImages: [
    { src: "/img/pok/gen2/scyther.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/butterfree.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/pinsir.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Route 36
const m12 = {
  title:"Get Out of the Way, Sudowoodo!",
  loc: "Route 36",
  pageimg:"/bookpages/pageImg/gs/LFgs6.jpg",
  link:"/bookpages/LFgs#scene6",
  pokemonImages: [
    { src: "/img/pok/gen2/entei.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/stantler.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/ledyba.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Ecruteak City
const m13 = {
  title:"Geisha Dancers at Ecruteak City",
  loc: "Ecruteak City",
  pageimg:"/bookpages/pageImg/gs/LFgs7.jpg",
  link:"/bookpages/LFgs#scene7",
  pokemonImages: [
    { src: "/img/pok/gen2/eevee.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/espeon.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/umbreon.png", onclick: "greyout4()" },
    { src: "/img/pok/gen2/jolteon.png", onclick: "greyout5()" },
    { src: "/img/pok/gen2/vaporeon.png", onclick: "greyout6()" },
    { src: "/img/pok/gen2/flareon.png", onclick: "greyout7()" },
    // Add more Pokémon images as needed
  ],
};
//Tin Tower
const m14 = {
  title:"Tin Tower that Points to the Sky",
  loc: "Tin Tower",
  pageimg:"/bookpages/pageImg/gs/LFgs8.jpg",
  link:"/bookpages/LFgs#scene8",
  pokemonImages: [
    { src: "/img/pok/gen2/houndour.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/houndoom.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/sunkern.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Route 39
const m15 = {
  title:"Let's Find Pokemon! Gold&Silver",
  loc: "Route 39",
  pageimg:"/bookpages/pageImg/gs/LFgsfullcover.jpg",
  link:"/bookpages/LFgs#book1",
  pokemonImages: [
  ],
};
//olivine City
const m16 = {
  title:"The Lighthouse at Olivine City",
  loc: "Olivine City",
  pageimg:"/bookpages/pageImg/crystal/lfc6.png",
  link:"/bookpages/LFc#scene6",
  pokemonImages: [
    { src: "/img/pok/gen2/magnemite.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/steelix.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/voltorb.gif", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//ss aqua
const m17 = {
  title:"The Speedy S.S. Aqua at Sea!",
  loc: "the S.S. Aqua",
  pageimg:"/bookpages/pageImg/gs/LFgs10.jpg",
  link:"/bookpages/LFgs#scene10",
  pokemonImages: [
    { src: "/img/pok/gen2/pikachu.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/togepi.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/hoppip.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Whirl Islands
const m18 = {
  title:"Lugia Lives at Whirl Islands",
  loc: "the Whirl Islands",
  pageimg:"/bookpages/pageImg/crystal/lfc1.png",
  link:"/bookpages/LFc#scene1",
  pokemonImages: [
    { src: "/img/pok/gen2/mantine.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/lanturn.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/lapras.gif", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Mt Mortar
const m19 = {
  title:"The Great Karate King at Mt. Mortar",
  loc: "Mt. Mortar",
  pageimg:"/bookpages/pageImg/gs/LFgs9.jpg",
  link:"/bookpages/LFgs#scene9",
  pokemonImages: [
    { src: "/img/pok/gen2/hitmonlee.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/hitmonchan.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/hitmontop.png", onclick: "greyout4()" },
    { src: "/img/pok/gen2/tyrogue.png", onclick: "greyout5()" },
    // Add more Pokémon images as needed
  ],
};
//Lake of Rage
const m20 = {
  title:"The Red Gyarados Appears!",
  loc: "the Lake of Rage",
  pageimg:"/bookpages/pageImg/crystal/lfc5.png",
  link:"/bookpages/LFc#scene5",
  pokemonImages: [
    { src: "/img/pok/gen2/jumpluff.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/skarmory.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/dunsparce.gif", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Ice Path
const m21 = {
  title:"Ice-Cold Secret Passage",
  loc: "the Ice Path",
  pageimg:"/bookpages/pageImg/crystal/lfc7.png",
  link:"/bookpages/LFc#scene7",
  pokemonImages: [
    { src: "/img/pok/gen2/swinub.gif", onclick: "greyout2()" },
    { src: "/img/pok/gen2/delibird.gif", onclick: "greyout3()" },
    { src: "/img/pok/gen2/jynx.gif", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};


//COUNTER for testing
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const mapNum = document.getElementById("mapNum");

let m = 0;

increaseBtn.onclick = function(){
  if (m>=21){}
  else{
    m++;
    mapNum.textContent = m;
    dispSect(m);
  }
}
decreaseBtn.onclick = function(){
  if (m<=0){}
  else{
    m--;
    mapNum.textContent = m;
    dispSect(m);
  }
}
resetBtn.onclick = function(){
  m = 0;
  mapNum.textContent = m;
  dispSect(m);
}

function random() {
  m = Math.floor(Math.random() * 21) + 1;
  mapNum.textContent = m;
  dispSect(m);
}

//displaying section
let sect = document.getElementById("sect");


function dispSect(m){
  let html = 0;
  switch(m) {
    /*starting area*/
    case 0:
      sect.innerHTML = '<h1 onclick="dispSect(1)">Start your Adventure!</h1><p>or</p><h1 onclick="random()">Random!</h1>';
      break;
    /*new bark town*/
    case 1:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m1.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m1.title+'</div>\
        <img src="'+m1.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m1.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m1.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(2)">'+northw+'to the Pokemon Academy</button><br>\
          <a href ="/explore/kanto"><button>'+east+'to the Kanto Region!</button></a><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*pokemon academy*/
    case 2:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m2.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m2.title+'</div>\
        <img src="'+m2.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m2.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m2.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(3)">'+north+'to the Sprout Tower</button><br>\
          <button onclick="dispSect(12)">'+west+'to Route 36</button><br>\
          <button onclick="dispSect(4)">'+southw+'to the Ruins of Alph</button><br>\
          <button onclick="dispSect(1)">'+southe+'to New Bark Town</button><br>\
          <button onclick="dispSect(5)">'+south+'to Route 32</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
          
    /*sprout tower*/
    case 3:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m3.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m3.title+'</div>\
        <img src="'+m3.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m3.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m3.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(2)">'+south+'to the Pokemon Academy</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*ruins of alph*/
    case 4:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m4.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m4.title+'</div>\
        <img src="'+m4.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m4.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m4.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(2)">'+northe+'to the Pokemon Academy</button><br>\
          <button onclick="dispSect(12)">'+northw+'to Route 36</button><br>\
          <button onclick="dispSect(5)">'+south+'to Route 32</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*route 32*/
    case 5:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m5.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m5.title+'</div>\
        <img src="'+m5.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m5.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m5.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(4)">'+northw+'to the Ruins of Alph</button><br>\
          <button onclick="dispSect(2)">'+northe+'to the Pokemon Academy</button><br>\
          <button onclick="dispSect(5)">'+south+'to Azalea Town</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*azalea town*/
    case 6:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m6.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m6.title+'</div>\
        <img src="'+m6.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m6.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m6.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(5)">'+north+'to Route 32</button><br>\
          <button onclick="dispSect(7)">'+west+'to the Ilex Forest</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*ilex forest*/
    case 7:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m7.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m7.title+'</div>\
        <img src="'+m7.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m7.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m7.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(8)">'+north+'to the Pokemon Daycare</button><br>\
          <button onclick="dispSect(6)">'+east+'to Azalea Town</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*pokemon daycare*/
    case 8:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m8.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m8.title+'</div>\
        <img src="'+m8.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m8.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m8.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(10)">'+northw+'to the Goldenrod Train</button><br>\
          <button onclick="dispSect(8)">'+northe+'to the Goldenrod Gym</button><br>\
          <button onclick="dispSect(7)">'+south+'to the Ilex Forest</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*goldenrod gym*/
    case 9:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m9.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m9.title+'</div>\
        <img src="'+m9.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m9.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m9.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(11)">'+north+'to the National Park</button><br>\
          <button onclick="dispSect(10)">'+east+'to take the Goldenrod train</button><br>\
          <button onclick="dispSect(8)">'+south+'to the Pokemon Daycare</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*goldenrod train*/
    case 10:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m10.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m10.title+'</div>\
        <img src="'+m10.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m10.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m10.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <a href ="/explore/kanto"><button>'+ent+'to take the Train to the Kanto Region!</button></a><br>\
          <button onclick="dispSect(9)">'+east+'to the Goldenrod Gym</button><br>\
          <button onclick="dispSect(8)">'+south+'to the Pokemon Daycare</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*national park*/
    case 11:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m11.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m11.title+'</div>\
        <img src="'+m11.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m11.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m11.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(12)">'+west+'to Route 36</button><br>\
          <button onclick="dispSect(10)">'+southw+'to the Goldenrod Train</button><br>\
          <button onclick="dispSect(8)">'+southe+'to the Goldenrod Gym</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*route 36*/
    case 12:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m12.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m12.title+'</div>\
        <img src="'+m12.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m12.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m12.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(13)">'+north+'to Ecruteak City</button><br>\
          <button onclick="dispSect(11)">'+west+'to the National Park</button><br>\
          <button onclick="dispSect(2)">'+east+'to the Pokemon Academy</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*ecruteak city*/
    case 13:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m13.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m13.title+'</div>\
        <img src="'+m13.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m13.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m13.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(14)">'+ent+'the Tin Tower</button><br>\
          <button onclick="dispSect(15)">'+west+'to Route 39</button><br>\
          <button onclick="dispSect(19)">'+east+'to Mt. Mortar</button><br>\
          <button onclick="dispSect(12)">'+south+'to Route 36</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*tin tower*/
    case 14:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m14.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m14.title+'</div>\
        <img src="'+m14.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m14.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m14.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(13)">'+ext+'to Ecruteak City</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*route 39*/
    case 15:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m15.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m15.title+'</div>\
        <img src="'+m15.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          ' + generatePokemonImages(m15.pokemonImages) + '<h3>Where to next?</h3>\
          <button onclick="dispSect(14)">'+east+'to the Ecruteak City</button><br>\
          <button onclick="dispSect(16)">'+south+'to Olivine City</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*olivine city*/
    case 16:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m16.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m16.title+'</div>\
        <img src="'+m16.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m16.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m16.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(15)">'+north+'to the Route 39</button><br>\
          <button onclick="dispSect(18)">'+southw+'to the Whirl Islands</button><br>\
          <button onclick="dispSect(17)">'+south+'to board the S.S. Aqua</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*ss aqua*/
    case 17:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m17.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m17.title+'</div>\
        <img src="'+m17.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m17.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m17.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <a href ="/explore/kanto"><button>'+ent+'to take the S.S.Aqua to the Kanto Region!</button></a><br>\
          <button onclick="dispSect(16)">'+ext+'to return to Olivine City</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*whirl islands*/
    case 18:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m18.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m18.title+'</div>\
        <img src="'+m18.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m18.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m18.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(17)">'+north+'to Olivine City</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*mt mortar*/
    case 19:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m19.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m19.title+'</div>\
        <img src="'+m19.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m19.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m19.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(20)">'+northe+'to the Lake of Rage</button><br>\
          <button onclick="dispSect(13)">'+west+'to Ecruteak City</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*lake of rage*/
    case 20:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m20.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m20.title+'</div>\
        <img src="'+m20.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m20.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m20.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(19)">'+southw+'to Mt. Mortar</button><br>\
          <button onclick="dispSect(21)">'+southe+'to the Ice Path</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*ice path*/
    case 21:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m21.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m21.title+'</div>\
        <img src="'+m21.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m21.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m21.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(20)">'+northw+'to the Lake of Rage</button><br>\
          <button onclick="dispSect(1)">'+south+'to New Bark Town</button><br>\
          <br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
  }
}

function generatePokemonImages(pokemonImages) {
  return pokemonImages.map((pokemon, index) => 
    `<span id="greyimg${index + 2}"><img src="${pokemon.src}" onclick="${pokemon.onclick}"></span>`
  ).join('');
}

