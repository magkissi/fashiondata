'use strict';

/**
 * bestselling service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bestselling.bestselling');
