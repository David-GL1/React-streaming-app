import React from "react";
import "./Message.scss";

const Message = ({ icon, title, description }) => {
  return (
    <section className="messageContainer">
      <article className="messageContainer__iconContainer">
        {icon &&
          React.cloneElement(icon, {
            className: "messageContainer__iconContainer--icon",
          })}
      </article>
      <article className="messageContainer__descritionContainer">
        <h3 className="messageContainer__descritionContainer--title">
          {title}
        </h3>
        <p className="messageContainer__descritionContainer--text">
          {description}
        </p>
      </article>
    </section>
  );
};

export default Message;
