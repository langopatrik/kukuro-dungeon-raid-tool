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
const BOARD_TRANSLATIONS = `☀️ Paladín
🐗 Esquivar contra troll enemigo te curará
🐗 Tu defensa cambiará a número de nivel de troll enemigo al que te enfrentes
🐸 Level -1 all your team if you die by enemy goblin
👁️ 100% chance of critical against enemy cyclops if you are the last player alive
👁️ 66% chance of dodging enemy cyclops attacks when you are full hp
👻 X0.5 damage received by enemy shadow when the current minute is odd
🗡️ Rogue
cyclops
Mixed (Shadow, Goblin)
troll
👁️ Defeating enemy cyclops will invert the healthbar of a random teammate
👁️ X4 chance of dodging enemy cyclops attacks when you are under 50% hp
🐸 Your hits ignore the defense of enemy goblin
👻 Defeating enemy shadow will invert the healthbar of a random teammate
Mixed (Goblin, Shadow)
🐸 Your hits ignore the defense of enemy goblin
👻 Defeating enemy shadow will invert the healthbar of a random teammate
👑 0% damage after hitting odd damage to any boss
👑 Distribute health to your teammates the same damage you received from any boss
🕷️ X0.5 chance of dodging enemy spider attacks
🕷️ X0.75 enemy spider damage on you
spider
🐸 Decrease your team agility when you miss against enemy goblin
👁️ X0.5 damage received by enemy cyclops when the current minute is odd
👻 50% chance to kill enemy shadow with one hit if you have 10hp or less
👻 Distribute health to your teammates the same damage you received from enemy shadow
👻 Slightly heals your team everytime you hit enemy shadow
👻 Your level will become the same level of enemy shadow you fight
Mixed (Cyclops, Shadow)
shadow


`;
