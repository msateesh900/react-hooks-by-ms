
# React Hooks Info
## What is React Hooks ?

React hooks are new fetaure introduced in React 16.8 version which is used to write react components using functions.

## Why React Hooks ?

<ol>
  <li><ol>
      <li>It is difficult to undestand this keyword in javascript which we are used in class components for binding event handlers.</li>
      <li>As well class components doesn't minify well and hot reloading is difficult is not much reliable</li>
      </ol>
  </li>
  <li><ol>
      <li>The Reusing stateful component logic in class components are not so absolute.</li>
      <li>HOC and render props patterns are used for component logic reusage. Thus it make hard to follow code in class components.</li>
      </ol>
  </li>
  <li><ol>
      <li>When we create complex components like fetching data and subscribing events, we may feel that code is not organized properly</li>
      <li>Example: Data Fetching - we fetch the data in componentDidMount and ComponentDidUpdate</li>
      <li>Example: Event Listerners - we will set event listeners(subscribe) in componentDidMount and ComponentWillUnmount(unsubscribe)</li>
      <li>Because of stateful logic it is very difficult to split the components into smaller pieces.</li>
      </ol>
  </li>
 </ol>

### Rules of React Hooks

<ol>
  <li><ol>
    <li><b>Only Call Hooks at Top Level.</b></li>
      <li>Don't call hooks inside loops, conditions or nested functions.</li>
    </ol>
  </li>
  <li><ol>
    <li><b>Only Call Hooks from React Functions.</b></li>
    <li>Call React Hooks from React functional components and not from any regular Javascript functions.</li>
    </ol></li>
</ol>

### Covered Hooks
<ul>
  <li>useState    -     Related to State</li>
  <li>useEffect   -     Related to side effects (used for data fetching,posting...etc)</li>
  <li>useContext  -     Related to context API</li>
  <li>useReducer  -     Related to reducer</li>
</ul>

### useReducer with useContext
<ol>
  <li>useReducer -  used for local state management</li>
  <li>share the state between the components(useReducerWithuseContext) - Global state management</li>
 </ol>

Content Source *[YouTube Channel Code Evolution](https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)*.
