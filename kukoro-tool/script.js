// ---- i18n dictionary & engine ----
// Covers every piece of UI chrome (labels, buttons, placeholders, tooltips,
// headers, alerts, status text) across all 5 languages in the Settings >
// Language dropdown. Deliberately NOT translated: player-entered data
// (names/stats/skills) and the Boss Type creature list — those are tied to
// the raid-message parsing patterns in patterns.js, so changing their text
// here would desync them from what the parser actually matches.
const I18N = {
  en: {
    app_title: "Kukoro Dungeon Raid Player Data Tool",
    settings_title: "Settings",
    notifications_title: "Notifications",
    notifications_panel_title: "Notifications",
    notifications_clear_btn: "Clear all",
    notifications_empty: "No notifications yet",
    notif_board_text_pending: "{count} board text string(s) ready for translation",
    theme_label: "Theme",
    theme_btn_to_light: "Switch to Light Mode",
    theme_btn_to_dark: "Switch to Dark Mode",
    board_text_log_label: "Board Text (for translation)",
    export_board_text_btn: "Export Board Text",
    import_no_new_alert: "No new board text to export — everything in the log is already in board_translations.js.",
    language_label: "Language",
    toggle_sidebar_title: "Toggle sidebar",
    close_settings_aria: "Close settings",
    twitch_channel_label: "Twitch Channel",
    channel_placeholder: "channel name",
    connect_chat_btn: "Connect Chat",
    disconnect_btn: "Disconnect",
    clear_btn: "Clear",
    boss_type_label: "Boss Type",
    select_boss_option: "Select a boss...",
    boss_custom_option: "Other (type your own)...",
    boss_custom_placeholder: "Enter custom boss type",
    dungeon_level_label: "Dungeon Level",
    dungeon_level_placeholder: "e.g. 5",
    set_btn: "Set",
    player_data_label: "Player Data",
    player_data_placeholder: "Paste raid messages, one per line...",
    add_players_btn: "Add Players",
    tab_chat: "Chat",
    tab_board: "Board",
    boss_label: "Boss",
    header_players: "Players",
    header_level: "Level",
    header_stats: "Stats",
    header_role: "Role",
    header_focus: "Focus",
    header_skills: "Skills",
    footer_html: '<a href="https://www.damr.site/" target="_blank" rel="noopener noreferrer">Homepage</a> · <a href="#" onclick="openToolReadme(); return false;">Read Me</a> · <a href="#" onclick="readMe(); return false;">Copyright &amp; Permissions</a> · <a href="#" onclick="openFaq(); return false;">FAQ</a> · <a href="#" onclick="openContacts(); return false;">Contacts</a>',
    edit_player_title: "Edit player",
    remove_player_title: "Remove player",
    add_player_trigger: "Add Player",
    unknown_focus: "Unknown",
    save_btn: "Save",
    cancel_btn: "Cancel",
    player_name_placeholder: "Player name",
    level_placeholder: "Level",
    stats_placeholder: "Stats",
    role_placeholder: "Role",
    focus_placeholder: "Focus",
    skills_placeholder: "Skills, one per line...",
    status_disconnected: "disconnected",
    status_connecting: "connecting to #{channel}…",
    status_connected: "connected — #{channel}",
    status_dropped: "disconnected (connection dropped)",

    readme_title: "Read Me",
    close_readme_aria: "Close Read Me",
    tool_readme_title: "Read Me",
    close_tool_readme_aria: "Close Read Me",
    faq_title: "FAQ",
    close_faq_aria: "Close FAQ",
    faq_q1: "How do I start tracking a raid?",
    faq_a1: 'Enter a Twitch channel name that you would like to track in the sidebar and click "Connect Chat". Once connected, raid messages will appear in the Chat tab and matching players will be added to the Board automatically.',
    faq_q2: "Why aren't players showing up on the Board?",
    faq_a2: 'Make sure you\'re connected to the correct channel and that chat messages follow the expected raid message format. You can also paste raid messages directly into the "Player Data" box and click "Add Players" to add them manually.',
    faq_q3: "Can I set a boss type and dungeon level?",
    faq_a3: 'Yes. Choose a boss from the dropdown (or enter a custom one), set the dungeon level, and click "Set" to display them at the top of the Board tab.',
    faq_q4: 'What does "Export Board Text" do?',
    faq_a4: "It collects roles, focuses, and skills currently shown on the Board so they can be translated or reviewed elsewhere. Found under Settings.",
    faq_q5: "How do I clear everything and start over?",
    faq_a5: 'The website automatically tracks the end of the raid, and clears the board. For manual clear, click "Disconnect" to leave the channel, then "Clear" to reset the chat log and Board.',
    contacts_title: "Contacts",
    close_contacts_aria: "Close Contacts",
    contact_twitch: "Twitch",
    contact_discord: "Discord",
    skill_placeholder_title: "Placeholder — waiting for full stats",
    skill_highlight_title: "Click to highlight red/green",
    name_highlight_title: "{name} — Click to highlight red/green"
  },
  es: {
    app_title: "Herramienta de Datos de Jugadores - Kukoro Dungeon Raid",
    settings_title: "Configuración",
    notifications_title: "Notificaciones",
    notifications_panel_title: "Notificaciones",
    notifications_clear_btn: "Borrar todo",
    notifications_empty: "Sin notificaciones",
    notif_board_text_pending: "{count} cadena(s) de texto del tablero listas para traducir",
    theme_label: "Tema",
    theme_btn_to_light: "Cambiar a Modo Claro",
    theme_btn_to_dark: "Cambiar a Modo Oscuro",
    board_text_log_label: "Texto del Tablero (para traducción)",
    export_board_text_btn: "Exportar Texto del Tablero",
    import_no_new_alert: "No hay texto nuevo del tablero para exportar — todo en el registro ya está en board_translations.js.",
    language_label: "Idioma",
    toggle_sidebar_title: "Mostrar/ocultar barra lateral",
    close_settings_aria: "Cerrar configuración",
    twitch_channel_label: "Canal de Twitch",
    channel_placeholder: "nombre del canal",
    connect_chat_btn: "Conectar Chat",
    disconnect_btn: "Desconectar",
    clear_btn: "Borrar",
    boss_type_label: "Tipo de Jefe",
    select_boss_option: "Selecciona un jefe...",
    boss_custom_option: "Otro (escribe el tuyo)...",
    boss_custom_placeholder: "Escribe el tipo de jefe",
    dungeon_level_label: "Nivel de Mazmorra",
    dungeon_level_placeholder: "p. ej. 5",
    set_btn: "Aplicar",
    player_data_label: "Datos de Jugadores",
    player_data_placeholder: "Pega los mensajes de la redada, uno por línea...",
    add_players_btn: "Añadir Jugadores",
    tab_chat: "Chat",
    tab_board: "Tablero",
    boss_label: "Jefe",
    header_players: "Jugadores",
    header_level: "Nivel",
    header_stats: "Estadísticas",
    header_role: "Rol",
    header_focus: "Objetivo",
    header_skills: "Habilidades",
    footer_html: '<a href="https://www.damr.site/" target="_blank" rel="noopener noreferrer">Página de Inicio</a> · <a href="#" onclick="openToolReadme(); return false;">Léame</a> · <a href="#" onclick="readMe(); return false;">Derechos de Autor y Permisos</a> · <a href="#" onclick="openFaq(); return false;">Preguntas Frecuentes</a> · <a href="#" onclick="openContacts(); return false;">Contacto</a>',
    edit_player_title: "Editar jugador",
    remove_player_title: "Eliminar jugador",
    add_player_trigger: "Añadir Jugador",
    unknown_focus: "Desconocido",
    save_btn: "Guardar",
    cancel_btn: "Cancelar",
    player_name_placeholder: "Nombre del jugador",
    level_placeholder: "Nivel",
    stats_placeholder: "Estadísticas",
    role_placeholder: "Rol",
    focus_placeholder: "Objetivo",
    skills_placeholder: "Habilidades, una por línea...",
    status_disconnected: "desconectado",
    status_connecting: "conectando a #{channel}…",
    status_connected: "conectado — #{channel}",
    status_dropped: "desconectado (conexión perdida)",

    readme_title: "Léeme",
    close_readme_aria: "Cerrar Léeme",
    tool_readme_title: "Léeme",
    close_tool_readme_aria: "Cerrar Léeme",
    skill_placeholder_title: "Marcador de posición — esperando estadísticas completas",
    skill_highlight_title: "Haz clic para resaltar en rojo/verde",
    name_highlight_title: "{name} — Haz clic para resaltar en rojo/verde"
  },
  fr: {
    app_title: "Outil de Données des Joueurs - Kukoro Dungeon Raid",
    settings_title: "Paramètres",
    notifications_title: "Notifications",
    notifications_panel_title: "Notifications",
    notifications_clear_btn: "Tout effacer",
    notifications_empty: "Aucune notification",
    notif_board_text_pending: "{count} chaîne(s) de texte du tableau prêtes à traduire",
    theme_label: "Thème",
    theme_btn_to_light: "Passer au Mode Clair",
    theme_btn_to_dark: "Passer au Mode Sombre",
    board_text_log_label: "Texte du Tableau (pour traduction)",
    export_board_text_btn: "Exporter le Texte du Tableau",
    import_no_new_alert: "Aucun nouveau texte du tableau à exporter — tout est déjà dans board_translations.js.",
    language_label: "Langue",
    toggle_sidebar_title: "Afficher/masquer la barre latérale",
    close_settings_aria: "Fermer les paramètres",
    twitch_channel_label: "Chaîne Twitch",
    channel_placeholder: "nom de la chaîne",
    connect_chat_btn: "Connecter le Chat",
    disconnect_btn: "Déconnecter",
    clear_btn: "Effacer",
    boss_type_label: "Type de Boss",
    select_boss_option: "Sélectionnez un boss...",
    boss_custom_option: "Autre (saisissez le vôtre)...",
    boss_custom_placeholder: "Saisissez le type de boss",
    dungeon_level_label: "Niveau du Donjon",
    dungeon_level_placeholder: "p. ex. 5",
    set_btn: "Définir",
    player_data_label: "Données des Joueurs",
    player_data_placeholder: "Collez les messages du raid, un par ligne...",
    add_players_btn: "Ajouter des Joueurs",
    tab_chat: "Chat",
    tab_board: "Tableau",
    boss_label: "Boss",
    header_players: "Joueurs",
    header_level: "Niveau",
    header_stats: "Stats",
    header_role: "Rôle",
    header_focus: "Cible",
    header_skills: "Compétences",
    footer_html: '<a href="https://www.damr.site/" target="_blank" rel="noopener noreferrer">Page d\'accueil</a> · <a href="#" onclick="openToolReadme(); return false;">Lisez-moi</a> · <a href="#" onclick="readMe(); return false;">Droits d\'auteur et autorisations</a> · <a href="#" onclick="openFaq(); return false;">FAQ</a> · <a href="#" onclick="openContacts(); return false;">Contacts</a>',
    edit_player_title: "Modifier le joueur",
    remove_player_title: "Supprimer le joueur",
    add_player_trigger: "Ajouter un Joueur",
    unknown_focus: "Inconnu",
    save_btn: "Enregistrer",
    cancel_btn: "Annuler",
    player_name_placeholder: "Nom du joueur",
    level_placeholder: "Niveau",
    stats_placeholder: "Stats",
    role_placeholder: "Rôle",
    focus_placeholder: "Cible",
    skills_placeholder: "Compétences, une par ligne...",
    status_disconnected: "déconnecté",
    status_connecting: "connexion à #{channel}…",
    status_connected: "connecté — #{channel}",
    status_dropped: "déconnecté (connexion perdue)",

    readme_title: "Lisez-moi",
    close_readme_aria: "Fermer Lisez-moi",
    tool_readme_title: "Lisez-moi",
    close_tool_readme_aria: "Fermer Lisez-moi",
    skill_placeholder_title: "Espace réservé — en attente des stats complètes",
    skill_highlight_title: "Cliquez pour surligner en rouge/vert",
    name_highlight_title: "{name} — Cliquez pour surligner en rouge/vert"
  },
  de: {
    app_title: "Kukoro Dungeon Raid Spielerdaten-Tool",
    settings_title: "Einstellungen",
    notifications_title: "Benachrichtigungen",
    notifications_panel_title: "Benachrichtigungen",
    notifications_clear_btn: "Alle löschen",
    notifications_empty: "Keine Benachrichtigungen",
    notif_board_text_pending: "{count} Board-Textstring(s) bereit zur Übersetzung",
    theme_label: "Design",
    theme_btn_to_light: "Zu Hellem Modus wechseln",
    theme_btn_to_dark: "Zu Dunklem Modus wechseln",
    board_text_log_label: "Board-Text (für Übersetzung)",
    export_board_text_btn: "Board-Text Exportieren",
    import_no_new_alert: "Kein neuer Board-Text zum Exportieren — alles im Protokoll ist bereits in board_translations.js.",
    language_label: "Sprache",
    toggle_sidebar_title: "Seitenleiste ein-/ausblenden",
    close_settings_aria: "Einstellungen schließen",
    twitch_channel_label: "Twitch-Kanal",
    channel_placeholder: "Kanalname",
    connect_chat_btn: "Chat Verbinden",
    disconnect_btn: "Trennen",
    clear_btn: "Löschen",
    boss_type_label: "Bosstyp",
    select_boss_option: "Boss auswählen...",
    boss_custom_option: "Andere (eigenen Namen eingeben)...",
    boss_custom_placeholder: "Eigenen Bosstyp eingeben",
    dungeon_level_label: "Dungeon-Stufe",
    dungeon_level_placeholder: "z. B. 5",
    set_btn: "Übernehmen",
    player_data_label: "Spielerdaten",
    player_data_placeholder: "Raid-Nachrichten einfügen, eine pro Zeile...",
    add_players_btn: "Spieler Hinzufügen",
    tab_chat: "Chat",
    tab_board: "Tafel",
    boss_label: "Boss",
    header_players: "Spieler",
    header_level: "Stufe",
    header_stats: "Werte",
    header_role: "Rolle",
    header_focus: "Fokus",
    header_skills: "Fähigkeiten",
    footer_html: '<a href="https://www.damr.site/" target="_blank" rel="noopener noreferrer">Startseite</a> · <a href="#" onclick="openToolReadme(); return false;">Liesmich</a> · <a href="#" onclick="readMe(); return false;">Urheberrecht &amp; Berechtigungen</a> · <a href="#" onclick="openFaq(); return false;">FAQ</a> · <a href="#" onclick="openContacts(); return false;">Kontakt</a>',
    edit_player_title: "Spieler bearbeiten",
    remove_player_title: "Spieler entfernen",
    add_player_trigger: "Spieler Hinzufügen",
    unknown_focus: "Unbekannt",
    save_btn: "Speichern",
    cancel_btn: "Abbrechen",
    player_name_placeholder: "Spielername",
    level_placeholder: "Stufe",
    stats_placeholder: "Werte",
    role_placeholder: "Rolle",
    focus_placeholder: "Fokus",
    skills_placeholder: "Fähigkeiten, eine pro Zeile...",
    status_disconnected: "getrennt",
    status_connecting: "Verbinde mit #{channel}…",
    status_connected: "verbunden — #{channel}",
    status_dropped: "getrennt (Verbindung unterbrochen)",

    readme_title: "Liesmich",
    close_readme_aria: "Liesmich schließen",
    tool_readme_title: "Liesmich",
    close_tool_readme_aria: "Liesmich schließen",
    skill_placeholder_title: "Platzhalter — wartet auf vollständige Werte",
    skill_highlight_title: "Klicken zum Markieren in Rot/Grün",
    name_highlight_title: "{name} — Klicken zum Markieren in Rot/Grün"
  },
  ja: {
    app_title: "Kukoro ダンジョンレイド プレイヤーデータツール",
    settings_title: "設定",
    notifications_title: "通知",
    notifications_panel_title: "通知",
    notifications_clear_btn: "すべて消去",
    notifications_empty: "通知はありません",
    notif_board_text_pending: "翻訳待ちのボードテキストが{count}件あります",
    theme_label: "テーマ",
    theme_btn_to_light: "ライトモードに切り替え",
    theme_btn_to_dark: "ダークモードに切り替え",
    board_text_log_label: "ボードのテキスト（翻訳用）",
    export_board_text_btn: "ボードのテキストを書き出す",
    import_no_new_alert: "書き出す新しいボードテキストはありません — ログ内のすべてが board_translations.js に含まれています。",
    language_label: "言語",
    toggle_sidebar_title: "サイドバーの表示切替",
    close_settings_aria: "設定を閉じる",
    twitch_channel_label: "Twitchチャンネル",
    channel_placeholder: "チャンネル名",
    connect_chat_btn: "チャットに接続",
    disconnect_btn: "切断",
    clear_btn: "クリア",
    boss_type_label: "ボスタイプ",
    select_boss_option: "ボスを選択...",
    boss_custom_option: "その他（自分で入力）...",
    boss_custom_placeholder: "ボスタイプを入力",
    dungeon_level_label: "ダンジョンレベル",
    dungeon_level_placeholder: "例：5",
    set_btn: "設定する",
    player_data_label: "プレイヤーデータ",
    player_data_placeholder: "レイドメッセージを1行ずつ貼り付け...",
    add_players_btn: "プレイヤーを追加",
    tab_chat: "チャット",
    tab_board: "ボード",
    boss_label: "ボス",
    header_players: "プレイヤー",
    header_level: "レベル",
    header_stats: "ステータス",
    header_role: "役割",
    header_focus: "フォーカス",
    header_skills: "スキル",
    footer_html: '<a href="https://www.damr.site/" target="_blank" rel="noopener noreferrer">ホームページ</a>・<a href="#" onclick="openToolReadme(); return false;">Read Me</a>・<a href="#" onclick="readMe(); return false;">著作権と使用許可</a>・<a href="#" onclick="openFaq(); return false;">よくある質問</a>・<a href="#" onclick="openContacts(); return false;">連絡先</a>',
    edit_player_title: "プレイヤーを編集",
    remove_player_title: "プレイヤーを削除",
    add_player_trigger: "プレイヤーを追加",
    unknown_focus: "不明",
    save_btn: "保存",
    cancel_btn: "キャンセル",
    player_name_placeholder: "プレイヤー名",
    level_placeholder: "レベル",
    stats_placeholder: "ステータス",
    role_placeholder: "役割",
    focus_placeholder: "フォーカス",
    skills_placeholder: "スキルを1行ずつ入力...",
    status_disconnected: "切断済み",
    status_connecting: "#{channel} に接続中…",
    status_connected: "接続済み — #{channel}",
    status_dropped: "切断（接続が失われました）",

    readme_title: "Read Me",
    close_readme_aria: "Read Meを閉じる",
    tool_readme_title: "Read Me",
    close_tool_readme_aria: "Read Meを閉じる",
    skill_placeholder_title: "プレースホルダー — 完全なステータス待ち",
    skill_highlight_title: "クリックして赤/緑でハイライト",
    name_highlight_title: "{name} — クリックして赤/緑でハイライト"
  }
};

