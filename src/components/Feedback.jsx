import React from "react";

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback-content">
          <h2>Связаться со мной</h2>
          <form>
            <label id="name_l">ИМЯ</label>
            <input type="text" id="name_i" />
            <label id="email_l">ПОЧТА</label>
            <input type="text" id="email_i" />
            <label id="message_l">СООБЩЕНИЕ</label>
            <textarea id="message_i"></textarea>
            <button>ОТПРАВИТЬ</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
