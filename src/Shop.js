import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function Shop(){
    useEffect(() => {
        fetchItems();
    },[]);
    
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
);
    
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
};

  return(
    <div>
        {/* {items.map(item => (
            <h1>{item.name}</h1>
        ))} */}
    </div>
  );
}

export default Shop;