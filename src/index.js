import 'babel-polyfill'
import axios from 'axios'
import cheerio from 'cheerio'
import {requestOptions} from './http/request'
import RegParser from './parser/RegParser'

axios(requestOptions)
    .then(response => {
        const dom = cheerio.load(response.data)
        const regParser = new RegParser(dom)

        regParser.parse()
    })