import React from 'react';

const Badge = ({ text }) => {
  let color;
  
  switch (text.toLowerCase()) {
    case 'approved':
      color = '#4CAF50'; // Green
      break;
    case 'rejected':
      color = '#FF5733'; // Red
      break;
    case 'pending':
      color = '#FFD700'; // Yellow
      break;
    default:
      color = '#808080'; // Default to gray for unknown status
  }

  const badgeStyle = {
    padding: '5px 12px',
    backgroundColor: color,
    color: '#fff',
    borderRadius: '50px',
    display: 'inline-block',
    width: '100px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' // Adjust shadow values as needed
  };

  return (
    <span style={badgeStyle}>
      {text}
    </span>
  );
};

export default Badge;
