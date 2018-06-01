# headless

## 该项目是基于puppeteer、tesseract.js(tesseract/node-tesseract)

#### <a href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md">Puppeteer</a> 是 Google Chrome 团队官方的无界面（Headless）Chrome 工具。正因为这个官方声明，许多业内自动化测试库都已经停止维护，包括 PhantomJS。Selenium IDE for Firefox 项目也因为缺乏维护者而终止。通过tesseract去抓取页面信息做爬虫，也可以做前端自动华测试，生成页面截图或者PDF并对puppeteer做封装，方便使用。

#### <a href='https://github.com/naptha/tesseract.js'>tesseract.js</a>是基于c++的tesseract库实现的，但是目前使用有问题，无法连接作者的服务器。
原因是，这个库的流程应该是通过把图片上传上作者的服务器，在识别完后，把结果返回。而node-tesseract也是基于tesseract，它需要现在本地下载识别库，并配置环境变量。
但看其他blog，普遍认为识别率不高。所以目前JavaScript还不是能很好的做的图片识别。