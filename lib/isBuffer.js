"use strict";

/**
 * @see https://nodejs.org/api/buffer.html#buffer_class_method_buffer_isbuffer_obj
 */

// Node.js only
module.exports = Buffer ? Buffer.isBuffer : null;
