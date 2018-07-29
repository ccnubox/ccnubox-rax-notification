import { createElement, Component, render } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';
const native = require('@weex-module/test');
import ScrollView from 'rax-scrollview';
import InfoService from './services/index.js';
import { parseSearchString } from '../box-ui/util';

import styles from './App.css';

class Detail extends Component {
  constructor(props) {
    super(props);
    let qd = parseSearchString(window.location.search);
    if (qd.id) {
      this.state = {
        date: '',
        title: '',
        content: '',
        id: qd.id,
      };
    } else {
      alert('参数缺失');
    }
  }
  componentWillMount() {
    InfoService.getInfoList().then(data => {
      this.setState({
        date: data[this.state.id].date,
        title: data[this.state.id].title,
        content: data[this.state.id].content,
      });
      native.changeLoadingStatus(true);
    });
  }
  render() {
    return (
      <ScrollView
        style={{
          height: screen.height,
        }}
      >
        <View>
          <Text style={[styles.text, styles.title]}>{this.state.title}</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.date]}>{this.state.date}</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.content]}>{this.state.content}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Detail;
