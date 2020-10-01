const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const fileupload = require('../../middleware/file-upload')
const {check, validationResult}=require('express-validator')

const Profile = require('../../models/Profile')
const User = require('../../models/User')



//Get api/profile/me
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    });

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    // only populate from user document if profile exists
    res.json(profile.populate('user', ['name', 'avatar', 'email']));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


//Post api/profile
//create or update a profile
router.post('/',[auth,[
    check('status', 'Status is required')
    .not()
    .isEmpty()
    ]
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {
        status,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook
    } = req.body;

    //Build profile object
    const profileFields = {}
    profileFields.user = req.user.id;
    if(status) profileFields.status = status;
   
    //Build social object and add to profileFields
    const socialfields = { youtube, twitter, instagram, linkedin, facebook };

    for (const [key, value] of Object.entries(socialfields)) {
      if (value.length > 0)
        socialfields[key] = normalize(value, { forceHttps: true });
    }
    profileFields.social = socialfields;

    try{
       
        let profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true, upsert: true }
                );

            res.json(profile)   

     

    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }
}
);


//   GET api/profile
//    Get all profiles

router.get('/', async (req, res) => {
    try {
      const profiles = await Profile.find().populate('user', ['name', 'avatar','email']);
      res.json(profiles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



//    GET api/profile/user/:user_id
//     Get profile by user ID
router.get('/user/:user_id', async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.params.user_id
      }).populate('user', ['name', 'avatar','email']);
  
      if (!profile) return res.status(400).json({ msg: 'Profile not found' });
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Profile not found' });
      }
      res.status(500).send('Server Error');
    }
  });


//    DELETE api/profile
//    Delete profile, user & posts
router.delete('/', auth, async (req, res) => {
    try {
      // Remove user posts
      await Post.deleteMany({ user: req.user.id });
      // Remove profile
      await Profile.findOneAndRemove({ user: req.user.id });
      // Remove user
      await User.findOneAndRemove({ _id: req.user.id });
  
      res.json({ msg: 'User deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



//    PUT api/profile/dogs
//     Add profile dogs
// 
router.put(
    '/dogs',
    fileupload.single('image'),
    [
      auth,
      [
        check('dogName', 'Dog Name is required')
          .not()
          .isEmpty(),
        check('breed', 'Breed is required')
          .not()
          .isEmpty(),
        check('age', 'Age is required ')
          .not()
          .isEmpty(),
        check('sex', 'Sex is required ')
          .not()
          .isEmpty()
  
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      console.log("req.file")
      console.log(req.body.image)
      console.log("req.body")
      console.log(req.body)

      const {
        dogName,
        breed,
        sex,
        age,
        image,
        location,
        dateOfBirth,
      } = req.body;
  
      const newDog = {
        dogName,
        breed,
        sex,
        age,
        image: req.file.path,
        location,
        dateOfBirth,
      };
  
      try {
        const profile = await Profile.findOne({ user: req.user.id });
  
        profile.dog.unshift(newDog);
  
        await profile.save();
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );



//   DELETE api/profile/dogs/:dog_id
//     Delete dogs from profile
// 

router.delete('/dogs/:dog_id', auth, async (req, res) => {
    try {
      const foundProfile = await Profile.findOne({ user: req.user.id });
  
      foundProfile.dog = foundProfile.dog.filter(
        dog => dog._id.toString() !== req.params.dog_id
      );
  
      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  });



module.exports = router;