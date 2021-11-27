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
      <>
        <header>
            <h1>Pantheon WP React</h1>
        </header>

        <ul>
          
          {  !this.state.loading ? this.state.persons.map(person => 
          <li className='article-part'>
            <h3 className='title-first'>{person.title.rendered}</h3>
            <div>
              <div dangerouslySetInnerHTML={{ __html: person.content.rendered }}></div>
            </div>
          </li>
          
          ) : <p> Loading ...</p>}
          
        
        </ul>
      </>
    )
  }
}

