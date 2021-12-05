import './App.css';
import { useEffect, useState } from 'react';
// import FileBase64 from 'react-file-base64';

function App() {
  const [userDetails, setUserDetails] = useState({name:"", lastName:"", phone:"", email:"", rentEnd: ""})

  const onSubmit = (e) =>{
    e.preventDefualt()
  }

  return (
    <div className="app">
      <form className="form" onSubmit={onSubmit}>
        <h1 className="title">Hoodie.</h1>
        <br />
          <p>
            הודי היא קהילה סגורה וחינמית של דירות
            המאפשרת לראות את כל הדירות בכל רגע נתון
            על ידי חיבור דיירים נכנסים לדיירים יוצאים
          </p> ‍
          <p>
            אנחנו מאפשרים כעת הרשמה מוקדמת
            ועובדים קשה על הגדלת הקהילה שלנו
          </p>
          ‍<p>
            !מלאו את הטופס כדי לקבל גישה מוקדמת לקהילה
          </p>
          <br /><br />
        <div className="form_items_holder">
          <div className="form_item">
            <label>שם פרטי:</label>
            <input type="text" value={userDetails.name} onChange={(e) => {setUserDetails({...userDetails, name: e.target.value})}} required/>
          </div>
          <div className="form_item">
            <label>שם משפחה:</label>
            <input type="text" value={userDetails.lastName} onChange={(e) => {setUserDetails({...userDetails, lastName: e.target.value})}} required/>
          </div>
        </div>
        <div className="form_items_holder">
          <div className="form_item">
            <label>טלפון:</label>
            <input type="text" value={userDetails.phone} onChange={(e) => {setUserDetails({...userDetails, phone: e.target.value})}} required/>
          </div>
          <div className="form_item">
            <label>אימייל:</label>
            <input type="text" value={userDetails.email} onChange={(e) => {setUserDetails({...userDetails, email: e.target.value})}} required/>
          </div>
        </div>
          <div className="form_item">
            <label>חוזה שכירות מסתיים:</label>
            <input type="email" pattern=".+@.+\.com" value={userDetails.rentEnd} onChange={(e) => {setUserDetails({...userDetails, rentEnd: e.target.value})}} required/>
          </div>

        {/* <FileBase64 
          type="file"
          multiple={false}
          onDone={({base64}) => setPost({...post, image: base64})}
        /> */}
      </form>
    </div>
  );
}

export default App;
