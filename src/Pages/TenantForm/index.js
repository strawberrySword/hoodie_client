import React, { useState } from "react";
import './index.css'

const TenantForm = () => {
  const [userDetails, setUserDetails] = useState({ name: "", phone: "", hoodArea: "", hood: "", rentEnd: "", rent: null })

  const onSubmit = (e) => {
    e.preventDefualt()
  }
  return (
    <div className="page">
      <h1 className="title">.Hoodie</h1>
      <br />
      <div className="text_box">
        הודי היא קהילה סגורה וחינמית של דירות,
        המאפשרת לראות את כל הדירות בכל רגע נתון
        על ידי חיבור דיירים נכנסים לדיירים יוצאים.
      </div>
      <div className="text_box">אנחנו מאפשרים כעת הרשמה מוקדמת ועובדים קשה על הגדלת הקהילה שלנו</div>
      <div className="text_box">מלאו את הטופס כדי לקבל גישה מוקדמת לקהילה!</div>
      <br />
      <br />
      <form className="form" onSubmit={onSubmit} autoComplete="on">

        <div className="form_items_holder">
          <div className="form_item">
            <label>שם פרטי:</label>
            <input
              type="text"
              value={userDetails.name}
              datatype="first-name"
              name="first_name"
              onChange={(e) => {
                setUserDetails({ ...userDetails, name: e.target.value });
              }}
              required
            />
          </div>
          <div className="form_item">
            <label>טלפון:</label>
            <input
              type="text"
              value={userDetails.phone}
              name="phone"
              onChange={(e) => {
                setUserDetails({ ...userDetails, phone: e.target.value });
              }}
              required
            />
          </div>
        </div>
        <div className="form_items_holder">
          <div className="form_item">
            <label>אזור מגורים:</label>
            <select className="select_field"
              type="text"
              value={userDetails.hoodArea}
              datatype="first-name"
              name="first_name"
              onChange={(e) => {
                setUserDetails({ ...userDetails, hoodArea: e.target.value });
              }}
              required
            >
              <option value="" selected disabled hidden></option>
              <option value="צפון תל-אביב">צפון תל אביב</option>
              <option value="מרכז תל-אביב">מרכז תל אביב</option>
              <option value="דרום תל-אביב">דרום תל אביב</option>
            </select>
          </div>
          <div className="form_item">
            <label>שכונה:</label>
            <select className="select_field"
              type="text"
              value={userDetails.hood}
              datatype="first-name"
              name="first_name"
              onChange={(e) => {
                setUserDetails({ ...userDetails, hood: e.target.value });
              }}
              required
            >
              <option value="" selected disabled hidden></option>
              <option value="תל כביר, נווה עופר, יפו ב׳">תל כביר, נווה עופר, יפו ב׳</option><option value="תל חיים">תל חיים</option><option value="תל ברוך צפון">תל ברוך צפון</option><option value="תל ברוך">תל ברוך</option><option value="תוכנית ל׳">תוכנית ל׳</option><option value="שפירא">שפירא</option><option value="רמת הטייסים">רמת הטייסים</option><option value="רמת החייל">רמת החייל</option><option value="רמות צהלה">רמות צהלה</option><option value="רמת אביב ג׳">רמת אביב ג׳</option><option value="רמת אביב">רמת אביב</option><option value="רביבים">רביבים</option><option value="קרית שלום">קרית שלום</option><option value="קרית שאול">קרית שאול</option><option value="צפון יפו">צפון יפו</option><option value="צמרות איילון">צמרות איילון</option><option value="צוקי אביב">צוקי אביב</option><option value="צהלון ושיכוני חיסון">צהלון ושיכוני חיסון</option><option value="צהלה">צהלה</option><option value="פלורנטין">פלורנטין</option><option value="פארק הירקון">פארק הירקון</option><option value="פארק החורשות">פארק החורשות</option><option value="פארק דרום">פארק דרום</option><option value="עתידים">עתידים</option><option value="עזרא והארגזים">עזרא והארגזים</option><option value="עג׳מי וגבעת העלייה">עג׳מי וגבעת העלייה</option><option value="ניר אביב">ניר אביב</option><option value="נופי ים">נופי ים</option><option value="נמל תל-אביב">נמל תל-אביב</option><option value="נחלת יצחק">נחלת יצחק</option><option value="נווה שרת">נווה שרת</option><option value="נווה שאנן">נווה שאנן</option><option value="נווה צדק">נווה צדק</option><option value="נווה חן">נווה חן</option><option value="נווה דן">נווה דן</option><option value="נווה ברבור וכפר שלם מערב">נווה ברבור וכפר שלם מערב</option><option value="נווה אליעזר וכפר שלם מזרח">נווה אליעזר וכפר שלם מזרח</option><option value="נווה אביבים">נווה אביבים</option><option value="נאות אפקה ב׳">נאות אפקה ב׳</option><option value="נאות אפקה א׳">נאות אפקה א׳</option><option value="מרכז הירידים">מרכז הירידים</option><option value="מעוז אביב">מעוז אביב</option><option value="מכללת יפו-תל אביב ודקר">מכללת יפו-תל אביב ודקר</option><option value="מונטיפיורי">מונטיפיורי</option><option value="לב תל-אביב">לב תל-אביב</option><option value="לבנה וידידיה">לבנה וידידיה</option><option value="כרם התימנים">כרם התימנים</option><option value="כפיר">כפיר</option><option value="כוכב הצפון">כוכב הצפון</option><option value="יפו העתיקה, נמל יפו">יפו העתיקה, נמל יפו</option><option value="יפו ד׳ (גבעת התמרים)">יפו ד׳ (גבעת התמרים)</option><option value="יפו ג׳ ונווה גולן">יפו ג׳ ונווה גולן</option><option value="יד אליהו">יד אליהו</option><option value="התקווה">התקווה</option><option value="הצפון הישן - החלק הדרומי">הצפון הישן - החלק הדרומי</option><option value="הצפון הישן - החלק הצפוני">הצפון הישן - החלק הצפוני</option><option value="הצפון החדש - החלק הדרומי">הצפון החדש - החלק הדרומי</option><option value="הצפון החדש - סביבת כיכר המדינה">הצפון החדש - סביבת כיכר המדינה</option><option value="הצפון החדש - החלק הצפוני">הצפון החדש - החלק הצפוני</option><option value="המשתלה">המשתלה</option><option value="הדר יוסף">הדר יוסף</option><option value="גני שרונה">גני שרונה</option><option value="גני צהלה">גני צהלה</option><option value="גלילות">גלילות</option><option value="גבעת הרצל, אזור המלאכה יפו">גבעת הרצל, אזור המלאכה יפו</option><option value="ביצרון ורמת ישראל">ביצרון ורמת ישראל</option><option value="בבלי">בבלי</option><option value="אפקה">אפקה</option><option value="אזור שדה דב">אזור שדה דב</option><option value="אורות">אורות</option><option value="אוניברסיטת תל-אביב">אוניברסיטת תל-אביב</option>
            </select>
          </div>
        </div>

        <div className="form_item">
          <label>חוזה שכירות מסתיים:</label>
          <input
            type="date"
            name="lease_end"
            value={userDetails.rentEnd}
            onChange={(e) => {
              setUserDetails({ ...userDetails, rentEnd: e.target.value });
            }}
            required
          />
        </div>
        <div className="form_item">
          <label>שכירות חודשית:</label>
          <input
            type="number"
            name="rent"
            min="0"
            value={userDetails.rent}
            onChange={(e) => {
              setUserDetails({ ...userDetails, rent: e.target.value });
            }}
            required
          />
        </div>
            <br />
        <input className="btn btn-yellow" type="submit" value="הצטרף!" />
      </form>
    </div>
  );
};

export default TenantForm;
