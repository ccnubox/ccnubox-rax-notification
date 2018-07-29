import { createElement, Component, render } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ListView from 'rax-listview';
import Touchable from 'rax-touchable';
import InfoService from './services/index.js';
const native = require('@weex-module/test');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  nav(index) {
    native.push(`ccnubox://noti.detail?id=${index}`);
  }

  componentWillMount() {
    InfoService.getInfoList().then(data => {
      this.setState({ data });
      native.changeLoadingStatus(true);
    });
  }

  listItem = (item, index) => {
    return (
      <Touchable
        onPress={() => {
          this.nav(index);
        }}
      >
        <View style={index ? styles.item : [styles.item, styles.first]}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.date}</Text>
        </View>
      </Touchable>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ListView renderRow={this.listItem} dataSource={this.state.data} />
      </View>
    );
  }
}

const styles = {
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
    borderTopStyle: 'solid',
    borderTopColor: '#ccccff',
    marginBottom: 20,
  },
  first: {
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    color: '#434343',
    marginTop: 20,
    fontWeight: "bold",
  },
  time: {
    fontSize: 24,
    color: '#8e8e93',
    marginTop: 10,
  },
};
export default App;
