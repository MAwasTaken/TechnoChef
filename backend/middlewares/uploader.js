// import the package
const multer = require('multer');

// define the storage system
const Storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/productImages');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

// define the valid data and filters
const fileFilter = (req, file, cb) => {
	// reject a file
	if (
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

// the uploader object
const upload = multer({
	storage: Storage,
	limits: {
		fileSize: 1024 * 1024 * 8
	},
	fileFilter: fileFilter
});

// export
module.exports = upload;
