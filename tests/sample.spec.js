import {test} from '@playwright/test'

test('Sample', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})