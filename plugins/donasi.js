import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://animecorner.me/wp-content/uploads/2022/07/Takina_Ep3_LR_-1024x576.png`
    return conn.sendButton(m.chat, 'Pm Owner aja \n❏ https://wa.me/628321562064 ', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/agatdwi_subakti",
                mediaType: "VIDEO",
                title: 'Donasi To AgatZ ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler