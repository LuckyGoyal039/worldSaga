import multer from 'multer';
import path, { dirname } from 'path';
import mime from 'mime-types';
import { fileURLToPath } from 'url';

const commonImgStore = multer.diskStorage({
    destination: function (req, file, cb) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename)
        cb(null, path.join(__dirname, '../../uploads/images/'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));
    }
});

const fileFilter = function (req, file, cb) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
        req.fileValidationError = 'Invalid Image Format';
        return cb(new Error('Invalid Image Format'), false);
    }
    cb(null, true);
};

const uploadImage = multer({
    storage: commonImgStore,
    fileFilter: fileFilter
});

const processImage = function (filepath) {
    // to process image
};

let obj = {
    upload: uploadImage,
    processImage: processImage
};
export default obj;
