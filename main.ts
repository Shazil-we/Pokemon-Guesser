import inquirer from "inquirer";
function Find_Uncommon(Array1:string[] , Array2:string[])
{
  return Array1.filter(item => !Array2.includes(item))
}
function Find_Common(Array1:string[] , Array2:string[])
{
  return Array1.filter(item1 => Array2.includes(item1))
}
function Answer_Checker(Array1:string[]){
  if(Array1.length == 1){
    console.log(`Your Pokemon is ${Array1}`)
    process.exit();
  }
}
let OriginalPokemon = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
  "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata",
  "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu",
  "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂",
  "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales",
  "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume",
  "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth",
  "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine",
  "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
  "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool",
  "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke",
  "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel",
  "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter",
  "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode",
  "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan",
  "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela",
  "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie",
  "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros",
  "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon",
  "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl",
  "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite",
  "Mewtwo", "Mew"
];
let DualTypePokemon = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charizard", "Butterfree",'Weedle' , 'Kakuna',
  "Beedrill", "Pidgey" , "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Nidoqueen",
  "Nidoking","Zubat", "Golbat", "Jigglypuff", "Wigglytuff", "Oddish" , 
  "Gloom", "Vileplume", "Paras", "Parasect", "Venomoth", "Venonat", "Poliwrath", "Bellsprout" , "Weepinbell" ,
  "Victreebel", "Tentacool" , "Tentacruel", "Geodude" ,  "Graveler", "Golem", "Slowpoke", "Slowbro", "Magnemite" , 
  "Magneton", "Farfetch'd" , "Doduo" , "Dodrio", "Dewgong", "Cloyster", "Gastly" ,"Haunter", "Gengar", "Onix",
  "Exeggcute", "Exeggutor","Rhyhorn", "Rhydon","Starmie", "Mr. Mime", "Scyther", "Jynx", "Gyarados", "Lapras","Omanyte",
  "Omastar", "Kabuto" , "Kabutops", "Aerodactyl", "Articuno", "Zapdos", "Moltres","Dragonite",
];
let SingleTypePokemon = Find_Uncommon(OriginalPokemon , DualTypePokemon)
let SuperSet_Pokemon = [
  ["Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Paras", "Parasect", "Venonat", "Venomoth" , "Pinsir" , "Scyther"],
  ["Dratini", "Dragonair", "Dragonite"],
  ["Pikachu", "Raichu", "Magnemite", "Magneton", "Voltorb", "Electrode", "Electabuzz","Jolteon", "Zapdos"],
  ["Clefairy" , "Clefable" , "Jigglypuff" , "Wigglytuff" , "Mr. Mime" ],
  ["Mankey", "Primeape", "Machop", "Machoke", "Machamp" ,"Hitmonchan","Poliwrath","Hitmonlee"],
  ["Charmander", "Charmeleon", "Charizard", "Vulpix", "Ninetales", "Growlithe", "Arcanine", "Ponyta", "Rapidash", "Magmar" , "Moltres" ,"Flareon"],
  [ "Charizard" , "Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Zubat", "Golbat", "Farfetch'd", "Doduo", "Dodrio", "Scyther" ,"Gyrados" , "Articuno" , "Zapdos" , "Moltres" , "Aerodactyl", "Dragonite" ],
  ["Gastly", "Haunter", "Gengar"],
  ["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel" , "Exeggcute" , "Exeggctor" , "Tangela"],
  ["Sandshrew", "Sandslash", "Nidoqueen", "Nidoking", "Diglett", "Dugtrio","Geodude","Golem", "Graveler","Onix", "Cubone" , "Marowak" , "Rhyhorn" , "Rhydon"],
  ["Dewgong","Cloyster", "Jynx", "Lapras" , "Articuno" ],
  ["Rattata", "Raticate", "Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Jigglypuff", "Wigglytuff", "Meowth" , "Persian" , "Doduo" , "Dodrio" , "Farfetch'd" , "Lickitung" , "Chansey" , "Kangaskhan" , "Tauros" , "Ditto" , "Eevee" , "Porygon" , "Snorlax"],
  ["Bulbasaur", "Ivysaur", "Venusaur", "Ekans", "Arbok", "Weedle","Kakuna" ,"Beedrill" , "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", 
  "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Venonat", "Venomoth", "Bellsprout", "Weepinbell", "Victreebel", "Grimer", "Muk", "Koffing", "Weezing", "Gastly", "Haunter", "Gengar" ],
  ["Abra", "Kadabra", "Alakazam", "Drowzee", "Hypno", "Jynx", "Mr. Mime" , "Mew" , "Mewtwo" ,"Slowpoke", "Slowbro" , "Exeggcute" , "Exeggctor" ,"Starmie"] ,
  ["Geodude", "Graveler", "Golem", "Onix", "Rhyhorn", "Rhydon" , "Omanyte", "Omastar", "Kabuto", "Kabutops" , "Aerodactyl", ],
  ["Magnemite" , "Magneton"],
  ["Squirtle", "Wartortle", "Blastoise", "Psyduck", "Golduck", "Poliwag", "Poliwhirl", "Poliwrath", "Tentacool", "Tentacruel", 
  "Slowpoke", "Slowbro", "Seel", "Dewgong", "Shellder", "Cloyster", "Krabby", "Kingler", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", 
  "Magikarp", "Gyarados", "Lapras", "Vaporeon", "Omanyte", "Omastar", "Kabuto", "Kabutops" ],
]
let evo_stages:any[] = [
  [
    "Bulbasaur", "Charmander", "Squirtle", "Caterpie", "Weedle", "Pidgey", "Rattata", "Spearow", "Ekans", "Pikachu" ,
    "Sandshrew", "Nidoran♀", "Nidoran♂", "Vulpix", "Clefairy" ,"Jigglypuff", "Zubat", "Voltorb" , "Oddish", "Paras", "Venonat",
    "Diglett", "Meowth", "Psyduck", "Mankey", "Growlithe", "Poliwag", "Abra", "Machop", "Bellsprout",
    "Tentacool", "Geodude", "Ponyta", "Slowpoke", "Magnemite", "Farfetch'd", "Doduo", "Seel", "Grimer",
    "Shellder", "Gastly", "Onix", "Drowzee", "Krabby", "Exeggcute", "Cubone", "Hitmonlee", "Hitmonchan",
    "Lickitung", "Koffing", "Rhyhorn", "Chansey" , "Tangela", "Kangaskhan", "Horsea", "Goldeen", "Staryu", "Mr. Mime",
    "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Lapras", "Ditto", "Eevee",
    "Porygon", "Omanyte", "Kabuto", "Aerodactyl", "Snorlax", "Dratini", "Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew"
  ],
  [
      'Ivysaur',     'Charmeleon', 
      'Wartortle',   'Metapod',    
      'Kakuna',     ,   'Pidgeotto',  ,
      'Raticate',   'Fearow',     'Arbok',      'Raichu',
      'Sandslash',  'Nidorina',   ,  'Nidorino',
     ,   'Clefable',   'Ninetales',  'Wigglytuff',
      'Golbat',     'Gloom',        'Parasect',
      'Venomoth',   'Dugtrio',    'Persian',    'Golduck',
      'Primeape',   'Arcanine',   'Poliwhirl',  
      'Kadabra',     'Machoke',    
      'Weepinbell',  'Tentacruel', 'Graveler',
         'Rapidash',   'Slowbro',    'Magneton',
      'Dodrio',     'Dewgong',    'Muk',        'Cloyster',
      'Haunter',     'Hypno',      'Kingler',
      'Electrode',  'Exeggutor',  'Marowak',    'Weezing',
      'Rhydon',     'Seadra',     'Seaking',    'Starmie',
      'Gyarados',   'Vaporeon',   'Jolteon',    'Flareon',
      'Omastar',    'Kabutops',   'Dragonair',  
  ],
  [
    "Venusaur", "Charizard", "Blastoise", "Butterfree", "Beedrill", 
    "Pidgeot","Nidoqueen", "Nidoking", "Vileplume","Poliwrath", 
    "Alakazam", "Machamp", "Victreebel", "Golem", "Gengar" , "Dragonite"
  ]
]
let Pokemon_Legs = [
  [
    "Bulbasaur" , "Ivysaur" , "Venusaur" , "Rattata" , "Nidoran♂" , "Nidoran♀" , "Nidorino" , "Vulpix" , "Ninetales" , "Paras" , "Parasect" , "Persian",
    "Growlithe" , "Arcanine" , "Ponyta" , "Rapidash" , "Slowpoke" , "Lapras" , "Vaporeon" , "Jolteon" , "Flareon" , "Kabuto" , "Eevee" , "Tauros"
  ],
  [],
  [
    "Caterpie" , "Metapod" , "Weedle" , "Kakuna" , "Venomoth" , "Diglett" , "Dugtrio" , "Victreebel" , "Weepinbell" , "Tentacool" , "Tentacruel" , "Geodude",
    "Magnemite" , "Magneton" , "Grimer" , "Muk" , "Cloyster" , "Gastly" , "Haunter" , "Onix" , "Voltorb" , "Electrode" , "Exeggcute" , "Koffing" , "Weezing",
    "Horsea", "Seadra", "Goldeen" , "Seaking" ,"Magikarp" , "Gyarados" , "Ditto" , "Omanyte" , "Dratini" , "Dragonair" , "Ekans" , "Arbok"
  ]
]
let twolegs1 =  Find_Uncommon(OriginalPokemon , Pokemon_Legs[0])
let twolegs2 =  Find_Uncommon(OriginalPokemon , Pokemon_Legs[2])
let twolegs3 = Find_Common(twolegs1 , twolegs2)
Pokemon_Legs[1] = twolegs3

