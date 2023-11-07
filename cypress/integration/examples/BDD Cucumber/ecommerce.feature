Feature: End-to-end Ecommerce validation

    Regression Testing

    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items into Cart
        And Validate the total prices
        Then Select the country, submit and verify Thankyou message