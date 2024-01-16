import jsdom from 'jsdom';

import createLayoutComponents from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it('should have a header element', () => {
		const { headerEl } = createLayoutComponents();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		expect(isHeaderElExist).not.toBeNull();
	});

	it('should have a card element', () => {
		const { cardEl } = createLayoutComponents();
		document.body.appendChild(cardEl);

		const isCardElExist = !!document.querySelector('.card');
		expect(isCardElExist).not.toBeNull();
	});

	it('should have a main element', () => {
		const { mainEl } = createLayoutComponents();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		expect(isMainElExist).not.toBeNull();
	});

	it('should have a footer element', () => {
		const { footerEl } = createLayoutComponents();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		expect(isFooterElExist).not.toBeNull();
	});
});
