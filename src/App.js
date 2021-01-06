import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  channelList,
  chatList,
  interestList,
  peopleList,
  techList,
} from "./config/list";
import ListSection from "./components/ListSection";
import { nanoid } from "nanoid";
import { pathList } from "./config/pathlist";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>Telegram Groups</div>
          <div>
            <a
              target="_blank"
              href="https://github.com/catsheue/telegram-group"
            >
              Github
            </a>
          </div>
        </header>

        <div className="App-body">
          <nav className="App-nav">
            <ul>
              {pathList.map((item) => {
                const id = nanoid();
                const { path, name } = item;
                return (
                  <li key={id}>
                    <NavLink to={path}>{name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="App-content">
            <Switch>
              <Route exact path="/">
                <div className="App-hello">
                  收藏一些telegram群組，有想要加入的話歡迎來信
                  catsheue@gmail.com，或
                  <a href="https://t.me/lunajs" className="App-link">
                    私我telegram
                  </a>
                </div>
              </Route>
              <Route path="/channel">
                <ListSection list={channelList} />
              </Route>
              <Route path="/chatroom">
                <ListSection list={chatList} />
              </Route>
              <Route path="/technology">
                <ListSection list={techList} />
              </Route>
              <Route path="/interest">
                <ListSection list={interestList} />
              </Route>
              <Route path="/people">
                <ListSection list={peopleList} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