let currentLang = "en";

// Looks up `key` in the active language, falling back to English if the
// key or language is missing (so an incomplete dictionary never blanks the
// UI), and substitutes any {placeholder} tokens from `vars`.
function t(key, vars) {
  const dict = I18N[currentLang] || I18N.en;
  let str = dict[key] !== undefined ? dict[key] : I18N.en[key];
  if (str === undefined) return key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
    });
  }
  return str;
}

// Walks every element tagged with a data-i18n* attribute and swaps in the
// translation for the active language, then refreshes the pieces of the UI
// that are built dynamically in JS (status line, board rows) rather than
// sitting as static markup, so a language switch mid-session updates
// everything on screen immediately.
function applyLanguage(lang) {
  currentLang = I18N[lang] ? lang : "en";
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  updateThemeButtonLabel();
  updateTranslationBadge();
  renderNotifPanel();
  updateStatusText();
  renderBoard();
}

let ws;
let manualDisconnect = false;
let participants = new Map(); // name -> { stats, role, skills }
const MAX_PLAYERS = 16;
let sortMode = "name-asc";
let addingRow = false;
let editingName = null;

// Tracks connection state independently of the status line's text so that
// switching languages mid-session can redraw the same state ("connected to
// #foo", "connecting…", etc.) in the new language instead of freezing
// whatever English (or other) string happened to be on screen already.
let connectionState = { status: "disconnected", channel: "" };

