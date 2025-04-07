export function deepEquals(objA: unknown, objB: unknown): boolean {
  if (objA === objB) {
    return true;
  }

  if (objA === null || objB === null) {
    return false;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    for (let i = 0; i < objA.length; i++) {
      if (Array.isArray(objA[i]) || Array.isArray(objB[i])) {
        return deepEquals(objA[i], objB[i]);
      } else {
        if (objA[i] !== objB[i]) {
          return false;
        }
      }
    }
    return true;
  }

  if (typeof objA === "object" && typeof objB === "object") {
    console.log("objA:", objA, "objB:", objB);
    const a = objA as Record<string, unknown>;
    const b = objB as Record<string, unknown>;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    console.log("keysA:", keysA, "keysB:", keysB);

    for (const key of keysA) {
      if (!keysB.includes(key)) {
        return false;
      }
      if (typeof a[key] === "object" && typeof b[key] === "object") {
        if (!deepEquals(a[key], b[key])) {
          return false;
        }
        return true;
        //여기가 문제래
      }

    }

    return true;
  }


  return objA === objB;
}
