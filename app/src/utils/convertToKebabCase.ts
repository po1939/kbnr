export const convertToKebabCase = (str: string): string => {
    return str
      .toLowerCase()  // Convert the whole string to lowercase
      .trim()          // Remove any extra spaces at the beginning or end
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/[^a-z0-9\-]/g, '');  // Optionally, remove non-alphanumeric characters (except hyphens)
  };
  