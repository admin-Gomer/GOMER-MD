/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoAG']()}ИСПОЛЬЗУЙТЕ ЭТУ КОМАНДУ НЕПОСРЕДСТВЕННО НА ОСНОВНОМ НОМЕРЕ БОТА` },
      { quoted: m }
    );
  }
 /* await conn.sendMessage(
    m.chat,
    { text: `${lenguajeGB['smsAvisoAG']()}ИНИЦИАЦИЯ ПРОЦЕССА УДАЛЕНИЯ : ${filesDeleted} SESSION, ЗА ИСКЛЮЧЕНИЕМ ФАЙЛА *(creds.json)*` },
    { quoted: m }
  );*/
  const sessionPath = './GataBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()} ПАПКА (GataBotSession) НЕ СУЩЕСТВУЕТ ИЛИ ПУСТА.*` },
        { quoted: m }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()}В ПАПКЕ *(GataBotSession) не найдено файлов для удаления*` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoAG']()}ИНИЦИАЦИЯ ПРОЦЕССА УДАЛЕНИЯ: ${filesDeleted} ФАЙЛА СЕССИИ, ЗА ИСКЛЮЧЕНИЕМ *(creds.json)*` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('ОШИБКА ЧТЕНИЯ ПАПКИ СЕАНСА:', err);
    await conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoFG']()}ПРОИЗОШЛА ОШИБКА ПРИ УДАЛЕНИИ ФАЙЛОВ СЕАНСА` },
      { quoted: m }
    );
  }
  await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoRG']()}🐈 ЗДРАВСТВУЙТЕ, ЭТО УЖЕ РАБОТАЕТ\nЕСЛИ БОТ НЕ РЕАГИРУЕТ НА ВАШИ КОМАНДЫ, ПОЖАЛУЙСТА, СДЕЛАЙТЕ НЕБОЛЬШОЙ СПАМ\n\n*ПРИМЕР:*\n${usedPrefix}с\n${usedPrefix}с\n${usedPrefix}с`}, { quoted: m })}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession|очистить)$/i;
handler.owner = true
export default handler;
