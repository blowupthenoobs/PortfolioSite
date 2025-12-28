A silly little portfolio site I've been working on for awhile. Fully Equipped with it's own MYSQL server/database running on my rasp pi with some of the functions I envisioned for it. That being namely to do with the secrets menu. I've been messing around with different ways to utilize my backend stuff, and it's been a rather fun journey. I definitely will want to do some redesigning, coloring, etc. in the future, but for now, I'm pretty happy with how it is.

If you wish to run this website on your computer, you may want to note that there are 3 different parts to it:
    1.) This wesbite you see here
    2.) MySQL Database (https://github.com/blowupthenoobs/Databasing)
    3.) My myDrive Reskin (https://github.com/blowupthenoobs/driveCloneThing)

To run the first part of the website, after downloading it, you will want to cd into the portfoliosite folder, and there's a chance it's already built in the repo from my idiocies, but if not you should run "npm run build" in the terminal. First you will want to set up the .env file, requiring an entry for VITE_BackEndLocation with the route towards the 2nd component of the website. After that you can hit "npx vite preview" and it should run the website locally on your computer.
(worth noting that for some reason this first part only works on a linux based system, that includes mac unfortunately)

The second part, the MySQL Database is rather straightforward to use, after downloading it, all you should need to do, assuming you have the basic MySQL stuff on your computer is run "node index.js" to start the database server.

The third section is technically optional, however you might then want to remove the /drive directory and such (as well as the Drive component.) If you intend on copying it anyways, the instructions you need to follow should be found at (https://github.com/subnub/myDrive) however it's worth noting that my changes require you to make it an FS server (ie. you can't use the amazon s3 thing. If you're running this, u prob don't need it anyhow I don't think.)