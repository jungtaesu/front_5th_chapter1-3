export function shallowEquals<T>(objA: T, objB: T): boolean {

  console.log('shallowEquals', objA, objB);
  if(objA === objB) {
    console.log('shallowEquals: same reference');
  }

  return objA === objB;
}
