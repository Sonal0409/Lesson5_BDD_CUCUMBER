

Feature: Money withdrawl

Scenario: this is first scenario

Given I am on the Banking application
And I have $ 500 in the account
When I withdraw $ 200
# describes expected output or result
Then The amount should be $300

Scenario: this is second scenario

Given I am on the Banking application
And I have $ 500 in the account
When I withdraw $ 200
# describes expected output or result
Then Check for statmment update
