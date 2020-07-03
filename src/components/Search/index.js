import React, { Component } from 'react';
import {
  SearchForm,
  SearchInput
} from './style';

class Search extends Component {

  filterUpdate() {
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }


  render() {

   return (
    <div>
      <SearchForm>
        <SearchInput
          type='text'
          ref={(value) => {this.myValue = value}}
          placeholder="Type to filter..."
          onChange={this.filterUpdate.bind(this)}
        />
      </SearchForm>
    </div>
   )
  }
}

export default Search;