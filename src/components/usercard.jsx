import React from 'react';

const Usercard = () => {
  const profilePhoto =
    'https://i.guim.co.uk/img/media/d1a9d4e48fda2fb3175d248ddf47bffb8fa93230/0_0_3840_5760/master/3840.jpg?width=445&dpr=1&s=none&crop=none';
  const name = 'Ain Kay';
  const email = 'ain.kay@kalvium.community';
  const phone = '+1 234 567 890';
  const address = 'HuluBulu, Africa';

  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    textAlign: 'center',
    margin: '16px auto',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <img src={profilePhoto} alt="Profile" style={imageStyle} />
      <h2>{name}</h2>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Phone: </strong>
        {phone}
      </p>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
    </div>
  );
};

export default Usercard;
