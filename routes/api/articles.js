const router = require("express").Router();
const controller = require("../../controller/controller");

// Matches with "/api/articles"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/articles/nyt/"
router.route("/nyt")
  .get(controller.search);

// Matches with "/api/articles/nyt/query"
router.route("/nyt/:query") 
  .get(controller.search);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

 

module.exports = router;