// ---- Board text log (for translation) ----
// The board displays free-text pulled from raid chat (role, focus, and
// skill descriptions) that isn't covered by the UI's I18N dictionary above.
// Rather than translating on the fly, we collect every distinct string that
// actually reaches the board (this session) into a deduped set, exportable
// as a plain text file — hand that file to a translator, who folds the
// results into board_translations.js as the single source of truth for
// what's already known.
// Deliberately NOT wired into the chat log: chat stays untranslated, always.

// Every distinct role/focus/skill string seen on the board so far this
// session. Intentionally NOT persisted anywhere — board_translations.js is
// the only record of what's already known; this is just what's currently
// on screen, so it's fine (and simpler) for it to reset on every reload.
let boardTextLog = new Set();

// The set of strings board_translations.js already knows about, parsed
// once from BOARD_TRANSLATIONS on load (see loadBoardTranslationsFile
// below). A string only counts as "pending" if it's NOT in this set —
// there's no other notion of "already exported" to track.
let knownBoardTranslations = new Set();

function getPendingBoardTextCount() {
  let pending = 0;
  boardTextLog.forEach(str => { if (!knownBoardTranslations.has(str)) pending++; });
  return pending;
}

// ---- Notification bell ----
// A small persisted feed the bell icon exposes. Built generically so any
// future event this tool wants to surface can just call addNotification()
// — the board-text-pending entry below (the only event that exists today)
// is just its first user. Each entry is {id, key, vars, timestamp}; when
// `id` is provided, a later call with the same id replaces the existing
// entry in place (moving it back to the top with a fresh timestamp) rather
// than piling up duplicates — that's how "N strings pending" keeps a single
// live row that updates as the count changes.
const NOTIFICATIONS_KEY = "kukoro_notifications";

