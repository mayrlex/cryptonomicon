import { API_KEY, AGGREGATE_INDEX } from '../../config/CryptoCompare.js';

const socket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`);
const tickers = new Map();

interface ISendMessage {
	action: 'SubAdd' | 'SubRemove';
	subs: string[];
}

const sendMessage = (message: ISendMessage) => {
	const stringifyedMessage = JSON.stringify(message);

	if (socket.readyState === WebSocket.OPEN) {
		socket.send(stringifyedMessage);

		return;
	}

	socket.addEventListener(
		'open',
		() => {
			socket.send(stringifyedMessage);
		},
		{ once: true },
	);
};

const subscribeMessage = (ticker: string, action: 'SubAdd' | 'SubRemove') => {
	sendMessage({
		action,
		subs: [`5~CCCAGG~${ticker}~USD`],
	});
};

socket.addEventListener('message', ({ data }) => {
	const { TYPE: type, FROMSYMBOL: currency, PRICE: newPrice } = JSON.parse(data);

	if (type !== AGGREGATE_INDEX || newPrice === undefined) return;

	const handlers = tickers.get(currency) ?? [];

	handlers.forEach(fn => {
		fn(newPrice);
	});
});

/**
 * Subscribes to a specific ticker.
 *
 * @param {string} ticker - The ticker to subscribe to.
 * @param {function} callback - The callback function to be called when a new price is received.
 */
const subscribeToTicker = (ticker, callback) => {
	const subscribers = tickers.get(ticker) || [];

	tickers.set(ticker, [...subscribers, callback]);

	subscribeMessage(ticker, 'SubAdd');
};

/**
 * Unsubscribes from a specific ticker.
 *
 * @param {string} ticker - The ticker to unsubscribe from.
 */
const unsubscribeFromTicker = ticker => {
	tickers.delete(ticker);

	subscribeMessage(ticker, 'SubRemove');
};

export { subscribeToTicker, unsubscribeFromTicker };
