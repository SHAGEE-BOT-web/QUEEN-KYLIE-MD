const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*╭───────────◉◉►*
*│Hey, I'm QUEEN-KYLIE-MD, Created By*
*│Sahas Tech✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
│─────────
│👾 𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 👾
*│─────────*
*│►.ai*
*│►.gen (comming soon!)*
│─────────
│⛥ 𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ⛥
*│─────────*
*│►.restart*
│─────────
│⛥ 𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ⛥
*│─────────*
*│►.promote*
*│►.demote*
*│►.remove*
*│►.setpic*
*│►.add*
*│►.setwelcome*
*│►.setgoodbye*
│ ─────────
│💫 𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
│ ─────────
│🌀𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗦 🌀
*│─────────*
*│►.img2url*
*│►.tourl*
│ ─────────
│📍𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 📍
*│─────────*
*│►.kylie*
*╰───────────◎◎►*
*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/1b18a9d5c6e02a9b1faa3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
