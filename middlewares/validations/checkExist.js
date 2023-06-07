
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
            res.status(404).send(`Không tìm thấy với id là ${id}`)
        }
    }
}

module.exports = {
    checkExist
}