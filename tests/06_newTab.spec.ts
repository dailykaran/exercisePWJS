import {expect, Locator, test, chromium} from "@playwright/test"


test('verify the new tab', async () => {
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://demoqa.com/browser-windows");

    const [page2] = await Promise.all([ 
        context1.waitForEvent('page'),
        
        page1.locator('#tabButton').click()
    ])
    
    expect(await page2.locator('h1').innerText()).toContain('sample page')
    console.log( await page2.title());
    await page2.close();
    console.log( await page1.title());
})

test('verify the new window', async () => {
    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://demoqa.com/browser-windows");

    const [page2] = await Promise.all([ 
        page1.waitForEvent('popup'), // listen the new window when appears
        page1.locator('#messageWindowButton').click()
    ])
    expect(await page2.locator('body').innerText()).toContain('your organization')
    await page2.close();
    console.log( await page1.title());
})

