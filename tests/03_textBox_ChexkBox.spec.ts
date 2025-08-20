import { expect, test} from "@playwright/test"

test('verify the text box', async ({page}) => {

    await page.goto('https://demoqa.com/text-box');


    await page.getByPlaceholder('Full Name').fill('Green house');
    await page.locator('#userEmail').fill('green@example.in');
    await page.locator('textarea').nth(1).fill('I am having a green house.');
    await page.locator('textarea#permanentAddress').fill('we have a green world');
    await page.getByRole('button', {name: 'submit'}).click();

    expect(page.locator('#output p#name')).toContainText('Green')
    expect.soft( await page.locator('#output p#name').innerText()).toContainEqual('Green')
    expect(page.locator('#output p').first()).toContainText('Green')
})

test.only('verify the check box', async ({page}) => {

    await page.goto('https://demoqa.com/checkbox');
    await page.getByLabel('Toggle').click();
    await page.waitForLoadState('load')
    const getAllCheckboxes = await page.locator('.rct-checkbox').all()
    console.log(getAllCheckboxes.length);
        for (const y of getAllCheckboxes) {
             await y.check();
             await y.isChecked();
        }
})





