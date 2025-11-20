export const fetchClient = async <T>(url: string, delay = 1500): Promise<T> => {
  // Delay response (1.5 sec)
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};
