// dependency imports
const jwt = require('jsonwebtoken');

// A middleware function to validate TOKEN
const verifyToken = (req, res, next) => {
	//get the TOKEN from the headers
	const token = req.cookie.accessToken;

	if (token) {
		// verify the TOKEN
		jwt.verify(token, process.env.JWT_SEC_key, (err, user) => {
			if (err) {
				res.status(403).json(err);
			} else {
				req.user = user;
				next();
			}
		});
	} else {
		return res.status(401).json('You are not authenticated!');
	}
};

// A middleware function to validate TOKEN and check AUTH
const verifyTokenAndAuth = (req, res, next) => {
	// call the verifyToken function
	verifyToken(req, res, () => {
		//check the AUTH
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json('You are not allowed to do that!');
		}
	});
};

// A middleware function to validate TOKEN and check ADMIN
const verifyTokenAndAdmin = (req, res, next) => {
	// call the verifyToken function
	verifyToken(req, res, () => {
		//check the ADMIN
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json('You are not allowed to do that!');
		}
	});
};

// export the middlewares
module.exports = {
	verifyToken,
	verifyTokenAndAuth,
	verifyTokenAndAdmin
};
