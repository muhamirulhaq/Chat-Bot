import {Chat} from "./Chat.js";

const chat = new Chat();
const ok = document.querySelector(".ok");

ok.onclick = chat.response;

