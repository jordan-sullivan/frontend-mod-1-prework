/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  incrementNumberOfLikes() {
    this.numberOfLikes = (this.numberOfLikes + 1)
  }
  addComments() {
    this.comments = (this.comments + " Can't wait to visit you soon!")
  }

}

var kimKTweet = new Tweet("Kim Kardasian", "I'm so famous for no reason!", "July 27th, 2020 1:30 PM", 103440, "People are going nuts over Kim K.'s dress at the awards'.")
var govPolisTweet = new Tweet("Governor Polis", "Get your Covid Booster!", "December 13, 2021 3:00 PM", 299, "Colorado's Vaccination levels are slowly rising.")
var grandmasTweet = new Tweet("Grandma MJ", "Look at my chickens!", "November 9th, 2021 9:09 AM", 25, "Grandma's chickens laid 36 eggs!")

console.log(kimKTweet);
console.log(govPolisTweet);
console.log(grandmasTweet);

kimKTweet.incrementNumberOfLikes();
console.log(kimKTweet);

grandmasTweet.addComments();
console.log(grandmasTweet);
