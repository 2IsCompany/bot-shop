
export default function ContactForm() {
  return (
    <>
      <form
      id="contact-form"
        name="contact-form"
        action="/besked-modtaget"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p>
          <label htmlFor="yourname">Navn:</label> <br />
          <input type="text" name="name" id="yourname" placeholder="Fx: Jazear Brooks" required />
        </p>

        <p className="no-margin-top">
          <label htmlFor="youremail">E-Mail:</label> <br />
          <input type="email" name="email" id="youremail" placeholder="Example: jazearbrooks@gmail.com" required />
        </p>


   
     
        <input
          type="hidden"
          name="subject"
          value="Besked fra kontaktformular - lyngholm.dk"
          
        />
        <p>
          <label htmlFor="yourmessage">Besked:</label> <br />
          <textarea name="message" id="yourmessage" required></textarea>
        </p>

        <p style={{padding: '0.5rem'}}>
          <button type="submit">Send your message!</button>
        </p>
      </form>
      <style jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: inherit, sans-serif !important;
        }
        body {
          color: #484848;
        }
        form {
          /*  max-width: 600px; */
          width: 100%;

          border-radius: 15px 15px 15px 15px;
          /*  background-color: inherit; */
          /* padding: 2rem; */
          /*  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px !important; */
          font-family: inherit, sans-serif;
          /*box-shadow: inherit;*/
        }

        label {
          font-weight: bold;
          font-size: 15px;
        }
        ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #999;
        
        }
        ::-moz-placeholder {
          /* Firefox 19+ */
          color: #999;
 
        }
        :-ms-input-placeholder {
          /* IE 10+ */
          color: #999;

        }
        :-moz-placeholder {
          /* Firefox 18- */
          color: #999;
   
        }
        p+p {
          margin-top:0;
         
        }
        input,
        textarea {
          font-family: inherit;
          font-size: 0.9rem;
          width: 100%;
          height: 32px;
          border: none;
          padding: 0.5rem 0.5rem;
color: black !important;
          border: 1px solid #ebebeb;
          border-radius: 2px;
          margin-top: 0.125rem;
        }
        input:focus,
        textarea:focus {
          outline: 1px dotted #eee;
        }
        textarea {
          min-height: 80px;
          font-size: inherit;
       
        }

        input {
          margin-bottom: 0.25rem;
        }
        button {
          cursor: pointer;
          display: block;
          font-size: 1rem;
          font-weight: bold;
          background-color: rgb(25, 28, 36) !important;
          color: white;
          border-radius: 8px;
          border: 0;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          max-width: 100%;
          min-width: 250px;
          
        }
          
  
      `}</style>
    </>
  );
}