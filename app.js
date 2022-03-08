// const puppeteer = require('puppeteer');

// let scrape = async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     await page.goto('http://books.toscrape.com/');
//     await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
//     await page.waitFor(1000);

//     const result = await page.evaluate(() => {
//         let stock = document.querySelector('#content_inner > article > table > tbody > tr:nth-child(6) > td').innerText;
//         console.log(stock)
//         return {
//             stock
//         }
//     });

//     browser.close();
//     return result;
// };

// scrape().then((value) => {
//     console.log(value); // Success!
// });


// const puppeteer = require('puppeteer');

// const elementsToClickSelector = '#default > div > div > div > div > section > div:nth-child(2) > ol > li > article > div.image_container > a > img';

// let scrape = async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     await page.goto('http://books.toscrape.com/');

//     // get all elements to be clicked
//     let elementsToClick = await page.$$(elementsToClickSelector);
//     console.log(`Elements to click: ${elementsToClick.length}`);

//     for (let i = 0; i < elementsToClick.length; i++) {
//         // click element
//         elementsToClick[i].click();
//         await page.waitFor(1000);

//         // generate result for the current page
//         const result = await page.evaluate(() => {
//             let stock = document.querySelector('#content_inner > article > table > tbody > tr:nth-child(6) > td').innerText;
//             return { stock };
//         });
//         console.log(result); // do something with the result here...

//         // go back one page and repopulate the elements
//         await page.goBack();
//         elementsToClick = await page.$$(elementsToClickSelector);
//     }

//     browser.close();
// };

// scrape();





