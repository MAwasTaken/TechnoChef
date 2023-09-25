const allowedOrigins = [
	'http://www.technoshef.com',
	'https://www.technoshef.com',
	'https://45.159.150.221:3000',
	'http://45.159.150.221:443',
	'http://localhost:5173',
	'http://127.0.0.1:5173'
];

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	optionsSuccessStatus: 200,
	credentials: true
};

module.exports = corsOptions;
