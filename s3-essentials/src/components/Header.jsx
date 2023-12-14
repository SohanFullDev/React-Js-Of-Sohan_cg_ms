import reactImg from '../assets/react1.png'

const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));

}

export default function Header(){ ////export default
    const description = reactDescriptions[genRandomInt(2)];
  
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {1+1}
            <br />
            {description}-sohan React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  
  }