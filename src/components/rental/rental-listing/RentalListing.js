import React,{ Component } from 'react';
import RentalList from './RentalList';
import {connect} from 'react-redux';

import * as actions from '../../../actions';

class RentalListing extends Component { 
    

    /*renderRentals() {
        
        return this.state.rentals.map((rental)=> {
        
            return (
                <RentalCard />
            )
        });
    }
    */

componentWillMount(){
    this.props.dispatch(actions.fetchRentals());
}


     render(){
        return(
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <RentalList rentals={this.props.rentals}/>
            </section>
        );
    }

} 

const mapStateToProps = (state) => {
    return{
        rentals: state.rentals.data 
    }

}
export default connect(mapStateToProps)(RentalListing) 
    