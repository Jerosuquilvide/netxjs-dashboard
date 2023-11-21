import {Pool} from 'pg'

new Pool({
    user: 'vercel',
    password:'vercel',
    host:'localhost',
    port:56779,
    database:'vercel_data'
})