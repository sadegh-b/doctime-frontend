import React from 'react';

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  return (
    <div style={{
      padding: '1rem',
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      border: '1px solid #fecaca'
    }}>
      {/* جایگزینی آیکون با یک کاراکتر متنی جهت جلوگیری از خطا */}
      <span style={{ fontSize: '1.25rem' }}>⚠️</span>
      <p>{message}</p>
    </div>
  );
};

export default ErrorAlert;