function loadNotifications() {
  try {
    const raw = localStorage.getItem(NOTIFICATIONS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* corrupt/missing — start fresh */ }
  return [];
}

let notifications = loadNotifications();
let notifPanelOpen = false;

function persistNotifications() {
  try {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  } catch (e) { /* storage unavailable/full */ }
}

function addNotification(id, key, vars) {
  if (id) notifications = notifications.filter(n => n.id !== id);
  notifications.unshift({ id: id || null, key, vars: vars || {}, timestamp: Date.now() });
  persistNotifications();
  renderNotifPanel();
  updateNotifBadge();
}

function removeNotification(id) {
  const before = notifications.length;
  notifications = notifications.filter(n => n.id !== id);
  if (notifications.length !== before) {
    persistNotifications();
    renderNotifPanel();
    updateNotifBadge();
  }
}

function clearAllNotifications() {
  notifications = [];
  persistNotifications();
  renderNotifPanel();
  updateNotifBadge();
}

// Reflects the total notification count on the bell's badge, and lights up
// the bell itself the same way it always has.
function updateNotifBadge() {
  const count = notifications.length;
  const label = count > 99 ? "99+" : String(count);

  const bellBtn = document.getElementById("translationBellBtn");
  const badge = document.getElementById("bellNotifBadge");
  if (badge) {
    badge.textContent = label;
    badge.classList.toggle("visible", count > 0);
  }
  if (bellBtn) {
    bellBtn.classList.toggle("has-notifications", count > 0);
  }
}

const NOTIF_LOCALES = { en: "en-US", es: "es-ES", fr: "fr-FR", de: "de-DE", ja: "ja-JP" };

function formatNotifTime(timestamp) {
  const locale = NOTIF_LOCALES[currentLang] || "en-US";
  return new Date(timestamp).toLocaleString(locale, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

// Rebuilds the dropdown's contents from `notifications` in their current
// (newest-first, ungrouped) order. Called whenever the list changes and
// whenever the active language changes, since each entry's text is built
// from an i18n key rather than stored pre-translated.
function renderNotifPanel() {
  const list = document.getElementById("notifList");
  if (!list) return;
  list.innerHTML = "";

  if (notifications.length === 0) {
    const empty = document.createElement("div");
    empty.className = "notif-empty";
    empty.textContent = t("notifications_empty");
    list.appendChild(empty);
    return;
  }

  notifications.forEach(n => {
    const item = document.createElement("div");
    item.className = "notif-item";

    const text = document.createElement("div");
    text.className = "notif-item-text";
    text.textContent = t(n.key, n.vars);

    const time = document.createElement("div");
    time.className = "notif-item-time";
    time.textContent = formatNotifTime(n.timestamp);

    item.appendChild(text);
    item.appendChild(time);
    list.appendChild(item);
  });
}

function toggleNotifPanel() {
  notifPanelOpen = !notifPanelOpen;
  const panel = document.getElementById("notifPanel");
  if (!panel) return;
  if (notifPanelOpen) {
    closeSettings();
    renderNotifPanel();
    panel.classList.add("open");
  } else {
    panel.classList.remove("open");
  }
}

function closeNotifPanel() {
  notifPanelOpen = false;
  const panel = document.getElementById("notifPanel");
  if (panel) panel.classList.remove("open");
}

// Closes the dropdown on any click outside the bell/panel, same idea as the
// Settings modal's overlay-click handler.
document.addEventListener("pointerdown", (e) => {
  if (!notifPanelOpen) return;
  if (e.target.closest(".bell-wrap")) return;
  closeNotifPanel();
});

// Reflects the pending board-text count on the Settings export button, and
// mirrors it as a single live bell notification (added/updated while
// something's pending, removed once everything's been exported). Called
// after every new logged string, on load, on language change (since the
// export button's label gets reset by the data-i18n pass), and right after
// an export clears the count back to zero.
function updateTranslationBadge() {
  const pending = getPendingBoardTextCount();
  const label = pending > 99 ? "99+" : String(pending);

  const exportBadge = document.getElementById("exportBadge");
  if (exportBadge) {
    exportBadge.textContent = label;
    exportBadge.style.display = pending > 0 ? "inline-block" : "none";
  }

  if (pending > 0) {
    addNotification("board_text_pending", "notif_board_text_pending", { count: pending });
  } else {
    removeNotification("board_text_pending");
  }
}


// Only strings a translator would actually need to touch are worth logging:
// skip empty/placeholder cells and skip anything with no letters at all
// (plain numbers, the "—" placeholder, bare emoji/icons), since those never
// need translating no matter what raid data produces them.
const HAS_LETTERS_RE = /\p{L}/u;

function logBoardText(str) {
  if (!str) return;
  const trimmed = String(str).trim();
  if (!trimmed || trimmed === "—") return;
  if (!HAS_LETTERS_RE.test(trimmed)) return;
  if (boardTextLog.has(trimmed)) return;
  boardTextLog.add(trimmed);
  updateTranslationBadge();
}

// Triggers a browser download of every board string collected so far this
// session that ISN'T already in board_translations.js, one per line and
// alphabetically sorted so a translator can work through it as a flat list.
// Available from the console as exportBoardTextLog(), and from the small
// "Export Board Text" button in Settings.
// board_translations.js is the only source of "already known" — there's no
// separate "already exported" tracking, so a string keeps showing up here
// on every export until it's actually added to that file.
function exportBoardTextLog() {
  const lines = Array.from(boardTextLog)
    .filter(str => !knownBoardTranslations.has(str))
    .sort((a, b) => a.localeCompare(b));

  if (lines.length === 0) {
    alert(t("import_no_new_alert"));
    return;
  }

  const blob = new Blob([lines.join("\n") + "\n"], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "board-text-log.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// board_translations.js declares BOARD_TRANSLATIONS (see that file),
// hand-maintained by whoever is doing the translation work — one board
// string per line. Loaded via a plain <script> tag rather than fetched, so
// (unlike fetch()) it works even when index.html is opened directly from
// disk instead of served over http(s). This is the ONLY source of "already
// known" strings — nothing is persisted in localStorage. Matching is by
// exact line content, same as how entries are logged.
function loadBoardTranslationsFile() {
  if (typeof BOARD_TRANSLATIONS !== "string") return; // board_translations.js missing — nothing known yet
  const lines = BOARD_TRANSLATIONS.split(/\r\n|\r|\n/).map(l => l.trim()).filter(l => l.length > 0);
  knownBoardTranslations = new Set(lines);
  updateTranslationBadge();
}

function updateStatusText() {
  const el = document.getElementById("statusText");
  if (!el) return;
  const { status, channel } = connectionState;
  if (status === "connecting") el.textContent = t("status_connecting", { channel });
  else if (status === "connected") el.textContent = t("status_connected", { channel });
  else if (status === "dropped") el.textContent = t("status_dropped");
  else el.textContent = t("status_disconnected");
}

/* ORIGINAL CHAT LOGIC (UNCHANGED) */
function connect() {
  const channel = document.getElementById("channelInput").value.trim().toLowerCase();
  if (!channel) return;

  // Close any existing connection first — otherwise reconnecting (or
  // double-clicking Connect) leaves two sockets open, and every message
  // gets rendered twice, once per socket.
  if (ws) {
    ws.onclose = null; // don't let the old socket's onclose overwrite our new status text
    ws.close();
    ws = null;
  }
  manualDisconnect = false;

  const chatBox = document.getElementById("chat");
  connectionState = { status: "connecting", channel };
  updateStatusText();

  ws = new WebSocket("wss://irc-ws.chat.twitch.tv:443");

  ws.onopen = () => {
    ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership");
    ws.send("NICK justinfan" + Math.floor(Math.random() * 100000));
    ws.send("JOIN #" + channel);
    connectionState = { status: "connected", channel };
    updateStatusText();
  };

  ws.onclose = () => {
    if (!manualDisconnect) {
      connectionState = { status: "dropped", channel: "" };
      updateStatusText();
    }
    manualDisconnect = false;
  };

  ws.onmessage = (event) => {
    // Twitch can pack multiple IRC lines into one WebSocket message,
    // separated by CRLF — split them out and handle each individually.
    const lines = event.data.split("\r\n").filter(line => line.length > 0);

    for (const line of lines) {

      // Twitch periodically sends PING; we must reply with PONG or it
      // will drop the connection after a timeout.
      if (line.startsWith("PING")) {
        ws.send("PONG :tmi.twitch.tv");
        continue;
      }

      if (!line.includes("PRIVMSG")) continue;

      // Only trust messages from the broadcaster, a moderator, or the
      // Zeatrise stats bot — anyone else in chat could type
      // "[KUKORO] FakePlayer (...)" and inject bogus data onto the board.
      // Twitch's IRC tags carry broadcaster/mod status directly:
      // "badges=broadcaster/1,..." (or "moderator/1,...") lists the
      // account's badges, and "mod=1" is a simpler redundant flag for
      // moderator status. Either signal is enough to trust the sender.
      // Zeatrise is a bot account with neither badge, so it's trusted by
      // username instead.
      const badgesMatch = line.match(/badges=([^;]*)/);
      const badges = badgesMatch ? badgesMatch[1] : "";
      const isBroadcaster = /(^|,)broadcaster\//.test(badges);
      const isModByBadge = /(^|,)moderator\//.test(badges);
      const isModByTag = /[;@]mod=1(;|$)/.test(line);

      const userMatch = line.match(/display-name=([^;]+)/);
      const username = userMatch ? userMatch[1] : "Unknown";
      const isZeatriseBot = username.toLowerCase() === "zeatrise";

      if (!isBroadcaster && !isModByBadge && !isModByTag && !isZeatriseBot) continue;

      const textMatch = line.match(/PRIVMSG #[^ ]+ :(.*)/);
      const text = textMatch ? textMatch[1] : "";

      // Twitch (and bots relaying into it) will sometimes append an
      // invisible character — a zero-width space/joiner, or a Unicode
      // "tag" character (U+E0000–U+E007F) — to an otherwise-identical
      // message so Twitch's duplicate-message filter doesn't drop it.
      // That trailing character is invisible in chat but breaks strict
      // regexes anchored to the end of the string, so we strip it here
      // before any parsing happens.
      const cleanedText = text
        .replace(/\u0001/g, "")
        .replace(/^ACTION\s+/, "")
        .replace(/[\u200B-\u200F\uFEFF\u2060-\u206F]|[\u{E0000}-\u{E007F}]/gu, "")
        .trim();

      if (cleanedText.toUpperCase().includes("[KUKORO]")) {

        const cleaned = cleanedText
          .replace(/\[KUKORO\]/i, "")
          .trim();

        // Show the actual chatter who posted this (e.g. the streamer or a
        // mod), not the player name parsed out of the message body — and
        // keep the message exactly as sent, "[KUKORO]" tag included, same
        // as the Zeatrise branch below.
        const div = document.createElement("div");
        div.className = "msg";

        div.innerHTML =
          `<span class="chat-name">${escapeHtml(username)}</span>` +
          `<span class="text">${escapeHtml(cleanedText)}</span>`;

        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Dropped the trailing "$" anchor — it required the switch message
        // to end exactly at "focus to X" with nothing else after it, which
        // is exactly the kind of match a stray leftover character (or
        // extra trailing punctuation) would silently break.
        const focusMatch = cleaned.match(/^(\S+)\s+has switched focus to\s+([^.]+)\.?/i);

        // Invasion-start announcement — Spanish, "EMPIEZA LA INVASIÓN >>>
        // ¡Vamos a tomar la mazmorra nivel 22!", or English, "RAID BEGINS
        // >>> Let's take down dungeon level 17!" — checked before the
        // other branches since (like the focus-switch line) it has neither
        // "(" nor "[" and would otherwise fall through to "unrecognized".
        const invasionMatch = cleaned.match(/(?:EMPIEZA\s+LA\s+INVASI[OÓ]N.*?nivel|RAID\s+BEGINS.*?level)\s+(\d+)/i);

        // Matching end-of-invasion announcement — Spanish, "FIN DE LA
        // INVASIÓN >>> DAMR66, DRAKEVIELLX y SHHQD suben de nivel para las
        // siguientes mazmorras.", or English, "RAID IS OVER >>> DAMR66
        // leveled up for the next raids." The named players aren't parsed
        // out — the message alone just signals the raid is over.
        const invasionEndMatch = cleaned.match(/FIN\s+DE\s+LA\s+INVASI[OÓ]N|RAID\s+IS\s+OVER/i);

        if (invasionMatch) {
          handleInvasionStart(invasionMatch[1]);
        } else if (invasionEndMatch) {
          handleInvasionEnd();
        } else if (focusMatch) {
          handleFocusSwitch(focusMatch[1], focusMatch[2].trim());
        } else if (cleaned.includes("(") && cleaned.includes("[")) {
          // Only treat it as a full stats announcement if it actually looks
          // like one (has the stats parens AND at least one skill bracket).
          // Previously ANY unrecognized [KUKORO] message — including a
          // focus-switch line whose regex failed to match for any reason —
          // fell through to here and got parsed as a stats message. Since a
          // message like "X has switched focus to Y." has no "(" or "[", it
          // parsed to an almost-empty record, and upsertParticipant() would
          // silently overwrite (wipe) that player's real stats/role/skills.
          const parsed = parseKukoroMessage(cleaned);
          upsertParticipant(parsed);
        } else {
          console.warn("Unrecognized [KUKORO] message, ignoring so it can't wipe existing data:", cleaned);
        }
      } else if (isZeatriseBot) {
        // Zeatrise sends many different message types (join announcements,
        // banter, etc.) — every one of them gets shown in the chat log
        // verbatim, but only the "LEVEL⠀NAME stats skills" stat-card shape
        // (checked by parseZeatriseMessage) should ever touch the board.
        const div = document.createElement("div");
        div.className = "msg zeatrise";

        div.innerHTML =
          `<span class="chat-name">${escapeHtml(username)}</span>` +
          `<span class="text">${escapeHtml(cleanedText)}</span>`;

        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;

        const zeatriseParsed = parseZeatriseMessage(cleanedText);
        if (zeatriseParsed) {
          upsertParticipant(zeatriseParsed);
        }
      }
    }
  };
}

// Zeatrise's stat-card messages typeset the level and player name in
// Unicode "Mathematical Sans-Serif Bold" characters (e.g. "𝟭𝟭" / "𝗦𝗘𝗕𝗔𝗦𝗟_𝟱𝟰"),
// with a Braille Pattern Blank (U+2800) as the separator between them,
// instead of a plain space. Both get converted back to ordinary ASCII here
// so the rest of the parsing (and the board's existing name/level logic)
// can treat them the same as any other player.
function normalizeZeatriseBoldText(str) {
  return Array.from(str).map(ch => {
    const cp = ch.codePointAt(0);
    if (cp >= 0x1D5D4 && cp <= 0x1D5ED) return String.fromCodePoint(cp - 0x1D5D4 + 0x41); // bold sans A-Z
    if (cp >= 0x1D5EE && cp <= 0x1D607) return String.fromCodePoint(cp - 0x1D5EE + 0x61); // bold sans a-z
    if (cp >= 0x1D7EC && cp <= 0x1D7F5) return String.fromCodePoint(cp - 0x1D7EC + 0x30); // bold sans 0-9
    if (cp === 0x2800) return " "; // Braille blank used as a spacer
    return ch;
  }).join("");
}

// Zeatrise sends many different message types; only this "stat card" shape
// should ever update the board:
//   │LEVEL⠀PLAYERNAME STATS SKILL1 SKILL2
// e.g. "│𝟭𝟭⠀𝗦𝗘𝗕𝗔𝗦𝗟_𝟱𝟰 🛡️15% 💥15% ⚡️10% 🟡 Esquivar... 🔴 Recibe..."
// Returns null for anything that doesn't match that shape, so every other
// Zeatrise message is simply left showing in the chat log untouched.
function parseZeatriseMessage(rawText) {
  const text = normalizeZeatriseBoldText(rawText).trim();

  const headerMatch = text.match(/^│\s*(\d+)\s+(\S+)\s*(.*)$/su);
  if (!headerMatch) return null;

  const level = headerMatch[1];
  const name = canonicalizeName(headerMatch[2]);
  const rest = headerMatch[3];

  // Everything up to the first colored circle marker is the stats block
  // (e.g. "🛡️15% 💥15% ⚡️10%"); the skills start at the first marker.
  const firstMarkerIndex = rest.search(/[🟡🟢🔴]/u);
  const stats = (firstMarkerIndex === -1 ? rest : rest.slice(0, firstMarkerIndex)).trim();
  const skillsText = firstMarkerIndex === -1 ? "" : rest.slice(firstMarkerIndex);

  // Each skill is a colored circle followed by its description, running up
  // to the next circle (or the end of the message). The marker sets the
  // skill's highlight directly: 🟡 neutral/white, 🟢 positive/green,
  // 🔴 lost/negative-red.
  const skills = [...skillsText.matchAll(/([🟡🟢🔴])\s*([^🟡🟢🔴]*)/gu)].map(m => {
    const marker = m[1];
    const highlight = marker === "🟢" ? "green" : marker === "🔴" ? "red" : "none";
    return { text: m[2].trim(), highlight };
  });

  const focus = deriveFocusFromSkills(skills);

  return { name, level, stats, role: "", skills, focus };
}

function parseKukoroMessage(text) {
  // Example: DAMR66 (Lv. 18, Df. 15%, Crit. 20%, Agi. 15%) > 🗡️ Rogue
  // [ skill one ] and [ skill two ].
  const nameMatch = text.match(/^(\S+)/);
  const name = canonicalizeName(nameMatch ? nameMatch[1] : "Unknown");

  const statsMatch = text.match(/\(([^)]*)\)/);
  let stats = statsMatch ? statsMatch[1].trim() : "";

  // Level lives inside the stats parens (e.g. "Lv. 18, Df. 15%, ...") but
  // gets its own board column, so pull it out and tidy up what's left.
  let level = "";
  // "Lv." in English messages, "Nv." (Nivel) in Spanish ones.
  const levelMatch = stats.match(/(?:Lv|Nv)\.?\s*(\d+)/i);
  if (levelMatch) {
    level = levelMatch[1];
    stats = stats
      .replace(levelMatch[0], "")
      .replace(/^\s*,\s*|\s*,\s*$/g, "")
      .trim();
  }

  // Role sits between the stats parentheses and the first skill bracket,
  // after a ">" marker — but a player may have no role at all.
  let role = "";
  const afterStatsIndex = statsMatch ? statsMatch.index + statsMatch[0].length : name.length;
  const firstBracketIndex = text.indexOf("[");
  if (firstBracketIndex > afterStatsIndex) {
    let segment = text.slice(afterStatsIndex, firstBracketIndex).trim();
    if (segment.startsWith(">")) {
      segment = segment.slice(1).trim();
    }
    role = segment;
  }

  // Capture each skill along with its position, so we can inspect the word
  // sitting between two skills (e.g. "and" vs "but") to tell whether the
  // second one is a downside rather than a bonus.
  const skillMatches = [];
  const skillRegex = /\[\s*([^\]]*?)\s*\]/g;
  let m;
  while ((m = skillRegex.exec(text)) !== null) {
    skillMatches.push({ text: m[1].trim(), start: m.index, end: m.index + m[0].length });
  }

  const skills = skillMatches.map((match, i) => {
    // "but" between two skills signals the following skill is a drawback,
    // not a bonus — highlight it red automatically. "and" (or anything
    // else) leaves it unhighlighted; the player can still override this
    // manually by clicking the skill on the board.
    let highlight = "none";
    if (i > 0) {
      const connector = text.slice(skillMatches[i - 1].end, match.start);
      if (/\b(but|pero)\b/i.test(connector)) {
        highlight = "red";
      }
    }
    return { text: match.text, highlight };
  });

  // Focus is always derived from the skill text (never tracked as its own
  // independent value) — see deriveFocusFromSkills for the "enemy X"
  // scanning and the Mixed(...) combination rule.
  const focus = deriveFocusFromSkills(skills);

  return { name, level, stats, role, skills, focus };
}

// The actual keyword list (language, phrase, focus label) lives in
// patterns.js, loaded via <script src="patterns.js"> above, as a plain,
// readable list — no regex needed to edit it. This turns each plain phrase
// into the case-insensitive, whole-word/whole-phrase regex the matching
// code below needs, keeping that regex detail out of the editable file.
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// If patterns.js is missing or failed to load, FOCUS_KEYWORDS won't exist —
// fall back to an empty list instead of throwing, so a missing file just
// means no focus keywords are recognized rather than breaking the whole app.
let STRONG_FOCUS_PATTERNS = [];
try {
  const focusKeywords = typeof FOCUS_KEYWORDS !== "undefined" ? FOCUS_KEYWORDS : [];
  STRONG_FOCUS_PATTERNS = focusKeywords.map(({ phrase, focus }) => {
    const words = phrase.trim().split(/\s+/).map(escapeRegExp);
    return { re: new RegExp("\\b" + words.join("\\s+") + "\\b", "i"), focus };
  });
} catch (e) {
  STRONG_FOCUS_PATTERNS = [];
}

// Single source of truth for a player's focus: scans skill text for a
// strong literal pattern first, falling back to the weak "enemy X" pattern
// only when no strong pattern matches, then combines distinct types found
// across all of a player's skills into "Mixed (A, B)". Returns null
// (rendered as "Unknown" on the board) when there are no skills, or none of
// them name an enemy.
function deriveFocusFromSkills(skills) {
  if (!skills || skills.length === 0) return null;

  const enemyTypes = [];
  for (const skill of skills) {
    let type = null;

    // Strong patterns first — literal phrases with a fixed, known focus
    // value. Scan the whole list; the first one that matches this skill's
    // text wins.
    for (const strong of STRONG_FOCUS_PATTERNS) {
      if (strong.re.test(skill.text)) {
        type = strong.focus;
        break;
      }
    }

    // No strong pattern matched — fall back to the weak, variable pattern.
    // English puts the creature type after the word "enemy" (e.g. "enemy
    // troll"). Spanish reverses that order and uses "enemigo" (e.g. "troll
    // enemigo"), so try both patterns.
    if (!type) {
      const fm = skill.text.match(/enemy (\w+)/i) || skill.text.match(/(\w+)\s+enemigo/i);
      if (fm) type = fm[1].toLowerCase();
    }

    if (type && !enemyTypes.includes(type)) enemyTypes.push(type);
  }

  if (enemyTypes.length > 1) {
    const titleCase = t => t.charAt(0).toUpperCase() + t.slice(1);
    // Sort so the same set of focus types always yields the same string
    // regardless of which skill happened to mention its enemy first —
    // otherwise "Mixed (Goblin, Shadow)" vs "Mixed (Shadow, Goblin)" get
    // logged (and exported) as two distinct strings for the same combo.
    const sortedTypes = [...enemyTypes].sort((a, b) => a.localeCompare(b));
    return "Mixed (" + sortedTypes.map(titleCase).join(", ") + ")";
  } else if (enemyTypes.length === 1) {
    return enemyTypes[0];
  }
  return null;
}

function upsertParticipant(parsed) {
  // Keep the player's existing name highlight if they were already on the
  // board; a fresh raid announcement shouldn't reset a manual red/green call.
  const previous = participants.get(parsed.name);
  participants.set(parsed.name, {
    level: parsed.level,
    stats: parsed.stats,
    role: parsed.role,
    skills: parsed.skills,
    focus: parsed.focus,
    nameHighlight: previous ? (previous.nameHighlight || "green") : "green"
  });
  renderBoard();
}

function handleFocusSwitch(name, newCreature) {
  name = canonicalizeName(name);

  if (participants.has(name)) {
    const player = participants.get(name);

    if (player.skills.length === 0) {
      // No skills recorded yet — the switch itself becomes the first skill
      // entry, so focus keeps being derived from skills instead of tracked
      // separately.
      player.skills = [{ text: `Focusing enemy ${newCreature}`, highlight: "none" }];
    } else if (player.focus) {
      // Skills first: swap every mention of the old target creature(s) for
      // the new one, wherever it appears in the skill text. A plain focus
      // is one creature name; a combined "Mixed (A, B)" focus represents
      // several, so pull each one out of the parentheses and replace all
      // of them — after which re-deriving from skills naturally collapses
      // back down to a single focus (since every "enemy X" now agrees).
      const mixedMatch = player.focus.match(/^mixed\s*\((.+)\)$/i);
      const oldTypes = mixedMatch
        ? mixedMatch[1].split(",").map(t => t.trim()).filter(Boolean)
        : [player.focus];

      oldTypes.forEach(type => {
        const escaped = type.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp("\\b" + escaped + "\\b", "gi");
        player.skills = player.skills.map(s => ({ text: s.text.replace(regex, newCreature), highlight: s.highlight }));
      });
    } else {
      // Skills exist but none currently name an enemy — append a marker
      // skill so the switch is still reflected in (and derivable from) the
      // skill list.
      player.skills = [...player.skills, { text: `Focusing enemy ${newCreature}`, highlight: "none" }];
    }

    // Focus itself is never set directly — always recompute it from the
    // (now updated) skills, same as a freshly parsed raid announcement.
    player.focus = deriveFocusFromSkills(player.skills);
    participants.set(name, player);
  } else {
    // Player hasn't posted full stats yet — start their skill list with a
    // focus marker so the board derives focus from it the same way it does
    // for a fully parsed raid announcement.
    const skills = [{ text: `Focusing enemy ${newCreature}`, highlight: "none" }];
    participants.set(name, {
      level: "",
      stats: "",
      role: "",
      skills,
      focus: deriveFocusFromSkills(skills),
      nameHighlight: "green"
    });
  }

  renderBoard();
}

// Player names are treated case-insensitively — "BOT-MEADOW" and
// "bot-meadow" are the same player — and always stored/displayed in caps.
// Every place a name is captured from parsed text or typed into a form
// runs it through this first, so the participants Map only ever has one
// canonical (uppercase) key per player.
function canonicalizeName(name) {
  return (name || "").trim().toUpperCase();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// The board always shows stats as icons, regardless of how they were
// entered — [KUKORO] messages spell them out as "Df.", "Crit."/"Crít.",
// and "Agi.", while Zeatrise already sends the icons directly. This
// normalizes any text-label form into the matching icon so the board is
// consistent either way. Any whitespace right after the label is folded
// into a non-breaking space along with the icon, so the icon and its
// percentage can never get split onto separate lines when the cell wraps.
function formatStatsForDisplay(stats) {
  if (!stats) return "";
  return stats
    .replace(/\bDf\.?\s*/gi, "🛡️")
    .replace(/\bCr[ií]t\.?\s*/gi, "💥")
    .replace(/\bAgi\.?\s*/gi, "⚡️")
    // Zeatrise stats already pair an icon directly with its percentage
    // (no label to replace), but may still have a stray space — strip it
    // so the icon and value are always right up against each other.
    .replace(/([🛡️💥⚡️])\s+(?=\d)/gu, "$1");
}

function getLevelClass(level) {
  const num = parseInt(level, 10);
  if (isNaN(num)) return "";
  if (num >= 18) return "level-high";
  if (num >= 14) return "level-mid";
  return "level-low";
}

function disconnect() {
  connectionState = { status: "disconnected", channel: "" };
  if (!ws) {
    updateStatusText();
    return;
  }
  manualDisconnect = true;
  ws.close();
  ws = null;
  updateStatusText();
}

// Handles an "invasion start" announcement, e.g.
// "[KUKORO] EMPIEZA LA INVASIÓN >>> ¡Vamos a tomar la mazmorra nivel 22!"
// or "[KUKORO] RAID BEGINS >>> Let's take down dungeon level 17!"
// Just updates the dungeon level shown — the board and boss type are left
// alone (they get cleared separately when the invasion ends, not when the
// next one starts).
function handleInvasionStart(level) {
  document.getElementById("dungeonLevelInput").value = level;
  setBossType();
}

// Handles an "invasion end" announcement, e.g.
// "[KUKORO] FIN DE LA INVASIÓN >>> DAMR66, DRAKEVIELLX y SHHQD suben de
// nivel para las siguientes mazmorras." or "[KUKORO] RAID IS OVER >>>
// DAMR66 leveled up for the next raids." The specific players named don't
// matter here — the message itself just means the raid is over, so the
// board, boss type, and dungeon level all get cleared out for the next one.
function handleInvasionEnd() {
  participants.clear();
  renderBoard();

  document.getElementById("bossTypeSelect").value = "";
  document.getElementById("bossTypeCustomInput").value = "";
  document.getElementById("bossTypeCustomInput").style.display = "none";
  document.getElementById("dungeonLevelInput").value = "";
  document.getElementById("bossTypeDisplay").style.display = "none";
}

/* BUTTON FUNCTIONS */
function resetTool() {
  document.getElementById("chat").innerHTML = "";
  participants.clear();
  renderBoard();

  document.getElementById("bossTypeSelect").value = "";
  document.getElementById("bossTypeCustomInput").value = "";
  document.getElementById("bossTypeCustomInput").style.display = "none";
  document.getElementById("dungeonLevelInput").value = "";
  document.getElementById("bossTypeDisplay").style.display = "none";
}

function switchTab(tab) {
  const chatPanel = document.getElementById("chatPanel");
  const boardPanel = document.getElementById("boardPanel");
  const tabBtnChat = document.getElementById("tabBtnChat");
  const tabBtnBoard = document.getElementById("tabBtnBoard");

  if (tab === "board") {
    chatPanel.classList.remove("active");
    boardPanel.classList.add("active");
    tabBtnChat.classList.remove("active");
    tabBtnBoard.classList.add("active");
  } else {
    boardPanel.classList.remove("active");
    chatPanel.classList.add("active");
    tabBtnBoard.classList.remove("active");
    tabBtnChat.classList.add("active");
  }
}

function addPlayersFromTextarea() {
  const input = document.getElementById("playerDataInput");
  const lines = input.value.split("\n")
    .map(n => n.trim())
    .filter(n => n.length > 0 && /\[KUKORO\]/i.test(n));

  lines.forEach(line => {
    // Strip everything up to and including an optional [KUKORO] tag (e.g. a
    // leading username or "username :" that Twitch chat prepends), so a
    // straight copy-paste from chat works the same as the live listener.
    const cleaned = line.replace(/^.*?\[KUKORO\]\s*/i, "").trim();

    // Same three-way check as the live chat listener: a focus-switch line
    // first, since it has neither "(" nor "[" and would otherwise fall
    // through to the bare-name branch below (which wipes skills/focus).
    const focusMatch = cleaned.match(/^(\S+)\s+has switched focus to\s+([^.]+)\.?/i);

    // Same invasion-announcement check as the live listener (Spanish or
    // English), so pasting one of these lines behaves identically to
    // hearing it live.
    const invasionMatch = cleaned.match(/(?:EMPIEZA\s+LA\s+INVASI[OÓ]N.*?nivel|RAID\s+BEGINS.*?level)\s+(\d+)/i);

    // Same end-of-invasion check as the live listener.
    const invasionEndMatch = cleaned.match(/FIN\s+DE\s+LA\s+INVASI[OÓ]N|RAID\s+IS\s+OVER/i);

    if (invasionMatch) {
      handleInvasionStart(invasionMatch[1]);
    } else if (invasionEndMatch) {
      handleInvasionEnd();
    } else if (focusMatch) {
      handleFocusSwitch(focusMatch[1], focusMatch[2].trim());
    } else if (cleaned.includes("(") && cleaned.includes("[")) {
      // Looks like a full raid announcement (stats parens + at least one
      // skill bracket) — reuse the exact same parser the chat listener
      // uses, so a pasted message ends up identical to one heard live.
      const parsed = parseKukoroMessage(cleaned);
      upsertParticipant(parsed);
    } else {
      // Otherwise treat it as a bare name, same as before — and never
      // clobber an existing player's real data with a blank entry.
      const nameMatch = cleaned.match(/^(\S+)/);
      const name = canonicalizeName(nameMatch ? nameMatch[1] : cleaned);
      if (name && !participants.has(name)) {
        participants.set(name, { level: "", stats: "", role: "", skills: [], focus: null, nameHighlight: "green" });
      }
    }
  });
  renderBoard();

  input.value = "";
  switchTab("board");
}

function renderBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  updateSortHeaders();

  const playerCountEl = document.getElementById("playerCount");
  if (playerCountEl) {
    playerCountEl.textContent = "(" + participants.size + "/" + MAX_PLAYERS + ")";
  }

  const [field, direction] = sortMode.split("-");
  const dir = direction === "desc" ? -1 : 1;

  const sortedNames = Array.from(participants.keys()).sort((a, b) => {
    const dataA = participants.get(a);
    const dataB = participants.get(b);
    let result = 0;

    if (field === "name") {
      result = a.localeCompare(b);
    } else if (field === "level") {
      // Missing/non-numeric levels sort to the bottom regardless of direction.
      const numA = parseInt(dataA.level, 10);
      const numB = parseInt(dataB.level, 10);
      const validA = !isNaN(numA);
      const validB = !isNaN(numB);
      if (!validA && !validB) result = 0;
      else if (!validA) return 1;
      else if (!validB) return -1;
      else result = numA - numB;
    } else if (field === "role") {
      result = (dataA.role || "").localeCompare(dataB.role || "");
    } else if (field === "focus") {
      result = (dataA.focus || "").localeCompare(dataB.focus || "");
    }

    if (result !== 0) {
      return result * dir;
    }

    // Tied on the primary column — break the tie by level (higher level
    // shown above lower), and only fall back to alphabetical order if
    // the levels match too (or the primary column already was level).
    if (field !== "level") {
      const numA = parseInt(dataA.level, 10);
      const numB = parseInt(dataB.level, 10);
      const validA = !isNaN(numA);
      const validB = !isNaN(numB);
      if (validA && !validB) return -1;
      if (!validA && validB) return 1;
      if (validA && validB && numA !== numB) return numB - numA;
    }

    return a.localeCompare(b);
  });

  sortedNames.forEach(name => {
    const data = participants.get(name);

    if (name === editingName) {
      board.appendChild(buildEditRowForm(name, data));
      return;
    }

    const row = document.createElement("div");
    const isOut = (data.nameHighlight || "green") === "red";
    row.className = "player-row" + (isOut ? " player-row-out" : "");

    const skillsHtml = data.skills.length
      ? data.skills.map((s, i) => {
          // A "Focusing enemy X" entry is a stand-in the tool creates when a
          // focus-switch message arrives for a player with no real skills
          // yet — flag it yellow regardless of its stored highlight so it's
          // obviously a placeholder waiting on a full stats announcement.
          const isFocusPlaceholder = /^focusing enemy \S+$/i.test(s.text.trim());
          const highlightClass = isFocusPlaceholder
            ? " skill-yellow"
            : s.highlight === "red" ? " skill-red" : s.highlight === "green" ? " skill-green" : "";
          const title = isFocusPlaceholder ? t("skill_placeholder_title") : t("skill_highlight_title");
          if (!isFocusPlaceholder) logBoardText(s.text);
          return `<div class="skill-item${highlightClass}" data-name="${escapeHtml(name)}" data-index="${i}" title="${title}"><span class="skill-num">${i + 1}.</span>${escapeHtml(s.text)}</div>`;
        }).join("")
      : "—";

    const nameHighlightClass = isOut ? " name-red" : " name-green";
    const isMixedFocus = !!(data.focus && /^mixed\b/i.test(data.focus));
    const focusClass = data.focus ? (isMixedFocus ? " mixed-focus" : " has-focus") : "";

    logBoardText(data.role);
    logBoardText(data.focus);

    row.innerHTML = `
      <div class="player-name${nameHighlightClass}" data-name="${escapeHtml(name)}" title="${escapeHtml(t("name_highlight_title", { name }))}">${escapeHtml(name)}</div>
      <div class="player-level ${getLevelClass(data.level)}">${escapeHtml(data.level) || "—"}</div>
      <div class="player-stats">${escapeHtml(formatStatsForDisplay(data.stats)) || "—"}</div>
      <div class="player-role">${escapeHtml(data.role) || "—"}</div>
      <div class="player-focus${focusClass}">${escapeHtml(data.focus) || t("unknown_focus")}</div>
      <div class="player-skills">${skillsHtml}</div>
    `;

    // Built and attached separately (not via the innerHTML string above) so
    // its click handler is bound directly to this exact player, with no
    // string-escaping to worry about — it's an absolutely-positioned
    // overlay, so it doesn't disturb the row's 6-column grid layout.
    const editBtn = document.createElement("button");
    editBtn.className = "row-action-btn edit-row-btn";
    editBtn.title = t("edit_player_title");
    editBtn.setAttribute("aria-label", t("edit_player_title"));
    editBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>`;
    // Bound to "pointerdown" rather than "click": this board can be
    // re-rendered at any moment by an incoming chat message (which wipes
    // and rebuilds the DOM). If that happens between the mouse/finger going
    // down and coming back up, a "click" handler never fires because the
    // element it was pressed on no longer exists by the time the browser
    // would dispatch it. Firing on pointerdown reacts the instant the press
    // starts, shrinking that race window to effectively nothing.
    editBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      startEditRow(name);
    });
    row.appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.className = "row-action-btn remove-row-btn";
    removeBtn.title = t("remove_player_title");
    removeBtn.setAttribute("aria-label", t("remove_player_title"));
    removeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>`;
    removeBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      removeParticipant(name);
    });
    row.appendChild(removeBtn);

    board.appendChild(row);
  });

  if (addingRow) {
    board.appendChild(buildAddRowForm());
  } else {
    const trigger = document.createElement("div");
    trigger.className = "add-row-trigger";
    trigger.innerHTML = `<span class="plus-icon">+</span> ${t("add_player_trigger")}`;
    trigger.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      showAddRow();
    });
    board.appendChild(trigger);
  }

  fitPlayerNames();
}

