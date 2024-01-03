var roleUpgrader = {
    // 1) (maps to 5, 6, & 7) in main.js.
    // Upgrade the Room Controller if the energy is available,
    // otherwise the creep should harvest some more energy.
    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.carry.energy == 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
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

module.exports = roleUpgrader;