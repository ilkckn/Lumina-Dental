import { useState } from "react";
import "./FrequentlyAskedQuestions.css";
import { IoIosArrowDown } from "react-icons/io";

const questions = [
  {
    question: "How long does dental implant treatment take?",
    answer:
      "The implant placement procedure typically takes 30 to 60 minutes. However, a waiting period of 2 to 4 months may be required for the implant to integrate with the bone (osseointegration). At the end of this period, the prosthetic teeth are attached.",
  },
  {
    question: "Is clear aligner treatment painful?",
    answer:
      "Clear aligners (such as Invisalign) are much more comfortable than metal braces. A slight pressure may be felt during the first few days only when switching to a new aligner; this is a sign that the teeth are moving.",
  },
  {
    question: "Does the whitening process damage tooth enamel?",
    answer:
      "It has been scientifically proven that whitening procedures performed in a clinical setting, under the supervision of a specialist physician, do not damage tooth enamel. Only temporary sensitivity may be experienced following the procedure.",
  },
  {
    question: "When should my child have their first dental check-up?",
    answer:
      "The World Health Organization recommends that the first dental check-up be conducted upon the eruption of the first tooth, or at the latest, around the age of one. This is also important for preventing a fear of dentists in the future.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="frequently-asked-questions-container">
      <div className="headers">
        <h2>Frequently Asked Questions</h2>
        <p>Key topics you may be curious about regarding our treatments.</p>
      </div>

      <div className="questions">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`question-card ${openQuestion === index ? "open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleQuestion(index);
            }}
          >
            <h3>
              {item.question}
              <IoIosArrowDown
                className={`arrow ${openQuestion === index ? "rotated" : ""}`}
              />
            </h3>
            <p className="answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
