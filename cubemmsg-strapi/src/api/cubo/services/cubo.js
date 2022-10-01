'use strict';

/**
 * cubo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cubo.cubo');
