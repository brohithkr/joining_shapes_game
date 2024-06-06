import { Howler } from "howler";
import duoCorrectSound from '../assets/duolingo-correct.mp3'
import duoWrongSound from '../assets/duolingo-wrong.mp3'
let duoCorrect = new Howl({
  src: [duoCorrectSound],
  autoplay: false,
  loop: false,
});
let duoWrong = new Howl({
  src: [duoWrongSound],
  autoplay: false,
  loop: false,
});


export default {
    correct: duoCorrect,
    wrong: duoWrong
}