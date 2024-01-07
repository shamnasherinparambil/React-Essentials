export default function TabButton({children, onSelect}) {  //also can use (props) //props.children

    return (                                         
    <li>
      <button onClick={onSelect}>{children}</button>           
    </li>
  );
}
