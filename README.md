# Clever Virtual Wanderer App

**Try it here: https://clever-virtual-wanderer.vercel.app/**

### 2nd Project created during General Assembly Software Engineering Immersive Bootcamp

*JS Library: React*
*Build Tool: Vite*
*Styling Framework: Tailwind CSS*

## The App

![Virtual View Image](./virtual-viewing.jpg "Woman Viewing Dashboard")
Source: https://pixabay.com/images/id-6929333/

**Simple Trivia App, with cheesy content, that generates a random country for user to "virtually" visit and learn about.**

*The App pulls from restcountries API for information for country trivia quiz and pulls from Unsplash API for images of selected country.*

NavBar: Home - About - *Globe (shown later)*

1. HomePage
- Simple welcome message and globe emoticon.
- Username input to be stored for use in subsequent pages.

2. About Page
- Write-up describing the motivations of the App.
- Simple passphrase input to test a useNavigate interface.

3. Globe Page
- Shows sub-region buttons sorted by regions, as provided by API.
- Buttons, in general, links to Flags Page (point 4).
- 1 Button links to SpaceOddity Page (point 7).
- User can click on sub-region button to link to Flags Page.

4. Flags Page
- Shows flags (if available) of countries in the sub-region User selected.
- App selects randomly selected country in the sub-region and highlights the country's flag.
- Button links to the Quiz Page.

5. Quiz Page
- Header with country name and quiz score counter.
- Creates multiple question components, with facts generated by restcountries API.
- Does a coin flip to decide whether each country should be given a True or False answer.
- Questions come with question statement, answer statements and True/False buttons.
- Buttons disable and adds to score count if answer is correct.
- New button appears when all questions are answered.

6. Results Page
- Show header text.
- Show quiz score results.
- Shows key facts of generated country.
- Pulls from Unsplash API to generate photos based on country as query term.
- Button to return to Globe Page.

7. SpaceOddity Page
- Simple guessing game that updates statement based on buttons clicked.
- New button, that links to Space Page, appears when all 10 buttons are clicked.

8. Space Page
- Show header text.
- Pulls from Unsplash API to generate photos based on randomly selected space-related words as query term. Array of space-related words stored in array.
- Button to return to Globe Page.