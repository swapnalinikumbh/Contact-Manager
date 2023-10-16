import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
export default function App() {
  const contacts = [
    {
      id: "1",
      name: "swapnali",
      email: "sn@gmail.com"
    },
    {
      id: "2",
      name: "shubham",
      email: "sm@gmail.com"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}
