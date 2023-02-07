Feature: Search data from Zero Bank Web

  I want to open Zero Web Bank
  
  @focus
  Scenario: Opening a search engine page
    Given A user opens Zero Bank page
    When A user type "Bills" in the search and press Enter
    Then A user should see the result