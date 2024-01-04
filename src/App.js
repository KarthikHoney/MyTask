import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Tasks from './components/Tasks'

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
  state = {
    input: '',
    selectedTag: tagsList[0].optionId,
    selectedList: [],
    activate: 'INITIAL',
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onChangeSelectedTag = event => {
    this.setState({selectedTag: event.target.value})
  }

  onClickingAddButton = () => {
    const {input, selectedTag} = this.state
    const newData = {
      id: uuidV4(),
      taskInput: input,
      taskCategory: selectedTag,
    }
    if (input.length !== 0) {
      this.setState(prevState => ({
        selectedList: [...prevState.selectedList, newData],
        input: '',
        selectedTag: tagsList[0].optionId,
      }))
    }
  }

  onClickingTag = event => {
    this.setState(prevState => ({
      activate:
        prevState.activate === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {selectedList, input, selectedTag, activate} = this.state
    const updatedData =
      activate === 'INITIAL'
        ? selectedList
        : selectedList.filter(items => items.taskCategory === activate)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          margin: 10,
        }}
      >
        <div>
          <h1>Create a Task!</h1>
          <form onSubmit={this.onClickingAddButton}>
            <label htmlFor="task">Task</label>
            <input
              type="text"
              id="task"
              placeholder="Enter the task here"
              value={input}
              onChange={this.onChangeInput}
            />
            <label htmlFor="tags">Tags</label>
            <select
              id="tags"
              onChange={this.onChangeSelectedTag}
              value={selectedTag}
              style={{height: 20, width: 80}}
            >
              {tagsList.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h1>Tags</h1>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              {tagsList.map(eachTags => (
                <li key={eachTags.optionId}>
                  <button
                    type="button"
                    value={eachTags.optionId}
                    onClick={this.onClickingTag}
                  >
                    {eachTags.displayText}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <h1>Tasks</h1>
          <div>
            {updatedData.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    color: 'green',
                    fontSize: 27,
                    fontFamily: 'initial',
                  }}
                >
                  No Tasks Added Yet
                </p>
              </div>
            ) : (
              <ul>
                {updatedData.map(multi => (
                  <Tasks key={multi.id} taskDetails={multi} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
