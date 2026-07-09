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
🐗 -33% de vida antes de luchar contra troll enemigo
🐗 Baja 5 niveles a troll enemigo antes de luchar
🐗 Recupera la vida antes de morir por troll enemigo a costa de absorber la vida de un compañero aleatorio
🐗 Siempre harás crítico a troll enemigo si tienes menos del 50% de la vida
🐗 Troll enemigo tiene 1% de probabilidad de matarte de un solo golpe
🐗 X0.5 de daño recibido por troll enemigo si el minuto es impar
🐗 Escaparás del combate si recibes un golpe crítico de troll enemigo
🐗 Troll enemigo al que te enfrentes cambiará al mismo nivel que tú
🐗 Tu defensa aumentará 10% cada vez que golpees a troll enemigo mientras tengas toda la vida
🐗 X0.75 de daño recibido por troll enemigo
🐗 X1.25 de daño recibido por troll enemigo

🐸 Level -1 all your team if you die by enemy goblin
🐸 Your hits ignore the defense of enemy goblin
🐸 Decrease your team agility when you miss against enemy goblin
🐸 X0.5 prob. de esquivar los ataques de goblin enemigo
🐸 X0.5 damage received by enemy goblin when the current minute is odd
🐸 Your defense will increase 10% each time you hit enemy goblin as long as you have full life

🐸 -33% de vida antes de luchar contra goblin enemigo
🐸 Daño x2 a goblin enemigo cuando tienes mucha vida
🐸 Derrotar a goblin enemigo invertirá la vida de un compañero aleatorio
🐸 Devuelve los golpes críticos a goblin enemigo
🐸 Esquivar frente a goblin enemigo subirá 2% la defensa al equipo
🐸 Goblin enemigo al que te enfrentes cambiará al mismo nivel que tú
🐸 Morir por goblin enemigo invertirá la vida a todos tus compañeros
🐸 Morir por goblin enemigo matará a un compañero al azar
🐸 X1.25 de daño recibido por goblin enemigo

👁️ 100% chance of critical against enemy cyclops if you are the last player alive
👁️ 66% chance of dodging enemy cyclops attacks when you are full hp
👁️ X0.5 damage received by enemy cyclops when the current minute is odd
👁️ Defeating enemy cyclops will invert the healthbar of a random teammate
👁️ X4 chance of dodging enemy cyclops attacks when you are under 50% hp
👁️ 100% chance of critical hit to enemy cyclops when you have odd health
👁️ Kill enemy cyclops with one hit if you have 3hp or less
👁️ You will run away from combat if you get under 20% hp in front of enemy cyclops
👁️ Damage x5 against enemy cyclops if you have never been damaged
👁️ Dodge 90% of enemy cyclops's hits when you have 10hp or less

👁️ 0% de daño a cíclope enemigo tras asestar un golpe de daño impar
👁️ 100% de prob. de crítico a cíclope enemigo si eres el último jugador vivo
👁️ Escaparás del combate si recibes un golpe crítico de cíclope enemigo
👁️ Tus golpes ignoran la defensa de cíclope enemigo
👁️ 50% prob. de golpe crítico a cíclope enemigo
👁️ Daño x2 a cíclope enemigo tras asestarle un golpe de daño impar
👁️ Defensa del 75% frente a cíclope enemigo si eres el último jugador vivo
👁️ Intercambia la vida de cíclope enemigo con la tuya cuando empiezas el combate
👁️ Morir por cíclope enemigo curará -50% la vida restante de tu equipo
👁️ Reduce la agilidad de tu equipo cuando fallas contra cíclope enemigo
👁️ Cíclope enemigo tiene x2 prob. de esquivar tus ataques
👁️ Derrotar a cíclope enemigo te recuperará el 66% de vida
👁️ Siempre harás crítico a cíclope enemigo si tienes más del 50% de la vida
👁️ Tu defensa frente a cíclope enemigo será del 100% mientras nunca hayas recibido daño
👁️ Tu porcentaje de esquiva 2x como ataques hayas intercambiado con cíclope enemigo en ese combate
👁️ X2 prob. de esquivar los ataques de cíclope enemigo

