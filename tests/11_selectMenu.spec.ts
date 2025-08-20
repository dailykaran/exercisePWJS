import { test, expect } from "@playwright/test"

test('Verify select menu', async({page}) =>{
//setTimeout(function name(){debugger}, 3000)
    await page.goto('https://demoqa.com/select-menu');
    await page.waitForLoadState('load');

    const selectValue = page.locator('#withOptGroup');
    expect(selectValue).toBeVisible();
    await selectValue.click();
    await selectValue.locator('#react-select-2-option-0-0').click();
    expect(await selectValue.locator('div[class*="singleValue"]')).toContainText('Group 1, option 1');

})

test('Verify multi select drop down', async({page}) =>{
//setTimeout(function name(){debugger}, 3000)
    await page.goto('https://demoqa.com/select-menu');
    await page.waitForLoadState('load');

    const multiSelect = page.locator('div[class*="control"]').last();
    await multiSelect.click();
    await page.locator('#react-select-4-option-1').click();

    expect(await page.locator('div[class*="multiValue"] div').nth(0)).toContainText('Blue');
    await multiSelect.locator('input#react-select-4-input').clear();

    await multiSelect.locator('div input#react-select-4-input').fill('green');
    await page.keyboard.press('Enter');
    await page.locator('.text-center').click(); // to close the dropdown
    expect(await page.locator('div[class*="multiValue"] div').nth(0)).toContainText('Green');

    const selectMenu = page.locator('#selectMenuContainer');
    expect(selectMenu).toBeVisible();

})

test('Verify old style select menu', async({page}) =>{
//setTimeout(function name(){debugger}, 3000)

    await page.goto('https://demoqa.com/select-menu');
    await page.waitForLoadState('load');

    const selectOption = page.locator('#oldSelectMenu');
    expect(selectOption).toBeVisible();
    await selectOption.selectOption('2');
    expect(await selectOption.inputValue()).toBe('2');
    console.log(await selectOption.inputValue());
})

test('Verify standard multi select', async({page}) =>{
//setTimeout(function name(){debugger}, 3000)

    await page.goto('https://demoqa.com/select-menu');
    await page.waitForLoadState('load');
    const multiSelectOption = page.locator('#cars');
    expect(multiSelectOption).toBeVisible();
    await multiSelectOption.selectOption(['volvo', 'saab']);
    expect(await multiSelectOption.inputValue()).toBe('volvo');
    console.log(await multiSelectOption.inputValue());

})