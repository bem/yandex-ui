export function generateCombinations(a: any, b?: any): any;
export function generateCombinations(obj: any): any {
    if (arguments.length > 1) {
        return [].slice.call(arguments).reduce(function(res, obj) {
            return res.concat(generateCombinations(obj));
        }, []);
    }

    var keys = Object.keys(obj),
        vals = keys.map(function(key) {
            return Array.isArray(obj[key]) ? obj[key] : [obj[key]];
        });

    return (function self(arr) {
        return arr.length === 1 ? arr[0] : arr[0].reduce(function(result: any, base: any) {
            self(arr.slice(1)).forEach(function(tail: any) {
                result.push([base].concat(tail));
            });
            return result;
        }, []);
    })(vals).map(function(arr: any) {
        return arr.reduce(function(result: any, val: any, i: any) {
            result[keys[i]] = val;
            return result;
        }, {});
    });
}
