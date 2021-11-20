import React from 'react';
import DOMPurify from 'dompurify';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://dev-akm-wp-dcop.pantheonsite.io/wp-json/wp/v2/posts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => 
        <li>
          <h3>{person.title.rendered}</h3>
          <hr />
          <div>
            {/* { DOMPurify.sanitize( person.content.rendered , {USE_PROFILES: {html: true}} ) } */}
            
            <div dangerouslySetInnerHTML={{ __html: person.content.rendered }}></div>

          </div>
        </li>
        
        )}
        
       
      </ul>
    )
  }
}

