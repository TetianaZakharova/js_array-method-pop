'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const items = this;
    const lastElement = items[items.length - 1];

    if (this.length === 0) {
      return undefined;
    }

    items.length = items.length - 1;

    return lastElement;
  };
}

module.exports = applyCustomPop;
