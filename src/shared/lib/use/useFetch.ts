/**
 * @async
 * @function useFetch
 * @description Fetches data from given URL and returns it as a parsed JSON object.
 * @param {string} url URL of the resource to fetch.
 * @returns {Promise<any>} Promise which resolves to a parsed JSON object or rejects with an error.
 */
export const useFetch = async url => {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return await response.json();
	} catch (error) {
		console.error(`Error fetching data: ${error}`);

		throw error;
	}
};
