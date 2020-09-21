import React, { useState } from "react"
import Modal from "./Modal"
import Title from "./Title"

const Contact = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })
  const [open, setOpen] = useState(false)
  const [response, setResponse] = useState({
    status: 200,
    message: "Your Message was successfully submitted thank you!",
  })
  const handleSubmit = async event => {
    event.preventDefault()
    const body = {
      name: event.target.name.value,
      _replyto: event.target._replyto.value,
      message: event.target.message.value,
    }
    const { name, _replyto, message } = body
    if (name.length <= 0 || _replyto.length <= 0 || message <= 0) {
      const nameCheck = name.length <= 0 ? true : false
      const emailCheck = _replyto.length <= 0 ? true : false
      const messageCheck = message <= 0 ? true : false
      setErrors({ name: nameCheck, email: emailCheck, message: messageCheck })
    } else {
      const res = await fetch("https://formspree.io/mrgynyvy", {
        method: "POST",
        body: JSON.stringify(body),
      })
      if (res.status !== 200) {
        setResponse({
          status: 400,
          message:
            "There was an error submitting your message please contact me on LinkedIn or try again later",
        })
      }
      setOpen(true)
    }
  }
  const validateForm = event => {
    if (event.target.name === "name") {
      if (event.target.value.length > 0) setErrors({ ...errors, name: false })
      else setErrors({ ...errors, name: true })
    } else if (event.target.name === "message") {
      if (event.target.value.length >= 10)
        setErrors({ ...errors, message: false })
      else setErrors({ ...errors, message: true })
    } else if (event.target.name === "_replyto") {
      const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
      const isValid = expression.test(String(event.target.value).toLowerCase())
      const validCheck = isValid ? false : true
      setErrors({ ...errors, email: validCheck })
    }
  }
  const checkValidForms =
    errors.message === false &&
    errors.email === false &&
    errors.message === false
      ? false
      : true
  return (
    <>
      <Modal response={response} setOpen={setOpen} open={open} />
      <section id="contact" className="contact-page">
        <article className="contact-form">
          <Title title="Get In Touch!" />
          <form onSubmit={event => handleSubmit(event)}>
            <div className="form-group">
              <input
                onChange={event => {
                  validateForm(event)
                }}
                placeholder="name"
                className="form-control"
                type="text"
                name="name"
              />
              <p
                style={{
                  display: `${errors.name === false ? "none" : "block"}`,
                }}
                className="error-form"
              >
                Name Must Not Be Empty
              </p>
              <input
                onChange={event => {
                  validateForm(event)
                }}
                placeholder="email"
                className="form-control"
                type="email"
                name="_replyto"
              />
              <p
                style={{
                  display: `${errors.email === false ? "none" : "block"}`,
                }}
                className="error-form"
              >
                Email is not valid
              </p>
              <textarea
                onChange={event => {
                  validateForm(event)
                }}
                name="message"
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
              <p
                style={{
                  display: `${errors.message === false ? "none" : "block"}`,
                }}
                className="error-form"
              >
                Message must be longer than 10 characters
              </p>
            </div>
            <button
              disabled={checkValidForms}
              type="submit"
              className="submit-btn btn"
            >
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default Contact
