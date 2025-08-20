import {expect, Locator, Page, test} from "@playwright/test"
import axios from 'axios';

test('verify the radio button', async ({page}) => {
    await page.goto('https://demoqa.com/broken');

    const checkVaildImg = await page.locator('div > img[src*="Toolsqa.jpg"]').isVisible();
    expect(checkVaildImg).toBeTruthy();

})

test('verify the img URL', async ({page}) => {
    await page.goto('https://demoqa.com/broken');
    
/*     // Get multiple image url
    async function getImageUrls(page: Page): Promise<string[]> {
        return page.locator('header img[src*="Toolsqa"]').evaluateAll((imgs) =>
        imgs.map((img) => (img as HTMLImageElement).src));
    } */

    // Get the single image url
    async function getImageSingleUrl(page: Page): Promise<string> {
        return page.locator('header img[src*="Toolsqa"]').evaluate((img) => (img as HTMLImageElement).src)
    }
    const urlImg: any = await getImageSingleUrl(page)
    console.log(urlImg);
   
    expect((await axios.get(urlImg)).status).toBe(200);

})

test('verify the broken img width', async ({page}) => {
    await page.goto('https://demoqa.com/broken');
    //verify the broken image url response but it is always pass the response
    /*const brokenImgUrl = await page.locator('div > img[src*="Toolsqa_1.jpg"]').evaluate((img) => (img as HTMLImageElement).src)
    console.log(brokenImgUrl);
    expect((await axios.get(brokenImgUrl)).status).toBe(200); */

    const brokenImgUrl = await page.locator('div > img[src*="Toolsqa_1.jpg"]').evaluate((img) => ({width: (img as HTMLImageElement).naturalWidth}))
    console.log(brokenImgUrl)
    console.log(`Broken images found: ${JSON.stringify(brokenImgUrl)}`);
    expect(brokenImgUrl.width).toEqual(0);

})

test('Verify the valid link button', async ({page}) => {
    await page.goto('https://demoqa.com/broken');
    
    const linkCheck = await page.getByRole('link', {name: /Valid Link/i}).isVisible();
    expect(linkCheck).toBe(true); 

})

test('Verify the broken link button', async({page}) => {
    await page.goto('https://demoqa.com/broken');
        
    const linkButton: any = await page.getByRole('link', {name: /Broken Link/i}).evaluate((img) => (img as HTMLAnchorElement).href)
    console.log(linkButton);
    const responseBroken = await page.request.get(linkButton)
    expect(responseBroken.status()).toBe(200);

})

