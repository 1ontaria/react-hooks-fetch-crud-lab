import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((newQuestion) => setQuestions(newQuestion));
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleQuestionDelete(deletedItem) {
    const deletedQuestions = questions.filter(
      (question) => question.id !== deletedItem
    );
    setQuestions(deletedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm addQuestion={handleAddQuestion} />
      ) : (
        <QuestionList questions={questions} onDelete={handleQuestionDelete} />
      )}
    </main>
  );
}

export default App;
