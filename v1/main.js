import { Questions } from "./questions";
import "./style.css";

const app = document.querySelector("#app");

const start_button = document.querySelector("#start");

start_button.addEventListener("click", start_quiz);

function start_quiz(event) {
  event.stopPropagation();

  let current_question = 0;
  let user_score = 0;

  cleanner_app();

  function cleanner_app() {
    while (app.firstElementChild) {
      app.firstElementChild.remove();
    }
  }

  dispaly_question(current_question);

  function dispaly_question(index) {
    const question = Questions[index];

    if (!question) {
      // finish quiz
    }

    const title = get_title_element(question.question);
    app.appendChild(title);

    const answers_div = create_answer(question.answers);
    app.appendChild(answers_div);

    const submit_button = get_submit_button();
    app.appendChild(submit_button);
  }

  function create_answer(answers) {
    const answers_div = document.createElement("div");

    answers_div.classList.add("answers");

    for (const answer of answers) {
      const label = get_answer_element(answer);
      answers_div.appendChild(label);
    }

    return answers_div;
  }
}

function get_title_element(text) {
  const title = document.createElement("h3");
  title.innerText = text;

  return title;
}

function get_answer_element(text) {
  const response = document.createElement("label");
  response.innerText = text;
  const input = document.createElement("input");
  const id = text.replaceAll(" ", "-").toLowerCase();
  input.id = id;
  response.id = id;
  input.setAttribute("type", "radio");
  input.setAttribute("name", "answer");
  input.setAttribute("value", text);
  return response;
}

function get_submit_button() {
  const submit_button = document.createElement("button");
  submit_button.innerText = "Submit";

  return submit_button;
}
