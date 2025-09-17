//streams are the objects that lets you to read data from a source

import fs from 'fs'
import zlib from 'zlib'
import crypto from 'crypto'
import {Transform} from 'stream'

class EndcryptionFile extends Transform{
     constructor(key,vector){
        super();
        this.key = key;
        this.vector =vector;
     }

   
}