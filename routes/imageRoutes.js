const cloudinary = require("cloudinary");
const router = require("express").Router();
require("dotenv").config();

cloudinary.config({
  cloud_name: "dj2zojejp",
  api_key: "675326471487366",
  api_secret: "HevNEZkMmsPzDweiDLwRc9CxQ44",
});

router.delete("/:public_id", async (req, res) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
