const  employee  =  require("../data/data.js")
const getDataByPathParams =(req,res)=>{

    const{field,term}=req.params
    const allowedfields=['name', 'department','designation']
    if(!allowedfields.includes(field)){
        return res.status(400).json({message:'This field not allowed, name, department and designation only allowed'})
    }

    let fliteredData = employee.filter(
        employee => employee[field].toLowerCase() === term.toLowerCase()
    )
    res.json(fliteredData)  

}

module.exports = getDataByPathParams;