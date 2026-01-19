export const sub = (obj: { a: number; b: number }) => {
  return obj.a - obj.b
}

export const mul = (obj: { a: number; b: number }, obj2: { a: number; b: number }) => {
  return obj.a * obj.b + obj2.a * obj2.b
}

export const div = (obj: { a: number; b: number }) => {
  return obj.a / obj.b
}