👻 X0.5 damage received by enemy shadow when the current minute is odd
👻 Defeating enemy shadow will invert the healthbar of a random teammate
👻 50% chance to kill enemy shadow with one hit if you have 10hp or less
👻 Distribute health to your teammates the same damage you received from enemy shadow
👻 Slightly heals your team everytime you hit enemy shadow
👻 Your level will become the same level of enemy shadow you fight

👻 Daño x1.5 a sombra enemigo
👻 Derrotar a sombra enemigo invertirá la vida de un compañero aleatorio
👻 Derrotar a sombra enemigo subirá 10% tu defensa
👻 Fallar contra sombra enemigo bloqueará su próximo ataque
👻 Los críticos a sombra enemigo aumentarán tu daño base
👻 Reduce la agilidad de tu equipo cuando fallas contra sombra enemigo
👻 Resiste los golpes mortales de sombra enemigo si tienes más de 1 de vida

👑 0% damage after hitting odd damage to any boss
👑 Distribute health to your teammates the same damage you received from any boss

🕷️ X0.5 chance of dodging enemy spider attacks
🕷️ X0.75 enemy spider damage on you

🕷️ 20% prob. de que tus golpes curen a araña enemigo
🕷️ 50% prob. de golpe crítico a araña enemigo
🕷️ Daño x0.7 a araña enemigo
🕷️ Escaparás del combate si tienes menos del 20% de vida frente a araña enemigo
🕷️ Esquivar frente a araña enemigo subirá 2% la defensa al equipo
🕷️ Morir por araña enemigo también matará al enemigo
🕷️ Todo tu equipo recibirá nivel -1 si mueres por araña enemigo
🕷️ Todo tu equipo recibirá nivel +3 si mueres por araña enemigo
🕷️ Tu defensa frente a araña enemigo será del 100% mientras nunca hayas recibido daño
🕷️ Un aliado aleatorio recibirá los golpes que falles contra araña enemigo
🕷️ Araña enemigo al que te enfrentes cambiará al mismo nivel que tú
🕷️ Intercambia la vida de araña enemigo con la tuya cuando empiezas el combate
🕷️ Los críticos a araña enemigo aumentarán tu daño base
🕷️ Los críticos de araña enemigo te hacen x2 de daño
🕷️ Reduce la agilidad de tu equipo cuando fallas contra araña enemigo

🐮 Dying by enemy minotaur will reverse all your teammates health
🐮 Damage x3 against enemy minotaur if you are the last player alive
🐮 Your defense against enemy minotaur will be 100% as long as you have 10hp or less

🐮 Absorbe el 99% del daño de minotauro enemigo si tienes vida impar
🐮 50% prob. de golpe crítico a minotauro enemigo
🐮 66% prob. de esquivar los ataques de minotauro enemigo si tienes la vida completa
🐮 Daño x3 a minotauro enemigo que haya matado a un compañero
🐮 Derrotar a minotauro enemigo duplicará la defensa de un compañero aleatorio
🐮 Los críticos de minotauro enemigo te hacen x2 de daño
🐮 Minotauro enemigo tiene 1% de probabilidad de matarte de un solo golpe
🐮 Reduce a 0 la agilidad de minotauro enemigo
🐮 Tu defensa frente a minotauro enemigo será del 100% mientras tengas 10hp o menos
🐮 -33% de vida antes de luchar contra minotauro enemigo
🐮 0% de daño a minotauro enemigo tras asestar un golpe de daño impar
🐮 3% prob. de matar minotauro enemigo de un golpe
🐮 Daño x2 a minotauro enemigo tras asestarle un golpe de daño impar
🐮 Defensa del 66% frente a minotauro enemigo que haya matado a un compañero
🐮 Escaparás del combate si tienes menos del 20% de vida frente a minotauro enemigo
🐮 X0.5 de daño recibido por minotauro enemigo cuando tienes más del 50% de la vida
🐮 X4 prob. de esquivar los ataques de minotauro enemigo si tienes menos del 50% de la vida

🧜 X0.5 damage received by enemy naga when the current minute is odd
🧜 You will defend twice as much while you have low health against enemy naga

