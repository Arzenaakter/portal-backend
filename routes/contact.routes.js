const router = require("express").Router();

const {
  createContact,
  getAllContacts,
  getSingleContact,
  markAsRead,
  deleteContact,
} = require("../controllers/contact.controller");

router.post("/", createContact);

router.get("/", getAllContacts);

router.get("/:id", getSingleContact);

router.patch("/:id/read", markAsRead);

router.delete("/:id", deleteContact);

module.exports = router;
