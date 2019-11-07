class HomePage {

    static get elements() {
        return {
            contactpagelink: "//*[contains(@id, 'menu-topmenu-1')]//*[contains(@class, 'menu-item-23')]"
        }
    }
    
    // Open de contact pagina
    static openContactPage() {
        browser.click(HomePage.elements.contactpagelink)
    }

}

module.exports = { HomePage };