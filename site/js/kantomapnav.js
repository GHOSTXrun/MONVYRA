// OBJECTS
const r = '<button onclick="random()">random!</button>';
//pallet town
const m1= {
  title: "Pallet Town on Parade",
  loc: "Pallet Town",
  pageimg: "/bookpages/pageImg/complete/LFcompletepg%20(1).jpg",
  link: "/bookpages/LFcomplete#scene1",
  pokemonImages: [
    { src: "/img/pok/gen1/pikachu.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/clefairy.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/squirtle.png", onclick: "greyout4()" },
    { src: "/img/pok/gen1/charmander.png", onclick: "greyout5()" },
    { src: "/img/pok/gen1/bulbasaur.png", onclick: "greyout6()" },
    // Add more Pokémon images as needed
  ],
};
//route 1
const m2 = {
  title:"I'M A YOUNGSTER!",
  loc: "Route 1",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(6).JPG",
  link:"/bookpages/LFfrlg#scene4",
  pokemonImages: [
    { src: "/img/pok/gen1/spearow.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/caterpie.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/rattata.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Viridian city
const m3 = {
  title:"Chaos at the Pokemon Center",
  loc: "Viridian City",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(27).jpg",
  link:"/bookpages/LFcomplete#scene23",
  pokemonImages: [
    { src: "/img/pok/gen1/seadra.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/rattata.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/blastoise.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Indigo Plateau
const m4 = {
  title:"The Elite Four of Indigo Plateau",
  loc: "Indigo Plateau",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(7).jpg",
  link:"/bookpages/LFfcomplete#scene8",
  pokemonImages: [
    { src: "/img/pok/gen1/ekans.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/venusaur.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/slowbro.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Viridian Forest
const m5 = {
  title:"The A-Maze-ing Viridian Forest!",
  loc: "Viridian Forest",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(2).jpg",
  link:"/bookpages/LFfcomplete#scene2",
  pokemonImages: [
    { src: "/img/pok/gen1/weedle.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/slowpoke.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/caterpie.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Pewter City
const m6 = {
  title:"Brock's Hometown of Pewter City",
  loc: "Pewter City",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(12).jpg",
  link:"/bookpages/LFfcomplete#scene10",
  pokemonImages: [
    { src: "/img/pok/gen1/weedle.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/graveler.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/geodude.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Pewter City Gym
const m7 = {
  title:"Pewter Gym's Camper",
  loc: "the Pewter City Gym",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(4).JPG",
  link:"/bookpages/LFfrlg#scene2",
  pokemonImages: [
    { src: "/img/pok/gen1/geodude.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/graveler.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/golem.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Diglett's Cave
const m8 = {
  title:"Diglett's Cave [UNDER CONSTRUCTION]",
  loc: "Diglett's Cave",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(14).jpg",
  link:"/bookpages/LFcomplete#scene12",
  pokemonImages: [
    { src: "/img/pok/gen1/diglett.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/raticate.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/dugtrio.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Mt. Moon
const m9 = {
  title:"Lost Inside Mt. Moon",
  loc: "Mt. Moon",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(3).jpg",
  link:"/bookpages/LFfrlg#scene3",
  pokemonImages: [
    { src: "/img/pok/gen1/diglett.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/zubat.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/jigglypuff.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Cerulean City
const m10 = {
  title:"Hide and Seek in Cerulean City",
  loc: "Cerulean City",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(42).JPG",
  link:"/bookpages/LFcomplete#scene4",
  pokemonImages: [
    { src: "/img/pok/gen1/tentacool.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/mrmime.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/poliwag.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Bill's House
const m11 = {
  title:"Bill's Sea Cottage at the Cape",
  loc: "Bill's House",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(7).JPG",
  link:"/bookpages/LFfrlg#scene5",
  pokemonImages: [
    { src: "/img/pok/gen1/gengar.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/butterfree.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/wigglytuff.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Pokemon Center
const m12 = {
  title:"Pokemon Center",
  loc: "this Pokemon Center",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(11).JPG",
  link:"/bookpages/LFfrlg#scene9",
  pokemonImages: [
    { src: "/img/pok/gen2/igglybuff.png", onclick: "greyout2()" },
    { src: "/img/pok/gen2/pichu.png", onclick: "greyout3()" },
    { src: "/img/pok/gen2/hoppip.png", onclick: "greyout4()" },
    { src: "/img/pok/gen2/togepi.png", onclick: "greyout5()" },
    { src: "/img/pok/gen2/larvitar.png", onclick: "greyout6()" },
    { src: "/img/pok/gen2/piloswine.png", onclick: "greyout7()" },
    // Add more Pokémon images as needed
  ],
};
//Power Plant
const m13 = {
  title:"A Shocking Time at the Power Plant",
  loc: "the Power Plant",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(15).jpg",
  link:"/bookpages/LFcomplete#scene13",
  pokemonImages: [
    { src: "/img/pok/gen1/zapdos.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/electabuzz.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/voltorb.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Rock Tunnel
const m14 = {
  title:"Pokemaniac in a Cave",
  loc: "Rock Tunnel",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(9).JPG",
  link:"/bookpages/LFfrlg#scene7",
  pokemonImages: [
    { src: "/img/pok/gen1/grimer.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/zubat.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/seel.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Lavender town
const m15 = {
  title:"Pokemon Tower In Lavender Town",
  loc: "Lavender Town",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(5).jpg",
  link:"/bookpages/LFcomplete#scene6",
  pokemonImages: [
    { src: "/img/pok/gen1/gastly.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/hunter.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/gengar.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Route 12
const m16 = {
  title:"Lapras Bobbing on the Waves",
  loc: "Route 12",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(5).JPG",
  link:"/bookpages/LFfrlg#scene3",
  pokemonImages: [
    { src: "/img/pok/gen1/tentacruel.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/seaking.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/cloyster.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Route 15
const m17 = {
  title:"The Legendary Pokemon Birds",
  loc: "Route 15",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(8).JPG",
  link:"/bookpages/LFfrlg#scene6",
  pokemonImages: [
    { src: "/img/pok/gen1/zapdos.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/moltres.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/articuno.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Route 11
const m18 = {
  title:"What Do You See When You Look Up?",
  loc: "Route 11",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(30).jpg",
  link:"/bookpages/LFcomplete#scene26",
  pokemonImages: [
    { src: "/img/pok/gen1/pikachu.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/starmie.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/onix.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Vermillion City
const m19 = {
  title:"The Port Town of Vermillion",
  loc: "Vermillion City",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(13).jpg",
  link:"/bookpages/LFcomplete#scene11",
  pokemonImages: [
    { src: "/img/pok/gen1/seel.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/poliwhirl.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/raichu.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Fuscia City
const m20 = {
  title:"A Day at the Fuchsia City Beach",
  loc: "Fuscia City",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(18).jpg",
  link:"/bookpages/LFcomplete#scene16",
  pokemonImages: [
    { src: "/img/pok/gen1/staryu.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/starmie.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/tentacruel.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Safari Zone
const m21 = {
  title:"Catch 'Em All In The Safari Zone",
  loc: "the Safari Zone",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(6).jpg",
  link:"/bookpages/LFcomplete#scene7",
  pokemonImages: [
    { src: "/img/pok/gen1/dratini.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/pidgey.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/mewtwo.png", onclick: "greyout4()" },
    { src: "/img/pok/gen1/tauros.png", onclick: "greyout5()" },
    // Add more Pokémon images as needed
  ],
};
//Cycling Road
const m22 = {
  title:"Away We Go Down the Cycling Road!",
  loc: "Cycling Road",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(17).jpg",
  link:"/bookpages/LFcomplete#scene15",
  pokemonImages: [
    { src: "/img/pok/gen1/arcanine.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/vileplume.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/magneton.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Celadon City
const m23 = {
  title:"The Celadon City Fair",
  loc: "Celadon City",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(4).jpg",
  link:"/bookpages/LFcomplete#scene5",
  pokemonImages: [
    { src: "/img/pok/gen1/raichu.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/golduck.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/porygon.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Rocket Base
const m24 = {
  title:"Team Rocket's Secret Hideout",
  loc: "the Rocket Base",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(25).jpg",
  link:"/bookpages/LFcomplete#scene21",
  pokemonImages: [
    { src: "/img/pok/gen1/gyrados.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/koffing.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/kakuna.png", onclick: "greyout4()" },
    { src: "/img/pok/gen1/arbok.png", onclick: "greyout5()" },
    { src: "/img/pok/gen1/nidoking.png", onclick: "greyout6()" },
    { src: "/img/pok/gen1/victreebel.png", onclick: "greyout7()" },
    // Add more Pokémon images as needed
  ],
};
//Gamefreak HQ
const m25 = {
  title:"Award Ceremony in Celadon City!",
  loc: "Gamefreak HQ",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(10).JPG",
  link:"/bookpages/LFfrlg#scene8",
  pokemonImages: [
    { src: "/img/pok/gen1/eevee.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/ekans.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/porygon.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Saffron City
const m26 = {
  title:"The Gleaming Skyscrapers of Saffron City",
  loc: "Saffron City",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(16).jpg",
  link:"/bookpages/LFcomplete#scene14",
  pokemonImages: [
    { src: "/img/pok/gen1/lapras.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/hitmonlee.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/hitmonchan.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
// The Seafoam Islands
const m27 = {
  title:"",
  loc: "the Seafoam Islands",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(19).jpg",
  link:"/bookpages/LFcomplete#scene17",
  pokemonImages: [
    { src: "/img/pok/gen1/articuno.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/jynx.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/lickitung.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Cinebar Island
const m28 = {
  title:"Volcano at Sea Cinnabar Island",
  loc: "Cinebar Island",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(20).jpg",
  link:"/bookpages/LFcomplete#scene18",
  pokemonImages: [
    { src: "/img/pok/gen1/aerodactyl.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/kabuto.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/omanyte.png", onclick: "greyout4()" },
    // Add more Pokémon images as needed
  ],
};
//Route 23
const m29 = {
  title:"Showdown on Blastoise Island",
  loc: "Route 23",
  pageimg:"/bookpages/pageImg/complete/LFcompletepg%20(33).jpg",
  link:"/bookpages/LFcomplete#scene29",
  pokemonImages: [
    { src: "/img/pok/gen1/squirtle.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/wartortle.png", onclick: "greyout3()" },
  ],
  
};
//Professor oaks lab
const m30 = {
  title:"Welcome to the World of Pokemon",
  loc: "Prof. Oak's Lab",
  pageimg:"/bookpages/pageImg/frlg/frlg%20(3).JPG",
  link:"/bookpages/LFfrlg#scene1",
  pokemonImages: [
    { src: "/img/pok/gen1/squirtle.png", onclick: "greyout2()" },
    { src: "/img/pok/gen1/charmander.png", onclick: "greyout3()" },
    { src: "/img/pok/gen1/bulbasaur.png", onclick: "greyout4()" },
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
  if (m>=30){}
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
  m = Math.floor(Math.random() * 30) + 1;
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
    /*pallet town*/
    case 1:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m1.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m1.title+'</div>\
        <img src="'+m1.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m1.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m1.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(30)">&#x21b1;<br>Go to Prof. Oak\'s Lab</button><br><br><button onclick="dispSect(2)">&#x2191;<br>North to Route 1</button><br><button onclick="dispSect(29)">&#x2193;<br>South to Route 23</button><br>'+'<br>'+
        '</div>\
      </div>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Route 1*/
    case 2:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m2.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m2.title+'</div>\
        <img src="'+m2.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m2.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m2.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(3)">&#x2191;<br>North to Viridian City</button><br><button onclick="dispSect(1)">&#x2193;<br>South to Pallet Town</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
          
    /*Viridian City*/
    case 3:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m3.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m3.title+'</div>\
        <img src="'+m3.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m3.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m3.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(4)">&#x2190;<br>West to Indigo Plateau</button><br><button onclick="dispSect(5)">&#x2191;<br>North to Viridian Forest</button><br><button onclick="dispSect(2)">&#x2193;<br>South to Route 1</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Indigo Plateau*/
    case 4:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m4.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m4.title+'</div>\
        <img src="'+m4.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m4.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m4.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(3)">&#x2192;<br>East to Viridian City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Viridian Forest*/
    case 5:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m5.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m5.title+'</div>\
        <img src="'+m5.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m5.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m5.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(6)">&#x2191;<br>North to Pewter City</button><br><button onclick="dispSect(3)">&#x2193;<br>South to Viridian City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Pewter City*/
    case 6:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m6.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m6.title+'</div>\
        <img src="'+m6.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m6.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m6.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(7)">&#x21b1;<br>Challenge the Pewter City Gym!</button><br><br><button onclick="dispSect(8)">&#x2198;<br>Southeast  to Diglett Tunnel</button><br><button onclick="dispSect(9)">&#x2192;<br>East to Mt. Moon</button><br><button onclick="dispSect(5)">&#x2193;<br>South to Viridian Forest</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Pewter City Gym*/
    case 7:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m7.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m7.title+'</div>\
        <img src="'+m7.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m7.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m7.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(6)">&#x21b2;<br>Return to Pewter City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Diglett's Cave*/
    case 8:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m8.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m8.title+'</div>\
        <img src="'+m8.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m8.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m8.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(6)">&#x2191;<br>North to Pewter City</button><br><button onclick="dispSect(19)">&#x2193;<br>South to Vermillion City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Mt. Moon*/
    case 9:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m9.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m9.title+'</div>\
        <img src="'+m9.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m9.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m9.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(6)">&#x2190;<br>West to Pewter City</button><br><button onclick="dispSect(10)">&#x2192;<br>East to Cerulean City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Cerulean City*/
    case 10:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m10.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m10.title+'</div>\
        <img src="'+m10.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m10.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m10.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(11)">&#x2191;<br>North to Bill\'s House</button><br><button onclick="dispSect(12)">&#x2192;<br>East to Route 9 Pokemon Center</button><br><button onclick="dispSect(9)">&#x2190;<br>West to Mt. Moon</button><br><button onclick="dispSect(26)">&#x2193;<br>South to Saffron City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Bill's House*/
    case 11:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m11.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m11.title+'</div>\
        <img src="'+m11.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m11.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m11.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(10)">&#x2193;<br>South to Cerulean City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Pokemon Center*/
    case 12:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m12.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m12.title+'</div>\
        <img src="'+m12.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m12.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m12.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(13)">Surf &#x2193;<br>South to Power Plant</button><br><button onclick="dispSect(14)">Walk &#x2193;<br>South to Rock Tunnel</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Power Plant*/
    case 13:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m13.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m13.title+'</div>\
        <img src="'+m13.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m13.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m13.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(12)">Surf &#x2191;<br>North to Route 9 Pokemon Center</button><br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Rock Tunnel*/
    case 14:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m14.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m14.title+'</div>\
        <img src="'+m14.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m14.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m14.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(12)">&#x2191;<br>North to Route 9 Pokemon Center</button><br><button onclick="dispSect(15)">&#x2193;<br>South to Lavender Town</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Lavender Town*/
    case 15:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m15.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m15.title+'</div>\
        <img src="'+m15.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m15.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m15.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(14)">&#x2191;<br>North to Rock Tunnel</button><br><button onclick="dispSect(26)">&#x2190;<br>West to Saffron City</button><br><button onclick="dispSect(16)">&#x2193;<br>South to Route 12</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Route 12*/
    case 16:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m16.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m16.title+'</div>\
        <img src="'+m16.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m16.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m16.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(15)">&#x2191;<br>North to Lavender Town</button><br><button onclick="dispSect(18)">&#x2192;<br>West to Route 11</button><br><button onclick="dispSect(17)">&#x2199;<br>Southwest to Route 15</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Route 15*/
    case 17:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m17.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m17.title+'</div>\
        <img src="'+m17.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m17.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m17.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(16)">&#x2197;<br>Northeast to Route 12</button><br><button onclick="dispSect(20)">&#x2190;<br>West to Fuscia City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Route 11*/
    case 18:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m18.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m18.title+'</div>\
        <img src="'+m18.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m18.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m18.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(15)">&#x2190;<br>West to Vermillion City</button><br><button onclick="dispSect(16)">&#x2192;<br>East to Route 12</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Vermillion City*/
    case 19:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m19.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m19.title+'</div>\
        <img src="'+m19.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m19.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m19.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(26)">&#x2191;<br>North to Saffron City</button><br><button onclick="dispSect(18)">&#x2192;<br>East to Route 11</button><br><button onclick="dispSect(8)">&#x2198;<br>Southeast  to Diglett\'s Tunnel</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Fuscia City*/
    case 20:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m20.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m20.title+'</div>\
        <img src="'+m20.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m20.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m20.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(21)">&#x2191;<br>North to Safari Zone</button><br><button onclick="dispSect(22)">&#x2190;<br>West to Cycling Road</button><br><button onclick="dispSect(27)">&#x2199;<br>Southwest  to Seafoam Islands</button><br><button onclick="dispSect(17)">&#x2192;<br>East to Route 15</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Safari Zone*/
    case 21:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m21.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m21.title+'</div>\
        <img src="'+m21.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m21.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m21.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(20)">&#x2193;<br>South to Saffron City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Cycling Road*/
    case 22:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m22.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m22.title+'</div>\
        <img src="'+m22.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m22.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m22.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(23)">&#x2191;<br>North to Celadon City</button><br><button onclick="dispSect(20)">&#x2193;<br>South to Fuscia City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Celadon City*/
    case 23:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m23.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m23.title+'</div>\
        <img src="'+m23.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m23.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m23.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(24)">&#x21b1;<br>Gamble at the Celadon Game Corner(... right?)</button><br><br><button onclick="dispSect(25)">&#x21b1;<br>Visit Gamefreak HQ!</button><br><br><button onclick="dispSect(22)">&#x2190;<br>West to Cycling Road</button><br><button onclick="dispSect(26)">&#x2192;<br>East to Saffron City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Rocket Base*/
    case 24:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m24.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m24.title+'</div>\
        <img src="'+m24.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m24.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m24.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(23)">&#x21b2;<br>Exit to Celadon City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Game Freak HQ*/
    case 25:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m25.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m25.title+'</div>\
        <img src="'+m25.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m25.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m25.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(23)">&#x21b2;<br>Exit to Celadon City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Saffron City*/
    case 26:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m26.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m26.title+'</div>\
        <img src="'+m26.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m26.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m26.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(11)">&#x2191;<br>North to Cerulean City</button><br><button onclick="dispSect(15)">&#x2192;<br>East to Lavender Town</button><br><button onclick="dispSect(23)">&#x2190;<br>West to Celadon City</button><br><button onclick="dispSect(19)">&#x2193;<br>South to Vermillion City</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Seafoam Islands*/
    case 27:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m27.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m27.title+'</div>\
        <img src="'+m27.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m27.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m27.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(19)">&#x2197;<br>Northeast  to Fuscia City</button><br><button onclick="dispSect(28)">&#x2190;<br>West to Cinebar Island</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Cinebar Island*/
    case 28:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m28.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m28.title+'</div>\
        <img src="'+m28.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m28.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m28.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(29)">&#x2191;<br>North to Route 23</button><br><button onclick="dispSect(27)">&#x2192;<br>East to Seafoam Islands</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Route 23*/
    case 29:
     html = '\
      <div class="textbox" style="width:750px"><a href="'+m29.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m29.title+'</div>\
        <img src="'+m29.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m29.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m29.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(1)">&#x2191;<br>North to Pallet Town</button><br><button onclick="dispSect(28)">&#x2193;<br>South to Cinebar Island</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    /*Prof. Oak's Lab*/
    case 30:
      html = '\
      <div class="textbox" style="width:750px"><a href="'+m30.link+'">link to full page</a><br>\
        <div class="titlebox" style = "width:500px">'+m30.title+'</div>\
        <img src="'+m30.pageimg+'" style="width:700px">\
        <div class="infobox" style = "width:500px">\
          <p>Find these Pokemon hidden in '+m30.loc+'! <br><sub>(trainer tip- click on the Pokemon below to mark your progress!)</sub><br></p>\
          ' + generatePokemonImages(m30.pokemonImages) + '<br>\
          <h3>Where to next?</h3>\
          <button onclick="dispSect(1)">&#x21b2;<br>Exit to Pallet Town</button><br>'+'<br>';
      mapNum.textContent = m;
      sect.innerHTML = html;
      break;
    default:
      mapNum.textContent = m;
      sect.innerHTML = 'out of range? : '+m+'<br>\
      <div class="textbox" style="width:750px">\
        <h1 onclick="dispSect(1)">Start your Adventure!</h1>\
        <p>or</p>\
        <h1 onclick="random()">Random!</h1>\
      </div>';
      break;
  }
}

function generatePokemonImages(pokemonImages) {
  return pokemonImages.map((pokemon, index) => 
    `<span id="greyimg${index + 2}"><img src="${pokemon.src}" onclick="${pokemon.onclick}"></span>`
  ).join('');
}

