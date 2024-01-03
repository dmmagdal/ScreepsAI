var roleBuilder = {
    // 1) (maps to 6, 7, & 8) in main.js.
    // Builds the extensions and harvests energy for the build.
    /** @param {Creep} creep **/
    run: function(creep) {
        // creep.memory.building tells the creep when to switch tasks.
        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('Switching to harvest');
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('Switching to building');
        }

        // Building is carried out with build() to the construction
        // site, searchable by find(FIND_CONSTRUCTION_SITE). The
        // structure requires energy for which the creep is responsible
        // for harvesting its own. 
        if (creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length) {
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}

module.exports = roleBuilder;