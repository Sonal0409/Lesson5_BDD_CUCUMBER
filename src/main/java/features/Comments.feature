# Author = Sonal
# Date = 09-Nov
# app = rediff
# Tester = Sonal

Feature: Guess the word
when in group
and when in person

# this is first scenario
Scenario: A person start the game
When A person starts a game
Then in the group guess the word

# This is second Scenario
Scenario: Another person joins the game
When Another person join the game
Then he has to guess the word
