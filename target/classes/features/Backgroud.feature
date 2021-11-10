

Feature: Blogging App
only admin can post in all the blogs
Bloggers can post only in there blogs

Rule: admin and bloggers should be aware of the tasks

Backgroud:
Given we have admin named as Greg
And we have blogger as PersonX
And we have a blog app called myBlog.com

Scenario: PersonX posts in his blog
Given I am logged in as PersonX
When I post on my Blog
Then I should see my published post


Scenario: PersonX tries to post in someone else's blog and fails
Given I am logged in as PersonX
When I post on someone else's blog
Then I should see Hey! this is not your blog

Scenario: Greg posts in all the blogs
Given I am logged in as Greg
When I post on any Blog
Then I should see Your post is piblished









