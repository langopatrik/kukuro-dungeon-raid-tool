# Kukoro Dungeon Raid Player Data Tool

A web tool that makes running a **Kukoro Dungeon Raid** on Twitch more
comfortable for everyone.

It connects to a Twitch channel's chat, parses the raid messages players
post (level, stats, role, focus, skills), and lays them out on a clean,
sortable board so the whole party can see who's doing what at a glance.

## Features

- **Live Twitch chat connection** — connect to any channel and watch raid
  messages come in, with connection status shown at all times.
- **Automatic player parsing** — pastes or live chat messages are parsed
  into structured player entries (level, stats, role, focus, skills) and
  added to the board.
- **Sortable board** — sort players by name, level, role, or focus with a
  click.
- **Boss / Dungeon Level tracking** — set the current boss type (pick from
  a list or type your own) and dungeon level, shown above the board.
- **Manual editing** — add, edit, or remove players by hand; click a
  player's name or a skill to highlight it red/green.
- **Notifications** — a bell icon surfaces things that need attention.
- **Light/dark theme**, remembered between visits.
- **Multi-language UI** — English, Español, Français, Deutsch, and 日本語,
  covering all interface chrome (labels, buttons, tooltips, alerts).
- **Board text translation workflow** — the board also displays free-text
  pulled straight from raid chat (role/focus/skill descriptions) that isn't
  part of the UI dictionary. The tool tracks which of these strings are
  already known (via `board_translations.js`) versus still pending, and hands
  to a translator.
- **Works fully offline / from disk** — all scripts are loaded as plain
  `<script>` tags, so the tool works even when `index.html` is opened
  directly as a local file, not just when served over http(s).

## Files

| File | Purpose |
|---|---|
| `index.html` | App markup/layout |
| `style.css` | App styling |
| `script.js` | App logic — chat connection, parsing, board rendering, i18n engine, settings |
| `patterns.js` | Editable list of enemy/focus keyword phrases used to match skill text to a "focus" label. No coding knowledge needed to update |
| `board_translations.js` | Hand-maintained list of already-translated board text strings, one per line. Minimal coding knowledge needed to update |

## Customizing keyword matching

Open `patterns.js` to add or change the phrases the tool looks for when
figuring out a skill's focus. Each entry is a plain `{ language, phrase,
focus }` object — no regex required. See the comments at the top of that
file for details.

## Adding board translations

Open `board_translations.js` and add new lines inside the backtick-quoted
string, one board string per line, exactly as it appears on the board.
Avoid using a backtick (`` ` ``) or `${...}` inside a line, since those have
special meaning inside a JS template string.

## Getting started

1. Download or clone this repository.
2. Open `index.html` in a browser (double-click works — no server
   required).
3. Enter a Twitch channel name in the sidebar and click **Connect Chat**.

---

## Copyright & Permissions

Copyright © 2026 the Kukoro Dungeon Raid Player Data Tool contributors.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

### Not affiliated

This is an unofficial, fan-made companion tool for organizing "Kukoro
Dungeon Raid" community events on Twitch. It is not affiliated with,
endorsed by, or sponsored by the creators of Kukoro Dungeon Raid, Twitch
Interactive, Inc., or any related parties. All game names, trademarks, and
in-game terminology referenced (boss names, skill text, etc.) belong to
their respective owners and are used here only for identification and
interoperability purposes.

### Third-party data

Player-submitted chat messages parsed by this tool remain the property of
the players who wrote them. This tool does not claim ownership over any
in-game text, player names, or chat content it displays or processes.
