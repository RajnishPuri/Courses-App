import React, { useState } from "react";
import Heart from "react-animated-heart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Card({ responseData }) {
    const [heartStates, setHeartStates] = useState(responseData.map(() => false));

    const handleHeartClick = (index) => {
        const newHeartStates = [...heartStates];
        newHeartStates[index] = !newHeartStates[index];
        setHeartStates(newHeartStates);
        notify(newHeartStates[index]);
    };

    const notify = (isLiked) => {
        if (isLiked) {
            toast("Likes Successfully :)");
        } else {
            toast("Unlikes Successfully :)");
        }
    };

    return (
        <div>
        <div className="grid grid-cols-3 gap-6 m-auto h-auto mb-5">
            {responseData.map((element, index) => {
                const desc = element.description.substring(0, 130) + "...";
                return (
                    <div key={element.id} className="flex justify-evenly h-[380px]">
                        <div className="relative flex flex-col h-[380px] self-center w-[400px] bg-[#22223B] rounded-2xl overflow-hidden">
                            <img className="mb-4 h-1/2 object-cover" src={element.image.url} alt="" />
                            <div className=" h-4 absolute right-2 top-1/2">
                                <Heart isClick={heartStates[index]} onClick={() => handleHeartClick(index)} />
                            </div>
                            <h3 className="p-2 mb-1 text-white font-bold text-xl w-72">{element.title}</h3>
                            <p className="p-2 text-white">{desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
        <ToastContainer />
        </div>
    );
}
