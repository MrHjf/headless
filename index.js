const puppeteerUtil = require('./wrapperUtil.js');
async function run() {
	
	const {page} = await puppeteerUtil.goto('http://localhost:9000/user/login');
	await puppeteerUtil.selectAllAndDelete('#userName', page);
	await puppeteerUtil.selectAllAndDelete('#password', page);
	const data = {
		'#userName': '111',
		'#password': '111111'
	};
	await puppeteerUtil.pageType(data, page);
	
	await page.click('[type=button]', { delay: 200 });
	await page.click('[type=submit]');
}

run();