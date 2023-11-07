;(() => {
  let avengers: number = 10
  let villians: number = 20

  if (avengers < villians) {
    console.log('Estamos en problemas')
  } else {
    console.log('Estamos salvados')
  }

  avengers = Number('55A')

  console.log({ avengers })

  // Tener en cuenta que 55A es considerado un numero en TypeScript y JavaScript, por lo que no es un error y debe manejarse el caso particular, porque ese console log da NaN.
})()
