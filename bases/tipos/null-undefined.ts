;(() => {
  let nada: undefined = undefined
  let isActive: boolean | undefined = undefined // la mejor salida, sino seria poner en false el strictNullChecks
  let nulo: null = null

  console.log(nada, nulo)

  // strictNullChecks: false, para que el boolean atrape el undefined
})()
