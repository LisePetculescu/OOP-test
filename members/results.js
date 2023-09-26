function constructResult(resultData) {
  const ResultObject = {
    date: new Date(resultData.date),
    memberId: resultData.memberId,
    discipline: resultData.discipline,
    type: resultData.resultType,
    time: resultData.time
  };

  return ResultObject;
}

export { constructResult };
