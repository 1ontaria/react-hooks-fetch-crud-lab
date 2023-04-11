import React, { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";

// GET all questions from http://localhost:4000/questions
// Display using QuestionsList component
// add useState and useEffect
//which compenents will need to access question data?

function QuestionList({ questions, onDelete }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            question={questions}
            key={question.id}
            prompt={question.prompt}
            answers={question.answers}
            correctIndex={question.correctIndex}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
