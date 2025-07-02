export const useFilter = <T>(array: T[], query: string, key: string | null = null): Array<T> => {
	return array.filter(item => {
		const value = key ? (item as Record<string, unknown>)[key] : item;

		if (typeof value !== 'string') return;

		return value.toLowerCase().includes(query.toLowerCase());
	});
};
