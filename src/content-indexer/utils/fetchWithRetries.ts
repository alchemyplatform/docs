type FetchOptions = Parameters<typeof fetch>[1];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchWithRetries = async (
  url: string,
  options: FetchOptions = {},
  retries = 3,
): Promise<Response> => {
  let errorMessage = "";
  let response = new Response(null, { status: 500 });

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      response = await fetch(url, options);

      if (response.status === 404) {
        // no need to retry 404s
        return response;
      }

      if (!response.ok) {
        errorMessage = `HTTP error! Status: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      return response;
    } catch (error) {
      console.error(error);
      await delay(Math.pow(2, attempt) * 300); // Exponential backoff
    }
  }

  return response;
};