// Long names can overlap the level column since the name cell is narrow.
// Rather than let that happen, shrink each name's font size just enough to
// fit its cell (down to a floor), then let CSS ellipsis (white-space:
// nowrap + text-overflow: ellipsis) truncate anything still too long at
// that floor size. Runs after rows are in the DOM so scrollWidth/clientWidth
// reflect real layout.
function fitPlayerNames() {
  const MIN_FONT_PX = 10;
  const MAX_FONT_PX = 13;
  document.querySelectorAll(".player-row .player-name").forEach(el => {
    el.style.fontSize = MAX_FONT_PX + "px";
    let size = MAX_FONT_PX;
    while (el.scrollWidth > el.clientWidth && size > MIN_FONT_PX) {
      size -= 1;
      el.style.fontSize = size + "px";
    }
  });
}

function buildAddRowForm() {
  const row = document.createElement("div");
  row.className = "player-row add-row";

  row.innerHTML = `
    <input class="add-input" id="addRowName" type="text" placeholder="${escapeHtml(t("player_name_placeholder"))}">
    <input class="add-input" id="addRowLevel" type="text" inputmode="numeric" placeholder="${escapeHtml(t("level_placeholder"))}" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
    <input class="add-input" id="addRowStats" type="text" placeholder="${escapeHtml(t("stats_placeholder"))}">
    <input class="add-input" id="addRowRole" type="text" placeholder="${escapeHtml(t("role_placeholder"))}">
    <input class="add-input" id="addRowFocus" type="text" placeholder="${escapeHtml(t("focus_placeholder"))}">
    <div class="add-skills-cell">
      <textarea id="addRowSkills" placeholder="${escapeHtml(t("skills_placeholder"))}"></textarea>
      <div class="add-row-actions">
        <button class="ghost" style="background:rgba(124,92,255,0.1)" onclick="saveNewRow()">${escapeHtml(t("save_btn"))}</button>
        <button class="ghost danger" onclick="cancelAddRow()">${escapeHtml(t("cancel_btn"))}</button>
      </div>
    </div>
  `;

  return row;
}

