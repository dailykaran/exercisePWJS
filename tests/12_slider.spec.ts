import { test, expect } from "@playwright/test"

test('Verify the slider', async({page}) =>{
    await page.goto('https://demoqa.com/slider', {waitUntil: 'load'})
    
    // scenario 1
   /*  await page.locator('input[type="range"]').fill("75");
    await page.waitForTimeout(1000); */

    await page.reload({waitUntil: 'load'});
    
    // scenario 2
    const slider1 = page.locator('input.range-slider');
    const boundingBox = await slider1.boundingBox();
    
    if(boundingBox){
        const xOffset = boundingBox.width * 0.75; // Move to 75% of the slider's width
        await slider1.click({ position: {x: xOffset, y: 0}})
    }else{
        throw new Error('Slider bounding box not found');
    }
    
    await page.reload({waitUntil: 'load'});
    
/*     await page.locator('input[type="range"]').focus();
    await page.keyboard.press('ArrowRight'); 
    //await page.keyboard.press('ArrowLeft');  
    await page.waitForTimeout(1000); */
    
    // scenario 3
    const slider2 = page.locator('input.range-slider');
    const Box = await slider2.boundingBox();
    if(Box) {
        await slider2.click({ position: { x: Box.width * 0.9, y: Box.height / 2 } });
    }else{
        throw new Error('Slider bounding box not found');
    }
    

    // scenario 4
    await page.reload({waitUntil: 'load'});
    const thumb = page.locator('input.range-slider');
    const targetPosition = { x: 350, y: 0 }; 

    await thumb.dragTo(thumb, {
        targetPosition,
        force: true, 
    });

})
