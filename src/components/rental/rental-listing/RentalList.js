import React,{ Component } from 'react';
import RentalCard from './RentalCard';

class RentalList extends Component { 
    

    /*renderRentals() {
        
        return this.state.rentals.map((rental)=> {
        
            return (
                <RentalCard />
            )
        });
    }
    */

renderRentals = () =>  this.props.rentals.map((rental, index) =>  {
    return <RentalCard key={index}
                rental={rental}/>}); 

     render(){
        return(
                <div className='row'>
                    {this.renderRentals()}
                </div>
        );
    }

} 

export default RentalList;
    