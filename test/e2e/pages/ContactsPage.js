var ContactsPage = function() {

  this.visit = function() {
    browser.get('http://localhost:3000/#/contacts');
  };

  this.getLoggedUser = function() {
    return element(by.id('logged-user')).getText();
  };

  this.getListCount = function() {
    return element.all(by.repeater('contact in contacts')).count();
  };

  this.removeFirstListItem = function() {
    element(by.repeater('contact in contacts').row(0))
      .element(by.css('.btn')).click();
  };

};

module.exports = ContactsPage;
