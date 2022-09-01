const jwt = require('jsonwebtoken');
const Pharmacy = require("../models/Pharmacy");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const pharmacy = new Pharmacy({
        email: req.body.email,
        password: hash
      });
      pharmacy.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    Pharmacy.findOne({ email: req.body.email })
    .then(pharmacy => {
        if (!pharmacy) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
        }
        bcrypt.compare(req.body.password, pharmacy.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                }
                res.status(200).json({
                    pharmacyId: pharmacy._id,
                    token: jwt.sign(
                        { pharmacyId: pharmacy._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};