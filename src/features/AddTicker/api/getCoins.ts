import { useFetch } from '@/shared/lib/use';

const API_URL = 'https://min-api.cryptocompare.com/data/all/coinlist?summary=true';

const getCoins = useFetch(API_URL).then(response => {
	return [...Object.keys(response.Data)];
});

export default getCoins;
