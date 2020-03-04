const router = require("express").Router();
const verify = require("../verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "Enes abii",
      desc: "Ssaldasldlasdldsla"
    }
  });
});

module.exports = router;
