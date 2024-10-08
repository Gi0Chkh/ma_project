import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';

function App() {
  return (
    <main>
      <Header />
      <h1 className='header-1'>განივითარე მედიაწიგნიერება</h1>
      <div className='macedonia-news'>
        <img src='macedonia.jpeg' alt='ალექსანდრე მაკედონელი' />
        <div className='text-container'>
          <h2>ალექსანდრე მაკედონელი ქართველია!!!</h2>
          <p>გამარჯობა, შენ თუ ახლა ამას კითხულობ, ეს ნიშნავს იმას რომ შენ მახეში გაები, სავარაუდოდ შემოგხვდა სტატია სახელწოდებით ,,ალექსანდრე მაკედონელი ქართველია", ამ თამამმა და არარეალურამ განაცხადმა მოახერხა შენი ამ სტატიაზე გადმოყვანა, რითაც შენ გახდი ყალბი ამბის, იგივე fake news-ის მსხვერპლი. შეიძლება...</p>
        </div>
      </div>
    </main>
  );
}

export default App;
