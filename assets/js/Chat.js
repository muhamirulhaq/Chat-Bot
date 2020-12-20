export class Chat {

    constructor() {

        const input = document.querySelector("input");
        const output = document.querySelector(".result");

        const keyword = ["assalamualaikum", "pagi", "siang", "sore", "malam", "hai", "halo", "namamu", "tinggal", "namaku", "terimakasih", "kabar", "tanya", "kak"];
        const botChat = ["Waalaikumsalam kak", "Pagi kak", "Siang kak", "Sore kak", "Malam kak", "Hai kak", "Halo kak", "Nama saya belum diprogram kak", "Saya tinggal di internet kak", "Maaf kak, saya tidak tahu nama kakak siapa", "Sama-sama kak", "Alhamdulillah, baik kak", "Silahkan bertanya kak", "Iya?"];

        this.response = function () {
            
            const word = input.value.split(" ");

            for (let i = 0; i < keyword.length; i++) {
                for (let j = 0; j < word.length; j++) {

                    if (word[j].toLowerCase() === keyword[i]) {

                        input.value = "";
                        output.innerHTML = botChat[i];
                        i = keyword.length;

                        break;

                    } else if (i == keyword.length - 1 && j == word.length - 1 && input.value !== "") output.innerHTML = "*Pernyataan tidak dikenali";
                }
            }
        };
    }

}
