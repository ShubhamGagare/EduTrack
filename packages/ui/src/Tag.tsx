
export const Tag = ({tagname,style}:{tagname:string,style:string}) => {
  return (
    <div className={`flex w-fit py-2 px-4 rounded-3xl shadow-sm ${style} text-bold`}>
      {tagname}
    </div>
  )
}


