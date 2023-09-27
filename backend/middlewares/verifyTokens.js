// dependency imports
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

// A middleware function to validate TOKEN
const verifyToken = (req, res, next) => {
	// if there is cookie then verify it
	if (req.cookies?.accessToken) {
		//get the TOKEN from the cookies
		const token = req.cookies.accessToken;
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
		// if the token in not valid return not authenticated
		return res.status(401).json({ massage: 'You are not authenticated!' });
	}
};

// A middleware function to validate TOKEN and check AUTH
const verifyTokenAndAuth = (req, res, next) => {
	// call the verifyToken function
	verifyToken(req, res, async () => {
		const DbUser = await User.findById(req.user.id);
		//check the AUTH
		if (DbUser) {
			next();
		} else {
			res.status(401).json({ massage: 'You are not authenticated!' });
		}
	});
};

// A middleware function to validate TOKEN and check ADMIN
const verifyTokenAndAdmin = (req, res, next) => {
	// call the verifyToken function
	verifyToken(req, res, async () => {
		try {
			//check the ADMIN
			const DbUser = await User.findById(req.user.id);
			if (!DbUser) {
				return res.status(403).json({ massage: 'You are not allowed to do that!' });
			}
			if (DbUser.isAdmin == true) {
				next();
			} else {
				res.status(403).json({ massage: 'You are not allowed to do that!' });
			}
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	});
};
// export the middleware
module.exports = {
	verifyTokenAndAuth,
	verifyTokenAndAdmin
};
