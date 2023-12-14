export default function TabButton({children}){
   
    function handleClick(){
        console.log('Hello World By Sohan!');
    }

    return (
    <li> 
        <button onClick={handleClick}>{children}</button>
    </li>
    );
}