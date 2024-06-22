import React, {Component} from 'react';
class Item extends Component{
    state = {
        
    }
    render(){
        const {items} = this.props
        const theItems = items.map( (item)=>{
            return(
                <div key={Math.random() * 10}>
                    <div> {item.id}</div>
                    <div> {item.name}</div>
                    <div> {item.age}</div>
                    <div> ____________</div>
                </div>
            )
        })

        return(
            <div >
                {theItems}
            </div>
        )
        }
}
export default Item