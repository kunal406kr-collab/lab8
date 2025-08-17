const employee = require("../data/data.js")
const getAllData =(req,res)=>{
    let fliteredData=employee

    const { name, department, designation, country, is_active } = req.query
    if(name){
        fliteredData= fliteredData.filter(employee=> 
            employee.name.toLowerCase() === name.toLowerCase())
    }

    if(department){
        fliteredData= fliteredData.filter(employee => 
            employee.department.toLowerCase() === department.toLowerCase())
    }

    if(designation){
        fliteredData= fliteredData.filter(employee=> 
            employee.designation.toLowerCase() === designation.toLowerCase())
    }

    if(country){
        fliteredData= fliteredData.filter(employee => 
            employee.country.toLowerCase() === country.toLowerCase())
    }

    if(is_active){
        fliteredData= fliteredData.filter(employee => 
            employee.is_active=== JSON.parse(is_active.toLowerCase()))
    }
    res.json(fliteredData)    
}

module.exports = getAllData;