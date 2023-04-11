import React from "react";

function QuestionItem({
  prompt,
  correctIndex,
  id,
  answers,
  onDelete,
  question,
}) {
  function handleClick() {
    fetch(`http://localhost:4000/questions/id`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDelete(question));
  }
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
