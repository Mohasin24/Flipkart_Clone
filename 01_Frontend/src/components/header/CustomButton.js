
const CustomButton = ({text, bgColor,btnColor, handleClick})=>{


     return(
          <button className={`${bgColor} ${btnColor}  px-5 active:bg-blue-700 active:text-white`}

          >{text}</button>
     )
}

export default CustomButton;