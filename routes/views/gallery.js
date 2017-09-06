var keystone = require('keystone');
var fs = require('fs');

exports = module.exports = function (req, res)
{
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));

	fs.readdir(__dirname + '/../../public/images/gallery', function(err, dir_data)
	{
		console.log('reading gallery images.\n');
		if(err)
		{
			console.log(err);
			res.status(500).send(err);
			// Render the view
			view.render('gallery');
			return;
		}
		console.log('\n'+dir_data);
		//view.query('imgs', dir_data);
		// Render the view
		view.render('gallery', {"images": dir_data});
	});

};
