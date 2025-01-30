interface IProps {
  imgSrc: string;
  title: string;
  text?: string
}

export default function Card ({ imgSrc, title, text }: IProps) {
  return (
    <div>
      <div className="2xl:min-w-md xl:w-[500px] lg:w-[412px] lg:h-[256px] md:w-[312px] sm:w-[256px] w-full h-[206px] sm:m-2 m-0 rounded-[8px] hover:drop-shadow-md bg-[#e5e2e2f7]">
        <div className="sm:block flex items-center">
          <div className="sm:w-[80px] sm:h-[80px] sm:p-4 w-[100px] h-[100px] p-2 mt-2 ml-[2px]">
            <img src={imgSrc}/>
          </div>
          <div className="text-left text-2xl sm:p-4 sm:font-[400] sm:mt-0 sm:ml-0 mt-1 ml-5">
            <p>{title}</p>
          </div>
        </div>
        <div >
          <p className="sm:hidden block text-m text-left pl-2 mt-5">{text}</p>
        </div>
      </div>
    </div>

  )
}