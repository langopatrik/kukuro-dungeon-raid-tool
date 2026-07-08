// ============================================================================
// Kukoro Dungeon Raid Tool — Focus Keyword List
// ============================================================================
// This is the file to edit when the enemy/focus keyword matching needs to
// change: new phrase, new language, fixed typo, etc. No regex or coding
// knowledge needed — just plain phrases and labels.
//
// HOW IT WORKS
// If a skill's text contains one of the phrases below (as whole words, not
// case-sensitive), that skill's focus becomes the paired label. Entries are
// checked top to bottom and the first phrase that matches wins.
//
// HOW TO ADD A NEW ENTRY
// Copy a line and change the phrase/label:
//   { language: "English", phrase: "some enemy phrase", focus: "label shown on board" },
//
//   - phrase: the exact words to look for, in order (spacing is flexible,
//     so "all   enemies" would still match — you don't need to worry about
//     extra spaces).
//   - focus: exactly what should appear on the board when this phrase is
//     found.
//   - language: just a label for your own organization — it isn't used for
//     matching, so you can group entries however makes sense to you.
// ============================================================================

const FOCUS_KEYWORDS = [
  // English
  { language: "English", phrase: "all the enemies",       focus: "all" },
  { language: "English", phrase: "all enemies",            focus: "all" },
  { language: "English", phrase: "tougher enemies",        focus: "tougher" },
  { language: "English", phrase: "resilient enemy",        focus: "resilient" },
  { language: "English", phrase: "humanoid enemies",        focus: "humanoid" },

  // Spanish
  { language: "Spanish", phrase: "todos los enemigos",     focus: "todos" },
  { language: "Spanish", phrase: "dragón enemigo",         focus: "dragón" },
  { language: "Spanish", phrase: "todos enemigos",         focus: "todos" },
  { language: "Spanish", phrase: "enemigos más resistentes", focus: "resistenses" },
  { language: "Spanish", phrase: "cualquier jefe",         focus: "jefe" },
  { language: "Spanish", phrase: "enemigos humanoides",         focus: "humanoides" },
  { language: "Spanish", phrase: "araña enemigo",         focus: "araña" },
  { language: "Spanish", phrase: "enemigos bestias",         focus: "bestias" },
  { language: "Spanish", phrase: "enemigos malditos",         focus: "malditos" },
];
