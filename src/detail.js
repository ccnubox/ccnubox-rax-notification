import { createElement, Component, render } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ListView from 'rax-listview';
import Touchable from 'rax-touchable';
import ScrollView from 'rax-scrollview';
import InfoService from './services/index.js';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.index = window.location.search.split('=')[1]
  };
  componentWillMount() {
    InfoService.getInfoList().then(data => {
        this.setState({content:data[this.index].content})
    });
  }
  getContent = () => {
      
      return this.state.content
  }
  render() {
    return (
        <ScrollView>
        <Text>{this.state.content}</Text>
        </ScrollView>)
    
  }
}


export default Detail;
