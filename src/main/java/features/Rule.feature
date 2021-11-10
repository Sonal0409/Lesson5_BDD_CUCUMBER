
Feature:  requests on payment page

Rule: There can only one admin for requests

Scenario: Create requests by admin
Given I am on request page as admin
When I create a request
Then Request created succesfully


Scenario: approve request by employee

Given I am on request page as Employee
When I approve a request
Then Request is not approved. 
And exception is thrown

Scenario: approve requests by guest 

Given I am on request page as Guest
When I create a request
Then Request is not created. 
And exception is thrown