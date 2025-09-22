
class ApiErrors extends Error {
    constructor(message,statusCode){
         super(message);
        this.statusCode = statusCode;
        this.name = 'ApiErrors'
    }
}

const asyncHandler = (fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next) 
}

const globleErrorHandler = (err,req,res,next)=>{
    console.log(err.stack);

    if(err instanceof ApiErrors){
        return res.statusCode(err.statusCode).json({
            message:err.message,
            status:'Error'
        })
    }

    
}

export {ApiErrors,asyncHandler,globleErrorHandler};