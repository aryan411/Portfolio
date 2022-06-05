const express = require('express');
const router = express.Router();
const fs = require('fs');



// Portfolio Route
router.get('/', (req, res) => {
  const title = 'portfolio';
  // map portfolios

  res.render('myWork', {
    title,
  });
});

// router.get('/details/:id', (req, res) => {
//   const title = 'potfolio-details';
//   // fetch single values from portfolios that match with requested param id
//   for (let i = 0; i < mapPortfolios.length; i++) {
//     if(mapPortfolios[i].id === req.params.id) {
//       res.render('myWork/details', {
//         title,
//         img: mapPortfolios[i].img,
//         titlePortfolio : mapPortfolios[i].title,
//         details: mapPortfolios[i].details,
//         description: mapPortfolios[i].description,
//         github: mapPortfolios[i].github,
//         web: mapPortfolios[i].web
//       });
//     };
//   };
// });

module.exports = router;
