class App extends Component {
    state = {
      value: []
    };
    toDoList = [];
    count = 0;
    componentDidMount() {}
    onClick = (event) => {
      console.log('e.target: ', event.target)
    }
    onKeyPress = (event) => {
      if (event.key === 'Enter' && event.target.value) {
        this.toDoList.push({id: this.count++, toDo: event.target.value, completed: false});
        console.log('ToDOList items: ', this.toDoList);
        this.setState({value: this.toDoList});
        console.log('Input value: ', event.target.value);
        console.log(this.state.value);
        event.target.value = '';
      }
    }
    onChange = (event) => {
          console.log(this.state.value.completed);
      }
  
    onChecked = (event) => {
      console.log('checked is: ', event.target);
    }
    render() {
      return (
        <div className="App">
            <h1>TODO List</h1>
            <Input className="App-input"  
            onKeyPress={this.onKeyPress} value={this.state.value}></Input>
            <Button onClick = {this.onClick}></Button>
            <Checkbox onClick = {this.onChecked} />
        </div>
      );
    }
  }
  


class Input extends Component {
    componentDidMount() {
    }

    render() {
        const {onKeyPress} = this.props;
        return (
            <input placeholder="write your todo" onKeyPress={onKeyPress}  type="text" />
        );
    }
}
Input.propTypes = {
    onKeyPress: PropTypes.func.isRequired,
};
Input.defaultProps = {
    onKeyPress: () => ({})
};
