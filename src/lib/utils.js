/* @flow */
export function arrayToMap (array:Array<Object> = [], keyField:string):Object {
  return array.reduce((result, item) => {
    if (item.hasOwnProperty(keyField)) {
      result[ item[ keyField ] ] = item;
    }
    return result;
  }, {});
}
