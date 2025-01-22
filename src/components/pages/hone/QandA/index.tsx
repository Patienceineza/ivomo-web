import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import { FaQuestionCircle, FaChevronDown, FaSpinner } from "react-icons/fa";
import Nav from "../Nav";
import { useQuestion } from "../../../../app/hooks/questions";
import { QuestionType } from "../../../../app/types/shared";

const QandA = () => {
  const { questions = [], loading, fetchQuestions, handleCreate }: any = useQuestion();
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitting(true);
      const newQuestion = {
        id: new Date().toISOString(),
        body: question,
        name: name || "Anonymous",
        createdAt: new Date(),
        answers: [],
      };
      await handleCreate(newQuestion);
      setQuestion("");
      setName("");
      fetchQuestions();
      setSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Nav />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center py-32 shadow-lg"
        style={{
          backgroundImage: `url(https://www.minubumwe.gov.rw/index.php?eID=dumpFile&t=f&f=91043&token=c70816035de38d2cba6f0b58ae1828020024b156)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="md:text-5xl text-4xl font-bold mb-4">Q AND A</h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            Welcome to our question and answer section. Here, you can ask questions and get answers.
          </p>
        </div>

        {/* Question Form */}
        <form
          onSubmit={handleSubmit}
          className="absolute bottom-[-40px] w-11/12 lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4 z-20 max-w-lg"
          style={{ transform: "translateY(50%)" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
            <FaQuestionCircle className="text-blue-500" />
            <span>Ask a Question</span>
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name (Optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What's your question?"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows={3}
          />
          <button
            type="submit"
            disabled={submitting}
            className={`w-full px-4 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ${
              submitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {submitting ? (
              <span className="flex items-center justify-center space-x-2">
                       <FaSpinner className="animate-spin" />
                <span>Submitting...</span>
              </span>
            ) : (
              "Submit Question"
            )}
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="mt-36 pt-16 pb-12 px-4 mx-auto space-y-10 max-w-5xl">
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          {loading ? (
            <p className="text-center text-gray-500">Loading questions...</p>
          ) : (
            questions.length > 0 ? (
              questions.map((question: QuestionType, index: number) => (
                <div
                  key={question.id}
                  className="mb-4 border-b border-gray-200 pb-4"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer py-4 px-4 bg-white rounded-lg shadow hover:shadow-md transition-all"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{question.body}</h3>
                    <FaChevronDown
                      className={`transform transition-transform duration-200 text-gray-600 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <div className="text-gray-700 px-6 py-4 bg-gray-50 rounded-b-lg">
                      {question.answers && question.answers.length > 0 ? (
                        question.answers.map((answer: any) => (
                          <div key={answer.id} className="mt-2 text-gray-600">
                            <p>{answer.body}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">No answers yet.</p>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No questions available. Be the first to ask!</p>
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QandA;
