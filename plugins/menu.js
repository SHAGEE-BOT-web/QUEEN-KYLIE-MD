const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
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

> *ᴜᴘᴛɪᴍᴇ:-  ${runtime(process.uptime())}*    
> *► ʀᴀᴍ ᴜꜱᴀɢᴇ:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
> *► ʜᴏꜱᴛ ɴᴀᴍᴇ:- ${os.hostname()}*
> *►ᴏᴡɴᴇʀ:- ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ*
> *► ᴠᴇʀꜱɪᴏɴ:- 1.0.0*

*╭───────────◎◎►*
│💻 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
│─────────
│👾 𝗔𝗜 𝗠𝗲𝗻𝘂 👾
*│─────────*
*│►.ai*
*│►.gen (comming soon!)*
│─────────
│⛥ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ⛥
*│─────────*
*│►.restart*
│─────────
│💫 𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
*╰───────────◎◎►*
│─────────
│ ✨𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗡𝗨
*│─────────*
*│►.hi*
*│►.hm*
*│►.mk*
*│►.gn*
*│►.gm*
*│►.bye*
*╰───────────◎◎►*
*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/938f552daff11c7f73378.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
