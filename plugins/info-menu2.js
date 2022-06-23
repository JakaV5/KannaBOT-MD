import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `━━━━〔 ıll HAI KAK llı 〕━━━ \nAKU ADALAH Jesīcaꪶ͢Botzꫂ⁩.\nAKU DIBUAT OLEH SESEORANG YANG BERNAMA JAKA,\nDIA HANYA MENG RECODE SEDIKIT DARI SC KANNA, JIKA ADA YANG ERROR MOHON DI MAKLUMIN,KARENA DIA MASIH PEMULA`,wm + '\n\n' + botdate, giflogo, [['MENUNYA KAK','.m']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'PLIS JANGAN SPAM',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['menu2']
handler.tags = ['info']
handler.command = ['menu']
export default handler
