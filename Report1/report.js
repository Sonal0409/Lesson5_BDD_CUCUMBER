$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Comments.feature");
formatter.feature({
  "name": "Guess the word",
  "description": "when in group\nand when in person",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A person start the game",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A person starts a game",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "in the group guess the word",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Another person joins the game",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Another person join the game",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "he has to guess the word",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/main/java/features/Example.feature");
formatter.feature({
  "name": "login page",
  "description": "Example: Test for login on chromeBrowser\nGiven\nWhen\nThen\nAnd\nBut\n\nExample: Test for login on Firefox browser\nGiven\nWhen\nThen\nAnd",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test for login on IE browser",
  "description": "Given\nWhen\nThen",
  "keyword": "Scenario"
});
formatter.uri("file:src/main/java/features/RediffLogin.feature");
formatter.feature({
  "name": "To test rediff Mypage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test rediff page on chrome Browser",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Chrome browser opened successfully",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.StepDefinition.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Open the application URL",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.StepDefinition.openUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the title of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.StepDefinition.validatetitle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the URL of the Page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.StepDefinition.valiadteURL()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/main/java/features/Rule.feature");
formatter.feature({
  "name": "requests on payment page",
  "description": "Rule: There can only one admin for requests",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create requests by admin",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on request page as admin",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I create a request",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Request created succesfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "approve request by employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on request page as Employee",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I approve a request",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Request is not approved.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "exception is thrown",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "approve requests by guest",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on request page as Guest",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I create a request",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Request is not created.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "exception is thrown",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});