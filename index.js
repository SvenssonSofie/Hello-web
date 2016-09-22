var express = require('express');
var hbs = require('hbs');
var path = require('path');

var app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')))

var port = process.env.PORT || 3000;
var server = app.listen(port, function (){ 
	console.log('The app is listening on http://localhost:3000')
});


var list_of_animal_images = [
    {
    	src: 'http://www.extremetech.com/wp-content/uploads/2013/09/4Vln8-640x428.jpg', 
    	title: 'Pic 1', 
    	desc: 'Pretty picture, huh?'
    },
    {src: 'http://threeriversvetgroup.co.uk/wp-content/uploads/2012/05/farm-animals.jpg', title: 'Pic 2', desc: 'Pretty picture, huh?'},
    {src: 'https://i.imgflip.com/h92ym.jpg', title: 'Pic 3', desc: 'Pretty picture, huh?'},
    {src: 'http://justsomething.co/wp-content/uploads/2013/11/cutest-baby-animals-21.jpg', title: 'Pic 4', desc: 'Pretty picture, huh?'},
    {src: 'http://www.bestfunnyjokes4u.com/wp-content/uploads/2012/12/talking-animals-joke.jpg', title: 'Pic 5', desc: 'Pretty picture, huh?'},
    {src: 'http://s3-us-west-1.amazonaws.com/www-prod-storage.cloud.caltech.edu/styles/article_photo/s3/CT_Brain-Animal-Recog_SPOTLIGHT.jpg?itok=i4fXi7PO', title: 'Pic 6', desc: 'Pretty picture, huh?'},
    {src: 'http://udel.edu/~emmaauf/website%20project/final%20webpage/farmanimals/images/duckling.jpg', title: 'Pic 7', desc: 'Pretty picture, huh?'}
];

app.get('/', function (req, res){
	res.render('index', {
		headline: 'Hello web 2',
		images: list_of_animal_images
	});
}); //specify route, navigate between webpages

app.get('/animal_list_data', function(req,res){
	res.header('Content-Type', 'application/json')//not html as by default, json blob
	res.send({
		animals: list_of_animal_images
	});
});