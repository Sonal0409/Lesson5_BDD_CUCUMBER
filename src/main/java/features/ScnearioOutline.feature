Feature: Bankking app

  Scenario Outline: amount in the account
    Given there are <m1> in the account
    When I withdraw <m2>
    Then Check the final ammount to be <m3>

    Examples: 
      | m1   | m2  | m3  |
      |  300 | 200 | 100 |
      |  800 | 200 | 600 |
      | 1000 | 200 | 800 |
