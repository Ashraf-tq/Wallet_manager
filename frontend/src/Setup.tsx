import {Link} from 'react-router-dom'
import {useState} from 'react'
import {Login} from './Login'

function Setup(){
    const catg = [{"name": "c-food","title":"Food"}, {"name": "c-phone","title":"Phone"},{"name": "c-trans","title":"Transportation"},{"name":"edu","title":"Education"}]
    const[state, setState] = useState(catg)
    const[state2, setState2] = useState([0])
    const[state3, setState3] = useState([""])
    function addCatg(){
        console.log("")
    }

    function removeCatg(index:any){
        setState(state.filter((catg, i) => {
            return i !== index
        }))
    }

    return (
        <div className="container mt-5" >
            <div className="card shadow">
                <div className="card-body">
                    <h4 className="text-center mb-4">Setup your wallet</h4>
                    <form method="post">
                    <label htmlFor="usrName" className="form-label">Budget</label>
                    <input type="number" min="0" name="usrName" className="form-control" placeholder="0"/>
                    <label htmlFor="usrName" className="form-label mt-3">Catgeories</label>
                    <div className="card ">
                        
                        <div className="card-body px-1">
                            <div className="row row-cols-2 row-cols-md-4 mb-3 g-2 ">
                                {
                                    state.map((i, index) => {
                                        return (
                                            <div key={index} className="col">
                                                <div className="btn btn-sm text-danger fw-bold " onClick={()=>{removeCatg(index)}}>X</div>
                                                <label htmlFor={i.name} className="col-sm col-form-label col-form-label-sm">{i.title}</label>
                                                <input type="number" className="form-control form-control-sm" name={i.name} min="0" placeholder="0"/>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    state2.map((i, index) => {
                                        if(i == 1){
                                            return (
                                                
                                                <div key={index} className="card">
                                                    <div className="card-body px-1">
                                                        <div className="row g-1">
                                                            <div className="col-auto">
                                                                <input type="text" className="form-control form-control-sm" placeholder="Category name" onChange={(e)=>{setState3([e.target.value])}}/>
                                                            </div>
                                                            <div className="col">
                                                                <button type="button" className="btn btn-sm btn-success" onClick={() => {setState([...state,{"name":`c-${state3[0]}`,"title":state3[0]}]);setState2([0])}}>Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
    
                                            )
                                        }
                                        
                                    })
                                }
                                
                            </div>
                            <button type="button" className="btn btn-sm btn-primary" onClick={()=>{setState2([1])}}>+ Custom</button>
                        </div>
                    </div>
                    
                    
                    <div className="d-flex justify-content-end">
                        <input type="submit" value="Done" className="btn btn-dark mt-3"/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {Setup}