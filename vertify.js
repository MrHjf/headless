const puppeteerUtil = require('./wrapperUtil');
const request = require('request');
const fs = require('fs');
const path = require('path');
const tesseract = require('node-tesseract');
async function run () {
	const {page, browser} = await puppeteerUtil.goto('https://www.yyfax.com/web/login.html?_z=/web/user/index.html');
	/*for (let i = 0 ;i<30;i++){
		await getImg();
	}*/
	await getImg();
	browser.close();
	async function getImg() {
		console.log('10');
		try {
			/*const imgUrl = await page.$eval('#_verifyImg', el => el.src);
			await request.get(imgUrl, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36'}})
				.pipe(fs.createWriteStream(`imgs/${new Date().getTime()}.png`));*/
			console.log(__dirname);
			const imgPath = path.resolve(__dirname, 'imgs/1527737382635.png');
			console.log(imgPath);
			tesseract.process(path, function(err, text) {
				if (err) {console.error(err)}
				else console.log(text); 
			})
		} catch (error) {
			console.log('------------------')
			console.log('打开页面失败')
			console.log('------------------')
		}
	}
}

run();