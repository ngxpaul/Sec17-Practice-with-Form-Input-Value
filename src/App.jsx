import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
import Signup from './components/Signup.jsx';
import Input from './components/Input.jsx';
// import Login from './components/Login.jsx';
function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        <Login />
        {/* <Input label="Email" id="email" error="Please enter a valid email" /> */}
      </main>
    </>
  );
}

export default App;
