import React from 'react'

const Button = (props) => {
  return (
    <button
      type="submit"
      className={`inline-flex mt-7 items-center justify-center ${props.width ? props.width : "w-auto"}  ${props.color ? props.color + "text-gray-400 border border-gray-400" : "bg-[#fab529] text-[#0e130c] border border-transparent"} ${props.mx} ${props.my} px-8 py-2  text-sm font-semibold rounded-lg  hover:bg-green-600 focus:outline-none`}
    >
      <a href={props.link}>{props.label}</a>
    </button>
  )
}

export default Button
