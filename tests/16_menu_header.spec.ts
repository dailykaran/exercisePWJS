import { test, expect } from "@playwright/test"

test('Verify the hover and get tool tips', async({page}) =>{
    await page.goto('https://demoqa.com/menu', {waitUntil: 'load'});

    await page.getByRole('link', {name: 'Main Item 2'}).hover();
    await page.getByRole('link', {name: 'SUB SUB LIST'}).hover();
    await page.getByRole('link', {name: 'Sub Sub Item 2'}).hover();
    console.log(await page.getByRole('link', {name: 'Sub Sub Item 2'}).innerText());
    



})