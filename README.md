A silly little portfolio site I've been working on for awhile. Fully Equipped with it's own MYSQL server/database running on my rasp pi with some of the functions I envisioned for it. That being namely to do with the secrets menu. I've been messing around with different ways to utilize my backend stuff, and it's been a rather fun journey. I definitely will want to do some redesigning, coloring, etc. in the future, but for now, I'm pretty happy with how it is.

This website used to be run in 3 parts:
    1.) This wesbite you see here
    2.) MySQL Database (https://github.com/blowupthenoobs/Databasing)
    3.) My myDrive Reskin (https://github.com/blowupthenoobs/driveCloneThing)

but as for that last one, I've been kinda separating it from the main site to be something more like how claude separates the API platform and the normal texting one.

To run the first part of the website, after downloading it, you will want to cd into the portfoliosite folder, and there's a chance it's already built in the repo from my idiocies, but if not you should run "npm run build" in the terminal. First you will want to set up the .env file, requiring an entry for VITE_BackEndLocation with the route towards the 2nd component of the website. After that you can hit "npm run dev" and it should run the website locally on your computer.

The second part, the MySQL Database is rather straightforward to use, after downloading it, all you should need to do, assuming you have the basic MySQL stuff on your computer is run "node index.js" to start the database server.