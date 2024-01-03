var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');

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
    // Command:  Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Builder1', { memory: { role: 'builder'} } );
    // In total, we should have 550 unites of energy in our spawn + 
    // extensions. That is enough to build a creep with the body
    // [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]. This creep will
    // work 4x faster than a regular worker creep. It's body is heavier
    // so we add another MOVE to it. However, two parts are still not
    // enough to move it at a speed of a small fast creep, which would
    // require 4x MOVEs or building a road.
    // Command: Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], 'HarvesterBig', { memory: { role: 'harvester'} } );
    // for (var name in Game.rooms) {
    //     // To know the total amound of energy in the room, use the
    //     // property Room.energyAvailable.
    //     console.log(`Room "` + name + '" has ' + Game.rooms[name].energyAvailable + ' energy');
    // }
    // for (var name in Game.creeps) {
    //     var creep = Game.creeps[name];
    //     if (creep.memory.role == 'harvester') {
    //         roleHarvester.run(creep);
    //     }
    //     if (creep.memory.role == 'upgrader') {
    //         roleUpgrader.run(creep);
    //     }
    //     if (creep.memory.role == 'builder') {
    //         roleBuilder.run(creep);
    //     }
    // }

    // 7)
    // This section will focus on how to spawn creeps automatically.
    // Before, the Console was required to spawn in our creeps but we
    // want the colony to be self sufficient in replacing creeps that
    // die off. Since there are no events in the game to report death
    // of a particular creep, the easiest way is to just count the
    // number of required creeps. If it becomes less than a defined
    // value, start spawning. There are several ways to count the 
    // number of creeps of the required type. One of them is filtering
    // Games.creeps with the help of _.filter() & using the role in
    // their memory.
    // Let's say we want to have at least 2 harvesters at any time. The
    // easiest way to achieve this is to run StructureSpawn.spawnCreep
    // each time we discover it's less than this number. You may not
    // define its name (it will be given automatically in this case),
    // but dont forget to define the needed role. We may also add some
    // new RoomVisual call in order to visualize what creep is being
    // spawned.
    // To emulate a situation when one of the harvesters dies, issue
    // the following suicide() command in the Console.
    // Command: Game.creeps['Harvester1'].suicide();
    // An important point here is that the memory of dead creeps is not
    // erased but kept for later reuse. If you create creeps with
    // random names each time, it may lead to memory overflow, so you
    // should clear it in the beginning of each tick (prior to the 
    // creep creation code).
    // Apart from creating new creeps after the death of old ones,
    // there is another way to maintain the needed number of creeps:
    // the method StructureSpawn.renewCreep().
    // for (var name in Memory.creeps) {
    //     if (!Game.creeps[name]) {
    //         delete Memory.creeps[name];
    //         console.log('Clearing non-existing creep memory:', name);
    //     }
    // }
    // var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    // console.log("Harvesters: " + harvesters.length);
    // if (harvesters.length < 2) {
    //     var newName = 'Harvester' + Game.time;
    //     console.log('Spawning new harvester: ' + newName);
    //     Game.spawns['Spawn1'].spawnCreep(
    //         [WORK, CARRY, MOVE], 
    //         newName,
    //         { memory: { role: 'harvester' } },
    //     );
    // }
    // if (Game.spawns['Spawn1'].spawning) {
    //     var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
    //     Game.spawns['Spawn1'].room.visual.text(
    //         'spawning ' + spawningCreep.memory.role,
    //         Game.spawns['Spawn1'].pos.x + 1,
    //         Game.spawns['Spawn1'].pos.y,
    //         {align: 'left', opacity: 0.8}
    //     );
    // }
    // for (var name in Game.rooms) {
    //     console.log(`Room "` + name + '" has ' + Game.rooms[name].energyAvailable + ' energy');
    // }
    // for (var name in Game.creeps) {
    //     var creep = Game.creeps[name];
    //     if (creep.memory.role == 'harvester') {
    //         roleHarvester.run(creep);
    //     }
    //     if (creep.memory.role == 'upgrader') {
    //         roleUpgrader.run(creep);
    //     }
    //     if (creep.memory.role == 'builder') {
    //         roleBuilder.run(creep);
    //     }
    // }

    // 8)
    // The world of screeps is not the safest place. Other players may 
    // have claims to your territory. Besides, your room may be raided 
    // by neutral NPC creeps occasionally. You should think about your 
    // colony in order to develop it successfully. It is a good idea to
    // have walls to restrain hostile creeps temorarily, but they will 
    // fall sooner or later so we need to deal with the problem. The
    // surest way to fend off an attack is using the room Safe Mode. In
    // safe mode, no other creep will be able to use any harmful 
    // methods in the room (but you'll still be able to defend against 
    // strangers). The safe mode is activated via the room controller 
    // which should have activations available to use.
    // Command: Game.spawns['Spawn1'].room.controller.activateSafeMode();
    // Towers are the easiest way to actively defend a room. They use 
    // energy and can be targeted at any creep in a room to attack or
    // heal it. The effect depends on the distance between the tower
    // and the target. You may wish to place your tower inside the
    // walls & place the construction site there with the huelp of the
    // button 'Construct' on the upper left pannel (GUI).
    // Command: Game.spawns['Spawn1'].room.createConstructionSite(23, 22, STRUCTURE_TOWER);
    // Like a creep, a tower has several similar methods: attack, heal,
    // and repair. Each action spends 10 energy units. We need to use
    // attack on the closest enemy creep upon its discovery. Remember
    // that distance is vital: the effect can be several times stronger
    // with the same energy cost. To get the tower object directly, you
    // can use its ID from the right panel (GUI) and the method
    // Game.getObjectById();
    // Damaged structures can be repaired by both creeps & towers.
    // Let's use a tower for that. We'll need the repair(). You will
    // also need Room.find and a filter to locate the damaged walls.
    // Note that since walls done belong to any player, finding them 
    // requires the constant FIND_STRUCTURES rather than FIND_MY_STRUCTURES.
    var tower = Game.getObjectById('e18b65a320c863afb6973851'); // replace with real ID when you run this code.
    if (tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if (closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
        }
    }
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log("Harvesters: " + harvesters.length);
    if (harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep(
            [WORK, CARRY, MOVE], 
            newName,
            { memory: { role: 'harvester' } },
        );
    }
    if (Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            'spawning ' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8}
        );
    }
    for (var name in Game.rooms) {
        console.log(`Room "` + name + '" has ' + Game.rooms[name].energyAvailable + ' energy');
    }
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}