🧜 Devuelve los golpes críticos a naga enemigo
🧜 Todo tu equipo recibirá nivel -1 si mueres por naga enemigo
🧜 Derrotar a naga enemigo duplicará la defensa de un compañero aleatorio
🧜 Derrotar a naga enemigo invertirá la vida de un compañero aleatorio
🧜 Esquiva el 90% de los golpes de naga enemigo si tienes 10hp o menos
🧜 Morir por naga enemigo curará -50% la vida restante de tu equipo
🧜 Recibe nivel -2 cuando fallas contra naga enemigo
🧜 X0.5 de daño recibido por naga enemigo si el minuto es impar
🧜 0% de daño a naga enemigo tras asestar un golpe de daño impar
🧜 66% prob. de esquivar los ataques de naga enemigo si tienes la vida completa
🧜 Daño x3 a naga enemigo si tienes toda la vida
🧜 Los críticos a naga enemigo aumentarán tu daño base
🧜 Reduce a 0 la defensa de naga enemigo al que te enfrentes
🧜 X0.75 de daño recibido por naga enemigo

💀 0% prob. de golpe crítico a esqueleto enemigo
💀 Daño x3 a esqueleto enemigo si tienes toda la vida
💀 Anula permanentemente la probabilidad de hacer críticos de esqueleto enemigo
💀 Esquivar contra esqueleto enemigo te curará
💀 Morir por esqueleto enemigo invertirá la vida a todos tus compañeros
💀 Daño x5 a esqueleto enemigo si nunca has recibido daño
💀 Esquiva el 90% de los golpes de esqueleto enemigo si tienes 10hp o menos
💀 +66% de vida antes de luchar contra esqueleto enemigo
💀 100% de prob. de crítico a esqueleto enemigo si eres el último jugador vivo
💀 Defensa del 66% frente a esqueleto enemigo si no ha muerto ningún compañero
💀 Derrotar a esqueleto enemigo te recuperará el 66% de vida
💀 Escaparás del combate si tienes menos del 20% de vida frente a esqueleto enemigo
💀 Esquiva a esqueleto enemigo siempre que él te esquive
💀 Fallar contra esqueleto enemigo bloqueará su próximo ataque
💀 Los críticos a esqueleto enemigo aumentarán tu daño base
💀 Morir por esqueleto enemigo restaurará la vida completa al enemigo
💀 Recibe nivel +2 cuando fallas contra esqueleto enemigo
💀 Siempre harás crítico a esqueleto enemigo si tienes más del 50% de la vida
💀 Un aliado aleatorio recibirá los golpes que falles contra esqueleto enemigo
💀 X0.5 prob. de esquivar los ataques de esqueleto enemigo
💀 X0.75 de daño recibido por esqueleto enemigo

🦠 Always crit. enemy slime when you are under 50% hp
🦠 Your dodge percentage will 2x number of attacks you have exchanged with enemy slime in that fight

🦠 3% prob. de matar limo enemigo de un golpe
🦠 Siempre harás crítico a limo enemigo si tienes menos del 50% de la vida
🦠 0% de daño a limo enemigo tras asestar un golpe de daño impar
🦠 100% de prob. de crítico a limo enemigo si tienes vida impar
🦠 Anula permanentemente la probabilidad de hacer críticos de limo enemigo
🦠 Daño x2 a limo enemigo cuando tienes mucha vida
🦠 Defenderás el doble mientras tengas poca vida frente a limo enemigo
🦠 Derrotar a limo enemigo convertirá a las habilidades de un compañero al azar en superefectivas
🦠 Morir por limo enemigo curará -50% la vida restante de tu equipo
🦠 Morir por limo enemigo invertirá la vida a todos tus compañeros
🦠 Morir por limo enemigo matará a un compañero al azar
🦠 X0.5 de daño recibido por limo enemigo cuando tienes menos del 50% de la vida

🐺 Always dodge the first attack of enemy wolf
🐺 Defeating enemy wolf will increase your defense 10%
🐺 Dodge 90% of enemy wolf's hits when you have 10hp or less
🐺 Kill enemy wolf with one hit if you have 3hp or less

