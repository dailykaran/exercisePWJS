import { test, expect } from "@playwright/test"

test('Verify frames', async({page}) =>{
    await page.goto('https://demoqa.com/frames');
    await page.waitForLoadState('load');
    const frameForm = page.locator('#framesWrapper');
    expect(frameForm).toBeVisible();
    console.log(await frameForm.frameLocator('#frame1').locator('#sampleHeading').textContent());
    console.log(await frameForm.frameLocator('#frame2').locator('#sampleHeading').textContent());
     
    const frame = await page.frames();
    console.log(frame.length);
    
    expect(frame.length).toBeGreaterThan(10);
    console.log((await frame[8].title()).toString() + ' ' + frame[8].url());

    
    const frame1 = page.frameLocator('iframe');
    expect(frame1).toBeTruthy();
    expect(await page.frameLocator('#frame1').locator('h1')).toContainText('This is a sample page');
    
    const frame2 = page.frameLocator('#frame2');
    expect(frame2).toBeDefined();
    expect(await frame2.locator('#sampleHeading').textContent()).toBe('This is a sample page');


})

