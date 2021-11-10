# Author = sonal Mittal
# Lesson 5
Feature: To test rediff Mypage

  Scenario: Test rediff page on chrome Browser
    Given Chrome browser opened successfully
    When I Open the application URL
    Then Validate the title of the page
    And Validate the URL of the Page
