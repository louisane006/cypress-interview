/*
Task: In mobile view, browse to Our services -> Aluminate for education and get the value for every href on every anchor (<a> tag) on the page.
Output the href values to the console. Logging to cypress or the standard dev console is fine.

Please perform this entire task on the mobile site, including the navigation and link data fetching.
*/
describe('Get all links', () => {
	it('should be able to browse to the product page in mobile view and real all links', () => {
		
		cy.visit('/')
			cy.viewport(550, 750) 			
			cy.get("#mobile-menu-item-12764 > a > span").click({force: true})
			cy.get("a[href]").each($a => {
				const message = $a.text();
				expect($a, message).to.have.attr("href")
			  });
			  cy.get("a[href]").should($a => {
				  console.log( " " + $a.text())
			  })
		});
});