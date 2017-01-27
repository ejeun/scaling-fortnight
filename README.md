#goals we had for MVP:
- chat capability with markov chain we develop, incorporates user input as part of its corpus
- user can send images to cat that will be recognized, with uploading integrated into the chat dialog
- you adopt a cat with built-in preferences when you  sign up and your user account saves info
- we will have 3-5 cats with different markov chain (different manners of speech)
- relationship score: points for sending photos that cat's likes, cat leaves if the score is low...
- cat has a secret dream in life and the goal is to guess the dream. The cat's likes/dislikes are all related hints for the dream.
- clean, mobile friendly ui
- visuals / cat graphic has some animation

#working parts:
- chat functionality and basic convo works with our frontend markov chain logic
- images can be sent (clarifai api hooked up) on /images
- home, navbar, signup, and login pages
- user models,  cat models, and association as pet exists

#not-yet-working parts:
- no lasting info or points carried over from sessions on a user account
- "game" aspect needs to be written into code (points, cat's personality)
- chatbox doesn’t accept images yet, and images need to responded to appropriately

#open / unresolved questions:
- which are the most worthwhile and efficient ways to improve upon our existing markov chain? we want to cat to learn quickly and to make relevant responses without a huge load.
- how can we improve the game flow to increase cohesive feel?

#code that needs attention:

#instructions for building and using the project:
- npm run seed
- npm run build
- npm start
