const msg: string = 'Hello World'
console.log(msg)

const hero = {
  name: 'Tony Stark',
  age: 45
}
hero.age = 50
console.log(hero.age + 1)

;(() => {
  const a: number = 10
  console.log(a)
})()