function showAddRow() {
  editingName = null;
  addingRow = true;
  renderBoard();
  const nameInput = document.getElementById("addRowName");
  if (nameInput) nameInput.focus();
}

function cancelAddRow() {
  addingRow = false;
  renderBoard();
}

function saveNewRow() {
  const name = canonicalizeName(document.getElementById("addRowName").value.trim());
  if (!name) {
    document.getElementById("addRowName").focus();
    return;
  }

  const level = document.getElementById("addRowLevel").value.trim();
  const stats = document.getElementById("addRowStats").value.trim();
  const role = document.getElementById("addRowRole").value.trim();
  const focusRaw = document.getElementById("addRowFocus").value.trim();
  const focus = focusRaw ? focusRaw.toLowerCase() : null;
  const skills = document.getElementById("addRowSkills").value
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(text => ({ text, highlight: "none" }));

  participants.set(name, { level, stats, role, skills, focus, nameHighlight: "green" });

  addingRow = false;
  renderBoard();
}

// Built with DOM methods (not an innerHTML template) so pre-filled values
// containing quotes or special characters can never break the markup —
// each field is set via .value/.textContent instead of being interpolated
// into an HTML string.
function buildEditRowForm(name, data) {
  const row = document.createElement("div");
  row.className = "player-row add-row";

  const nameInput = document.createElement("input");
  nameInput.className = "add-input";
  nameInput.id = "editRowName";
  nameInput.type = "text";
  nameInput.placeholder = t("player_name_placeholder");
  nameInput.value = name;

  const levelInput = document.createElement("input");
  levelInput.className = "add-input";
  levelInput.id = "editRowLevel";
  levelInput.type = "text";
  levelInput.inputMode = "numeric";
  levelInput.placeholder = t("level_placeholder");
  levelInput.value = data.level || "";
  levelInput.addEventListener("input", () => {
    levelInput.value = levelInput.value.replace(/[^0-9]/g, "");
  });

  const statsInput = document.createElement("input");
  statsInput.className = "add-input";
  statsInput.id = "editRowStats";
  statsInput.type = "text";
  statsInput.placeholder = t("stats_placeholder");
  statsInput.value = data.stats || "";

  const roleInput = document.createElement("input");
  roleInput.className = "add-input";
  roleInput.id = "editRowRole";
  roleInput.type = "text";
  roleInput.placeholder = t("role_placeholder");
  roleInput.value = data.role || "";

  const focusInput = document.createElement("input");
  focusInput.className = "add-input";
  focusInput.id = "editRowFocus";
  focusInput.type = "text";
  focusInput.placeholder = t("focus_placeholder");
  focusInput.value = data.focus || "";

  const skillsCell = document.createElement("div");
  skillsCell.className = "add-skills-cell";

  const skillsTextarea = document.createElement("textarea");
  skillsTextarea.id = "editRowSkills";
  skillsTextarea.placeholder = t("skills_placeholder");
  skillsTextarea.value = data.skills.map(s => s.text).join("\n");

  const actions = document.createElement("div");
  actions.className = "add-row-actions";

  const saveBtn = document.createElement("button");
  saveBtn.className = "ghost";
  saveBtn.style.background = "rgba(124,92,255,0.1)";
  saveBtn.textContent = t("save_btn");
  saveBtn.onclick = () => saveEditedRow(name);

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "ghost danger";
  cancelBtn.textContent = t("cancel_btn");
  cancelBtn.onclick = () => cancelEditRow();

  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);
  skillsCell.appendChild(skillsTextarea);
  skillsCell.appendChild(actions);

  row.appendChild(nameInput);
  row.appendChild(levelInput);
  row.appendChild(statsInput);
  row.appendChild(roleInput);
  row.appendChild(focusInput);
  row.appendChild(skillsCell);

  return row;
}

