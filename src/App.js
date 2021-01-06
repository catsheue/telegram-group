import React, { useState, useRef } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  areaList,
  channelList,
  chatList,
  fitList,
  interestList,
  peopleList,
  techList,
} from "./config/list";
import ListSection from "./components/ListSection";
import { nanoid } from "nanoid";
import { pathList } from "./config/pathlist";
import { Burger, Menu } from "./components/Burger";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <Router>
      <div className="App">
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <header className="App-header">
          <h1 className="App-title">Telegram Groups</h1>
          <a
            className="github"
            target="_blank"
            href="https://github.com/catsheue/telegram-group"
          >
            Github
          </a>
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
              <Route path="/area">
                <ListSection list={areaList} />
              </Route>
              <Route path="/fit">
                <ListSection list={fitList} />
              </Route>
              <Route exact path="/">
                <div className="App-hello">
                  收藏一些telegram群組，有想要加入的話歡迎來信
                  catsheue@gmail.com，或
                  <a href="https://t.me/lunajs" className="App-link">
                    私我telegram
                  </a>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
