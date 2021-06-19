import Alert from './alert/alert';
import AlertState from './context/alert/alertState';
import Footer from './footer';
import Logo from './header/logo';
import Content from './weather/content'

function App() {
  return (
    <div className='container'>
      <AlertState>
        <Logo />
        <Content />
        <Footer />
      </AlertState>
    </div>
  );
}

export default App;
