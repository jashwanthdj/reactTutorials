// import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Destructure from './components/Destructuring';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/Eventbind.js';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import FormHandling from './components/FormHandling'
import LifeCycle from './components/LifeCycle'
import Fragment from './components/Fragment';
import PureComt from './components/PureComt';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import ParentRef from './components/ParentRef';
import RFParent from './components/RFParent';
import PortalDemo from './components/PortalDemo';
import ErrorHandleExample from './components/ErrorHandleExample';
import ErrorHandling from './components/ErrorHandling';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverComponent';
import RenderedProps from './components/RenderedProps';
import RenderedPropsFunction from './components/RenderedPropsFunction';
import ComponentA from './components/ComponentA';
import { Provider } from './components/userContext';
import ApiCall from './components/ApiCall';

function App() {
  return (
    <div className="App">
      {/* <Greet id="jashwanth">reddy</Greet>
      <Counter /> */}
      {/* <Welcome name="sohail">whats up</Welcome>
      <Message />
      <Counter />
      <Destructure id="jashwanth" children="ramesh"/> */}
      {/* <Functionclick></Functionclick > */}
      {/* <ClassClick />
      <Eventbind />
      <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet></StyleSheet >
      <FormHandling></FormHandling>
      <LifeCycle></LifeCycle> */}
      <Fragment></Fragment>
      {/* <ParentComp></ParentComp> */}
      {/* <RefsDemo></RefsDemo>
      <ParentRef></ParentRef>
      <RFParent></RFParent>
      <PortalDemo></PortalDemo> */}
      <ErrorHandling>
      <ErrorHandleExample name={'jaswanth'}></ErrorHandleExample>
      </ErrorHandling>
      <ErrorHandling>
      <ErrorHandleExample name={'reddyy'}></ErrorHandleExample>
      </ErrorHandling>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      {/* <ClickCounter2></ClickCounter2>
      <HoverCounter2></HoverCounter2> */}
      {/* <RenderedProps render = {(vallue) => vallue ? 'jashwanth' : 'reddy'}></RenderedProps>
      <RenderedPropsFunction render = {(count, increment) => (<ClickCounter2 count={count} increment={increment}></ClickCounter2>)}></RenderedPropsFunction>
      <RenderedPropsFunction render = {(count, increment) => (<HoverCounter2 count={count} increment={increment}></HoverCounter2>)}></RenderedPropsFunction>
      <Provider value = {'jashwanth'}>
      <ComponentA></ComponentA>
      </Provider> */}
      <ApiCall></ApiCall>
    </div>
  );
}

export default App;
