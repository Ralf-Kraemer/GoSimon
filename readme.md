## GoSimon – Gamified Group Chats  
###### (Working Title; unfinished)

#  

#### App Icon / Logo:
![GoSimon-Logo](./app/GoSimon/assets/images/ios/gs-icon-ios-180.png)

#### Key ideas:  

1. An algorithm matches groups of people, ideally small groups of about 4-20, using similarities in location, interests and potentially other parameters as weights/factors ([See also](https://github.com/Ralf-Kraemer/Matching-Algo-Sandbox-Prototype))  

2. A chat bot, integrated with a CRM system, regularly prompts the group, to prevent it from becoming inactive.
Prompts can be news, memes, jokes, fun facts, discussion topics, and riddles, as well as occasional recommendations for relevant products, restaurants or activities.

3. Groups can interact with the bot, and each other, either by writing in the chat, or by using a set of quick buttons for commands.
	* Commands include initiating votes or inviting the group to a game.
	* Groups vote on changes to the group's settings and member list
	* An "app store" allows the group to further personalize its experience, with possibilities hypothetically ranging from custom emojis to internal chess tournaments.

4. The bot also serves as a moderator, tracking inequalities and imbalances, counting votes, and enforcing rules.

#### (Intended) Tech Stack:
  
Frontend: Angular Web App serves as GUI, wrapped for Android and iOS with Cordova  
Backend: CouchDB
  
© Ralf Kraemer 2019 – 2020