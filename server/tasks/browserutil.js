

const puppeteer = require('puppeteer');

//本机未安装 chrome 的情况下
/*
require("puppeteer-chromium-resolver")({
    //hosts: ["https://storage.googleapis.com", "https://npm.taobao.org/mirrors"]
}).then(function (revisionInfo) {
    (async () => {
        console.log("Chromium revision installed.");
        const browser = await revisionInfo.puppeteer.launch({
            headless: false,
            executablePath: revisionInfo.executablePath
        });
        console.log(revisionInfo.executablePath);
        setTimeout(function () {
            browser.close();
        }, 5000);
    })();
});
*/

//本机已安装 Chrome 的情况下
// /*
    (async () => {
        const browser = await puppeteer.launch({
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            headless: true,
            timeout: 1000
        });
        const page = await browser.newPage();
        let sUrl = 'https://www.baidu.com';
        await page.goto(sUrl);
        await page.screenshot({ path: './dist/example.png' });

        await browser.close();
    })();

    // */