let stage_no = ["1st" , "2nd" , "3rd"]
let question1 = await inquirer.prompt([
  {
    type: 'list',
    name: 'DualorNot',
    message: "Is your Pokemon Dual Type?",
    choices: ["Yes" , "No"]
  }
])
let Pokemon_Types_Single = [
  "Bug", "Dragon", "Electric","Fairy" ,"Fighting", "Fire", "Flying", "Ghost", "Grass",
  "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock","Steel" ,"Water"
]
let i=0;
let j=1;
var a=0;
var b=0;
var c=0;
var d=0;
let Answer1:any;
let Answer2:any;
let Answer2_5:any;
let Answer3:any;
let Answer4:any;
let Answer5:any;
let Answer6:any;
let Answer7:any;
switch(question1.DualorNot){
  case "No":
    Answer1 = Find_Uncommon(OriginalPokemon , DualTypePokemon)
    while(i<=16)
    {
      var question2 = await inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: `is your pokemon a ${Pokemon_Types_Single[i]} Pokemon? `,
          choices: ["Yes" , "No"]
        }
      ])
      if(question2.type == "Yes")
      {
        Answer2 = Find_Common(Answer1 , SuperSet_Pokemon[i])
        a = i
        break;
      }else{
        i++;
      }
  }
  Answer3 = Answer2
  break;
  case "Yes":
    Answer1 = Find_Uncommon(OriginalPokemon , SingleTypePokemon)
    while(i<=16)
    {
      var question2 = await inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: `is your pokemon a ${Pokemon_Types_Single[i]} Pokemon? `,
          choices: ["Yes" , "No"]
        }
      ])
    if (question2.type == "Yes")
    {
      Answer2 = Find_Common(Answer1 , SuperSet_Pokemon[i])
      a=i
      break;
    }else if(question2.type == "No"){
    }
    i++;
  }
  j = j + i 
  while(j<=16)
    {
      var question2_5 = await inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: `is your pokemon a ${Pokemon_Types_Single[j]} Pokemon? `,
          choices: ["Yes" , "No"]
        }
      ])
    if (question2_5.type == "Yes")
    {
      Answer2_5 = Find_Common(Answer1 , SuperSet_Pokemon[j])
      b=j
      break;
    }else if(question2.type == "No"){
    }
    j++;
  }
  Answer3 = Find_Common(Answer2 , Answer2_5)
  break;
}
Answer_Checker(Answer3)
for(let k=0; k<=3; k++)
{
  let question3 = await inquirer.prompt([
    {
      type: "list",
      name: "evo",
      message: `Is your Pokemon in its ${stage_no[k]} stage of evolution`,
      choices: ["Yes" , "No"]
    }
  ])
  
  if (question3.evo == "Yes"){
    Answer4 = Find_Common(Answer3 , evo_stages[k])
    c = k 
    break;
  }else {
  }
}
Answer_Checker(Answer4)
let leg_var = ["4 legs" , "2 legs" , "No legs"]
for(let k=0; k<=3; k++)
{
  let question4 = await inquirer.prompt([
    {
      type: "list",
      name: "legs",
      message: `Does your Pokemon have ${leg_var[k]}?`,
      choices: ["Yes" , "No"]
    }
  ])

  if (question4.legs == "Yes"){
    Answer5 = Find_Common(Answer4 , Pokemon_Legs[k])
    d = k 
    break;
  }else {
  }
}
Answer_Checker(Answer5)
Answer6 = Answer5
let Pokemon_Animal_Type = { 
  water: ["Goldfish" , "Starfish" , "Duck" , "Turtle" , "Tadpole"
  , "Seahorse" , "fish out of water" , "Seal" , "Crab" , "Shell"],
  fire: [ "Dog" , "Fox" , "Salamander" , "Cat" , "Horse"],
  bird: ["Pigeon" , "Sparrow" , "Ostrich" , "Duck"],
  fighters: ["Jackie Chan", "Bruce Lee" , "Fighting Monkey" , "Bodybuilder"],
  normal_2: ["Cat" , "Nurse" , "Kangaroo" , "Geometrical Shape" , "Sleep" , "Licking"],
  psychic: ["Spoons" , "Drowsiness/Hypnosis" , "being the Strongest Pokemon" , "being Mythical"],
  normal_4: ["Rat" , "Bull" , "Cat"],
  poison: ["Snake" , "Toxic Gas" , "Slimy Blob"]
}
let water_exceptions:any = ["Goldeen" , "Staryu" , "Psyduck" , "Squirtle" , "Poliwag" , "Horsea" , "Magikarp" , "Seel" , "Krabby" , "Shellder"]
let bird_exceptions:any = ["Pidgey" , "Spearow" , "Doduo" , "Farfetch'd"]
let fire_exceptions:any = ["Growlithe" , "Vulpix" , "Charmander" , "Flareon" , "Ponyta"]
let fighting_exceptions:any = ["Hitmonchan" , "Hitmontop" , "Mankey" , "Machop"]
let normal2_exceptions:any = ["Meowth" , "Chansey" , "Kangaskhan" , "Porygon" , "Snorlax" , "Lickitung"]
let psychic_exceptions:any = ["Abra" , "Drowzee" , "Mewtwo" , "Mew"]
let grass_exceptions:any = ["Bellsprout" , "Oddish"]
let rock_exceptions:any = ["Geodude" , "Onix"]
let normal4_exceptions:any = [ "Ratatta" , "Tauros" , "Eevee"]
let posion_exceptions:any = ["Ekans" , "Koffing" , "Grimer"]
let bugpoison_exceptions:any = ["Kakuna" , "Venomoth"]
let poison_male_female_exception:any = ["Nidoran♂"  , "Nidoran♀"]
if(Pokemon_Types_Single[a] == "Water")
{
  for(let i = 0; i<=Pokemon_Animal_Type.water.length; i++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon a ${Pokemon_Animal_Type.water[i]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes"){
      if(stage_no[c] == "2nd"){
        water_exceptions.splice(0 , 1 , "Seaking")
        water_exceptions.splice(2 , 1 , "Golduck")
        water_exceptions.splice(3 , 1 , "Wartortle")
        water_exceptions.splice(4 , 1 , "Poliwhirl")
        water_exceptions.splice(5, 1 , "Seadra")
        water_exceptions.splice(7 , 1 , "Dewgong")
        water_exceptions.splice(8 , 1 , "Kingler")
        water_exceptions.splice(9 , 1 , "Cloyster")
      }
      Answer6 = Find_Common(Answer5 , water_exceptions[i])
      break;
    }
  }
}else if((Pokemon_Types_Single[a] == "Flying" && Pokemon_Types_Single[b] == "Normal") || (Pokemon_Types_Single[b] == "Flying" && Pokemon_Types_Single[a] == "Normal"))
{
  for(let i = 0; i<=Pokemon_Animal_Type.bird.length; i++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon a ${Pokemon_Animal_Type.bird[i]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes"){
      if(stage_no[c] == "2nd"){
        bird_exceptions.splice(0 , 1 , "Pidgeotto")
        bird_exceptions.splice(1 , 1 , "Fearow")
        bird_exceptions.splice(2 , 1 , "Dodrio")
      } 
      Answer6 = Find_Common(Answer5 , bird_exceptions[i])
      break;
    }
  }
}else if (Pokemon_Types_Single[a] == "Fire"){
  for(let i = 0; i<Pokemon_Animal_Type.fire.length; i++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon a ${Pokemon_Animal_Type.fire[i]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes"){
      if(stage_no[c] == "2nd"){
        fire_exceptions.splice(0 , 1 , "Arcanine")
        fire_exceptions.splice(1 , 1 , "Ninetales")
        fire_exceptions.splice(2 , 1 , "Charmeleon")
        fire_exceptions.splice(4 , 1 , "Rapidash")
      } 
      Answer6 = Find_Common(Answer5 , fire_exceptions[i])
      break;
    }
    if(question5.specific == "No" && i == 4){
      console.log("Your Pokemon is Magmar")
    }
  }
}else if (Pokemon_Types_Single[a] == "Normal" && leg_var[d] == '2 legs'){
  for(let i = 0; i<Pokemon_Animal_Type.normal_2.length; i++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon associated with ${Pokemon_Animal_Type.normal_2[i]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes"){
      Answer6 = Find_Common(Answer5 , normal2_exceptions[i])
      break;
    }
  }
}else if (Pokemon_Types_Single[a] == "Fighting"){
  for(let i = 0; i<Pokemon_Animal_Type.fighters.length; i++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon associated with ${Pokemon_Animal_Type.fighters[i]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes"){
      if(stage_no[c] == "2nd"){
        fighting_exceptions.splice(2 , 1 , "Primeape")
        fighting_exceptions.splice(3 , 1 , "Machoke")
        
      } 
      Answer6 = Find_Common(Answer5 , fighting_exceptions[i])
      break;
    }
  }
}else if (Pokemon_Types_Single[a] == "Psychic"){
  for(let i = 0; i<Pokemon_Animal_Type.psychic.length; i++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon associated with ${Pokemon_Animal_Type.psychic[i]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes"){
      if(stage_no[c] == "2nd"){
        psychic_exceptions.splice(0 , 1 , "Kadabra")
        psychic_exceptions.splice(1 , 1 , "Hypno")
      }
      if(i == 2){
        console.log("Your Pokemon is Mewtwo")
      }
      Answer6 = Find_Common(Answer5 , psychic_exceptions[i])
      console.log(Answer6)
      break;
    }
  }
}else if((Pokemon_Types_Single[a] == "Poison" && Pokemon_Types_Single[b] == "Grass") || (Pokemon_Types_Single[b] == "Poison" && Pokemon_Types_Single[a] == "Grass")){
  let question5 = await inquirer.prompt([
    {
      type: "list",
      name: "specific",
      message: `Is your pokemon a venus flytrap or evolves into one`,
      choices: ["Yes" , "No"]
    }
  ])
  if(question5.specific == "Yes")
  {
    if(stage_no[c] == "2nd"){
      grass_exceptions.splice(0 , 1 , "Weepinbell")
      console.log(`Your Pokemon is ${grass_exceptions[0]}`)
    }else if(stage_no[c] == "3rd"){
      grass_exceptions.splice(0 , 1 , "Victreebel")
      console.log(`Your Pokemon is ${grass_exceptions[0]}`)
    }else {
      console.log(`Your Pokemon is ${grass_exceptions[0]}`)
    }
  }else if(question5.specific == "No")
  {
    if(stage_no[c] == "2nd"){
      grass_exceptions.splice(1, 1 , "Gloom")
      console.log(`Your Pokemon is ${grass_exceptions[1]}`)
    }else if(stage_no[c] == "3rd"){
      grass_exceptions.splice(1, 1 , "Vileplume")
      console.log(`Your Pokemon is ${grass_exceptions[1]}`)
    }else {
      console.log(`Your Pokemon is ${grass_exceptions[1]}`)
    }
  }
}else if((Pokemon_Types_Single[a] == "Rock" && Pokemon_Types_Single[b] == "Ground") || (Pokemon_Types_Single[b] == "Rock" && Pokemon_Types_Single[a] == "Ground")){
  let question5 = await inquirer.prompt([
    {
      type: "list",
      name: "specific",
      message: `Is your pokemon a Rock with 2 arms`,
      choices: ["Yes" , "No"]
    }
  ])
  if(question5.specific == "Yes")
  {
    console.log(`Your Pokemon is ${rock_exceptions[0]}`)
  }else if(question5.specific == "No")
  {
    console.log(`Your Pokemon is ${rock_exceptions[1]}`)
  }
}else if(Pokemon_Types_Single[a] == "Normal"){
  for (let k=0; k<=3; k++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon a ${Pokemon_Animal_Type.normal_4[k]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes")
    {
      Answer6 = Find_Common(Answer5 , normal4_exceptions[k])
      break;
    }else if(question5.specific == "No")
    {
    }
  }
}
else if(Pokemon_Types_Single[a] == "Poison" && leg_var[d] == "No legs"){
  for (let k=0; k<=3; k++){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon some kind of ${Pokemon_Animal_Type.poison[k]}`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes")
    {
      if(stage_no[c] == "2nd"){
        posion_exceptions.splice(0 , 1 , "Arbok")
        posion_exceptions.splice(1 , 1 , "Weezing")
        posion_exceptions.splice(2 , 1 , "Muk")
      }
      Answer6 = Find_Common(Answer5 , posion_exceptions[k])
      break;
    }else if(question5.specific == "No")
    {
    }
  }
}
else if((Pokemon_Types_Single[a] == "Posion" && Pokemon_Types_Single[b] == "Bug") || (Pokemon_Types_Single[b] == "Poison" && Pokemon_Types_Single[a] == "Bug")){
  let question5 = await inquirer.prompt([
    {
      type: "list",
      name: "specific",
      message: `Is your pokemon a Moth`,
      choices: ["Yes" , "No"]
    }
  ])
  if(question5.specific == "Yes")
  {
    console.log(`Your Pokemon is ${bugpoison_exceptions[1]}`)
  }else if(question5.specific == "No")
  {
    console.log(`Your Pokemon is ${bugpoison_exceptions[0]}`)
  }
}else if(Pokemon_Types_Single[a] == "Poison"){
    let question5 = await inquirer.prompt([
      {
        type: "list",
        name: "specific",
        message: `Is your pokemon only male?`,
        choices: ["Yes" , "No"]
      }
    ])
    if(question5.specific == "Yes")
    {
      console.log(`Your Pokemon is ${poison_male_female_exception[0]}`)
    }else if(question5.specific == "No")
    {
      console.log(`Your Pokemon is ${poison_male_female_exception[1]}`)
    }
}else if((Pokemon_Types_Single[a] == "Poison" && Pokemon_Types_Single[b] == "Ground") || (Pokemon_Types_Single[b] == "Poison" && Pokemon_Types_Single[a] == "Ground")) {
  let question5 = await inquirer.prompt([
    {
      type: "list",
      name: "specific",
      message: `Is your pokemon only male?`,
      choices: ["Yes" , "No"]
    }
  ])
  if(question5.specific == "Yes")
  {
    console.log(`Your Pokemon is Nidoking`)
  }else if(question5.specific == "No")
  {
    console.log(`Your Pokemon is Nidoqueen`)
  }
}
Answer_Checker(Answer6)