type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>

type ASCIICacheKey<Str extends string> = `ID-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">