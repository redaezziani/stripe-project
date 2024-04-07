'use client';
import React from "react";


interface EmailTemplateProps {
  firstName: string;
  token: string;
  email: string;
  id: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  token,
  id,
}) => (

      <div
      >
        <div
        >
         
         <img src="https://i.pinimg.com/originals/0a/52/21/0a52215b663fbdf4781950b18b9473d7.png" alt="logo" className=' w-14 aspect-auto h-auto' />
          <header
          >
            Verefiy your Squid account
          </header>
          <p
          >
            Hi {firstName}
          </p>
          <p>
            Thanks for signing up for our service. We're excited to have you on board. Before you can start using our service, please verify your email address by clicking the link below:
          </p>
          <p
           >
            {token}
          </p>
          <a href={`https://stripe-project-ten.vercel.app/auth/verefication/${id}`} target="_blank">
              Verify your email address
            </a>
          <hr />
          <p>
            If you have any questions, please don't hesitate to contact us.
          </p>
        </div>
      </div>
 
);