🐺 100% de prob. de crítico a lobo enemigo si tienes vida impar
🐺 Defenderás el doble mientras tengas poca vida frente a lobo enemigo
🐺 Escaparás del combate si recibes un golpe crítico de lobo enemigo
🐺 Escaparás del combate si tienes menos del 20% de vida frente a lobo enemigo
🐺 Morir por lobo enemigo reestablecerá las habilidades de tus compañeros
🐺 Todo tu equipo recibirá nivel -1 si mueres por lobo enemigo
🐺 +1% de agilidad a todo el equipo tras esquivar a lobo enemigo
🐺 +66% de vida antes de luchar contra lobo enemigo
🐺 Daño x3 a lobo enemigo si eres el último jugador vivo
🐺 Morir por lobo enemigo invertirá la vida a todos tus compañeros
🐺 Morir por lobo enemigo restaurará la vida completa al enemigo
🐺 Tu barra de vida se invertirá tras derrotar a lobo enemigo
🐺 X4 prob. de esquivar los ataques de lobo enemigo si tienes menos del 50% de la vida

👹 50% chance of crit. hit against enemy oni
👹 Your hits ignore the defense of enemy oni
👹 Defeating enemy oni will increase your defense 10%
👹 Dodge 90% of enemy oni's hits when you have 10hp or less

👹 100% de prob. de crítico a oni enemigo si no ha muerto ningún jugador
👹 Derrotar a oni enemigo te recuperará el 66% de vida
👹 Escaparás del combate si recibes un golpe crítico de oni enemigo
👹 X0.5 de daño recibido por oni enemigo cuando tienes más del 50% de la vida
👹 -33% de vida antes de luchar contra oni enemigo
👹 0% prob. de golpe crítico a oni enemigo
👹 50% prob. de golpe crítico a oni enemigo
👹 60% de prob. de esquivar a oni enemigo si eres el último jugador vivo
👹 Defensa del 66% frente a oni enemigo que haya matado a un compañero
👹 Derrotar a oni enemigo cambiará tus habilidades
👹 Devuelve los golpes críticos a oni enemigo
👹 Esquivar contra oni enemigo curará a tu equipo
👹 Los críticos a oni enemigo aumentarán tu agilidad
👹 Morir por oni enemigo curará -50% la vida restante de tu equipo
👹 Morir por oni enemigo curará +66% la vida restante de tu equipo
👹 Morir por oni enemigo también matará al enemigo
👹 Recibe nivel +2 cuando fallas contra oni enemigo
👹 Tus críticos a oni enemigo subirán 2% la defensa a tu equipo
👹 Un aliado aleatorio recibirá los golpes que falles contra oni enemigo

