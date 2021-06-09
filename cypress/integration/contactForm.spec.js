/*
Task: visit to https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.
You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this excersise.
*/

describe('Contact form', () =>
{
	it('should be able to fill out the contact form', () =>
	{
		cy.visit('/')
	});
});