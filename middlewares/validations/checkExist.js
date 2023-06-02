
const checkExist = (Model) => {
    return async (req, res, next) =>{
        const {id} = req.params;
        const modal = await Model.findOne({
            where : {
                id
            }
        })
        if(modal){
            next()
        }
        else{
            res.status(404).send(`Not found with id is ${id}`)
        }
    }
}

module.exports = {
    checkExist
}