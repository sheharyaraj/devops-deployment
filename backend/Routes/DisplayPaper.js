const express = require('express');
const router = express.Router();
const Paper = require('../models/paper');
const File = require('../models/paper1');
const mongoose = require("mongoose");

const updateDocument=async(_id,queryData)=>{
  try {
    const result=await Paper.updateOne({_id},{
      $set :{
        universityName:"LUMS"
      }
    })
    
  } catch (error) {
    
  }
}

router.get('/getpaper', async (req, res) => {
    const queryData = req.query;
  try {
    
    console.log("Query Object:", queryData);

    let paper = await File.find({
        universityName:queryData.universityName,
        paperYear:queryData.paperYear,
        courseName:queryData.courseName,
        paperType:queryData.paperType
    });

    paper = paper.map(paper => ({
      _id: paper._id.toString(),
      universityName: paper.universityName,
      paperYear:paper.paperYear,
      courseName:paper.courseName,
      paperType:paper.paperType,
      images:paper.images
    }));

    console.log('paper=',paper)

    if (paper.length > 0) {
      // updateDocument(paper[0]._id,queryData);
      res.status(200).json({ success: true, message: 'paper found successfully!', paper: paper  });
    }
    else{
      throw new Error('failed to fetch paper');
    }
  
    
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});


module.exports = router;