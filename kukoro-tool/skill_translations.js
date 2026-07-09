// ---- Board content translations (English <-> Spanish) ----
//
// Unlike board_translations.js (which only tracks which raw board strings
// have already been "handled" by a translator, without storing an actual
// translation), this file is the real English<->Spanish dictionary used to
// TRANSLATE what's shown on the board: roles, focus/creature names, and
// skill descriptions.
// The creator of the entries is spanish, so the english side wording can 
// be weird. Never change the wording, because it needs to match the board 
// exactly for the translation to work.
//
// HOW IT WORKS
// Each entry below is a pair: the same role/focus/skill written once in
// English and once in Spanish. When the board is displaying in a given
// language, the tool looks up the player's stored role/focus/skill text in
// this file (matching the *other* language's side, case-insensitively) and
// swaps in the matching translation. If no matching pair is found, the
// original text is shown as-is — nothing is ever blanked out.
//
// This only covers English <-> Spanish. Other UI languages (French,
// German, Japanese) fall back to showing the original board text untouched.
//
// HOW TO ADD OR FIX A TRANSLATION
// - Find the right list below (ROLE_TRANSLATIONS, FOCUS_TRANSLATIONS, or
//   SKILL_TRANSLATIONS) and add a line like:
//     { en: "English version", es: "Versión en español" },
// - For skills, match the FULL sentence exactly as it appears on the board
//   (same as board_translations.js) — one skill per entry.
// - If you're not sure of the English or Spanish version yet, it's fine to
//   leave one side blank (""); the entry just won't be used for translation
//   until both sides are filled in.
// - Enemy names that raiders write the same way in both languages (e.g.
//   "goblin", "troll", "naga", "shadow", "oni", "wolf", "orc", "diablillo")
//   are intentionally left as-is in both the English and Spanish sentences
//   below, since that matches how they actually show up on the board today.
//   Only change that if the board text itself changes.
// ============================================================================

// ---- Roles ----
const ROLE_TRANSLATIONS = [
  { en: "Rogue", es: "Pícaro" },
  { en: "Paladin", es: "Paladín" },
  { en: "Necromancer", es: "Nigromante" },
  { en: "Tank", es: "Tanque" },
  { en: "Warrior", es: "Guerrero" },
  { en: "Berserker", es: "" },
];

// ---- Focus / creature names ----
// These are the single-word "focus" values shown on the board (derived from
// whichever creature name shows up in a player's skill text). Only include
// a pair here when the board genuinely uses two different spellings for the
// same creature across languages — everything else (goblin, troll, naga,
// shadow, oni, wolf, orc, diablillo) is written the same way in both
// languages already, so no entry is needed for those.
const FOCUS_TRANSLATIONS = [
  { en: "minotaur", es: "minotauro" },
  { en: "orc", es: "orco" },
  { en: "cyclops", es: "cíclope" },
  { en: "troll", es: "troll" },
  { en: "spider", es: "araña" },
  { en: "shadow", es: "sombra" },
  { en: "imp", es: "diablillo" },
  { en: "naga", es: "naga" }, 
  { en: "skeleton", es: "esqueleto" },
  { en: "slime", es: "limo" },
  { en: "goblin", es: "goblin" },
  { en: "wolf", es: "lobo" },
  { en: "oni", es: "oni" },  
  { en: "humanoid", es: "humanoides" },  
  { en: "beasts", es: "bestias" },  
  { en: "dragon", es: "dragón" },
  { en: "zombie", es: "zombi" },
  { en: "cursed", es: "malditos" },
  { en: "gargoyle", es: "gárgola" },
  { en: "lizard", es: "lizardo" },
  { en: "human", es: "humano" },
  { en: "boss", es: "jefe" },
  { en: "tougher", es: "resistentes" },
];

// The board builds a combined focus label like "Mixed (Goblin, Shadow)" when
// a player's skills target more than one creature type. Only the "Mixed"
// word itself needs a translation here — the creature names inside the
// parentheses are translated individually using FOCUS_TRANSLATIONS above.
const MIXED_LABEL_TRANSLATION = { en: "Mixed", es: "Mixto" };

