"use client"
import React ,{ useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Index = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const router = useRouter()
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleChat = async (e) => {  
        e.preventDefault();
        const responseMessage = 'This is the response from the API';
       
        
      try {
        setResponseMessage('This is the response from the API');
        // router.push(
        //     '/chat',
           
        //    );
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
    
        const response = await axios.post(
          apiUrl,
          {
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: input },
            ],
            model: 'gpt-3.5-turbo',
            max_tokens: 300,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
       
        setMessages([...messages, { role: 'assistant', content: response.data.choices[0].message.content }]);
      } catch (error) { 
          console.log('Error sending message to ChatGPT API:' ,error.response.data.error.message);
          setErrorMessage(error.response?.data?.error?.message || 'An unexpected error occurred.');
      }
    
      // setInput('');
      // router.push('/chat');
      
    };
    
   
  return (
    <>
    <title>Home</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/*-----Header----------*/}
    <header>
      <div className="container">
        <div className="main-hder">
          <div className="main-left">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Store</a>
              </li>
            </ul>
          </div>
          <div className="main-right">
            <ul>
              <li>
                <a href="#">Launch</a>
              </li>
              <li>
                <a href="#">
                  <img src="images/menu.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
   {errorMessage}
    <div className="bnr-sec">
      <div className="main-bnr-img">
        <img src="images/Header.png" className="bnr-img-desktop" />
        <img src="images/Header-tab.png" className="bnt-img-tab" />
      </div>
      <div className="bnr-cnt">
        <img src="images/Vendor%201%20final%20-%20PNG_2%201.png" />
        <form onSubmit={handleChat}>
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
          <button type="submit"  >Start with AI</button>
      
        </form>
       
        <ul>
          <li>
            <a href="#">Images</a>
          </li>
          <li>
            <a href="#">Videos </a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Shopping</a>
          </li>
          <li>
            <a href="#">maps</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Flights</a>
          </li>
          <li>
            <a href="#">Finance</a>
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="ftr-div">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Enterprise</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    {/*---------------Popup--------------*/}
    <div className="Popup">
      <img src="images/logo.png" />
      <h4>Vendor recommends using the App</h4>
      <h6>The App is a fast, simple, and secure. Try it?</h6>
      <a href="#">Try it</a>
      <a href="#">No thanks</a>
    </div>

  </>
  )
}

export default Index