// import Todo from "./components/Todo.js";
// function App() {
//   return (
//     <div>
//       <h1>My Todos</h1>
//       <Todo text="Learn React"/>
//       <Todo text="Master React"/>
//       <Todo text="WTF React"/>
//     </div>
//   );
// }

import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetup.js';
import FavoritesPage from './pages/Favorites.js';
import Layout from './components/layout/Layout.js'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}/>
        <Route path='/new-meetup' element={<NewMeetupPage />}/>
        <Route path='/favorites' element={<FavoritesPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
