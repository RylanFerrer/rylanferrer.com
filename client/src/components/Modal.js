import React from "react"
import OutsideClickHandler from "react-outside-click-handler"
import { FaCheck, FaTimes } from "react-icons/fa"

export default function Modal({ open, setOpen, response }) {
  const isDisabled = open === false ? true : false
  return (
    <div style={{ display: `${open ? "flex" : "none"}` }} className="modal">
      <OutsideClickHandler
        disabled={isDisabled}
        onOutsideClick={() => {
          setOpen(false)
        }}
      >
        <div className="modal__content">
          <FaTimes onClick={() => setOpen(false)} className="modal__exit" />
          <div className="modal__logo">
            {response.status === 200 ? (
              <FaCheck className=" modal__symbol modal__check" />
            ) : (
              <FaTimes className="modal__symbol modal__times" />
            )}
          </div>
          <h4 className="modal__message">{response.message}</h4>
        </div>
      </OutsideClickHandler>
    </div>
  )
}
