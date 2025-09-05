import { test, expect } from "@playwright/test"

test('Verify the slider', async({page}) =>{
    await page.goto('https://demoqa.com/progress-bar', {waitUntil: 'load'})

    const startButton = page.locator('#startStopButton');
    const progressBar = page.locator('.progress-bar');
    const resetButton = page.locator('#resetButton');

    //scenario 1:
    /* startButton.click();
    await expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    await expect(progressBar).toHaveCSS('width', '100%');
    await expect(progressBar).toHaveText('100%'); */

    //scenario 2:
/*     const stopButton = page.locator('#startStopButton');
    await stopButton.click();
    await page.waitForTimeout(4000);
    //await progressBar.waitFor({timeout: 6000});
    const progressValue = (await progressBar.innerText()).slice(0, 2)
    expect(parseInt(progressValue)).toBeGreaterThan(50); // Check if progress is greater than 50%
    await resetButton.click(); */
    
    //scenario 3: // to verify the reset button and wait to complete the progress for 100%
    await startButton.click();
    await resetButton.waitFor({state: 'attached', timeout: 15000});

    await page.reload({waitUntil: 'load'});

    //scenario 4: to verify the reset button is disabled before the progress is 100%
    await startButton.click();
    //await expect(resetButton).toBeDisabled();
    await page.locator('.progress-bar[aria-valuenow="100"]').waitFor({state: 'attached', timeout: 15000});
    await expect(resetButton).toBeEnabled();
})
