import React, { Component } from 'react';
import axios from 'axios';
export class Books extends Component {
state = {
books: [],
isLoaded: false
}
componentDidMount () {
axios.get('http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/posts')
.then(res => this.setState({
books: res.data,
isLoaded: true
}))
.catch(err => console.log(err))
}
render() {
console.log(this.state);
return (
<div>
</div>
)
}
}
export default Books;