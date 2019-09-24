import React,{ Component } from 'react';
import RentalCard from './RentalCard';
import {connect} from 'react-redux';

import * as actions from '../../actions';

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

componentWillMount(){
    this.props.dispatch(actions.fetchRentals());
}


     render(){
        return(
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                    {this.renderRentals()}
                </div>
            </section>
        );
    }

} 

const mapStateToProps = (state) => {
    return{
        rentals: state.rentals.data 
    }

}
export default connect(mapStateToProps)(RentalList) 
    