😈 0% de daño a diablillo enemigo tras asestar un golpe de daño impar
😈 100% de prob. de crítico a diablillo enemigo si eres el último jugador vivo
😈 Absorbe el 99% del daño de diablillo enemigo si tienes vida impar
😈 Defensa del 66% frente a diablillo enemigo si no ha muerto ningún compañero
😈 El 66% del daño recibido por diablillo enemigo se reflejará a tu equipo
😈 Morir por diablillo enemigo reasignará los enemigos a los que afectan las habilidades de tu equipo
😈 Reduce a 0 la agilidad de diablillo enemigo
😈 Tu porcentaje de esquiva 2x como ataques hayas intercambiado con diablillo enemigo en ese combate
😈 Absorbe el 99% del daño de diablillo enemigo si tienes vida impar
😈 Daño x3 a diablillo enemigo si eres el último jugador vivo
😈 Morir por diablillo enemigo matará a un compañero al azar
😈 Recibe nivel +2 cuando fallas contra diablillo enemigo
😈 X0.5 de daño recibido por diablillo enemigo cuando tienes más del 50% de la vida
😈 X0.5 de daño recibido por diablillo enemigo de mayor nivel
😈 X0.5 prob. de esquivar los ataques de diablillo enemigo
😈 X0.75 de daño recibido por diablillo enemigo
😈 X4 prob. de esquivar los ataques de diablillo enemigo si tienes menos del 50% de la vida
😈 100% de prob. de crítico a diablillo enemigo si no ha muerto ningún jugador
😈 Escaparás del combate si recibes un golpe crítico de diablillo enemigo
😈 0% prob. de golpe crítico a diablillo enemigo
😈 3% prob. de matar diablillo enemigo de un golpe
😈 60% de prob. de esquivar a diablillo enemigo si eres el último jugador vivo
😈 Daño x2 a diablillo enemigo cuando el minuto es par
😈 Daño x2 a diablillo enemigo cuando tienes poca vida
😈 Derrotar a diablillo enemigo te recuperará el 66% de vida
😈 Devuelve los golpes críticos a diablillo enemigo
😈 Los críticos a diablillo enemigo te curarán
😈 Morir por diablillo enemigo curará -50% la vida restante de tu equipo
😈 Morir por diablillo enemigo invertirá la vida a todos tus compañeros
😈 Recibe nivel -2 cuando fallas contra diablillo enemigo
😈 Siempre harás crítico a diablillo enemigo si tienes más del 50% de la vida
😈 Tus golpes ignoran la defensa de diablillo enemigo
😈 Un aliado aleatorio recibirá los golpes que falles contra diablillo enemigo
😈 Tu defensa aumentará 1% cada vez que golpees a diablillo enemigo
😈 20% prob. de que tus golpes curen a diablillo enemigo
😈 Siempre harás crítico a diablillo enemigo si tienes menos del 50% de la vida
😈 Tu nivel se igualará a cualquier diablillo enemigo que luches
😈 Tus críticos harán x0.5 de daño a diablillo enemigo

🐲 100% de prob. de crítico a dragón enemigo si eres el último jugador vivo
🐲 66% prob. de esquivar los ataques de dragón enemigo si tienes la vida completa
🐲 Esquiva el 90% de los golpes de dragón enemigo si tienes 10hp o menos

🧟 Cura ligeramente a tu equipo cuando golpeas a zombi enemigo
🧟 Daño x1.5 a zombi enemigo
🧟 Daño x3 a zombi enemigo si eres el último jugador vivo
🧟 Derrotar a zombi enemigo duplicará la defensa de un compañero aleatorio
🧟 Reduce a 0 la agilidad de zombi enemigo
🧟 Tu defensa aumentará 10% cada vez que golpees a zombi enemigo mientras tengas toda la vida
🧟 Daño x3 a zombi enemigo si tienes toda la vida
🧟 Escaparás del combate si tienes menos del 20% de vida frente a zombi enemigo
🧟 Intercambia la vida de zombi enemigo con la tuya cuando empiezas el combate
🧟 Morir por zombi enemigo matará a un compañero al azar
🧟 Zombi enemigo al que te enfrentes cambiará al mismo nivel que tú

🗿 100% de prob. de crítico a gárgola enemigo si tienes vida impar
🗿 60% de prob. de esquivar a gárgola enemigo si eres el último jugador vivo
🗿 Atacar primero contra gárgola enemigo hará x3 daño
🗿 Daño x2 a gárgola enemigo tras asestarle un golpe de daño impar
🗿 Intercambia la vida de gárgola enemigo con la tuya cuando empiezas el combate
🗿 Recupera la vida antes de morir por gárgola enemigo a costa de absorber la vida de un compañero aleatorio
🗿 Tu nivel se igualará a cualquier gárgola enemigo que luches
🗿 X1.25 de daño recibido por gárgola enemigo

👣 Dying by humanoid enemies also kills the opponent
👣 Your defense will increase 10% each time you hit humanoid enemies as long as you have full life

👣 3% prob. de matar enemigos humanoides de un golpe
👣 El 66% del daño recibido por enemigos humanoides se reflejará a tu equipo
👣 +66% de vida antes de luchar contra enemigos humanoides
👣 100% de prob. de crítico a enemigos humanoides si tienes vida impar
👣 Cura ligeramente a tu equipo cuando golpeas a enemigos humanoides
👣 Daño x0.7 a enemigos humanoides

🔮 Baja 5 niveles a enemigos malditos antes de luchar
🔮 Derrotar a enemigos malditos convertirá a las habilidades de un compañero al azar en superefectivas

