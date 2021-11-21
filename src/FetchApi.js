import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
  state = {
    persons: [],
    loading: true
  }

  componentDidMount() {
    axios.get(`https://dev-akm-wp-dcop.pantheonsite.io/wp-json/wp/v2/posts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons, loading: false });
      })
  }

  render() {
    return (
      <ul>
        <header>This is a simple api fetch project built with react. <br/> 
        Json URL: https://dev-akm-wp-dcop.pantheonsite.io/wp-json/wp/v2/posts <br/> 
        </header>

        
        {  !this.state.loading ? this.state.persons.map(person => 
        <li>
          <h3>{person.title.rendered}</h3>
          <hr />
          <div>
            {/* { DOMPurify.sanitize( person.content.rendered , {USE_PROFILES: {html: true}} ) } */}
            
            <div dangerouslySetInnerHTML={{ __html: person.content.rendered }}></div>

          </div>
        </li>
        
        ) : <p> Loading ...</p>}
        
       
      </ul>
    )
  }
}