// ---- Skills ----
// One skill description per line, paired exactly as the board shows them.
const SKILL_TRANSLATIONS = [
  // 🐗 Troll
  { en: "", es: "Esquivar contra troll enemigo te curará" },
  { en: "", es: "Tu defensa cambiará a número de nivel de troll enemigo al que te enfrentes" },
  { en: "", es: "Daño x2 tras recibir un crítico de troll enemigo" },
  { en: "", es: "Esquivar contra troll enemigo aumentará tu probabilidad de crítico" },
  { en: "", es: "Recibe nivel +2 cuando fallas contra troll enemigo" },
  { en: "", es: "Todo tu equipo recibirá nivel +3 si mueres por troll enemigo" },
  { en: "", es: "Tus críticos a troll enemigo subirán 2% la defensa a tu equipo" },
  { en: "", es: "-33% de vida antes de luchar contra troll enemigo" },
  { en: "", es: "Baja 5 niveles a troll enemigo antes de luchar" },
  { en: "", es: "Recupera la vida antes de morir por troll enemigo a costa de absorber la vida de un compañero aleatorio" },
  { en: "", es: "Siempre harás crítico a troll enemigo si tienes menos del 50% de la vida" },
  { en: "", es: "Troll enemigo tiene 1% de probabilidad de matarte de un solo golpe" },
  { en: "", es: "X0.5 de daño recibido por troll enemigo si el minuto es impar" },

  // 🐸 Goblin
  { en: "Level -1 all your team if you die by enemy goblin", es: "" },
  { en: "Your hits ignore the defense of enemy goblin", es: "" },
  { en: "Decrease your team agility when you miss against enemy goblin", es: "" },
  { en: "X0.5 chance of dodging enemy goblin's attacks", es: "X0.5 prob. de esquivar los ataques de goblin enemigo" },
  { en: "X0.5 damage received by enemy goblin when the current minute is odd", es: "" },
  { en: "Your defense will increase 10% each time you hit enemy goblin as long as you have full life", es: "" },

  // 👁️ Cyclops
  { en: "100% chance of critical against enemy cyclops if you are the last player alive", es: "100% de prob. de crítico a cíclope enemigo si eres el último jugador vivo" },
  { en: "66% chance of dodging enemy cyclops attacks when you are full hp", es: "" },
  { en: "X0.5 damage received by enemy cyclops when the current minute is odd", es: "" },
  { en: "Defeating enemy cyclops will invert the healthbar of a random teammate", es: "" },
  { en: "X4 chance of dodging enemy cyclops attacks when you are under 50% hp", es: "" },
  { en: "100% chance of critical hit to enemy cyclops when you have odd health", es: "" },
  { en: "Kill enemy cyclops with one hit if you have 3hp or less", es: "" },
  { en: "You will run away from combat if you get under 20% hp in front of enemy cyclops", es: "" },
  { en: "", es: "0% de daño a cíclope enemigo tras asestar un golpe de daño impar" },
  { en: "", es: "Escaparás del combate si recibes un golpe crítico de cíclope enemigo" },
  { en: "", es: "Tus golpes ignoran la defensa de cíclope enemigo" },
  { en: "Damage x5 against enemy cyclops if you have never been damaged", es: "" },
  { en: "Dodge 90% of enemy cyclops's hits when you have 10hp or less", es: "" },

  // 👻 Shadow
  { en: "X0.5 damage received by enemy shadow when the current minute is odd", es: "" },
  { en: "Defeating enemy shadow will invert the healthbar of a random teammate", es: "" },
  { en: "50% chance to kill enemy shadow with one hit if you have 10hp or less", es: "" },
  { en: "Distribute health to your teammates the same damage you received from enemy shadow", es: "" },
  { en: "Slightly heals your team everytime you hit enemy shadow", es: "" },
  { en: "Your level will become the same level of enemy shadow you fight", es: "" },

  // 👑 Any boss
  { en: "0% damage after hitting odd damage to any boss", es: "" },
  { en: "Distribute health to your teammates the same damage you received from any boss", es: "" },

  // 🕷️ Spider
  { en: "X0.5 chance of dodging enemy spider attacks", es: "" },
  { en: "X0.75 enemy spider damage on you", es: "" },
  { en: "", es: "20% prob. de que tus golpes curen a araña enemigo" },
  { en: "", es: "50% prob. de golpe crítico a araña enemigo" },
  { en: "", es: "Daño x0.7 a araña enemigo" },
  { en: "", es: "Escaparás del combate si tienes menos del 20% de vida frente a araña enemigo" },
  { en: "", es: "Esquivar frente a araña enemigo subirá 2% la defensa al equipo" },
  { en: "", es: "Morir por araña enemigo también matará al enemigo" },
  { en: "", es: "Todo tu equipo recibirá nivel -1 si mueres por araña enemigo" },
  { en: "", es: "Todo tu equipo recibirá nivel +3 si mueres por araña enemigo" },
  { en: "", es: "Tu defensa frente a araña enemigo será del 100% mientras nunca hayas recibido daño" },
  { en: "", es: "Un aliado aleatorio recibirá los golpes que falles contra araña enemigo" },

  // 🐮 Minotaur
  { en: "Dying by enemy minotaur will reverse all your teammates health", es: "" },
  { en: "Damage x3 against enemy minotaur if you are the last player alive", es: "" },
  { en: "Your defense against enemy minotaur will be 100% as long as you have 10hp or less", es: "Tu defensa frente a minotauro enemigo será del 100% mientras tengas 10hp o menos" },
  { en: "", es: "Absorbe el 99% del daño de minotauro enemigo si tienes vida impar" },
  { en: "", es: "50% prob. de golpe crítico a minotauro enemigo" },
  { en: "", es: "66% prob. de esquivar los ataques de minotauro enemigo si tienes la vida completa" },
  { en: "", es: "Daño x3 a minotauro enemigo que haya matado a un compañero" },
  { en: "", es: "Derrotar a minotauro enemigo duplicará la defensa de un compañero aleatorio" },
  { en: "", es: "Los críticos de minotauro enemigo te hacen x2 de daño" },
  { en: "", es: "Minotauro enemigo tiene 1% de probabilidad de matarte de un solo golpe" },
  { en: "", es: "Reduce a 0 la agilidad de minotauro enemigo" },

  // 🧜 Naga
  { en: "", es: "Devuelve los golpes críticos a naga enemigo" },
  { en: "", es: "Todo tu equipo recibirá nivel -1 si mueres por naga enemigo" },
  { en: "X0.5 damage received by enemy naga when the current minute is odd", es: "X0.5 de daño recibido por naga enemigo si el minuto es impar" },
  { en: "You will defend twice as much while you have low health against enemy naga", es: "" },
  { en: "", es: "Derrotar a naga enemigo duplicará la defensa de un compañero aleatorio" },
  { en: "", es: "Derrotar a naga enemigo invertirá la vida de un compañero aleatorio" },
  { en: "", es: "Esquiva el 90% de los golpes de naga enemigo si tienes 10hp o menos" },
  { en: "", es: "Morir por naga enemigo curará -50% la vida restante de tu equipo" },
  { en: "", es: "Recibe nivel -2 cuando fallas contra naga enemigo" },

  // 💀 Skeleton
  { en: "", es: "0% prob. de golpe crítico a esqueleto enemigo" },
  { en: "", es: "Daño x3 a esqueleto enemigo si tienes toda la vida" },
  { en: "", es: "Anula permanentemente la probabilidad de hacer críticos de esqueleto enemigo" },
  { en: "", es: "Esquivar contra esqueleto enemigo te curará" },
  { en: "", es: "Morir por esqueleto enemigo invertirá la vida a todos tus compañeros" },

  // 🦠 Slime
  { en: "3% chance to kill enemy slime with one hit", es: "" },
  { en: "Always crit. enemy slime when you are under 50% hp", es: "Siempre harás crítico a limo enemigo si tienes menos del 50% de la vida" },
  { en: "Your dodge percentage will 2x number of attacks you have exchanged with enemy slime in that fight", es: "" },

  // 🐺 Wolf
  { en: "Always dodge the first attack of enemy wolf", es: "" },
  { en: "Defeating enemy wolf will increase your defense 10%", es: "" },
  { en: "Dodge 90% of enemy wolf's hits when you have 10hp or less", es: "" },
  { en: "Kill enemy wolf with one hit if you have 3hp or less", es: "" },

  // 👹 Oni
  { en: "50% chance of crit. hit against enemy oni", es: "" },
  { en: "Your hits ignore the defense of enemy oni", es: "" },
  { en: "Defeating enemy oni will increase your defense 10%", es: "" },
  { en: "Dodge 90% of enemy oni's hits when you have 10hp or less", es: "" },

  // 😈 Imp (diablillo)
  { en: "", es: "0% de daño a diablillo enemigo tras asestar un golpe de daño impar" },
  { en: "", es: "100% de prob. de crítico a diablillo enemigo si eres el último jugador vivo" },
  { en: "", es: "Absorbe el 99% del daño de diablillo enemigo si tienes vida impar" },
  { en: "", es: "Defensa del 66% frente a diablillo enemigo si no ha muerto ningún compañero" },
  { en: "", es: "El 66% del daño recibido por diablillo enemigo se reflejará a tu equipo" },
  { en: "", es: "Morir por diablillo enemigo reasignará los enemigos a los que afectan las habilidades de tu equipo" },
  { en: "", es: "Reduce a 0 la agilidad de diablillo enemigo" },
  { en: "", es: "Tu porcentaje de esquiva 2x como ataques hayas intercambiado con diablillo enemigo en ese combate" },
  { en: "", es: "100% de prob. de crítico a diablillo enemigo si no ha muerto ningún jugador" },
  { en: "", es: "Escaparás del combate si recibes un golpe crítico de diablillo enemigo" },
  
  // 🐲 Dragon (dragón)
  { en: "", es: "100% de prob. de crítico a dragón enemigo si eres el último jugador vivo" },
  { en: "", es: "66% prob. de esquivar los ataques de dragón enemigo si tienes la vida completa" },
  { en: "", es: "Esquiva el 90% de los golpes de dragón enemigo si tienes 10hp o menos" },

  // 🐲 Zombie (zombi)
  { en: "", es: "Cura ligeramente a tu equipo cuando golpeas a zombi enemigo" },
  { en: "", es: "Daño x1.5 a zombi enemigo" },
  { en: "", es: "Daño x3 a zombi enemigo si eres el último jugador vivo" },
  { en: "", es: "Derrotar a zombi enemigo duplicará la defensa de un compañero aleatorio" },
  { en: "", es: "Reduce a 0 la agilidad de zombi enemigo" },
  { en: "", es: "Tu defensa aumentará 10% cada vez que golpees a zombi enemigo mientras tengas toda la vida" },

  // 👣 Humanoid
  { en: "Dying by humanoid enemies also kills the opponent", es: "" },
  { en: "Your defense will increase 10% each time you hit humanoid enemies as long as you have full life", es: "" },

  // 🔮 Cursed
  { en: "", es: "Baja 5 niveles a enemigos malditos antes de luchar" },
  { en: "", es: "Derrotar a enemigos malditos convertirá a las habilidades de un compañero al azar en superefectivas" },

  // 🦁 Orc
  { en: "100% chance of critical against enemy orc if you are the last player alive", es: "" },
  { en: "Crit. hits deal x3 damage against enemy orc", es: "" },

  // 🐾 Beast
  { en: "", es: "Tus críticos a enemigos bestias subirán 3% tu defensa" },
  { en: "", es: "X0.5 prob. de esquivar los ataques de enemigos bestias" },
  { en: "", es: "Daño x2 tras recibir un crítico de enemigos bestias" },
  { en: "", es: "Tu barra de vida se invertirá tras derrotar a enemigos bestias" },

  // 🛡️ Tougher / more resilient enemies
  { en: "", es: "20% prob. de que tus golpes curen a enemigos más resistentes" },
  { en: "", es: "X0.5 de daño recibido por enemigos más resistentes si el minuto es impar" },
  { en: "", es: "+66% de vida antes de luchar contra enemigos más resistentes" },
  { en: "", es: "Baja 5 niveles a enemigos más resistentes antes de luchar" },
  { en: "", es: "Defensa del 66% frente a enemigos más resistentes si no ha muerto ningún compañero" },
  { en: "", es: "Derrotar a enemigos más resistentes invertirá la vida de un compañero aleatorio" },
  { en: "", es: "Mata a enemigos más resistentes de un golpe si tienes 3hp o menos" },
  { en: "", es: "Tus críticos harán x0.5 de daño a enemigos más resistentes" },

  // ⚡ More agile enemies
  { en: "Crit. hits deal x0.5 damage against more agile enemies", es: "" },
  { en: "Your critical hits at more agile enemies will raise 2% the defense of your team", es: "" },
];
