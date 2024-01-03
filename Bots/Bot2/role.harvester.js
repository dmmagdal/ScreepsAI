var roleHarvester = {
    // 1) (maps to 4 & 5) in main.js.
    // Split the harvesting code into this file. It helps with
    // organization & abstraction.
    /** @param {Creep} creep **/
    run: function(creep) {
        // Same harvesting code as in main.js
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

        // 2) (maps to 6 & 7) in main.js
        // Maintaining extensions requires teaching the harvesters when
        // to carry energy not just to spawn but to other extensions.
        // To do this, either use the Game.structures object or search
        // within the room with the help of Room.find(FIND_STRUCTURES).
        // In both cases, you will need to filter the list of items on
        // the condition structures.structureType == STRUCTURE_EXTENSION
        // (or alternatively, structure instanceof StructureExtension)
        // and also check them for energy load as before.
        // if (creep.carry.energy < creep.carryCapacity) {
        //     var sources = creep.room.find(FIND_SOURCES);
        //     if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        //     }
        // }
        // else {
        //     var targets = creep.room.find(FIND_STRUCTURES, {
        //         filter: (structure) => {
        //             return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
        //                 structure.energy < structure.energyCapacity;
        //         }
        //     });
        //     if (targets.length > 0) {
        //         if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //             creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
        //         }
        //     }
        // } 

        // 3) (maps to 8) in main.js
        // A tower uses energy, so we need to set a harvester to bring
        // energy to the tower along with other structures. To do this,
        // add the STRUCTURE_TOWER to the filter of structures the 
        // harvester is aimed at.
        if (creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || 
                        structure.structureType == STRUCTURE_SPAWN || 
                        structure.structureType == STRUCTURE_TOWER
                        ) && structure.energy < structure.energyCapacity;
                }
            });
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        } 
    }
}

module.exports = roleHarvester;