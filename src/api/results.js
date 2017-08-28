import {Promise} from "es6-promise";
import * as httpHelpers from '../utils/http-helpers';

const SEARCH = '//api.github.com/search/repositories';

export function listResults(dataUrl) {
    return new Promise(function (resolve) {
        httpHelpers.makeRequest('GET', SEARCH + '?q=preact')
            .then(data => {
                resolve(JSON.parse(data));
            });
    })
}
