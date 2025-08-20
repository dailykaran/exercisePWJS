import { expect, test} from "@playwright/test"

test('verify the radio button', async ({page}) => {
    await page.goto('https://demoqa.com/radio-button');
    
    const radioCheck = await page.locator('#noRadio').isDisabled()
    expect(radioCheck).toBe(true);

    await page.getByText('like').click()

}) 

test.only('verify the buttons', async ({page}) => {
    await page.goto('https://demoqa.com/buttons');
    
    await page.locator('#rightClickBtn').click({button: "right"});
    expect(page.locator('//*[@id="rightClickMessage"]')).toContainText('right click');  // xpath is used to find the ID


}) 