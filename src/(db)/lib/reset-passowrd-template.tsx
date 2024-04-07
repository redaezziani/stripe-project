
import React from "react";

interface ResetPasswordTemplateProps {
  name: string;
  email: string;
  secret : string;
}
//@ts-ignore
export const ResetPasswordTemplate = ({ name, email, secret }) => {
  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', color: '#00db80', fontWeight: 'bold' }}>Reset your password</h1>
      <p style={{ color: '#4b5563', fontWeight: 600 }}>Hi {name}, <br /></p>
      <p style={{ color: '#4b5563' }}>We have received a request to reset your password. To proceed with the password reset, please click the link below:</p>
      <a href={`https://stripe-project-ten.vercel.app/auth/reset-password/${secret}`} style={{ color: '#3182ce', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
        Reset your password: {email}
      </a>
      <hr style={{ borderTop: '1px solid #cbd5e0', margin: '20px 0' }} />
      <p style={{ color: '#4b5563' }}>If you did not request a password reset, please ignore this email.</p>
    </div>
  );
};