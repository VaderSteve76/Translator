import React, { useState } from 'react';
import Field from './components/field';
import Languages from './components/languages';
import './App.css';

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
    </div>
  )
}