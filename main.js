const str = `
010-1234-5678
thesecon@nate.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


console.log(
  str.match(/.{(?=@)/g)
  )