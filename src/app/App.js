import {Route, Routes} from "react-router-dom";
import GetPostList from "../components/GetPostList"
import GetPostDetail from "../components/GetPostDetail";
const App = () => {
 return (
  <div className="App">
    <Routes>
      <Route path="/" element={<GetPostList/>}/>
      <Route path="/post/:id" element={<GetPostDetail/>}/>
    </Routes>
  </div>
 );
}

export default App;
