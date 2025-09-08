import { test, expect } from "@playwright/test"

test('Verify the tabs', async({page}) =>{
    await page.goto('https://demoqa.com/tabs', {waitUntil: 'load'});

    //await page.locator('').click();
    const tabs = ['a#demo-tab-origin', 'a#demo-tab-use', 'a#demo-tab-what']
    for(const ontab  of tabs){
        const element = page.locator(ontab);
        await element.click();
        const elem = await ontab.split('-');
        const elemTab = elem[elem.length - 1]
        console.log(elemTab + " TAB " + (await element.innerText()).toLowerCase());
        expect(elemTab).toContain((await element.innerText()).toLowerCase());
        
    }
})