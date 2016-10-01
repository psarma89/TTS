// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these
//    should be empty arrays at first

function Robot(){
	this.parts = [];
};

// we can add properties to this function prototype using
// So if you create two instances of Robot, both will get Robot.prototype as their __proto__.
// So whatever you put for the capabilities property will be shared by the instances.
// Not the case for the parts property
Robot.prototype.capabilities = [];

robby = new Robot();
cranky = new Robot();

// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must
//    also have 'fly' without adding to it directly, so this property has to be
//    shared

robby.parts.push('core');
//See above for what this means, the property changing here will apply to both instances of Robot
robby.capabilities.push('fly');

// -> Claim the result of robby.parts
claim(robby.parts, ['core']);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
