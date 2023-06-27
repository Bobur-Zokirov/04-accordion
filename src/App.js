import questions from "./constants/data";

import Question from "./Question";

const App = () => {
  return (
    <main>
      <section className="container">
        <h3>Questions and Answers about Login</h3>
        <div>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
