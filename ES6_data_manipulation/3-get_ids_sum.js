function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const reducer = (acc, item) => acc + item.id;


  return sumIds;
}

export default getStudentIdsSum;
