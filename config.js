const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_12_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTk5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImI0RFMwS1VUaUhoSXBLKzZNdURwL1Bacjl0ODBvbFVocGZNdnJ1RExTNEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjcxOTY4NTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBOUQ0RDlBNDBDNzEzQzAzM0IyNkEzNEExRTYwREREOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3Nzk5NTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NzE5Njg1NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUxQzJCMkY1MTlGM0QyMDlBMEExMkUwQ0Y5QzQ5MjFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTc3OTk1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfT0Nid09lRFFFU1VhRkpjcG9yMktBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhMzNjN2Q5LTA0YjktNDU3ZC1iZmM1LTRjYTA0NTJjYzA1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAyMzEsXG4gICAgICAxMTIsXG4gICAgICAyMDQsXG4gICAgICA4NCxcbiAgICAgIDkyLFxuICAgICAgMTU3LFxuICAgICAgMjA2LFxuICAgICAgMjEzLFxuICAgICAgMjA1LFxuICAgICAgMTAyLFxuICAgICAgMjIzLFxuICAgICAgMjQ3LFxuICAgICAgMTc4LFxuICAgICAgMTA2LFxuICAgICAgMjIzLFxuICAgICAgMTg0LFxuICAgICAgMjA4LFxuICAgICAgMjIsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgNTcsXG4gICAgICAxNjIsXG4gICAgICA5NCxcbiAgICAgIDIxOCxcbiAgICAgIDIyOCxcbiAgICAgIDI1MyxcbiAgICAgIDI0MCxcbiAgICAgIDk4LFxuICAgICAgMTM3LFxuICAgICAgMjAzLFxuICAgICAgMjAzLFxuICAgICAgMTU0LFxuICAgICAgMTkwLFxuICAgICAgMjM3LFxuICAgICAgMjUzLFxuICAgICAgMTUsXG4gICAgICAyNCxcbiAgICAgIDMzLFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUwzTkQySjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3MTk2ODU2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzkwNTg2NzYyODU0Nzg6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJgYGBTeW50aG9yaXhgYGAgfl9OaWthcmVuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmJPbWR3Q0VPbU5nYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBVjgxeDMwdDBoT1NpS0Jid0JYb0h5VCtEckwzSkdTU21GNXUzcThGMXdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9xbDk1dWhJTmNiODk5SnFuY2NienNVNkhoci9NclRkRytITHlOV3dOMnZEeVNBMkMwVnVHZUxYVEV2b2hkc1JBbUFUcW42bHhWWUFvRkVZYVZuSEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInl1dEhCVGhCT3lZQUpBTVdqcXVDVUlvdVpNSHlzaE56Q1hBOURtRlVPbGN6SjBOOXVJa0pIL3dKRDBTRlJZbm5BVmVWN1hZaEpyclhnTkd1c1d2ZkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY3MTk2ODU2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc3OTk0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNwWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3BYLmpzb24iOiAie1wia2V5RGF0YVwiOlwicHJ6ZVY2aGhnc0NrZEV0cEZlbENFUGpQYVZBc3VGTVk0emczVlJyVzg0VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MzAyMjg1MDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc3OTk0OTA4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
