var express = require('express');
var router = express.Router();

var travels = [
  {
    name:"Paris",
    image:"images/photo1.jpg",
    description:"Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré."
  },
  {
    name:"Panama",
    image:"images/photo2.jpg",
    description:"Le Panama est un pays situé sur l'isthme rattachant l'Amérique centrale et l'Amérique du Sud. Le canal de Panama, célèbre prouesse d'ingénierie, coupe cet isthme en son centre pour relier les océans Atlantique et Pacifique, créant ainsi une voie de navigation essentielle. Dans la capitale du même nom, les gratte-ciel modernes, casinos et discothèques contrastent avec les bâtiments de style colonial du quartier de Casco Viejo et la forêt tropicale du parc naturel métropolitain."
  },
  {
    name:"Bora-Bora",
    image:"images/photo3.jpg",
    description:"Bora-Bora est une petite île du Pacifique sud, située au nord-ouest de Tahiti, en Polynésie française. Entourée d'îlots de sable, appelés 'motus', et d'une eau turquoise protégée par un récif corallien, l'île est un haut lieu de la plongée sous-marine. C'est également une destination touristique prisée pour ses complexes de luxe, dont certains proposent des bungalows sur pilotis. Au centre de l'île s'élève le mont Otemanu, un volcan endormi culminant à 727 m."
  }
]


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wild Trips', page_name:'index'});
});


router.get('/trips', function(req, res, next) {
  res.render('trips', { title: 'Wild Trips - Trips', travels:travels, page_name:'trips' });
});


router.get('/card', function(req, res, next) {
  var name = "";
  var description = "";
  var image = "";

  for (var i=0 ; i<travels.length ; i++) {
    if (req.query.name == travels[i].name) {
      name = travels[i].name;
      description = travels[i].description;
      image = travels[i].image;
    }
  }
  res.render('card', { title: 'Wild Trips - Card', name:name, description:description, image:image, page_name:'trips'});
});


router.get('/delete-trips', function(req, res, next) {
  for (var i=0 ; i<travels.length ; i++) {
    if (travels[i].name == req.query.name) {
      travels.splice([i], 1);
    }
  }
  res.render('trips', { title: 'Wild Trips - Trips', travels:travels, page_name:'trips'});
});


router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Wild Trips - Add New Trip', page_name:'new'});
});

router.post('/add-trip', function(req, res, next) {
  console.log(req.body);
  res.redirect('trips');
});


module.exports = router;
