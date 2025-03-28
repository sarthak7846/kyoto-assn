import { useEffect, useState } from "react";
import { MessageContent } from "./components/MessageContent";
import axios from "axios";
import { Spinner } from "./icons/Spinner";

const env = import.meta.env;
const BASE_URL = "https://graph.facebook.com";

interface Message {
  message: string;
  created_time: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sender, setSender] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}/v22.0/${env.VITE_CONVERSATION_ID}`,
        {
          params: {
            fields: "senders,messages.limit(3){message,created_time}",
            access_token: env.VITE_PAGE_ACCESS_TOKEN,
          },
        }
      );
      console.log(res);

      setSender(res.data.senders.data[0].name);
      setMessages(res.data.messages.data);
      setLoading(false);
    };

    fetchMessages();
  }, []);

  return (
    <div className="bg-slate-900 text-white h-screen w-screen">
      <div className="flex justify-center flex-col items-center">
        <div className="flex justify-evenly bg-slate-700 px-2 max-w-full">
          <img src="/logo.png" className="object-contain" />

          <h1 className="text-4xl py-3 w-screen text-center">Message Inbox</h1>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <ul className="mt-10">
          <h1 className="text-xl ml-16">From: {sender}</h1>
          {messages.map((msg, inx) => (
            <li key={inx}>
              <MessageContent message={msg.message} time={msg.created_time} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
