import { useState } from "react";
import { questions } from "../data/questions";

export default function Quiz({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // Filter questions based on mode and dependencies
  const getVisibleQuestions = () => {
    const mode = answers.mode;
    return questions.filter((q) => {
      // Always show questions without showIn
      if (!q.showIn || q.showIn === "all") {
        // Check dependencies for "all" questions
        if (q.dependsOn && q.dependsOnValue) {
          const dependValue = answers[q.dependsOn];
          if (Array.isArray(dependValue)) {
            return dependValue.includes(q.dependsOnValue);
          }
          return dependValue === q.dependsOnValue;
        }
        return true;
      }

      // Show rapid-specific questions if in Rapide mode
      if (q.showIn === "rapid" && mode === "Rapide") {
        // Check dependencies for rapid questions
        if (q.dependsOn && q.dependsOnValue !== null) {
          const dependValue = answers[q.dependsOn];
          if (Array.isArray(dependValue)) {
            return dependValue.includes(q.dependsOnValue);
          }
          return dependValue === q.dependsOnValue;
        } else if (q.dependsOn && q.dependsOnValue === null) {
          // Always show if dependsOnValue is null (enterprise sector)
          return !!answers[q.dependsOn];
        }
        return true;
      }

      // Show detailed-specific questions if in Détaillé mode
      if (q.showIn === "detailed" && mode === "Détaillé") {
        if (q.dependsOn && q.dependsOnValue) {
          const dependValue = answers[q.dependsOn];
          if (Array.isArray(dependValue)) {
            return dependValue.includes(q.dependsOnValue);
          }
          return dependValue === q.dependsOnValue;
        }
        return true;
      }

      return false;
    });
  };

  const visibleQuestions = getVisibleQuestions();
  const currentQuestion = visibleQuestions[currentIndex];

  if (!currentQuestion) {
    return <div>Erreur : question non trouvée</div>;
  }

  function handleChoice(choice) {
    let updated = { ...answers };

    if (currentQuestion.type === "multiple") {
      // Toggle choice in array
      const current = Array.isArray(updated[currentQuestion.id])
        ? updated[currentQuestion.id]
        : [];
      if (current.includes(choice)) {
        updated[currentQuestion.id] = current.filter((c) => c !== choice);
      } else {
        updated[currentQuestion.id] = [...current, choice];
      }
    } else {
      // Single choice
      updated[currentQuestion.id] = choice;
    }

    setAnswers(updated);
  }

  function handleNext() {
    // Validation for multiple choice
    if (
      currentQuestion.type === "multiple" &&
      (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0)
    ) {
      alert("Veuillez sélectionner au moins une option");
      return;
    }

    if (currentIndex === visibleQuestions.length - 1) {
      onComplete(answers);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const isLastQuestion = currentIndex === visibleQuestions.length - 1;
  const isAnswered =
    currentQuestion.type === "multiple"
      ? answers[currentQuestion.id] && answers[currentQuestion.id].length > 0
      : answers[currentQuestion.id];

  return (
    <>
      <div className="mb-4">
        <div className="text-sm text-gray-500">
          Question {currentIndex + 1} sur {visibleQuestions.length}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / visibleQuestions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-6">{currentQuestion.question}</h2>

      <div className="space-y-2 mb-6">
        {currentQuestion.choices.map((choice) => {
          const isSelected =
            currentQuestion.type === "multiple"
              ? Array.isArray(answers[currentQuestion.id]) &&
                answers[currentQuestion.id].includes(choice)
              : answers[currentQuestion.id] === choice;

          return (
            <button
              key={choice}
              onClick={() => handleChoice(choice)}
              className={`w-full py-3 px-4 border-2 rounded-xl font-medium transition ${
                isSelected
                  ? "border-green-600 bg-green-50 text-green-800"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              {currentQuestion.type === "multiple" && (
                <span className="mr-2">
                  {isSelected ? "✓" : "○"}
                </span>
              )}
              {choice}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="flex-1 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50"
        >
          Retour
        </button>
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="flex-1 py-3 bg-green-600 text-white rounded-xl disabled:opacity-50 hover:bg-green-700"
        >
          {isLastQuestion ? "Voir résultat" : "Suivant"}
        </button>
      </div>
    </>
  );
}