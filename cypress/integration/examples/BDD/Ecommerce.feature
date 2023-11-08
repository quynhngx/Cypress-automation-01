Feature: End-to-end Ecommerce validation

    Regression Testing

    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items into Cart
        And Validate the total prices
        Then Select the country, submit and verify Thankyou message

    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill all the details into the form
        Then Validate the form behaviour
        And Click Shop page

