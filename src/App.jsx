import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Edgar Fagundes" 
          content="Olá tudo bem?"></Post>
        </main>
      </div>

      <div className="wrapper"></div>
    </div>
  );
}
