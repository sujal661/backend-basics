import { Server } from 'http'
import os from  'os'

const bufferOne = Buffer.alloc(18) // allocate the size of 10 bytes to the buffer

console.log(bufferOne)

const buffer_String = Buffer.from('hello')

console.log(buffer_String)

const buffer_Array = Buffer.from([1,5,8,5,4])

console.log(buffer_Array )

bufferOne.write('sujal mehra')

console.log(bufferOne)
console.log(bufferOne.toString()) // toString is method
console.log(bufferOne.toJSON())   // toJson is method

console.log(buffer_String.toString().slice(0,-1))

const buffer_concat =Buffer.concat([buffer_Array,buffer_Array])

console.log(buffer_concat)