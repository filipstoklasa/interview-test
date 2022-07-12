/// <reference types="cypress" />

const runProgramTypeSuite = (programType: number) => {
	it(`navigates to the ${programType}`, () => {
		const movieButton = cy.get(`[data-identificator="${programType}"]`);
		movieButton.click();
		cy.url().should("contain", `/programType/${programType}`);
	});

	it(`checks if the ${programType} page contains movies`, () => {
		const movieItems = cy.get('[data-testid="items-list"]');
		movieItems.should("exist");
	});

	it("clicks on the first item", () => {
		const movieItems = cy.get("[data-identificator]");
		const firstItem = movieItems.first();
		firstItem.click();
		firstItem.invoke("attr", "data-identificator").then((id) => {
			const dialog = cy.get('[data-test-id="dialog"]');
			dialog.should("exist").should("contain", id);
			cy.get(`[data-test-id="dialog-${id}-content"]`).should("exist");
		});
	});

	it("hides the modal with close icon", () => {
		const closeIcon = cy.get('[data-test-id="dialog-close"]');
		closeIcon.should("exist");
		closeIcon.click();
		const dialog = cy.get('[data-test-id="dialog"]');
		dialog.should("not.exist");
	});
};

describe("Check movies page and click detail", () => {
	before(() => {
		cy.visit("/");
	});
	runProgramTypeSuite(1);
});

describe("Check series page and click detail", () => {
	before(() => {
		cy.visit("/");
	});
	runProgramTypeSuite(2);
});
