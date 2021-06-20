import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deleteVechile, sortSales } from '../Redux/action'


function View() {
    let dispatch = useDispatch()
    let vechileInfo = useSelector(state =>state)
    console.log(vechileInfo)
    const vechileList = vechileInfo.length ? (
        vechileInfo.map(vechile => {
            return(      
                <tbody key={vechile.id}>    
                    <tr> 
                        <td><Link to ={'/' + vechile.id} className='text-decoration-none'>{vechile.model_name}</Link> </td>  
                        <td>{vechile.vehchile_type}</td>
                        <td>{vechile.mileage}</td>
                        <td>{vechile.top_speed}</td>
                        <td>{vechile.cost}</td>
                        <td>{vechile.sales_units}</td>
                        <td onClick={()=>dispatch(deleteVechile(vechile.id))}><a className='text-danger' href='#'>X</a></td>    
                        {/* <td onClick={()=>deleteVechile(vechile.id)}><a className='text-danger' href='#'>X</a></td>     */}
                        
                    </tr>
                </tbody>       
            )
        })
    ):(<div className="text-dark">No vechile to display. Please add a vechile</div>)

    return (
        <div className='container'>
            <table className="table table-dark table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Model Name</th>
                        <th scope="col">Vechile Type</th>
                        <th scope="col">Top Speed</th>
                        <th scope="col">Mileage</th>
                        <th scope="col">Cost</th>
                        <th onClick={()=>dispatch(sortSales(vechileInfo))} scope="col">Sales Units</th>
                        {/* <th  onClick={()=>sortSales(vechileInfo)}scope="col">Sales Units</th> */}
                        
                        <th scope="col"></th>
                    </tr>
                </thead>
            {vechileList}
            </table>
        </div>
    )

}

export default View
