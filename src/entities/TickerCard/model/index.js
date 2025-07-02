const formatPrice = price => {
	if (typeof price !== 'number') return '-';

	return price > 1 ? price.toFixed(2) : price.toPrecision(2);
};

export { formatPrice };
