export const useLocalStorage = () => {
	const get = (key: string) => {
		return JSON.parse(window.localStorage.getItem(key) || '[]');
	};
	const update = <T>(key: string, value: T[]): void => {
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return { get, update };
};
