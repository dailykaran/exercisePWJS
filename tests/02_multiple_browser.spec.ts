import { chromium, test } from "@playwright/test";


test(`Test to create multiple browser contexts`, async () => {

    const browser = await chromium.launch();
    //Create multiple browser contexts
    const context1 = await browser.newContext();
    //Create page inside context1
    const page1 = await context1.newPage();
    await page1.goto("https://ultimateqa.com/simple-html-elements-for-automation/");

    await page1.waitForTimeout(3000);

    const page2 =  await context1.newPage();
    await page2.goto("https://demoqa.com/elements");
    await page2.waitForTimeout(3000);
    

    const page3 =  await context1.newPage();
    await page3.goto("https://www.saucedemo.com/");
    await page3.waitForTimeout(3000);
    await page3.close();
    await console.log('page3 closed');
    
    await page2.close();
    await console.log('page2 closed');
    
    await context1.close();
    await console.log('context1 closed');
    

    //Create pages inside context2
    const context2 = await browser.newContext();
    const page4 = await context2.newPage();
    await page4.goto("https://www.saucedemo.com/v1/inventory.html");
    await page4.waitForTimeout(3000);

    await page3.close();
    await context2.close();

    await browser.close();
    
})

