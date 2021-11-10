
Feature:

Scenario: Multiple given keyword
Given one thing
Given Another thing
Given one another thing
When I open my eyes
Then I should see soemthing
Then I shouldn't see anything else

Scenario: replace Given
Given one thing
And Another thing
And one another thing
When I open my eyes
Then I should see soemthing
But I shouldn't see anything else

Scenario: Multiple AND
Given I am out for shopping
# whenever you have list of things then use *
* I got fruits
* I got vegetables
* I got milk
* I got butter
* i got bread
When I check my list
Then I don't need anything














