const puppeteer = require('puppeteer');
const puppeteerUtil = {
	selectAllAndDelete: async function (selector, page) {
		await page.focus(selector);
		await page.keyboard.down('Control');
		await page.keyboard.press('KeyA');
		await page.keyboard.up('Control');
		await page.keyboard.press('Backspace');
	},
	goto: async function(url, options) {
		const browser = await puppeteer.launch({
			executablePath: './chrome-win32/chrome.exe',
			headless: false,
			timeout: 60000,
			...options
		});
		const page = await browser.newPage();
		await page.goto(url);
		return {page, browser};
	},
	_isObject: (data) => {
		if (typeof data !== 'object') {
			throw new Error('必须是一个对象');
			return false;
		}
		return true;
	}, 
	pageType: async function(data, page) {
		if (this._isObject(data)) {
			for (let prop in data) {
				await page.type(prop, data[prop]);
			}
		}
	},
	refresh: async function(page) {
		await page.keyboard.press('F5');
	},
	timeout: async function(delay) {
		setTimeout(() => console.log('延迟函数: ', `延迟${delay}毫秒`), delay);
	}
}
module.exports = puppeteerUtil;