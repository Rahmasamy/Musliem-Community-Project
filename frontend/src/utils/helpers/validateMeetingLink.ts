export const isValidMeetingLink = (url: string) => {
  try {
    const parsed = new URL(url);

    // Allow only http/https
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};
