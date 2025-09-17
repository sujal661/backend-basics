import cors from 'cors'
const CorsConfig = ()=>{
    return cors({
        origin:(origin,callback)=>{
            const allowedOrgins = [
                'http://localhost:3000/'
            ]

            if(!origin || allowedOrgins.indexOf(origin) !==-1){
                callback(null,true)
            }else{
                callback(new Error('not allowed by cors'))
            }
        } 
        ,
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type','Authorization','Accept-Version'],
        credentials:true,
        exposedHeaders:['X-Total-Count','Content-Range'],
        preflightContinue:false,
        maxAge:600,
        optionsSuccessStatus:204

    })
}

export default CorsConfig