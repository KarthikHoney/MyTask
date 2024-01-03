import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {list: [], searchInput: '', tags: tagsList}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {searchInput, tags} = this.state
    const newValue = {
      id: uuidV4(),
      name: searchInput,
      text: tags.optionId,
    }
    this.setState(previousState => ({
      searchInput: '',
      list: [...previousState.list, newValue],
    }))
  }

  onChangeSelect = (event)=>{
    this.setState({event.target.value})
  }

  render() {
    const {searchInput, tags, list} = this.state
    return (
      <div
        style={{
          height: 100,
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1 style={{color: '#f3aa4e', fontFamily: 'Roboto', fontSize: 20}}>
            Create a task!
          </h1>
          <form onSubmit={this.onClickSubmit}>
            <label
              htmlFor="task"
              style={{color: 'black', fontSize: 17, fontFamily: 'roboto'}}
            >
              Task
            </label>
            <br />
            <input
              id="task"
              type="search"
              style={{
                height: 50,
                width: 100,
                borderColor: '#323f4b',
                paddingTop: 5,
                paddingBottom: 5,
              }}
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <br />
            <label
              htmlFor="tag"
              style={{color: 'black', fontSize: 17, fontFamily: 'roboto'}}
            >
              Tags
            </label>
            <br />
            <select
              id="tag"
              style={{
                height: 50,
                width: 200,
                borderColor: '#323f4b',
                paddingTop: 5,
                paddingBottom: 5,
                color: 'black',
              }}

              onChange={this.onChangeSelect}
            >
              {tags.map(eachTag => (
                <option key={eachTag.id} value={eachTag.id}>
                  {eachTag.optionId}
                </option>
              ))}
            </select>
            <br />
            <button type="submit">Add</button>
          </form>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>
            <h1>Tags</h1>
            <ul>
              {tags.map(eachButtonTag => (
                <li key={eachButtonTag.id} style={{listStyleType: 'none'}}>
                  <button type="button">{eachButtonTag.displayText}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {list.length > 0 ? (
              <ul>
                {list.map(eachList => (
                  <li
                    key={eachList.id}
                    style={{
                      listStyleType: 'none',
                      backgroundColor: 'green',
                      color: 'darkblue',
                    }}
                  >
                    <p>{eachList.name}</p>
                    <p>{eachList.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              'No Task Added Yet'
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default App
