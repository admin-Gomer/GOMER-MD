import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    //let vn = './media/menu.mp3'
    const img = './media/админы.webp'; 
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `*************************
            *◉𝔾𝕠𝕞𝕖𝕣◉*
╭━━━━━━━━━━━━━━━╮
┊➥ *Привет!*😎
┊➥${taguser}
┊────── • ◆ • ──────
┊➥ _*Владелец: Михаил*_ 
┊➥ _*☏: +79520830782*_
╰━━━━━━━━━━━━━━━╯
${readMore}
╭━━━━━━━━━━━━━━━╮
├ 📄 *ИНФО О БОТЕ*     ┤
╰━━━━━━━━━━━━━━━╯ 
┆   ➥# *владелец*
┆ _Владелец Бота_
┊ ➥# *соединять
┆ _[ссылка на группу]*_
✯------------------------------------✯
╭━━━━━━━━━━━━━━━╮
┊   📄   *ГРУППЫ* 
╰━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━╮
┊➥# *удалить* 
┆ _[@Пльзователь]_
┊➥# *группу* 
┆ _[открыл / закрыл]_
┊➥# *групптайм*
┆ _[Выбор | Время]_
┊➥# *дать_админа*
┆ _[<@tag>]_
┊➥# *снять_админа*
┆ _[<@tag>]_
┊➥# *админы* 
┆ _[вызов админов]_ 
┊➥# *сбросить_ссылку*
┆ _[Ссылку группы]_
┊➥# *ссылка*
┆ _[Ссылка группы]_
┊➥# *Имя*
┆ _[Название группы]_
┊➥# *Описание*
┆ _[Описание группы]_
┊➥# *Приветствие*
┆ _[Приветствие группы]_
┊➥# *Прощание*
┆ _[Прощание группы]_
┊➥# *призраки*
┆ _[Вызов молчунов]_
┊➥# *код*
┆ _[текст]_
╰━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━╮
┊🛠️  *Инструменты* 🛠️
╰━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━╮
┊➥# *аудио*
┆ _[ответ на видео]_ 
┊➥# *отчёт*
┆ _[отчёт об ошибке]_
┊➥# *пара*
┆ _[прикол]_ 
╰━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━╮
┊   💖 *СТИКЕРЫ* 💖
╰━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━╮
┊➥# *Стикер*
┆ _[Картинка/Гифка]_
┊➥# *с*
┆ _[делает стикер]_
┊➥# *спиздил*
┆ _[переименовать стик]_
┊➥# *кубик*
┆ _[Бросить кубик]_
╰━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━╮
┊🫅 *МОДЕРАТОРЫ* 🫅
╰━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━╮
┊➥# *включить*
┆ *приветствие*
┊➥# *выключить*
┆ *приветствие*
┊➥# *включить*
┆ *антиссылка*
┊➥# *выключить*
┆ *антиссылка*
┊➥# *включить*
┆ *антиссылка2*
┊➥# *выключить*
┆ *антиссылка2*
┊➥# *автоадмин*
┆ _[Админ автоматом]_     
┊➥# *групплист*
┆ _[Список групп]_
┊➥# *аудио*
┆ _[Ответ на видео]_
┊➥# *включить*
┆ *ограничение*
┊➥# *выключить*
┆ *ограничение*
┊➥# *включить*
┆ *авточтение*
┊➥# *выключить*
┆ *авточтение*
┊➥# *включить*
┆ *аудио*
┊➥# *выключить*
┆ *аудио*
┊➥# *включить*
┆ *антиприват*
┊➥# *выключить*
┆ *антиприват*
┊➥# *включить*
┆ *модадмин*
┊➥# *выключить*
┆ *модадмин*
┊➥# *создать*
┆ _[Имя группы]_
┊➥# *префикс*
┆ _[Приставка Бота]_
┊➥# *файл*
┆ _[URL файла]_
┊➥# *чистить*
┆ _[Почистить Бота]_
┊➥# *бан*
┆ _[@tag]_ 
┊➥# *снять_бан*
┆ _[@tag]_ 
┊➥# *вызов*
┆ _[Вызов группы]_ 
┊➥# *выход*
┆ _[Выход с группы]_ 
╰━━━━━━━━━━━━━━━╯`.trim();
if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗ИНФОРМАЦИЯ❗] В МЕНЮ ЕСТЬ ОШИБКА И НЕ УДАЛОСЬ ЕЕ ОТПРАВИТЬ, ПОЖАЛУЙСТА, СООБЩИТЕ ОБ ЭТОМ ВЛАДЕЛЬЦУ БОТА*', m);
  }
};
handler.command = /^(меню)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
