import {test, chromium, expect} from "@playwright/test"

test('verify the alert and accept', async ({page}) => {

    await page.goto("https://demoqa.com/alerts");
    await page.waitForLoadState('load');

    page.on('dialog', async(dialog)=> { 
        await expect(dialog.type()).toContain('alert');    
        await dialog.accept();
    })
    await page.locator('#alertButton').click();
})

test('verify the confirm and prompt', async ({page}) => {

    await page.goto("https://demoqa.com/alerts");
    await page.waitForLoadState('load');

    page.on('dialog', async(dialog)=> { 
        await expect(dialog.type()).toContain('prompt');    
        await dialog.accept("adding a new_text");
    })
    await page.locator('#promtButton').click();
    expect(await page.locator('#promptResult').innerText()).toContain('new_text');

})


test('verify the modal dialog', async ({ page }) => {
  await page.goto('https://demoqa.com/modal-dialogs');
  await page.waitForLoadState('load');
  await page.locator('#showLargeModal').click();
  
  const modal = page.locator('.modal-content');
  await modal.waitFor({ state: 'visible' });
  
  const modalTitle = page.locator('.modal-title.h4');
  await expect(modalTitle).toHaveText('Large Modal');
  
  const modalBody = page.locator('.modal-body');
  await expect(modalBody).toContainText('simply dummy');
  
  await page.locator('.modal-header .close').click();
    
  await modal.waitFor({ state: 'hidden' });
  await expect(modal).not.toBeVisible();
  

});
