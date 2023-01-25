function caps(string) {
  if (string.length > 10) {
    console.log(string.toUpperCase())
  } else {
    console.log(string)
  }
}

caps('hello world')
caps('bye bye')