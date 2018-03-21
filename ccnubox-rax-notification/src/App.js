import {createElement, Component, render} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ListView from 'rax-listview';
import InfoService from './services/index.js';
import styles from './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: []
    }
  }

  componentWillMount() {
    alert(window.location.href)
    InfoService.getInfoList()
      .then((data) => {
        this.setState({data})
        alert(this.state.data[0].content)
        
      })
  }

  listItem = (item, index) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.date}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={mystyle.container}>
        <ListView
          renderRow={this.listItem}
          dataSource={this.state.data}
        />
      </View>
      //this.state.data[0].content
    );
  }
}

const mystyle = {
  container: {
    flex: 1,
    backgroundColor: '#efeff4',
    paddingTop: 40,
    paddingBottom: 40,
  }
}

export default App;
