import {test, expect} from "@playwright/test"

test('verify the dynamic button is enabled after 5 sec', async ({page}) => {
    await page.goto("https://demoqa.com/dynamic-properties");

    await page.getByRole('button', {name: 'Will enable 5 seconds'}).isDisabled();
    const waitElement1 = await page.waitForSelector('#enableAfter')
    expect(await waitElement1.isEnabled()).toBe(true);

})

test('verify the dynamic button is visible after 2 sec ', async ({page}) => {
    
    await page.goto("https://demoqa.com/dynamic-properties");
    
    await page.waitForLoadState('load');
    const waitElement2 = await page.waitForSelector('#visibleAfter')
    expect(await waitElement2.isVisible()).toBe(true)
    expect(await page.getByRole('button', {name: 'Visible After 5 Seconds'})).toContainText('Visible After 5');
})
