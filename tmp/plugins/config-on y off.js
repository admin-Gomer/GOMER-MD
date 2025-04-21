let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let isEnable = /включить|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let setting = global.db.data.settings
let type = (args[0] || '').toLowerCase()
let isAll = false
let isUser = false
switch (type) {
		
case 'ограничение': case 'ограничение':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
		
case 'приветствие': case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break

case 'приветствие2': case 'приветствие2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome2 = isEnable
break
		
case 'обнаружение': case 'обнаружение': case 'обнаружение':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'антиссылка': case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break

case 'антиссылка2': case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'антифейк': case 'антифейк': case 'антифейк': case 'антифейк': case 'антифейк': case 'антифейк': case 'антифейк':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break

case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
		
case 'jadibotmd': case 'modejadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = !isEnable
break 
		
case 'авточтение': case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
		
case 'антивызов': case 'антивызов': case 'антивызов':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'модадмин': case 'модадмин':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    

case 'аудио': case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('owner', m, conn)
throw false
}}
chat.audios = isEnable          
break
		
case 'антиудаление': case 'антиудаление': case 'антиудаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break

case 'антиприват':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
		
case 'реакции': case 'реакции': case 'реакции': case 'реакции': case 'реакции': case 'реакции':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
default:
if (!/[01]/.test(command)) return m.reply(`
${lenguajeGB.smsConfi1bot()}\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'обнаружение' : 'обнаружение'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'приветствие' : 'приветствие'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиссылка' : 'антиссылка'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиссылк2' : 'антиссылк2'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антифейк' : 'антифейк'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'модадмин' : 'модадмин'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'ограничение' : 'ограничение'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.antiprivado ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиприват' : 'антиприват'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антивызов' : 'антивызов'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${global.opts['авточтение'] ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'авточтение' : 'авточтение'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${chat.delete ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиудаление' : 'анантиудаление'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${chat.audios ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'аудио' : 'аудио'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${chat.reaction ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'реакции' : 'реакции'}*\n`.trim())
return false
}
m.reply(`${lenguajeGB['smsAvisoEG']()}*⭔ ${lenguajeGB.smsConfi2bot()}:* _${type}_
*⭔ ${lenguajeGB.smsConfi3bot()}:* _${isEnable ? lenguajeGB.smsConfi5bot() : lenguajeGB.smsConfi6bot()}_
*⭔ ${lenguajeGB.smsConfi4bot()}:* ${isAll ? packname : isUser ? '' : '_' + lenguajeGB.smsConfi7bot() + '_'}`)
}
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
