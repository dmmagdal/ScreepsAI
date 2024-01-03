var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    // 1)
    // Send creep to harvest energy (harvest() requires the energy 
    // source is adjacent to the creep).
    // var creep = Game.creeps['Harvester1'];
    // var sources = creep.room.find(FIND_SOURCES);
    // if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    //     creep.moveTo(sources[0]);
    // }

    // 2)
    // Added logic to move creep back to the spawn once it's full of
    // energy & tranfer it back to spawn. It will then go back to the
    // energy source & refill its storage. This cycle will repeat
    // indefinitely (or until the creep dies). Note that transfer()
    // requires the creep to be right next to the spawn.
    // var creep = Game.creeps['Harvester1'];
    // if (creep.carry.energy < creep.carryCapacity) {
    //     var sources = creep.room.find(FIND_SOURCES);
    //     if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    //         creep.moveTo(sources[0]);
    //     }
    // }
    // else {
    //     if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    //         creep.moveTo(Game.spawns['Spawn1']);
    //     }
    // }

    // 3)
    // The lifespan of a creep is 15,000 ticks. Spawning a creep costs
    // 200 energy. Using spawnCreep() will return an error code
    // ERR_NOT_ENOUGH_ENERGY (-6 in console) if there isn't enough
    // energy. You can set the spawn command in the console.
    // Command: Game.spawns['SpawnName'].spawnCreep([WORK, CARRY, MOVE], 'creepName');
    // Note that you can also define the body of a creep within the 
    // array. The code below goes through all of our creeps (should
    // have 2 by now) & executes the energy harvesting loop from above.
    // for (var name in Game.creeps) {
    //     var creep = Game.creeps[name];
    //     if (creep.carry.energy < creep.carryCapacity) {
    //         var sources = creep.room.find(FIND_SOURCES);
    //         if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    //             creep.moveTo(sources[0]);
    //         }
    //     }
    //     else {
    //         if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    //             creep.moveTo(Game.spawns['Spawn1']);
    //         }
    //     } 
    // }

    // 4)
    // Use the role.harvester module defined in a separate file to
    // reduce the amount of code in the main file. This also helps with
    // clean up & abstraction. This block still has the same
    // functionality as 3).
    // for (var name in Game.creeps) {
    //     var creep = Game.creeps[name];
    //     roleHarvester.run(creep);
    // }

    // 5)
    // Controlling the Room Controller. The Room Controller allows you
    // to build facilities in the room (higher controller level -> more
    // structures you are able to build). To do this, take one of the
    // worker creeps & upgrade the controller.
    // Command: Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Upgrader1');
    // Be sure to differentiate the upgrader creep from the harvester
    // creep(s) (do this by setting the role from the creep's memory:
    // Game.creeps['Harvester1'].memory.role = 'harvester'; 
    // Game.creeps['Upgrader1'].memory.role = 'upgrader'; 
    // ). You can check the creeps' memory in either the creep
    // information panel or the 'memory' tab (in the GUI). Over in the
    // main file, make sure that the creeps are operating on their 
    // respective roles. Note that the controller should be upgraded
    // every 20,000 ticks or else it will decay & lose a level.
    // for (var name in Game.creeps) {
    //     var creep = Game.creeps[name];
    //     if (creep.memory.role == 'harvester') {
    //         roleHarvester.run(creep);
    //     }
    //     if (creep.memory.role == 'upgrader') {
    //         roleUpgrader.run(creep);
    //     }
    // }

    // 6)
    // The controller upgrade gives access to some new structures
    // (walls, ramparts, & extensions). Extensions are required to
    // build larger creeps (creep with only one body part of one 
    // type works poorly). Giving a creep several WORKs will make it
    // work proportionately faster (at the cost of requiring more
    // energy than tha standard 300). To build a creep that costs over
    // 300 energy requires spawn extensions.
    // Controller lvl 2 gives 5 extensions for the player to build. The
    // number of extensions given increases with each new level. The
    // extensions can be placed at any spot in the room & a spawn can 
    // use them regardless of the distance. To build the extensions,
    // there needs to be a creep that can build structures.
    // Command:  Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Builder1', { memory: { role: 'builder} } );
}