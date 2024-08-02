import { Questions } from "./questions";
import "./style.css";


const app = document.querySelector('#app');

const start_button = document.querySelector('#start');

start_button.addEventListener("click", start_quiz)

function start_quiz(event){
  let current_question = 0;
  let user_score = 0;

  dispaly_question (current_question)

  function dispaly_question(index){
    const  question = Questions[index];

    if(!question){
      // finish quiz
    }


const title = get_title_element(question.question)
    app.appendChild(title);
  }

}

function get_title_element(text) {
  const title = document.createElement("h3");
  title.innerText = text;

  return title;
}