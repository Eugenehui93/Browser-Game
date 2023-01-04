# Bootleg Jeopardy
This is a trivia game with a format similar to Jeopardy. It is a single player game which has a true/false format with varying levels of difficulty and different genres. The player is able to keep track of their score as they play. This project uses html, css, and javascript. 
## Description
There are four categories in this game, and each category has 3 trivia cards of increasing difficulty level: easy(100 points), medium(200 points), and hard(300 points). WHen the player clicks on a card, a trivia question will show, with the buttons 'true' or 'false.' If the question is answered correctly, points will be added to the total score, shown at the bottom of the game. The card then changes color, and the player is able to select another card to answer. 
## References
* The game uses this API to produce questions from different trivia genres. `https://opentdb.com/api.php?amount=1&category=${genre.id}&difficulty=${level}&type=boolean`
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
## License
MIT License

Copyright (c) [2022] [Yee Ching Hui]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