🦁 100% chance of critical against enemy orc if you are the last player alive
🦁 Crit. hits deal x3 damage against enemy orc

🦁 20% prob. de que tus golpes curen a orco enemigo
🦁 Anula permanentemente la probabilidad de hacer críticos de orco enemigo
🦁 Atacar primero contra orco enemigo hará x3 daño
🦁 Cura a tus compañeros el daño recibido por orco enemigo de forma equivalente
🦁 Daño x0.7 a orco enemigo
🦁 Daño x3 a orco enemigo si no ha muerto ningún jugador
🦁 Daño x3 a orco enemigo si tienes toda la vida
🦁 Derrotar a orco enemigo duplicará la defensa de un compañero aleatorio
🦁 Derrotar a orco enemigo te subirá nivel +3
🦁 Desvía el 200% del daño recibido por orco enemigo a un compañero al azar
🦁 Devuelve los golpes críticos a orco enemigo
🦁 Esquivar contra orco enemigo aumentará tu probabilidad de crítico
🦁 Esquivar frente a orco enemigo subirá 4% tu defensa
🦁 Intercambia la vida de orco enemigo con la tuya cuando empiezas el combate
🦁 Los críticos de orco enemigo te hacen x2 de daño
🦁 Morir por orco enemigo invertirá la vida a todos tus compañeros
🦁 Orco enemigo tiene x2 prob. de esquivar tus ataques
🦁 Recibe nivel -2 cuando fallas contra orco enemigo
🦁 Reduce a 0 la agilidad de orco enemigo
🦁 Reduce la agilidad de tu equipo cuando fallas contra orco enemigo
🦁 Tu defensa aumentará 10% cada vez que golpees a orco enemigo mientras tengas toda la vida
🦁 Un aliado aleatorio recibirá los golpes que falles contra orco enemigo
🦁 X0.5 prob. de esquivar los ataques de orco enemigo
🦁 X2 prob. de esquivar los ataques de orco enemigo

🦇 -33% de vida antes de luchar contra murciélago enemigo
🦇 Derrotar a murciélago enemigo convertirá a las habilidades de un compañero al azar en superefectivas
🦇 El 66% del daño recibido por murciélago enemigo se reflejará a tu equipo
🦇 Esquivar contra murciélago enemigo curará a tu equipo
🦇 Morir por murciélago enemigo reestablecerá las habilidades de tus compañeros
🦇 Morir por murciélago enemigo restaurará la vida completa al enemigo
🦇 No puedes fallar contra murciélago enemigo
🦇 Recibe nivel +2 cuando fallas contra murciélago enemigo
🦇 Reduce la agilidad de tu equipo cuando fallas contra murciélago enemigo
🦇 Resiste los golpes mortales de murciélago enemigo si tienes más de 1 de vida
🦇 Tu defensa frente a murciélago enemigo será del 100% mientras nunca hayas recibido daño
🦇 Tus críticos harán x0.5 de daño a murciélago enemigo
🦇 X0.5 de daño recibido por murciélago enemigo cuando tienes menos del 50% de la vida
🦇 X0.5 de daño recibido por murciélago enemigo si el minuto es impar

🐾 Tus críticos a enemigos bestias subirán 3% tu defensa
🐾 X0.5 prob. de esquivar los ataques de enemigos bestias
🐾 Daño x2 tras recibir un crítico de enemigos bestias
🐾 Tu barra de vida se invertirá tras derrotar a enemigos bestias
🐾 Defensa del 66% frente a enemigos bestias que haya matado a un compañero
🐾 Morir por enemigos bestias restaurará la vida completa al enemigo

👑 +66% de vida antes de luchar contra cualquier jefe
👑 Tu defensa frente a cualquier jefe será del 100% mientras tengas 10hp o menos
👑 Tu defensa cambiará a número de nivel de cualquier jefe al que te enfrentes
👑 X0.5 prob. de esquivar los ataques de cualquier jefe

