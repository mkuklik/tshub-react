"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = configureAuthMethods;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    return authMethods;
}
