const router = require("express").Router();

let Account = require("../models/account.model");

router.route("/").get((req, res) => {
  Account.find()
    .then((accounts) => res.json(accounts))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
  Account.findById(req.params.id)
    .then((account) => res.json(account))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  Account.findByIdAndDelete(req.params.id)
    .then(() => res.json("Account deleted."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").put((req, res) => {
  Account.findById(req.params.id)
    .then((account) => {
      account.username = req.body.username;
      account.name = req.body.name;
      account.accountNo = Number(req.body.accountNo);

      account
        .save()
        .then(() => res.json("Account updated!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const accountNo = Number(req.body.accountNo);
  const name = req.body.name;

  const newAccount = new Account({
    name,
    accountNo,
    name,
  });

  newAccount
    .save()
    .then(() => res.json("Account created"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
