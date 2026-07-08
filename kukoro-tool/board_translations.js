// ---- Known board translations ----
// Hand-maintained by whoever is doing the translation work: one board
// string per line, exactly as it appears on the board (same matching rules
// as before — exact line content). Loaded as a plain <script> tag (like
// patterns.js) rather than fetched, so it works even when index.html is
// opened directly from disk (file://) and not just when served over
// http(s).
//
// To add more known strings, just add more lines inside the backticks
// below. Don't use a backtick (`) or a ${...} sequence inside a line, since
// those have special meaning in a JS template string.
const BOARD_TRANSLATIONS = `
🐗 Esquivar contra troll enemigo te curará
🐗 Tu defensa cambiará a número de nivel de troll enemigo al que te enfrentes
🐗 Daño x2 tras recibir un crítico de troll enemigo
🐗 Esquivar contra troll enemigo aumentará tu probabilidad de crítico
🐗 Recibe nivel +2 cuando fallas contra troll enemigo
🐗 Todo tu equipo recibirá nivel +3 si mueres por troll enemigo
🐗 Tus críticos a troll enemigo subirán 2% la defensa a tu equipo

🐸 Level -1 all your team if you die by enemy goblin
🐸 Your hits ignore the defense of enemy goblin
🐸 Decrease your team agility when you miss against enemy goblin
🐸 X0.5 prob. de esquivar los ataques de goblin enemigo
🐸 X0.5 damage received by enemy goblin when the current minute is odd
🐸 Your defense will increase 10% each time you hit enemy goblin as long as you have full life

👁️ 100% chance of critical against enemy cyclops if you are the last player alive
👁️ 66% chance of dodging enemy cyclops attacks when you are full hp
👁️ X0.5 damage received by enemy cyclops when the current minute is odd
👁️ Defeating enemy cyclops will invert the healthbar of a random teammate
👁️ X4 chance of dodging enemy cyclops attacks when you are under 50% hp
👁️ 100% chance of critical hit to enemy cyclops when you have odd health
👁️ Kill enemy cyclops with one hit if you have 3hp or less
👁️ You will run away from combat if you get under 20% hp in front of enemy cyclops
👁️ 0% de daño a cíclope enemigo tras asestar un golpe de daño impar
👁️ 100% de prob. de crítico a cíclope enemigo si eres el último jugador vivo
👁️ Escaparás del combate si recibes un golpe crítico de cíclope enemigo
👁️ Tus golpes ignoran la defensa de cíclope enemigo
👁️ Damage x5 against enemy cyclops if you have never been damaged
👁️ Dodge 90% of enemy cyclops's hits when you have 10hp or less

👻 X0.5 damage received by enemy shadow when the current minute is odd
👻 Defeating enemy shadow will invert the healthbar of a random teammate
👻 Defeating enemy shadow will invert the healthbar of a random teammate
👻 50% chance to kill enemy shadow with one hit if you have 10hp or less
👻 Distribute health to your teammates the same damage you received from enemy shadow
👻 Slightly heals your team everytime you hit enemy shadow
👻 Your level will become the same level of enemy shadow you fight

👑 0% damage after hitting odd damage to any boss
👑 Distribute health to your teammates the same damage you received from any boss

🕷️ X0.5 chance of dodging enemy spider attacks
🕷️ X0.75 enemy spider damage on you

🐮 Dying by enemy minotaur will reverse all your teammates health
🐮 Absorbe el 99% del daño de minotauro enemigo si tienes vida impar
🐮 Damage x3 against enemy minotaur if you are the last player alive
🐮 Your defense against enemy minotaur will be 100% as long as you have 10hp or less

🧜 Devuelve los golpes críticos a naga enemigo
🧜 Todo tu equipo recibirá nivel -1 si mueres por naga enemigo
🧜 X0.5 damage received by enemy naga when the current minute is odd
🧜 You will defend twice as much while you have low health against enemy naga

💀 0% prob. de golpe crítico a esqueleto enemigo
💀 Daño x3 a esqueleto enemigo si tienes toda la vida
💀 Anula permanentemente la probabilidad de hacer críticos de esqueleto enemigo
💀 Esquivar contra esqueleto enemigo te curará
💀 Morir por esqueleto enemigo invertirá la vida a todos tus compañeros

🦠 3% prob. de matar limo enemigo de un golpe
🦠 Siempre harás crítico a limo enemigo si tienes menos del 50% de la vida
🦠 Always crit. enemy slime when you are under 50% hp
🦠 Your dodge percentage will 2x number of attacks you have exchanged with enemy slime in that fight

🐺 Always dodge the first attack of enemy wolf
🐺 Defeating enemy wolf will increase your defense 10%
🐺 Dodge 90% of enemy wolf's hits when you have 10hp or less
🐺 Kill enemy wolf with one hit if you have 3hp or less

👹 50% chance of crit. hit against enemy oni
👹 Your hits ignore the defense of enemy oni

🔮 Baja 5 niveles a enemigos malditos antes de luchar
🔮 Derrotar a enemigos malditos convertirá a las habilidades de un compañero al azar en superefectivas

🦁 100% chance of critical against enemy orc if you are the last player alive
🦁 Crit. hits deal x3 damage against enemy orc

🐾 Tus críticos a enemigos bestias subirán 3% tu defensa
🐾 X0.5 prob. de esquivar los ataques de enemigos bestias

😈 100% de prob. de crítico a diablillo enemigo si no ha muerto ningún jugador
😈 Escaparás del combate si recibes un golpe crítico de diablillo enemigo

🛡️ 20% prob. de que tus golpes curen a enemigos más resistentes
🛡️ X0.5 de daño recibido por enemigos más resistentes si el minuto es impar

⚡ Crit. hits deal x0.5 damage against more agile enemies
⚡ Your critical hits at more agile enemies will raise 2% the defense of your team

🗡️ Rogue
🗡️ Pícaro
☀️ Paladín
🥀 Nigromante
🛡️ Tank
⚔️ Warrior

Berserk
minotaur
orc
cyclops
troll
spider
shadow
diablillo
naga
esqueleto
limo
clope
goblin
slime
wolf
oni
Mixed (Esqueleto, Troll)
Mixed (Goblin, Minotauro)
Mixed (Shadow, Goblin)
Mixed (Goblin, Shadow)
Mixed (Cyclops, Shadow)
Mixed (Cyclops, Minotaur)
resistenses



`;
