/*
Task: visit https://aluminati.net, browse to the contact form, and fill out the form with whatever details you deem appropriate.
You will not be able to submit the form as it's behind a CAPTCHA, but simply filling out the data is enough for this exercise.
*/

describe('Contact form', () =>
{
	it('should be able to fill out the contact form', () =>
	{
		cy.visit('/')		
		cy.wait(5000)
		cy.get("#mobile-menu-item-1040 > a > span.menu-text").click({force: true})
		cy.get(3000)
		
		cy.get('input[name="your-name"]').should('be.visible').type('Louise')
		cy.get('input[name="your-email"]').should('be.visible').type('louisem2020@yahoo.com')
		cy.get('input[name="your-telephone"]').should('be.visible').type('0730581211')
		cy.get('input[name="Company"]').should('be.visible').type('University of Cape Town')
		cy.get('input[name="department"]').should('be.visible').type('Information Technology')
		cy.get('select[name="CommunitySize"]').select('2500 - 4999')
		cy.get('select[name="Howdidyoufindoutaboutus"]').select('Advertisement')
		cy.get('[type="checkbox"]').check('Aluminate (Jobs Board)')
		cy.get('[type="checkbox"]').check('Aluminate (Events Board)')
		cy.get('[type="checkbox"]').check('Email for Life')
		cy.get('textarea[name="your-message"]').should('be.visible').type('We need to focus and have goals in our life')
	
	});
});
