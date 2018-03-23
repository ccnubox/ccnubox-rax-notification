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
    InfoService.getInfoList()
      .then((data) => {
        this.setState({data})
      })
  }

  listItem = (item, index) => {
    return (
      <View style={index?mystyle.item:[mystyle.item,mystyle.first]}>
        <Text style={mystyle.title}>{item.title}</Text>
        <Text style={mystyle.time}>{item.date}</Text>
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
    
  },
  item: {
    height: 160,
    backgroundColor: '#ffffff',
    paddingLeft: 60,
    paddingRight: 60,
    borderTopWidth: 10,
    borderTopStyle: "solid",
    borderTopColor: "#ccccff",
    marginBottom: 20
  },
  first: {
    marginTop: 40
  },
  title: {
    fontSize: 28,
    coloe: "#434343",
    marginTop: 20
  },
  time: {
    fontSize: 24,
    color: "#8e8e93",
    marginTop: 15
  }
} 
export default App;
