import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommentList from "./Comment-list";

import Post from "./PList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Post} />
        {/* <Redirect from="/Comment-list/" to="/Post/" /> */}
        <Route path="/Comment-list/" component={CommentList} />
      </Switch>
    </Router>
  );
}

export default App;
