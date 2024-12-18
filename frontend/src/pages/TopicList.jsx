import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import "./TopicList.css";

function TopicList() {
    const navigate = useNavigate();
    const [topics, setTopics] = useState([])

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
                
                const response = await axios.get(`${BASE_API_URL}/api/topic`);
                console.log("Fetched Topics:", response.data);
                setTopics(response.data)
            } catch (error) {
                console.error("Fetched Topics Error:", error.response?.data || error.message);
                alert("Fetched Topics failed. Please try again.");
            }
        }

        fetchTopics()

    }, []);


    const handleCardClick = (topicId) => {
        navigate(`/topics/${topicId}`);
    };

    return (
            <div className="topics-container">
            <h1 className="title">Start Solving</h1>
            <div className="cards-container">
                {topics.map((topic, index) => (
                <div key={index} className="card" onClick={() => handleCardClick(topic._id)}>
                    <h2>{topic.name}</h2>
                    <p><strong>{topic.description}</strong></p>
                    <p><em>{topic.status}</em></p>
                    <button className="start-btn">Start Now</button>
                </div>
                ))}
            </div>
            </div>
        );
    }

export default TopicList
