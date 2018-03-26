import indicoio

indicoio.config.api_key = 'xx' 

badReviewTest = "This place is really lousy, Ewa is a lousy person. When tenants come for complaints she tells people that she cannot help them.  Also you have to constantly remind her that the snow has not been shoveled around the pathway.  I do not think she realizes that without the tenants she would not have a job. The lady who was previously there before Ewa was great. The superintendent is very lazy and cannot understand what he is saying."

goodReviewTest = "We absolutely loved staying at the cob cottage! It was truly like living in a fairytale! We can't WAIT to visit again soon!"

# batch example
indicoDistr = indicoio.emotion([
    badReviewTest,
    goodReviewTest
])
