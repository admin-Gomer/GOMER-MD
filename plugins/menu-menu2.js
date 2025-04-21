import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
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
    const str = `
             *◉𝔾𝕠𝕞𝕖𝕣◉*          
╭--------------------------------------╮            
┊⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ 
┊ _*Привет!*_ 😎
┊➪${taguser}
┊⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ ⋄ 
┊➪ _*Владелец: Михаил*_ 
┊➪ _*☏: +79520830782*_
╰--------------------------------------╯
${readMore}
╭━━━━━━━━━━━━━━━╮
 ⫶ ꧁ *ГОЛОСОВЫЕ* ꧂ ⫶
╰━━━━━━━━━━━━━━━╯
╭───── • ◆ • ─────╮
├❒⋄ _Пиздишь_
├❒⋄ _Пошёл_
├❒⋄ _Дай_
├❒⋄ _Время_
├❒⋄ _Дела_
├❒⋄ _Правила_
├❒⋄ _Отдыхаю_
├❒⋄ _Смешно_
├❒⋄ _Секс_
├❒⋄ _Здравствуйте_
├❒⋄ _Что делаешь_ 
├❒⋄ _Музыка_
├❒⋄ _Сука_
├❒⋄ _С днём рождения_
├❒⋄ _Спокойной ночи_
├❒⋄ _Ссылка_
├❒⋄ _Пидор_
├❒⋄ _Группа_
├❒⋄ _Дела_
├❒⋄ _До свидания_
├❒⋄ _Дура_
├❒⋄ _На работу_
├❒⋄ _Козёл_
├❒⋄ _Мечта_
├❒⋄ _Молчуны_
├❒⋄ _От души_
├❒⋄ _Отвали_
├❒⋄ _Пофиг_
├❒⋄ _Роднуль_
├❒⋄ _Спам_
├❒⋄ _Ты кто_
├❒⋄ _Хочу_
├❒⋄ _Я приеду к тебе_
├❒⋄ _Лс_
├❒⋄ _Спать_
├❒⋄ _Дорогая_
├❒⋄ _Выходной_
├❒⋄ _Дождь_
├❒⋄ _Сиськи_
╰───── • ◆ • ─────╯
╭━━━━━━━━━━━━━━╮
 ⫶   ꧁ *И М Е Н А* ꧂  ⫶
╰━━━━━━━━━━━━━━╯
╭───── • ◆ • ─────╮
├❒⋄ _Юра_
├❒⋄ _Яна_
├❒⋄ _Роман_
├❒⋄ _Роза_
├❒⋄ _Павел_
├❒⋄ _Оля_
├❒⋄ _Нина_
├❒⋄ _Марина_
├❒⋄ _Михаил_ 
├❒⋄ _Любовь_
├❒⋄ _Лиза_ 
├❒⋄ _Лера_
├❒⋄ _Николай_
├❒⋄ _Екатерина_
├❒⋄ _Ирина_
├❒⋄ _Ева_
├❒⋄ _Аня_
├❒⋄ _Алёнка_
├❒⋄ _Алина_
├❒⋄ _Алиса_
├❒⋄ _Сергей_
├❒⋄ _Татьяна_
├❒⋄ _Пётр_
├❒⋄ _Олег_
├❒⋄ _Надежда_
├❒⋄ _Павел_
├❒⋄ _Елизавета_
├❒⋄ _Елена_
├❒⋄ _Лариса_
├❒⋄ _Ксения_
├❒⋄ _Василий_
├❒⋄ _Александр_
├❒⋄ _Дарья_
├❒⋄ _Володя_
├❒⋄ _Иван_
├❒⋄
├❒⋄
├❒⋄
├❒⋄
├❒⋄
╰───── • ◆ • ─────╯`.trim();
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
handler.command = /^(меню2)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
