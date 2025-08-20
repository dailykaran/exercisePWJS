import {test, expect} from "@playwright/test"

test('verify the upload a file', async ({page}) => {
    await page.goto("https://demoqa.com/upload-download")

    await page.locator('#uploadFile').setInputFiles('./tests/files/protocols.png');
    //await page.locator('#uploadFile').click();
    expect(await page.locator('p#uploadedFilePath').innerText()).toContain('fakepath\\protocols')

})

test('verify the downloaded file', async ({page}) => {
    await page.goto("https://demoqa.com/upload-download")

    const downloadPromise = page.waitForEvent('download');
    await page.locator('#downloadButton').click();
    const download = await downloadPromise;
    
    await download.saveAs('./tests/files/' + download.suggestedFilename());
    
})