🛡️ 20% prob. de que tus golpes curen a enemigos más resistentes
🛡️ X0.5 de daño recibido por enemigos más resistentes si el minuto es impar
🛡️ +66% de vida antes de luchar contra enemigos más resistentes
🛡️ Baja 5 niveles a enemigos más resistentes antes de luchar
🛡️ Defensa del 66% frente a enemigos más resistentes si no ha muerto ningún compañero
🛡️ Derrotar a enemigos más resistentes invertirá la vida de un compañero aleatorio
🛡️ Mata a enemigos más resistentes de un golpe si tienes 3hp o menos
🛡️ Tus críticos harán x0.5 de daño a enemigos más resistentes
🛡️ Daño x2 a enemigos más resistentes cuando el minuto es par
🛡️ El 66% del daño recibido por enemigos más resistentes se reflejará a tu equipo
🛡️ Esquivar contra enemigos más resistentes aumentará tu probabilidad de crítico
🛡️ Morir por enemigos más resistentes matará a un compañero al azar
🛡️ Fallar contra enemigos más resistentes bloqueará su próximo ataque
🛡️ Resiste los golpes mortales de enemigos más resistentes si tienes más de 1 de vida
🛡️ Tu porcentaje de esquiva 2x como ataques hayas intercambiado con enemigos más resistentes en ese combate

⚡ Crit. hits deal x0.5 damage against more agile enemies
⚡ Your critical hits at more agile enemies will raise 2% the defense of your team

⚡ Daño x2 a enemigos más ágiles cuando el minuto es par
⚡ Morir por enemigos más ágiles restaurará la vida completa al enemigo
⚡ Esquiva el 90% de los golpes de enemigos más ágiles si tienes 10hp o menos
⚡ Esquivar frente a enemigos más ágiles subirá 4% tu defensa
⚡ Reduce la agilidad de tu equipo cuando fallas contra enemigos más ágiles
⚡ Tu porcentaje de esquiva 2x como ataques hayas intercambiado con enemigos más ágiles en ese combate

⭐ 100% de prob. de crítico a cualquier enemigo si no ha muerto ningún jugador
⭐ El 66% del daño recibido por cualquier enemigo se reflejará a tu equipo

🗡️ Rogue
🗡️ Pícaro
☀️ Paladín
🥀 Nigromante
🛡️ Tank
🛡️ Tanque
⚔️ Warrior
🥀 Necromancer
Berserk
Berserker

minotaur
minotauro
orc
orco
cyclops
cíclope
troll
spider
araña
shadow
sombra
imp
diablillo
naga
skeleton
esqueleto
slime
limo
goblin
wolf
lobo
oni
humanoid
humanoides
bestias
dragon
dragón
zombie
zombi
cursed
malditos
gargoyle
gárgola
tougher
resistenses
boss
jefe
bat
murciélago
any
cualquier
Mixed (Esqueleto, Troll)
Mixed (Goblin, Minotauro)
Mixed (Shadow, Goblin)
Mixed (Goblin, Shadow)
Mixed (Cyclops, Shadow)
Mixed (Cyclops, Minotaur)
Mixed (Araña, Diablillo)
Mixed (Araña, Troll)
Mixed (Diablillo, Minotauro)
Mixed (Diablillo, Troll)
Mixed (Minotauro, Troll)
Mixed (Diablillo, Naga)
Mixed (Diablillo, Zombi)
Mixed (Dragón, Naga)
Mixed (Naga, Zombi)
Mixed (Araña, Sombra)
Mixed (Clope, Diablillo)
Mixed (Clope, Limo)
Mixed (Clope, Rgola)
Mixed (Diablillo, Goblin)
Mixed (Diablillo, Lobo)
Mixed (Diablillo, Sombra)
Mixed (Goblin, Lobo)
Mixed (Goblin, Zombi)
Mixed (Limo, Rgola)
Mixed (Cíclope, Orco)
Mixed (Con, Contra)
Mixed (Diablillo, Oni)
Mixed (Esqueleto, Minotauro)
Mixed (Esqueleto, Orco)
Mixed (Lago, Lobo)
Mixed (Lago, Minotauro)
Mixed (Lago, Orco)
Mixed (Lobo, Orco)
Mixed (Minotauro, Orco)
Mixed (Oni, Troll)
Mixed (Orco, Troll)



`;
