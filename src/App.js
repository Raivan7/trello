import { useEffect } from "react";
import Dashboard from "./components/containers/Dashboard/Dashboard";
import Header from "./components/containers/Header/Header";
import { defaultAuthedUser, defaultUsers } from "./constants/users";
import { defaultBoardTasks, defaultBoards } from "./constants/boards";
import storageService from "./services/storageService";




function App() {
  useEffect(() => {
    if (!localStorage.getItem('users')) {
      storageService.setStorageItem('users', defaultUsers);
    }

    if (!localStorage.getItem('authedUser')) {
      storageService.setStorageItem('authedUser', defaultAuthedUser);
    }

    if (!localStorage.getItem('boards')) {
      storageService.setStorageItem('boards', defaultBoards);
    }

    if (!localStorage.getItem('activeBoardId')) {
      storageService.setStorageItem('activeBoardId', 'MAIN');
    }

    if (!localStorage.getItem('boardTasks')) {
      storageService.setStorageItem('boardTasks', defaultBoardTasks);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
