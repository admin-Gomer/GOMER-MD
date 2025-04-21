import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Уже в актуальном состоянии.')) messager = `${lenguajeGB.smsAvisoIIG()} ТЕПЕРЬ ОН ОБНОВЛЕН ДО ПОСЛЕДНЕЙ ВЕРСИИ.`
if (messager.includes('Updating')) messager = `${lenguajeGB.smsAvisoEG()}` + stdout.toString()
conn.reply(m.chat, messager, m);
} catch {      
try {    
const status = execSync('git status --porcelain');
if (status.length > 0) {
const conflictedFiles = status
.toString()
.split('\n')
.filter(line => line.trim() !== '')
.map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('GataBotSession/') || line.includes('npm-debug.log')) {
return null;
}
return '*→ ' + line.slice(3) + '*'})
.filter(Boolean);
if (conflictedFiles.length > 0) {
const errorMessage = `${lenguajeGB.smsAvisoFG()} > *В файлах бота были обнаружены локальные изменения, которые конфликтуют с новыми обновлениями репозитория. Чтобы обновиться, переустановить бота или выполнить обновление вручную.*\n\n*\`КОНФЛИКТУЮЩИЙ ФАЙЛ :\`*\n\n${conflictedFiles.join('\n')}.*`
await conn.reply(m.chat, errorMessage, m);  
}}
} catch (error) {
console.error(error);
if (error.message) {
const errorMessage2 = `\n${fg}` + error.message;
}
await m.reply(`${fg}`) 
}}};
handler.command = /^(обновить|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;