Feature: Login test on mobile app
    As a guest user
    I want to be able to test login screen with credentials

    Background:
        Given I launch the app
        Then  I expect that element id:username_txt is displayed

    Scenario: Successfully Login
        When  I set cucumber@mobven.com to the inputfield id:username_txt
        And I set Pass321* to the inputfield id:password_txt
        And  I tap that element id:login_btn
        Then  I should see that element id:account_layout to be displayed