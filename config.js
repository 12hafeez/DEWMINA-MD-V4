//#ENJOY
/**
   DEWMINA MD V4                                                   

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hansadewmina4@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94701515609@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/686c32cc8f63d0a033863.png";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94701515609";
global.owner = process.env.OWNER_NUMBER || "94701515609";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBTSnlMbGt3bDhUWmRuNlBxZ01rVi9UM2JEYlFBT1NTYkdSb0FEalQxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmFlL2hNN1M3bXorT0V3R0xRenFxSzBLUmxwcUg2MFdlQTdScGtSRDRGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TWJiRlNGSTdncjdsNDJGeVFlVW5icW10RUtLTGZjVXNYbEloV095aDNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPMUE0eUR1NEV4TTF0b0paS3d2MTZaZ2xYVHpxQkVTN1AxQ25lWjNJV1hjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDUHBOeGpKcG1yT1pOd216U2liTVhQWVlJaVVqQ1VuRzljajNhNEMzVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcrQlE5aUpLcjh2U0g0NUF1bnI4Y29TaWl5V2grRmFWNzJ4TGMwandCeEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0orQnBXTjk2SzBzYUdBWlQ5R0Z1cVF2RDBSQjZ4MkF4TTlhNGFDdCtsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWNlYUQybnZqTTNGMHM3VkY3L3ZCQ1hZbmEvVzI4M29VNmZaR2tJL0UzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRYb3Fid1BHRnFmUTkrWDJIRVBScjc0OWxRUTBwYVA0NWRBZ2FuaWxycnlmN0FJWkFGOHNaMkZCVEo2V0RieUJzZmFvcGtQdmU3QWdnazhzS01EVGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJzbXNQYzRCR290Zy8zLzdRa1ptUmpvSDU5aHJPS1NUQ2ZPdjh3TE94SXo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxNTE1NjA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhFMkRENDczNEI5RUNGOEU4NDFGOTI2REU2MUM0MUVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQzMjE2NDV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxNTE1NjA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY0Q0NCQzg1OUI1QjEyOTQ5RDZFMjhDMTYwOTRGMDY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQzMjE2NDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9QSndCVjAxUlFTUHNfX0ttaEZ6bEEiLCJwaG9uZUlkIjoiZmMzMDczYzktNjg3OS00MDllLTgxMGQtZmI3Mzg2OWI2ZWEwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im81a2ZrbnhVZTVsSU5tM1FDd2srTHFidUxzQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZDY5ZzVyUHRWbm5VNTJJOTduVytZT1RFY0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVY3TERSOFIiLCJtZSI6eyJpZCI6Ijk0NzAxNTE1NjA5OjY4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhBTlNBIERFV01JTkEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvYm1lWUhFTitlbkxZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZPNjErS01lZjFnSE9jbzhCSDZDTnNHeEh0My9uYlpwTzlSdHpGK2ltR0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJaWXF4Sk15T2hxL245clNrNXJXT0dwQWNwa0tDbDhOV29CYWtqWTE2SVRQZ1BPd2xQOHNqUlNUUGExd01wQ0E0WlBWVEsyM3FESWFoemJ3dlREaUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpbjNrdkVRMVFINzlCc1V0bTJZbUtPeUtubW96YUxFVXZzMmRzRW8zSU12R3FrWVNQUEJwLzY2WWphWkVBOCtIcXpDVHV1VEJXckxOSTN1SkppanFpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxNTE1NjA5OjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ6dXRmaWpIbjlZQnpuS1BBUitnamJCc1I3ZC81MjJhVHZVYmN4Zm9waGgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQzMjE2NDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGNUIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-DEWMINA-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "DEWMINA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DEWMINA-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "94701515609",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