function removeParticipant(name) {
  participants.delete(name);

  // If the row being removed was the one open for editing, close that form
  // too rather than leaving a stale edit form referencing a deleted player.
  if (editingName === name) {
    editingName = null;
  }

  renderBoard();
}

function startEditRow(name) {
  // Editing and adding are mutually exclusive so there's never more than
  // one open form on the board at a time.
  addingRow = false;
  editingName = name;
  renderBoard();
  const nameInput = document.getElementById("editRowName");
  if (nameInput) nameInput.focus();
}

function cancelEditRow() {
  editingName = null;
  renderBoard();
}

function saveEditedRow(originalName) {
  const nameInput = document.getElementById("editRowName");
  const newName = canonicalizeName(nameInput.value.trim());
  if (!newName) {
    nameInput.focus();
    return;
  }

  const level = document.getElementById("editRowLevel").value.trim();
  const stats = document.getElementById("editRowStats").value.trim();
  const role = document.getElementById("editRowRole").value.trim();
  const focusRaw = document.getElementById("editRowFocus").value.trim();
  const focus = focusRaw ? focusRaw.toLowerCase() : null;
  const skillLines = document.getElementById("editRowSkills").value
    .split("\n")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // Keep each skill's red/green highlight if its text is unchanged at that
  // position; anything new or reordered just starts back at "none" (the
  // player can re-click it on the board to re-highlight).
  const previous = participants.get(originalName);
  const skills = skillLines.map((text, i) => {
    const prevSkill = previous && previous.skills[i];
    return { text, highlight: prevSkill && prevSkill.text === text ? prevSkill.highlight : "none" };
  });

  if (newName !== originalName) {
    participants.delete(originalName);
  }
  participants.set(newName, { level, stats, role, skills, focus, nameHighlight: previous ? (previous.nameHighlight || "green") : "green" });

  editingName = null;
  renderBoard();
}

