import * as promise from "promiscuous";
import * as httpHelpers from '../utils/http-helpers';

const SEARCH = '//api.github.com/search/repositories';

export function listResults(dataUrl) {
    return new promise.default(function (resolve) {
        httpHelpers.makeRequest('GET', SEARCH + '?q=preact')
            .then(data => {
                resolve(JSON.parse(data));
            });
    })
}
