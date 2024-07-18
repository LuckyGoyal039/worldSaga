import jwt from 'jsonwebtoken'

function isUser() {
  return (req, res, next) => {
    if (!req.session.isAuthenticate) {
      req.flash("error", "Access denied");
      return res.redirect("/home");
    }
    next();
  };
}
function checkLogin() {
  return (req, res, next) => {
    if (req.session?.user) {
      req.flash("error", "Already signIn. please logout first");
      return res.redirect("/home");
    }
    next();
  };
}

function checkAdmin() {
  return (req, res, next) => {
    if (!req.session?.admin) {
      req.flash("error", "Access denied");
      return res.redirect("/home");
    }
    next();
  };
}
function authMiddleware() {
  return (req, res, next) => {
    // Extract the token from the Authorization header
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    // The token is usually provided as "Bearer <token>"
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }

    // Use the secret key to verify the token
    const SECRET_KEY = process.env.SECRET_KEY;

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      // Attach the decoded token payload to the request object
      req.user = decoded;
      // Call the next middleware function or route handler
      next();
    } catch (error) {
      // Handle token verification errors
      return res.status(403).json({ message: 'Invalid token' });
    }
  };
}
export { isUser, checkLogin, checkAdmin, authMiddleware };
