export const isValidPhoneNumber = (phone: string) => {
  // Allows +country code, spaces, dashes, parentheses
  const phoneRegex =
    /^\+?[1-9]\d{0,2}?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;

  return phoneRegex.test(phone.trim());
};
