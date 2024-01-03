const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log(">>>>>>>>>>>>>", req);
  console.log("req.headers.token**", req.headers.token);
  let authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("separate token", token);

    jwt.verify(token, process.env.Jwt_sec, (err, user) => {
      if (err) {
        console.log('+++', err);
        return res.status(403).json("Token is not valid");
      }

      req.user = user;
      console.log("user ? ? ? ? ? ? ? ? ", user);
      next();
    });
  } else {
    return res.status(401).json({ error: "Token not found" });
  }
};

const verifyTokenAndauthorization = (req, res, next) => {
  verifyToken(req, res, (data) => {
    console.log(data);
    console.log('req.user.id', req.user.id);
    console.log('req.params.id', req.params.id);
    if (req.user.id === req.params.id) {
      next()
    } else {
      return res.status(403).json('you are not allowed')
    }
  })
}

module.exports = { verifyToken, verifyTokenAndauthorization }


