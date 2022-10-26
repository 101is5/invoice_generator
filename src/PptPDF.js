
const ppt = require('puppeteer')

async function printPDF(){
    const browser = await ppt.launch({headless: true})
    const page = await browser.newPage()
    await page.goto("https://www.google.com", {waitUntil: 'networkidle0'})
    const pdf = await page.pdf({format: 'A4', path: "./pdf1.pdf" })
    await browser.close()
    return pdf
}

printPDF()