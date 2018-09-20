/*
 * Mapping of raid boss to current raid tier.
 */
module.exports = {
  raid_tiers: {
    bulbasaur: 1,
    charmander: 1,
    squirtle: 1,
    chikorita: 1,
    cyndaquil: 1,
    totodile: 1,

    dratini: 1,
    duskull: 1,
    kabuto: 1,
    magikarp: 1,
    makuhita: 1,
    meditite: 1,
    omanyte: 1,
    shellder: 1,
    shuppet: 1,
    snorunt: 1,
    sunkern: 1,
    swablu: 1,
    wailmer: 1,
    yanma: 1,

    'alolan-exeggutor': 2,
    combusken: 2,
    croconaw: 2,
    electabuzz: 2,
    exeggutor: 2,
    kirlia: 2,
    lickitung: 2,
    magmar: 2,
    magneton: 2,
    manectric: 2,
    marshtomp: 2,
    mawile: 2,
    misdreavus: 2,
    muk: 2,
    pineco: 2,
    primeape: 2,
    roselia: 2,
    sableye: 2,
    sneasel: 2,
    sudowoodo: 2,
    tentacruel: 2,
    venomoth: 2,
    weezing: 2,

    'alolan-raichu': 3,
    aerodactyl: 3,
    alakazam: 3,
    breloom: 3,
    donphan: 3,
    flareon: 3,
    gengar: 3,
    granbull: 3,
    hitmonchan: 3,
    hitmonlee: 3,
    jolteon: 3,
    jynx: 3,
    kabutops: 3,
    machamp: 3,
    omastar: 3,
    onix: 3,
    piloswine: 3,
    pinsir: 3,
    porygon: 3,
    scyther: 3,
    sharpedo: 3,
    starmie: 3,
    tangela: 3,
    vaporeon: 3,

    'alolan-marowak': 4,
    absol: 4,
    aggron: 4,
    golem: 4,
    houndoom: 4,
    lapras: 4,
    poliwrath: 4,
    rhydon: 4,
    snorlax: 4,
    tyranitar: 4,
    ursaring: 4,
    walrein: 4,

    articuno: 5,
    zapdos: 5,
    moltres: 5,
    mewtwo: 5,
    raikou: 5,
    entei: 5,
    suicune: 5,
    lugia: 5,
    'ho-oh': 5,
    regirock: 5,
    regice: 5,
    registeel: 5,
    latias: 5,
    latios: 5,
    kyogre: 5,
    groudon: 5,
    rayquaza: 5,
  },
  boss_aliases: {
    ttar: 'tyranitar',
    'tall-eggtree': 'alolan-exeggutor',
    tall: 'alolan-exeggutor',
    surfer: 'alolan-raichu',
    bones: 'alolan-marowak',
    peanuts: 'alolan-marowak',
  },
  preferred: [
    null, // 0 (unused)
    null, // 1
    null, // 2
    null, // 3
    null, // 4
    'mewtwo', // 5
  ],
};
