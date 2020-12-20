let yourChat, keyYourChat, botChat, word;

function chatting(x) {

    yourChat = prompt(x);
    keyYourChat = ["assalamualaikum", "pagi", "siang", "sore", "malam", "hai", "halo", "namamu", "tinggal", "namaku", "terimakasih", "kabar", "tanya", "kak"];
    botChat = ["Waalaikumsalam kak", "Pagi kak", "Siang kak", "Sore kak", "Malam kak", "Hai kak", "Halo kak", "Nama saya Belum diprogram kak", "Saya tinggal di internet kak", "Maaf kak, saya tidak tahu nama kakak siapa", "Sama-sama kak", "Alhamdulillah, baik kak", "Silahkan bertanya kak", "Iya?"];
    word = yourChat.split(" ");

    for(let i = 0; i < keyYourChat.length; i++) {
        for(let j = 0; j < word.length; j++) {

            if(word[j].toLowerCase() === keyYourChat[i]) {

                chatting(botChat[i]);
                i = keyYourChat.length;
                break;

            } else if(i == keyYourChat.length-1 && j == word.length-1) chatting("Maaf, kami tidak mengerti maksud kakak");
        }
    }
};

chatting();