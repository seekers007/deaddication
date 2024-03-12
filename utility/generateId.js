const generatePatientId = () => {
  const min = 1000; // 4-digit number
  const max = 9999999999; // 10-digit number

  // Generate a random number within the specified range
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Convert the number to a string
  const patientId = randomNumber.toString().padStart(10, '0');

  return patientId;
};

export {generatePatientId};
