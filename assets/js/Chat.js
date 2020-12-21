export class Chat {

    constructor() {

        const input = document.querySelector("input");
        const output = document.querySelector(".result");

        const keyword = ["assalamualaikum", "pagi", "siang", "sore", "malam", "tolong", "ngapain", "hai", "halo", "nyambung", "namamu", "tinggal", "namaku", "terimakasih", "kabar", "tanya", "bukan", "hei", "iya", "cerdas", "kamu", "nama", "bodoh", "gila", "tolol", "saya", "dia", "pintar", "marah", "apa", "kenapa", "bagaimana", "dimana", "siapa", "bodo", "susah", "goblok"];
        const botChat = ["Waalaikumsalam", "Pagi", "Siang", "Sore", "Malam", "Ada apa?", "Lagi makan", "Hai", "Halo", "Kamu yang gak nyambung", "Nama saya belum diprogram", "Saya tinggal di internet", "Tidak tahu", "Sama-sama", "Alhamdulillah, baik", "Silahkan bertanya", "Terus..", "Iya?", "Hmmm..", "Makasih", "Saya?", "Kenapa nama?", "Kamu?", "Siapa yang gila?", "Kamu tolol?", "Bodo amat", "Siapa?", "Saya? Terimakasih", "Tidak", "Tidak tahu", "Saya tidak tahu", "Ya begitu", "Di sini", "Hmmm..saya tidak tahu", "Kenapa?", "Susah kenapa?", "Golok?"];

        this.response = function () {
            
            const word = input.value.split(" ");

            for (let i = 0; i < keyword.length; i++) {
                for (let j = 0; j < word.length; j++) {

                    if (word[j].toLowerCase() === keyword[i]) {

                        input.value = "";
                        output.innerHTML = botChat[i];
                        i = keyword.length;

                        break;

                    } else if (i == keyword.length - 1 && j == word.length - 1 && input.value !== "") {

                        input.value = "";
                        output.innerHTML = "Istighfar";
                    }
                }
            }
        };
    }

}
