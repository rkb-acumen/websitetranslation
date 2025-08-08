// import React, { useState } from 'react';

// const AcumenForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         mobile: '',
//         subject: '',
//         message: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const validateForm = () => {
//         let formErrors = {};
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!formData.name) formErrors.name = 'Name is required';
//         if (!formData.email || !emailPattern.test(formData.email)) formErrors.email = 'Valid email is required';
//         if (!formData.mobile || isNaN(formData.mobile)) formErrors.mobile = 'Valid phone number is required';
//         if (!formData.subject) formErrors.subject = 'Subject is required';
//         if (!formData.message) formErrors.message = 'Message is required';
//         return formErrors;
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length > 0) {
//             setErrors(formErrors);
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             const response = await fetch('https://api.acumenvelocity.com/wp-json/acumenvelocity/v1/submit-form', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     name: formData.name,
//                     email: formData.email,
//                     mobile: formData.mobile,
//                     msubject: formData.subject,
//                     message: formData.message
//                 })
//             });

//             if (response.ok) {
//                 // Handle success (you could display a message or clear the form)
//                 alert('Message sent successfully!');
//                 setFormData({
//                     name: '',
//                     email: '',
//                     mobile: '',
//                     subject: '',
//                     message: ''
//                 });
//             } else {
//                 // Handle failure
//                 alert('Failed to send message');
//             }
//         } catch (error) {
//             alert('An error occurred while submitting the form');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     className='con-inp'
//                     placeholder='Your Name'
//                     name='name'
//                     value={formData.name}
//                     onChange={handleInputChange}
//                 />
//                 {errors.name && <span className='error'>{errors.name}</span>}

//                 <input
//                     className='con-inp'
//                     placeholder='Your Email'
//                     name='email'
//                     value={formData.email}
//                     onChange={handleInputChange}
//                 />
//                 {errors.email && <span className='error'>{errors.email}</span>}

//                 <input
//                     className='con-inp'
//                     placeholder='Phone'
//                     name='mobile'
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                 />
//                 {errors.mobile && <span className='error'>{errors.mobile}</span>}

//                 <select
//                     className='con-inp'
//                     name="subject"
//                     id="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                 >
//                     <option value="">Subject</option>
//                     <option value="ath">Acumen Translation Hub</option>
//                     <option value="dbmig">Cloud Database Migration</option>
//                     <option value="datamng">Data Management Solutions</option>
//                     <option value="datamng">Data Management Solutions</option>
//                 </select>
//                 {errors.subject && <span className='error'>{errors.subject}</span>}

//                 <textarea
//                     className='con-message'
//                     placeholder='Message'
//                     name='message'
//                     value={formData.message}
//                     onChange={handleInputChange}
//                 />
//                 {errors.message && <span className='error'>{errors.message}</span>}

//                 <button className='consubmit-button' type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? 'Sending...' : 'Send Message'}
//                 </button>
//             </form>
//         </>
//     );
// };

// export default AcumenForm;

"use client"
import { translateText } from '@/utils/serverTranslate';
import React, { useEffect, useState } from 'react';

const AcumenForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [translatedLabels, setTranslatedLabels] = useState({
    name: 'Your Name',
    email: 'Your Email',
    mobile: 'Phone',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    thankYou: 'Thank you for your submission!',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // 🔁 Translate labels when language changes
  useEffect(() => {
    const translateLabels = async () => {
      const keys = [
        'Your Name',
        'Your Email',
        'Phone',
        'Subject',
        'Message',
        'Send Message',
        'Thank you for your submission!'
      ];
      const [
        name,
        email,
        mobile,
        subject,
        message,
        sendMessage,
        thankYou
      ] = await translateText(keys, language);

      setTranslatedLabels({
        name,
        email,
        mobile,
        subject,
        message,
        sendMessage,
        thankYou
      });
    };

    translateLabels();
  }, [language]);

  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email || !emailPattern.test(formData.email)) formErrors.email = 'Valid email is required';
    if (!formData.mobile || isNaN(formData.mobile)) formErrors.mobile = 'Valid phone number is required';
    if (!formData.subject) formErrors.subject = 'Subject is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.acumenvelocity.com/wp-json/acumenvelocity/v1/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          msubject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setShowThankYou(false);
        }, 3000);
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      alert('An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className='con-inp'
          placeholder={translatedLabels.name}
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span className='error'>{errors.name}</span>}

        <input
          className='con-inp'
          placeholder={translatedLabels.email}
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className='error'>{errors.email}</span>}

        <input
          className='con-inp'
          placeholder={translatedLabels.mobile}
          name='mobile'
          value={formData.mobile}
          onChange={handleInputChange}
        />
        {errors.mobile && <span className='error'>{errors.mobile}</span>}

        <select
          className='con-inp'
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleInputChange}
        >
          <option value="">{translatedLabels.subject}</option>
          <option value="ath">Acumen Translation Hub</option>
          <option value="dbmig">Cloud Database Migration</option>
          <option value="datamng">Data Management Solutions</option>
          <option value="apimig">API Migration to Cloud</option>
          <option value="docai">Document AI (DocAI)</option>
          <option value="ccai">Contact Center AI (CCAI)</option>
          <option value="fhir">FHIR API for Healthcare</option>
          <option value="genai">Generative AI Solutions</option>
          <option value="legacy">Legacy Application Migration</option>
          <option value="lowcode">Low-code Applications</option>
          <option value="vmmigration">VM Migration</option>
          <option value="datastrategy">Data Strategy & Consulting</option>
          <option value="datagovernance">Data Governance & Compliance</option>
          <option value="dataarch">Data Architecture & Integration</option>
          <option value="reporting">Reporting & Analytics</option>
          <option value="bigdata">Big Data Solutions</option>
          <option value="qansecurity">Quality Assurance & Security</option>
          <option value="datamonetization">Data Monetization</option>
          <option value="apimgmt">API Management</option>
        </select>
        {errors.subject && <span className='error'>{errors.subject}</span>}

        <textarea
          className='con-message'
          placeholder={translatedLabels.message}
          name='message'
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && <span className='error'>{errors.message}</span>}

        <button className='consubmit-button' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : translatedLabels.sendMessage}
        </button>
      </form>

      {/* Thank You Message */}
      {showThankYou && (
        <div className="thank-you-message">
          {translatedLabels.thankYou}
        </div>
      )}

      <style jsx>{`
        .thank-you-message {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #4CAF50;
          color: white;
          padding: 10px;
          border-radius: 5px;
          transition: opacity 0.5s;
        }
      `}</style>
    </>
  );
};

export default AcumenForm;


