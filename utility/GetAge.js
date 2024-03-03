export const getTheAge = dateOfBirth => {
  const dob = new Date(dateOfBirth);

  const currentDate = new Date();

  let age = currentDate.getFullYear() - dob.getFullYear();

  //  if the date or month is less than the current date then the age is 1 year less and then rest is month
  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
};
