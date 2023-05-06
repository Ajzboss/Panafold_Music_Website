# Panafold
Panafold Is Going Into The Music Industry!
The valiant intern has taken on the task of coding up a rough draft of the companies brand new website!
#To Test this Website:
### 1. Git clone the repo
### 2. cd into the `panafold_music` folder
### 2. Install Required Dependencies
```
npm install
```
### 3. Start the Program in Terminal
```
'npm run dev'
```
# Feature List:
### 1. Fetches Data from the Apple Music JSON provided
  -  Utilizes NEXTJS's getStatic props to render at build time, improving performance
### 2. Displays fetched data in a responsive flexbox
### 3. Dynamically links each album to it's own individual page, with album specific data sent as a prop to the unique page to populate
  -  Each Page has a back to home button which can be used to return to the main album list
### 4. Includes a search bar that searches through the album list and displays matching
  -  Is a strict search(does not deal misspelling, no autocorrect)
  -  Queries a search on typing out a phrase and pressing enter
### 5. Includes a sort function that sorts 3 categories(Artist,Album Name, Release Date), selectable by a dropdown list

## Dependencies:
-NextJS
-React
-Tailwind CSS
-Material UI
-A couple public imported components


