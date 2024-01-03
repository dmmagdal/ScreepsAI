var roleBuilder = {
    // 1) (maps to 6) in main.js.
    // Builds the extensions and harvests energy for the build.
    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.memory.building && creep.carry.energy == 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.memory.building = false;
                creep.say('Switching to harvest');
                creep.moveTo(sources[0]);
            }
        }
        else {
            if (creep.upgradeController(creep.room.controller)) {
                creep.moveTo(creep.room.controller);
            }
        } 
    }
}

module.exports = roleBuilder