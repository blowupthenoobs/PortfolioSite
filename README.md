A silly little portfolio site I've been working on for awhile. Fully Equipped with it's own MYSQL server/database running on my rasp pi with some of the functions I envisioned for it. That being namely to do with the secrets menu.

If you wish to run this website on your computer, you may want to note that there are 3 different parts to it:
    1.) This wesbite you see here
    2.) MySQL Database (https://github.com/blowupthenoobs/Databasing)
    3.) My myDrive Reskin (https://github.com/blowupthenoobs/driveCloneThing)

To run the first part of the website, after downloading it, you will want to cd into the portfoliosite folder, and there's a chance it's already built in the repo from my idiocies, but if not you should run "npm run build" in the terminal. First you will want to set up the .env file, requiring an entry for VITE_BackEndLocation with the route towards the 2nd component of the website. After that you can hit "npx vite preview" and it should run the website locally on your computer.
(worth noting that for some reason this first part only works on a linux based system, that includes mac unfortunately)

The second part, the MySQL Database is rather straightforward to use, after downloading it, all you should need to do, assuming you have the basic MySQL stuff on your computer is run "node index.js" to start the database server.

//Old README
A silly little portfolio site I have big plans for. I have a custom MySQL thing that I haven’t yet integrated, so it’s not in the project, but all the other stuff is, though a lot of it isn’t really used on the main hosting location (Render.)
I built some temporary links to lead you to a reskin of the subnub/drive on github (https://github.com/subnub/myDrive) that I’ve made several tweaks to. I spent awhile trying to get link forwarding(?) working, but didn’t quite manage to do so, hence the temporary links.

If you wish to put the project on your computer, I’ve been a bit of a little gremlin in which I didn’t use the gitignore properly, so all the React/Vite stuff is in the repo, so as for setting it up, all you really need is to open the project on a linux based system (mac works here, I have no idea why it only works on linux, but it’s where I was gonna host it anyhow,) and then go into the terminal and write: npm run dev
Once you do that, the project should open to the portfolio site, however if you tinker with the App.jsx file, you can reconfigure it to go to the fake google drive.