function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('collapsed');
}

function openSettings() {
  closeNotifPanel();
  document.getElementById("settingsOverlay").classList.add("open");
}

function closeSettings() {
  document.getElementById("settingsOverlay").classList.remove("open");
}

function changeLanguage(lang) {
  applyLanguage(lang);
  localStorage.setItem("kukoro_lang", currentLang);
}

// The button label always names the mode a click will switch *to*, so it
// reflects the current theme rather than staying static.
function updateThemeButtonLabel() {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  btn.textContent = isLight ? t("theme_btn_to_dark") : t("theme_btn_to_light");
}

// Applies the given theme ("light" or "dark") by toggling the data-theme
// attribute the CSS variable overrides key off of, persists the choice so
// it survives a reload, and keeps the settings button label in sync.
function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  updateThemeButtonLabel();
}

function toggleDarkMode() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem("kukoro_theme", next);
}

function openReadme() {
  document.getElementById("readmeOverlay").classList.add("open");
}

function closeReadme() {
  document.getElementById("readmeOverlay").classList.remove("open");
}

function readMe() {
  openReadme();
}

function openFaq() {
  document.getElementById("faqOverlay").classList.add("open");
}

function closeFaq() {
  document.getElementById("faqOverlay").classList.remove("open");
}

function openToolReadme() {
  document.getElementById("toolReadmeOverlay").classList.add("open");
}

function closeToolReadme() {
  document.getElementById("toolReadmeOverlay").classList.remove("open");
}

function openContacts() {
  document.getElementById("contactsOverlay").classList.add("open");
}

function closeContacts() {
  document.getElementById("contactsOverlay").classList.remove("open");
}

function onBossTypeSelectChange() {
  const select = document.getElementById("bossTypeSelect");
  const customInput = document.getElementById("bossTypeCustomInput");
  if (select.value === "__custom__") {
    customInput.style.display = "block";
    customInput.focus();
  } else {
    customInput.style.display = "none";
  }
}

function setBossType() {
  const select = document.getElementById("bossTypeSelect");
  const customInput = document.getElementById("bossTypeCustomInput");
  const display = document.getElementById("bossTypeDisplay");
  const valueEl = document.getElementById("bossTypeValue");
  const levelInput = document.getElementById("dungeonLevelInput");
  const levelDisplay = document.getElementById("dungeonLevelDisplay");
  const levelValueEl = document.getElementById("dungeonLevelValue");
  const bossGroup = document.getElementById("bossTypeGroup");

  let value = select.value;
  if (value === "__custom__") {
    value = customInput.value.trim();
  }

  const levelValue = levelInput.value.trim();

  if (!value && !levelValue) {
    display.style.display = "none";
    return;
  }

  if (value) {
    valueEl.textContent = value;
    bossGroup.style.display = "inline-flex";
  } else {
    bossGroup.style.display = "none";
  }

  if (levelValue) {
    levelValueEl.textContent = levelValue;
    levelDisplay.style.display = "inline-flex";
  } else {
    levelDisplay.style.display = "none";
  }

  display.style.display = "flex";
}

function toggleSort(field) {
  const [currentField, currentDirection] = sortMode.split("-");
  if (currentField === field) {
    // Clicking the same column again flips the direction.
    sortMode = field + "-" + (currentDirection === "asc" ? "desc" : "asc");
  } else {
    // Switching to a new column starts fresh at ascending.
    sortMode = field + "-asc";
  }
  renderBoard();
}

function updateSortHeaders() {
  const [field, direction] = sortMode.split("-");
  ["name", "level", "role", "focus"].forEach(f => {
    const header = document.getElementById("sortHeader-" + f);
    if (!header) return;
    const arrow = header.querySelector(".sort-arrow");
    if (f === field) {
      header.classList.add("active");
      arrow.textContent = direction === "asc" ? "▲" : "▼";
    } else {
      header.classList.remove("active");
      arrow.textContent = "";
    }
  });
}

function toggleSkillHighlight(name, index) {
  if (!participants.has(name)) return;
  const player = participants.get(name);
  if (!player.skills[index]) return;

  // Cycle: none -> red -> green -> none, so players can mark a skill as a
  // downside (red) or an upside (green) regardless of how it was parsed.
  const current = player.skills[index].highlight || "none";
  const next = current === "none" ? "red" : current === "red" ? "green" : "none";
  player.skills[index].highlight = next;
  participants.set(name, player);
  renderBoard();
}

function toggleNameHighlight(name) {
  if (!participants.has(name)) return;
  const player = participants.get(name);

  // Names only ever show as red or green (no neutral state), so a click
  // just flips between the two.
  const current = player.nameHighlight || "green";
  player.nameHighlight = current === "green" ? "red" : "green";
  participants.set(name, player);
  renderBoard();
}

// Delegated listener for player-name clicks, same rationale as the skill
// listener below: #board's contents get wiped and rebuilt on re-render, so
// this is bound once to the never-replaced #board container instead of to
// each individual name element.
document.getElementById("board").addEventListener("pointerdown", (e) => {
  const nameEl = e.target.closest(".player-name");
  if (!nameEl) return;
  e.preventDefault();
  toggleNameHighlight(nameEl.dataset.name);
});

// Single delegated listener for skill clicks — attached once here rather
// than re-attached inside renderBoard(), since #board itself is never
// replaced (only its contents are re-rendered) and re-adding a listener
// on every render would stack duplicate handlers. Uses "pointerdown" for
// the same reason the edit button does: an incoming chat message can
// re-render the board (destroying the exact element under the pointer)
// between press and release, which would otherwise silently drop the click.
document.getElementById("board").addEventListener("pointerdown", (e) => {
  const item = e.target.closest(".skill-item");
  if (!item) return;
  e.preventDefault();
  const name = item.dataset.name;
  const index = parseInt(item.dataset.index, 10);
  toggleSkillHighlight(name, index);
});

// Render once on load so the "+ Add Player" trigger shows immediately,
// even before any data has come in from chat or been added manually.
renderBoard();

// Restore whichever language the person picked last time (defaults to
// English on a first visit), and reflect it in the Settings dropdown.
const savedLang = localStorage.getItem("kukoro_lang") || "en";
applyLanguage(savedLang);
const languageSelect = document.getElementById("languageSelect");
if (languageSelect) languageSelect.value = currentLang;

// Restore whichever theme the person picked last time (defaults to dark,
// this tool's original look, on a first visit).
const savedTheme = localStorage.getItem("kukoro_theme") || "dark";
applyTheme(savedTheme);

// Pull in whatever's currently in board_translations.js so strings the
// translator has already handled don't show up as pending again. (This
// also updates the translation badge internally.)
loadBoardTranslationsFile();

// Reflect whatever notifications (translation-related or otherwise)
// already persisted from a previous visit.
updateNotifBadge();
renderNotifPanel();