let handler = async (m, { conn, text }) => {

if (!text) return m.reply('❌ *ОШИБКА* ❌\nВВЕДИТЕ ИМЯ ГРУППЫ 🌟\n\nНАПИШИТЕ НАЗВАНИЕ  🌟')
try{
//m.react('😺')
m.reply('✅️ *ДОГОВОРИЛИСЬ* ✅\n😊 ГРУППУ СОЗДАЛ\n            *G O M E R*')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
let url = 'https://chat.whatsapp.com/' + link;
m.reply('😺 *Ссылка на группу:* ' + url)
} catch (e) {
m.reply(`❌ *НЕУДАВШИЙСЯ* ❌\n❌ ОШИБКА❌ О`)
}
}
handler.help = ['создать *<nombre>*']
handler.tags = ['owner']
handler.command = ['newgc', 'gcnew', 'creargc', 'создать']
handler.owner = true
//handler.premium = false
export default handler