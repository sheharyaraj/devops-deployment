const express = require('express');
const router = express.Router();
const Paper = require('../models/paper');
const File =require('../models/paper1');

const deleteDocument=async(_id)=>{
  try {
    await Paper.deleteOne({_id})
    console.log('deleted')
    
  } catch (error) {
    
  }
}

router.get('/deletepaper', async (req, res) => {
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
      _id: paper._id.toString()
    }));

    console.log(paper)

    if (paper.length > 0) {
      deleteDocument(paper[0]._id);
    }

  
    res.json({ success: true, paper });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: 'Failed to fetch paper' });
  }
});

// router.put('/getpaper/:id', async (req, res) => {
 
//   const {universityName,paperYear,courseName,paperType} = req.body;
//   let newPaper ={}
//   if(universityName){newPaper.universityName=universityName}
//   if(paperYear){newPaper.paperYear=paperYear}
//   if(courseName){newPaper.courseName=courseName}
//   if(paperType){newPaper.paperType=paperType}

//   let paper=await Paper.findById(req.params.id)
//   console.log(paper)
//   if(!paper){res.status(404).send("not found")}
  
//   paper =await Paper.findByIdAndUpdate(req.params.id,{$set:newPaper},{new:true})
// });
module.exports = router;