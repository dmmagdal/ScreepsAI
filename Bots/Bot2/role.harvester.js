var roleHarvester = {
    // 1) (maps to 4, 5, & 6) in main.js.
    // Split the harvesting code into this file. It helps with
    // organization & abstraction.
    /** @param {Creep} creep **/
    run: function(creep) {
        // Same harvesting code as in main.js
        if (creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        } 
    }
}

module.exports = roleHarvester;