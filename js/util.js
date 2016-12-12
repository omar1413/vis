/**
* @author CrowdVisLab
* @name util
*/

var VAQUA = VAQUA || {};
var $V = VAQUA;
$V.classes = {}; 

/**
 * Simple class inheritance.
 * Does not handle calling the superclass constructor.
 * Defines superclass on the prototype.
 * Stores in $V.classes[name of init function].
 * @param {?Function} superclass - the parent class
 * @param {!Function} init - the initialization function
 * @param {Object} prototype - the prototype methods
 */
$V.defineClass = function(superclass, init, prototype) {
	init.prototype = Object.create(superclass && superclass.prototype);
	Object.getOwnPropertyNames(prototype).forEach(function(name) {
		Object.defineProperty(init.prototype, name, Object.getOwnPropertyDescriptor(prototype, name));});
	init.prototype.constructor = init;
	init.prototype.superclass = superclass;
	init.prototype.classname = init.name;
	$V.classes[init.name] = init;
	return init;};