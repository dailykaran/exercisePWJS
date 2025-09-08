import { test, expect } from "@playwright/test"

test('Verify the hover and get tool tips', async({page}) =>{
    await page.goto('https://demoqa.com/tool-tips', {waitUntil: 'load'});

    await page.locator('button#toolTipButton').hover();
    const toolTipButton = await page.locator('#buttonToolTip div').nth(1).innerText();
    console.log(toolTipButton);
    
    expect(toolTipButton).toContain('Button');

    await page.locator('#toolTipTextField').hover();
    const toolTipText =  await page.locator('#textFieldToolTip div').nth(1).innerText();
    expect(toolTipText).toContain('text field');
     console.log(toolTipText);


})

