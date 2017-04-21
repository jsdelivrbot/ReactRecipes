import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { fetchMyWishlist, fetchSpecificBook } from '../actions/index';

class Cart extends Component {

  static contextTypes = {
		router:PropTypes.object
	};

  constructor(props) {
    super(props);
    this.state = { currentCart:[], currentBook:[], wishlist:[] };
    this.renderWishlist = this.renderWishlist.bind(this);
  }

  componentWillMount(){
    var self = this;
    var myWishlist = []
    if (this.props.authenticated){
      this.props.fetchMyWishlist(this.props.signedInUserInfo._id).then(function(x){
        self.setState({currentCart: x.payload.data});

        var jsonObj = x.payload.data;
        if (jsonObj){
          return jsonObj.map(function(book){
              self.props.fetchSpecificBook(book.itemID).then(function(bookInfo){
                // book.quantity
                myWishlist.push(bookInfo.payload.data);
              });
          });
        }
      });
      this.setState({wishlist: myWishlist});
    }
    else {
      this.context.router.push('/signin');
    }
  }

  componentDidMount(){
    console.log("component has been mounted: "+this.state.currentCart.payload);
  }

  componentDidUpdate(prevProps, prevState){

    //this.setState({  });
  }

  renderWishlist(){
    console.log(JSON.stringify(this.state.wishlist));
    return this.state.wishlist.map(book => {
      console.log("slipknot");
      return (
        <tr className="table-active">
          <td><img src={"./src/components/img/books/"+book.image+".png"}/></td>
          <td>{book.title}</td>
          <td>{book.pages}</td>
          <td>{book.chef}</td>
          <td>{book.price}$</td>
          <td><input type="text" value={book.pages} /></td>
          <td><button className="btn btn-warning">Update</button></td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Your wishlist</h3>
          <table id="cartReview">
            <tr id="tableReviewHeader" className="table-warning">
              <td>Product Image</td>
              <td>Title</td>
              <td>Pages</td>
              <td>Author</td>
              <td>Price</td>
              <td>Copies</td>
              <td></td>
              <td></td>
            </tr>
            {this.renderWishlist()}
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentCart: state.bookReducer.currentCart,
    currentBook: state.bookReducer.currentBook,
    authenticated: state.auth.authenticated,
    signedInUserInfo:state.auth.signedInUserInfo
  };
}

export default connect(mapStateToProps, {fetchMyWishlist, fetchSpecificBook})(Cart);
