# Screeps AI

Description: My attempts/research into the Screeps: World game and apply different machine learning techniques to maximize my score.


### Setup:

 - The Screeps: World game is available through [Steam here](https://store.steampowered.com/app/464350/Screeps_World/)
 - Apple Silicon:
     - I've had issues launching the game on my M2 Macbook. This issue is well known and has been reported to the forum ([link to forum post](https://screeps.com/forum/topic/3131/crashing-on-m1-macs/19)). The main symptom is that the game will be launched through the Steam client but then crash immediately with the following error message: `mwjs quit unexpectedly: Click Reopen to open the application again. Click Report to see more detailed information and send a report to Apple`.
     - From the forum, the following [npm package](https://www.npmjs.com/package/screeps-steamless-client) is able to remedy this issue by serving up the game files into the browser.
         - Link do the `screeps-steamless-client` [GitHub repo](https://github.com/laverdet/screeps-steamless-client)
         - Install the package: `npm install -g screeps-steamless-client`
     - To launch the game with the `screeps-steamless-client`:
         - Download the game from Steam
         - Run the `screeps-steamless-client` wrapper/program: `npx screeps-steamless-client`
         - Open a browser of your choice and go to the desired world/address
             - Screeps: World official server: http://localhost:8080/(https://screeps.com)/
             - Local server (on 21025): http://localhost:8080/(http://localhost:21025)/
     - Additional notes (from the README.md of `screeps-steamless-client`):
         - Steam OpenId support is required on your local server which can be enabled with [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth). For [xxscreeps](https://github.com/laverdet/xxscreeps/) servers this should be enabled by default.
         - This client makes use of "guest mode" which is enabled by default in xxscreeps. This will provide you with a read-only view of the server when you are not signed in. The client will show you as signed in as user Guest and your icon will belong to the Invader user. To sign in with your Steam account you need to select "Sign Out" first, which will sign you out of Guest and bring you to the real login page. Click the Steam icon towards the bottom to sign-in with your Steam account and play the game as normal.


### Notes:

 - This game does support a local "offline".


### References:

 - Screeps: World Documentation:
     - [Steam Store](https://store.steampowered.com/app/464350/Screeps_World/)
     - [Screeps Website](https://screeps.com/a/)
     - [Documentation](https://docs.screeps.com/)
     - [Training](https://screeps.com/a/#!/sim)
     - [Forums](https://screeps.com/forum/)
     - [Apple M1 Support Forum Thread](https://screeps.com/forum/topic/3131/crashing-on-m1-macs/19)
 - 3rd Party Packages:
     - [screeps-steamless-client](https://github.com/laverdet/screeps-steamless-client)
     - [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth)
     - [xxscreeps](https://github.com/laverdet/xxscreeps/)