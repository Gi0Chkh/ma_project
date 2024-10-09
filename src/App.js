import './App.css';
import Article from './components/article/Article';
import Card from './components/card/Card';
import Header from './components/header/Header';

function App() {
  return (
    <main>
      <Header />
      <h1 className='header-1'>განივითარე მედიაწიგნიერება</h1>
      <Article imgSrc='macedonia.jpeg' imgAlt="ალექსანდრე მაკედონელი" thesis="ალექსანდრე მაკედონელი ქართველია!!!" date="6 ოქტომბერი, 2024" text="გამარჯობა, შენ თუ ახლა ამას კითხულობ, ეს ნიშნავს იმას რომ შენ მახეში გაები, სავარაუდოდ შემოგხვდა სტატია სახელწოდებით ''ალექსანდრე მაკედონელი ქართველია'', ამ თამამმა და არარეალურამ განაცხადმა მოახერხა შენი ამ სტატიაზე გადმოყვანა, რითაც შენ გახდი ყალბი ამბის, იგივე fake news-ის მსხვერპლი. შეიძლება..."/>
    </main>
  );
}

export default App;
