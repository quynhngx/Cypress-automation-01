Feature: End-to-end Ecommerce validation

    Regression Testing
    @Regression
    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items into Cart
        And Validate the total prices
        Then Select the country, submit and verify Thankyou message

    @Smoke
    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill all the details into the form
            | name      | gender |
            | Khoai Tay | Female |
        Then Validate the form behaviour
        And Click Shop page

