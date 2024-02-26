import { useState } from "react";

export default function NavBar(props) {
    const [selectedId, setSelectedId] = useState(props.filterData.length > 0 ? props.filterData[0].id : null);

    const handleClick = (id, title) => {
        setSelectedId(id);
        props.clickHandler(id, title);
    };

    return (
        <div className="w-fit h-auto bg-[#4A4E69] flex">
            {props.filterData.map(element => (
                <div 
                    className={`border-2 cursor-pointer bg-[#22223B] m-2 p-2 rounded-md hover:bg-[#2b3156] duration-500 text-white ${element.id === selectedId ? 'border-white' : 'border-[#22223B]'}`}
                    key={element.id} 
                    onClick={() => handleClick(element.id, element.title)}
                >
                    <h3>{element.title}</h3>
                </div>
            ))}
        </div>
    );
}
