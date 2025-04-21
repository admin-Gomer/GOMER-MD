const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoAG']()} ПРЕФИКС НЕ НАЙДЕН, ВВЕДИТЕ ПРЕФИКС, КОТОРЫЙ ВЫ ХОТИТЕ УСТАНОВИТЬ, НАПРИМЕР: ${usedPrefix + command} #`;
const prefix = new RegExp('^[' + text.replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
const settings = global.db.data.settings[conn.user.jid] || {};
settings.prefix = text;
global.db.data.settings[conn.user.jid] = settings;
await m.reply(`${lenguajeGB['smsAvisoEG']()} *ТЕКУЩИЙ ПРЕФИКС ${gt} ОН БЫЛ ОСНОВАН ПО АДРЕСУ :* [ ${text} ]`);
};
handler.help = ['setprefix'].map(v => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(префикс)$/i;
handler.owner = true;

export default handler; 