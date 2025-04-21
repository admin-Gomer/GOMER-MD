let handler = async (m, { conn, command, usedPrefix }) => {
let resp
try {
if (global.conns.some(c => c.user.jid === conn.user.jid)) {
if (/стоп/i.test(command)) {
let i = global.conns.indexOf(conn)
if (global.conn.user.jid != conn.user.jid && m.sender != global.conn.user.jid) {
if (i < 0) return
resp = `${gt} Медленный. Если вы хотите возобновить работу, воспользуйтесь кнопкой *${usedPrefix}serbot* или ваш токен.`
await conn.sendMessage(m.chat, { text: resp }, { quoted: m })
conn.ev.removeAllListeners()
conn.ws.close()
conn.isInit = false
global.conns.splice(i, 1)
return 
}}
} else {
resp = '*Эта команда может быть выполнена только пользователем, который является субботом*.'
return conn.sendMessage(m.chat, { text: resp }, { quoted: m })
}} catch (e) {
resp = '*Произошла ошибка при попытке выключить саббота.*'
console.log('Ошибка при попытке выключить саббота: ', e)
return conn.sendMessage(m.chat, { text: resp }, { quoted: m })
}}

handler.command = /^(berhenti|стоп|detener)$/i
handler.private = true  
export default handler

