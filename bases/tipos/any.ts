;(() => {
  let avengers: any = 123
  let exists
  let power

  avengers = 'Dr. Strange'
  console.log(avengers.charAt(0))

  console.log((avengers as string).charAt(0)) // as string para convertirlo a string y tener la ayuda que da

  avengers = 150.2325123
  console.log((<number>avengers).toFixed(2))

  // con any perdes toda ayuda de tipado
})()
