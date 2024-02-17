# Image-Generator

## Steps to setting up this project

### initial setup

- npm install
- npm run dev

### Use of Global context and initial project structure

Three components are used in this project- ThemeToggle, Gallery and SearchForm. Set them as separate component and Display them on the app.jsx.Also SetUp Global context

#### Global Context Hook

[useContext Hook](https://react.dev/reference/react/useContext)

useContext is a React Hook that lets you read and subscribe to context from your component.

#### create Context Hook

[createContext](https://react.dev/reference/react/createContext)

createContext lets you create a context that components can provide or read.

##### Context Setup with custom hook

```js
 import {createContext, useContext} from 'react'
 const AppContext = createContext();
 export const AppProvider =({children})=>{
    const greeting = 'hello'
    return(
        <AppContext.Provider value = {{greeting}} >{{children}}
        <AppContext.Provider/>
    )
 }
 export const useGlobalContext = () => useContext(AppContext);

```
