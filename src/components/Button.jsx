import 'animate.css';

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center 
    gap-2 px-7 py-4 border font-montserrat group
    rounded-full
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
     :'bg-coral-red rounded-full text-white border-coral-red'} ${fullWidth && 'w-full'}`}>
      {label}
      {
        iconURL &&  <img src={iconURL} className="ml-2 rounded-full w-5 h-5 group-hover:animate-spin"  alt="arrowRight"/>
      }
    </button>
  );
}

export default Button;
