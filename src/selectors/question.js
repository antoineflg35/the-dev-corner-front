/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
export function findQuestion(questions, searchedSlug) {
  const question = questions.find((testedQuestion) => {
    return testedQuestion.id === searchedSlug;
  });
  return question;
}
