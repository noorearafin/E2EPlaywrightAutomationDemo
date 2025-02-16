// @ts-check
const { test, expect } = require('@playwright/test');
const { count } = require('console');

test('Signup',async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator(".text-reset").click();
  await page.locator("#firstName").fill("Rafi");
  await page.locator("#lastName").fill("Arafi");
  await page.locator("#userEmail").fill("noorearafin@gmail.com");
  await page.locator("#userMobile").fill("3162842091");
  await expect(page.locator("div[class='invalid-feedback'] div")).toBeHidden();
  //await page.locator(".custom-select.ng-valid.ng-dirty.ng-touched").isVisible();
  // const occupation = page.locator(".custom-select.ng-valid.ng-dirty.ng-touched");
  // await occupation.selectOption("3: Engineer");
  await page.getByRole('combobox').selectOption('3: Engineer');
  await page.locator("input[value='Male']").click();
  await page.locator("#userPassword").fill("Arafin2000");
  await page.locator("#confirmPassword").fill("Arafin2000");
  await page.locator("input[type='checkbox']").click();
  await page.locator("#login").click();
  await page.pause();

})

test.only('e2e',async({page})=>
  {
    const productName = 'ADIDAS ORIGINAL';
    const products = await page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("noorearafin@gmail.com");
    await page.locator("#userPassword").fill("Arafin2000");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    const count = await products.count();
    console.log(titles);
    for(let i=0; i< count ; ++i){
      console.log(await products.nth(i).textContent());
      if(await products.nth(i).locator("b").textContent() === productName){
        //add the cart
        await products.nth(i).locator("text = Add To Cart").click();
        break;
      }
    }
    await page.locator("[routerlink *= 'cart']").click();

    const selectProduct = await page.locator(".cartSection");
    const cartItem = await selectProduct.allTextContents();
    const count2 = await selectProduct.count();
    for (let i=0;i<count;++i){
      if(await selectProduct.nth(i).locator("h3").textContent() === productName){
        //buynow
        //await selectProduct.nth(i).getByRole('button',{name : 'Buy Now'}).click();
        await selectProduct.getByText('Buy Now').click();
        break;
      }
    }
    
    //Payment
    console.log(await page.locator(".item__title").textContent());
    
    await page.locator("input[placeholder='Select Country']").pressSequentially("Ban");
    await page.getByRole('button', { name: ' Bangladesh' }).click();
    await page.locator("[name = coupon]").fill("rahulshettyacademy");
    await page.locator("[type*='submit']").click();
    await page.locator("//a[normalize-space()='Place Order']").click();

    //ordernumber

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

    //orderPage

    await page.locator("button[routerlink *= '/myorders']").click();

    await page.waitForSelector("tbody tr");
    const rows = await page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      
      console.log(`Row ${i}:`, rowOrderId?.trim(), " | Expected:", orderId);
      
      await page.waitForLoadState("networkidle");
  
      if (orderId?.includes(rowOrderId)) {
          await rows.nth(i).locator("button").first().click();
          console.log(`Clicked button in row ${i}`);
          break;
      }
    }


    await page.pause();


  })