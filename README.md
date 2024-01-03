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

 - This game does support a local "offline" mode (you have the game from Steam - duh). This also includes a local replay (again, just watch it via Steam or the localhost address if you're on M1 MacOS), though it's more of a live play since the game is constantly active.


### Bot Notes:

 - Bot1
     - 
 - Bot2
     - Built off of the "Screeps Tutorial Walkthrough for Beginners" YouTube playlist. That playlist is based on the [Screeps tutorial](https://screeps.com/a/#!/sim/tutorial).
     - Very basic bot that is meant to teach the fundamentals.
 - Bot3
 - Bot4


### References:

 - Screeps: World Documentation:
     - [Steam Store](https://store.steampowered.com/app/464350/Screeps_World/)
     - [Screeps Website](https://screeps.com/a/)
     - [Documentation](https://docs.screeps.com/)
     - [Training](https://screeps.com/a/#!/sim)
     - [Forums](https://screeps.com/forum/)
     - [Apple M1 Support Forum Thread](https://screeps.com/forum/topic/3131/crashing-on-m1-macs/19)
     - [3rd Party Support](https://docs.screeps.com/third-party.html)
 - 3rd Party Packages:
     - [screeps-steamless-client](https://github.com/laverdet/screeps-steamless-client)
     - [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth)
     - [xxscreeps](https://github.com/laverdet/xxscreeps/)
 - YouTube
     - Let's Play Screeps with Typescript & VSCode
         - [Let's Play Screeps with TypeScript and Visual Studio Code #1](https://www.youtube.com/watch?v=OhBLmkiTZe4&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=1&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #2](https://www.youtube.com/watch?v=aw24zspvzrQ&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=3&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #3](https://www.youtube.com/watch?v=ldu_AI7t_5o&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=3&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #4](https://www.youtube.com/watch?v=skEFSZiIXQ8&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=4&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #5](https://www.youtube.com/watch?v=xFdqjy43zMw&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=5&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #6](https://www.youtube.com/watch?v=In1F7eazGNo&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=6&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #7](https://www.youtube.com/watch?v=6IOG8qLEUiM&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=7&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #8](https://www.youtube.com/watch?v=x4tEDDJWdpQ&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=8&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #9](https://www.youtube.com/watch?v=1VQXysf4YcM&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=9&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #10](https://www.youtube.com/watch?v=KAAsZMyEK2M&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=10&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #11](https://www.youtube.com/watch?v=KziQ5nmIJQ0&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=11&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #12](https://www.youtube.com/watch?v=uRwY4QQOMmw&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=12&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #13](https://www.youtube.com/watch?v=o14uEV93Qus&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=13&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #14](https://www.youtube.com/watch?v=8V6QhkfS4Uc&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=14&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #15](https://www.youtube.com/watch?v=kY2n-ubHWps&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=15&ab_channel=KarateSnoopy)
         - [How to setup the Screeps standalone server and the TypeScript starter project as of July 2018](https://www.youtube.com/watch?v=UpPGEHSPJKo&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=16&ab_channel=KarateSnoopy)
         - [Let's Play Screeps with TypeScript and Visual Studio Code #17](https://www.youtube.com/watch?v=93SJcCm3oNU&list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw&index=17&ab_channel=KarateSnoopy)
     - Screeps Tutorial Walkthrough for Beginners
         - [Screeps Tutorial Walkthrough for Beginners - 0. Introduction](https://www.youtube.com/watch?v=dWP3VRKmV4Q&list=PL1m2M8LQlzfKndesWcReHzj9-zq1qP2CG&index=1&ab_channel=LearnCodeByGaming)
         - [Screeps Tutorial Walkthrough for Beginners - 1. Game UI & Basic Scripting](https://www.youtube.com/watch?v=OacP_hyKs0c&list=PL1m2M8LQlzfKndesWcReHzj9-zq1qP2CG&index=2&pp=iAQB&ab_channel=LearnCodeByGaming)
         - [Screeps Tutorial Walkthrough for Beginners - 2. Upgrading Controller](https://www.youtube.com/watch?v=HCSiOBFDGnQ&list=PL1m2M8LQlzfKndesWcReHzj9-zq1qP2CG&index=3&ab_channel=LearnCodeByGaming)
         - [Screeps Tutorial Walkthrough for Beginners - 3. Building Structures](https://www.youtube.com/watch?v=66tS8FAeAhI&list=PL1m2M8LQlzfKndesWcReHzj9-zq1qP2CG&index=4&ab_channel=LearnCodeByGaming)
         - [Screeps Tutorial Walkthrough for Beginners - 4. Auto-Spawning Creeps](https://www.youtube.com/watch?v=MbVdyt6D0RA&list=PL1m2M8LQlzfKndesWcReHzj9-zq1qP2CG&index=5&ab_channel=LearnCodeByGaming)
         - [Screeps Tutorial Walkthrough for Beginners - 5. Defending Your Room](https://www.youtube.com/watch?v=ZFLAWjHOPiQ&list=PL1m2M8LQlzfKndesWcReHzj9-zq1qP2CG&index=6&ab_channel=LearnCodeByGaming)
     - Screeps Beginner Tutorial
         - [Screeps Starter Codebase Template](https://www.youtube.com/watch?v=N7KMOG8C5vA&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=1&ab_channel=AtannerGaming)
         - [Screeps Noob Sandbox Server - New to Screeps? Join Here to Get Started](https://www.youtube.com/watch?v=CMyeMl0Q3dc&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=3&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 1 - Setting Up IDE - Basic Code - Documentation and Data Structures](https://www.youtube.com/watch?v=iir-tX10tHM&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=4&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 2 - Builder and Upgrader Roles, States and Simple Spawn Logic](https://www.youtube.com/watch?v=3wjBZMLSp7g&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=4&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 3 - Saving Data in Memory and Lodash Functions](https://www.youtube.com/watch?v=Cywgw2xY2Xs&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=5&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 4 - Builder Creep Spawning and Creep Prototype Functions](https://www.youtube.com/watch?v=PO_QdM9gXm8&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=7&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 5 - RoomPosition Prototypes - JavaScript For Loops](https://www.youtube.com/watch?v=I2L5kzDZoTw&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=7&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 6 - Creep Harvest Energy Prototype Using the Previous Functions](https://www.youtube.com/watch?v=Y_o-ievkLNM&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=8&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 7 - Filtering Structure Types - Filling Extensions, Towers and Spawn](https://www.youtube.com/watch?v=PLlLUbDrQ8E&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=9&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 8 - Room Defense Code, Towers and Dealing with Invader Attacks](https://www.youtube.com/watch?v=T3m7Ds1f79U&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=10&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 9 - Larger Creep Spawning - Dynamic Body Types](https://www.youtube.com/watch?v=YMMEZReFRuM&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=11&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 10 - Refactoring and Cleaning Up Files](https://www.youtube.com/watch?v=h8ngTNSlblQ&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=12&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 11 - Problems With Creep Spawning Code](https://www.youtube.com/watch?v=nXBzLhMX2LQ&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=13&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 11.1 - Different Lodash Filter Syntax](https://www.youtube.com/watch?v=WaDaF3BHjLw&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=14&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 12 - Global Objects - Creep Role List Object](https://www.youtube.com/watch?v=35sEzmvKHw4&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=15&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 13 - Dedicated Energy Source Miner](https://www.youtube.com/watch?v=14d0vILkCXo&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=16&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 14 - Energy Harvesting In Other Rooms - Adding Energy to Storage](https://www.youtube.com/watch?v=YIS6G6Y3s0E&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=17&ab_channel=AtannerGaming)
         - [Screeps Tutorial - Part 15 - Migrating Code to Starter Template (Link in Desc)](https://www.youtube.com/watch?v=zzBx2btmeJg&list=PLw9di5JwI6p-HUP0yPUxciaEjrsFb2kR2&index=18&ab_channel=AtannerGaming)
     - Screeps Nooby Guide - by th_pion
         - [Screeps Nooby Guide #1: Choosing a room and setting up IDE - by th_pion](https://www.youtube.com/watch?v=edBMmOAfJ-Q&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=1&ab_channel=th_pion)
         - [Screeps Nooby Guide #2: Harvesting Energy - by th_pion](https://www.youtube.com/watch?v=8woEL3hQeNY&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=2&ab_channel=th_pion)
         - [Screeps Nooby Guide #3: Upgrading the Controller - by th_pion](https://www.youtube.com/watch?v=GCnwbNW6Y5k&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=3&ab_channel=th_pion)
         - [Screeps Nooby Guide #4: Spawning Creeps - by th_pion](https://www.youtube.com/watch?v=vlVSwfM1sR8&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=4&ab_channel=th_pion)
         - [Screeps Nooby Guide #5: Building Things - by th_pion](https://www.youtube.com/watch?v=prmhEdyFK1A&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=5&ab_channel=th_pion)
         - [Screeps Nooby Guide #6: Repairing and Extensions - by th_pion](https://www.youtube.com/watch?v=T1iTp5Av6ls&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=6&ab_channel=th_pion)
         - [Screeps Nooby Guide #7: Advanced Spawning and Prototypes - by th_pion](https://www.youtube.com/watch?v=MAeO44aBgw8&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=7&ab_channel=th_pion)
         - [Screeps Nooby Guide #8: Towers and Walls - by th_pion](https://www.youtube.com/watch?v=1UB0h468A8M&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=8&ab_channel=th_pion)
         - [Screeps Nooby Guide #8.1: Fixing the WallRepairer - by th_pion](https://www.youtube.com/watch?v=XgCBdF1BBdE&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=9&ab_channel=th_pion)
         - [Screeps Nooby Guide #9: Local Private Server - by th_pion](https://www.youtube.com/watch?v=KK7Cnum6DUc&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=10&ab_channel=th_pion)
         - [Screeps Nooby Guide #10: Long Distance Harvesting - by th_pion](https://www.youtube.com/watch?v=BiIDH2Ui8L8&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=11&ab_channel=th_pion)
         - [Screeps Nooby Guide #11: Multi-Rooming - by th_pion](https://www.youtube.com/watch?v=b_dn8a7xvec&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=12&ab_channel=th_pion)
         - [Screeps Nooby Guide #12: Container Mining - by th_pion](https://www.youtube.com/watch?v=XyRQDmZWPDU&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=13&ab_channel=th_pion)
         - [Screeps Nooby Guide #13: Storage - by th_pion](https://www.youtube.com/watch?v=lYzJC7dAGec&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=14&ab_channel=th_pion)
         - [Screeps Nooby Guide #14: Refactoring - by th_pion](https://www.youtube.com/watch?v=6b-ZZ6bROWI&list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2&index=15&ab_channel=th_pion)