import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Poll = () => {
  const [polls, setPolls] = useState([]);
  const [currentPoll, setCurrentPoll] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submittedOption, setSubmittedOption] = useState('');

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get("https://api.theeventera.live/api/polls/fetch-polls");
        setPolls(response.data);
        setSelectedOptions(Array.from({ length: response.data.length }, () => ''));
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };
    
    fetchPolls();
  }, []);

  const handleOptionSelect = (option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentPoll] = option;
    setSelectedOptions(updatedSelectedOptions);
    setSubmittedOption(option); // Set the submitted option when an option is selected
  }

  const submitOption = async (selectedOption) => {
    const pollId = polls[currentPoll]._id;
    console.log("Selected Option:", selectedOption);

  //to store the selected option in the backend
  //   try {
  //     const response = await axios.post(`https://api.theeventera.live/api/polls/vote/${pollId}`, {
  //       option: selectedOption
  //     });
  //     console.log("Poll result stored successfully:", response.data);
  //     setSubmittedOption(selectedOption);
  //   } catch (error) {
  //     console.error("Error storing poll result:", error);
  //   }
  }

  const handleNextPoll = () => {
    setCurrentPoll((prevPoll) => (prevPoll + 1) % polls.length);
    setSubmittedOption('');
  }

  const handlePrevPoll = () => {
    setCurrentPoll((prevPoll) => (prevPoll === 0 ? polls.length - 1 : prevPoll - 1));
    setSubmittedOption('');
  }

  if (!polls.length) {
    return null; // Render nothing if polls are still loading
  }

  const { poll_question, poll_options } = polls[currentPoll];

  return (
    <div className="container mx-auto my-8 max-w-md text-gray-800 font-easy">
      <div className="border border-red-500 p-8 rounded-lg">
        <h1 className="text-3xl font-semibold mb-8">{poll_question}</h1>
        <div className="flex flex-col gap-7">
          {poll_options.map((option, index) => (
            <button 
              key={option._id} 
              onClick={() => handleOptionSelect(option.option)}
              className={`border border-red-500 ${selectedOptions[currentPoll] === option.option ? 'bg-red-500 text-white' : 'bg-white text-red-500'} px-4 py-2 rounded-full flex items-center justify-between hover:bg-red-500 hover:text-white relative transition-colors duration-300`}
            >
              {option.option}
              {submittedOption === option.option && <span className="ml-2 text-white">&#10003;</span>}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-7">
          <button 
            onClick={handlePrevPoll} 
            className="bg-white text-red-500 hover:text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 border border-red-500"
          >
            Previous
          </button>
          <button 
            onClick={handleNextPoll} 
            className="bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300 border border-red-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Poll;
