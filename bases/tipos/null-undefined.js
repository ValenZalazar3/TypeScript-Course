"use strict";
;
(() => {
    let nada = undefined;
    let isActive = undefined; // la mejor salida, sino seria poner en false el strictNullChecks
    let nulo = null;
    console.log(nada, nulo);
    // strictNullChecks: false, para que el boolean atrape el undefined
})();
