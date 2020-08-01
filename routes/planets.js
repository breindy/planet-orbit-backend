var express = require('express');
var router = express.Router();

const planets = [
	{
		name: 'Mercury',
		color: 'Dark Grey',
		radius: 50
	},
	{
		name: 'Venus',
		color: 'Light Steel Blue',
		radius: 70
	},
	{
		name: 'Earth',
		color: 'Deep Sky Blue',
		radius: 75
	},
	{
		name: 'Mars',
		color: 'Indian Red',
		radius: 67
	},
	{
		name: 'Jupiter',
		color: 'Orange',
		radius: 120
	},
	{
		name: 'Saturn',
		color: 'Light Coral',
		radius: 113
	},
	{
		name: 'Uranus',
		color: 'Light Sky Blue',
		radius: 103
	},
	{
		name: 'Neptune',
		color: 'Dark Blue',
		radius: 98
	},
	{
		name: 'Pluto',
		color: 'Rosy Brown',
		radius: 33
	}
];

function generateRandNum(minRange, maxRange) {
	const rand = Math.floor(Math.random() * (maxRange - minRange) + minRange);
	return rand;
}

router.get('/', function(req, res, next) {
	res.send(planets);
});

router.get('/random', function(req, res, next) {
	const index = generateRandNum(0, planets.length);
	res.send(planets[index]);
});

router.get('/:id', function(req, res, next) {
	const id = req.params['id'];
	res.send(planets[id]);
});

module.exports = router;
