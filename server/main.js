import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// Temporary workaround for materialize fonts
WebApp.connectHandlers.use("/packages/materialize_materialize/fonts", function (req, res) {
	const url = req.originalUrl.replace("/fonts/", "/dist/fonts/");
	res.statusCode = 301;
	res.setHeader("Location", url);
	res.end();
});
