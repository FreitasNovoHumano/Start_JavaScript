/*export function ola() {
    alert("Olá, mundo!")
}

export const nome = "Freitas"

export default 42*/

import { z } from "zod"

const mySchema = z.string()

console.log(mySchema.parse("Freitas"))

alert("Olá, mundo")