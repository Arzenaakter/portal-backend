const Contact = require("../models/contact.model");
const sendMail = require("../utils/sendMail");

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    await sendMail(contact);

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true,
      },
      {
        new: true,
      },
    );

    res.json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
