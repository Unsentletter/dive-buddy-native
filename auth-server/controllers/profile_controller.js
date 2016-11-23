const User = require('../models/user');

exports.create = function(req, res, next) {
  const user_id = req.params.user_id;
  const diverUsername = req.body.diverUsername;
  const numberOfDives = req.body.numberOfDives;
  const diverDescription = req.body.diverDescription;

  if (!diverUsername || !numberOfDives || !diverDescription) {
    return res.status(422).json({ error: 'You must provide a unique username, the number of dives you have completed, and a brief descripton of yourself'});
  }

  User.findOne({ diverUsername }, function(err, existingUserName) {
    if (err) { return next(err); }

    if (existingUserName) {
      return res.status(422).json({ error: 'Username is already in use' });
    };

    const user =  User.findById(user_id, function(err1, existingUser) {
      existingUser.profile = {diverUsername, numberOfDives, diverDescription};
      existingUser.save(function(err2) {
        if (err2) { return next(err2) }

        res.json({profile: {diverUsername, numberOfDives, diverDescription}});
      })
    });
  });
}

exports.index = function(req, res) {
  const user_id = req.params.user_id;

  User.findById(user_id, function(err,user){
    console.log("User: ", user.profile.diverUsername)
    res.json({
      username: user.profile.diverUsername,
      numberOfDives: user.profile.numberOfDives,
      diverDescription: user.profile.diverDescription
    })

  })

}
