const User = require('../models/user');

exports.create = function(req, res, next) {
  const user_id = req.params.user_id;
  const username = req.body.username;
  const numberOfDives = req.body.numberOfDives;
  const diverDescription = req.body.diverDescription;

  if (!username || !numberOfDives || !diverDescription) {
    return res.status(422).json({ error: 'You must provide a unique username, the number of dives you have completed, and a brief descripton of yourself'});
  }

  User.findOne({ username }, function(err, existingUserName) {
    if (err) { return next(err); }

    if (existingUserName) {
      return res.status(422).json({ error: 'Username is already in use'});
    };

    const user =  User.findById(user_id, function(err1, existingUser) {
      existingUser.profile = {username, numberOfDives, diverDescription};
      existingUser.save(function(err2) {
        if (err2) { return next(err2) }

        res.json({profile: {username, numberOfDives, diverDescription}});
      })
    });
  });
}
