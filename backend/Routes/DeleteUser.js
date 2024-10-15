const express = require('express');
const router = express.Router();
const User = require('../models/user');


const deleteDocument=async(_id)=>{
  try {
    await User.deleteOne({_id})
    console.log('deleted')
    
  } catch (error) {
    
  }
}

router.get('/deleteuser', async (req, res) => {
    const queryData = req.query;
  try {
    
    console.log("Query Object:", queryData);

    let user = await User.find({
        name:queryData.name,
        email:queryData.email
    });

    user = user.map(user => ({
      _id: user._id.toString()
    }));

    console.log(user)

    if (user.length > 0) {
      deleteDocument(user[0]._id);
      res.json({ success: true, user });
    }
    else{
        res.json({ success: false, user });
    }
  
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: 'Failed to delete user' });
  }
});

module.exports = router;