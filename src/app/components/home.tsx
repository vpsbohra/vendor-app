"use client"
import React ,{ useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Index = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState('');
    const router = useRouter()
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleChat = async (e) => {  
     
        e.preventDefault();
        const axios = require('axios');
        let data = JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              "role": "user",
              content: input
            },
          ],
          "temperature": 1,
          "top_p": 1,
          "n": 1,
          "stream": false,
          "max_tokens": 250,
          "presence_penalty": 0,
          "frequency_penalty": 0
        });
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://api.openai.com/v1/chat/completions',
          headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json', 
            'Authorization': 'Bearer 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', 
            'Cookie': '__cf_bm=47T7Kobkm.okhIzuc9i7Qil21SDiEbP.MN3QMSXLmDk-1703225645-1-Ac0EmUnF7BA8OXk9ZtcTZtSd/A9eXKGKBm68vfl8/QVY6hv2aGD8rUd7acML0pL7++D8JpDjDtbWuXtB/ew1QzQ=; _cfuvid=9zv_qkoPgZB6CSLuSNCuFII_O_hQBz28qZqPSod03F0-1703225907386-0-604800000'
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setMessages(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
      
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
    {JSON.stringify(messages)}
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