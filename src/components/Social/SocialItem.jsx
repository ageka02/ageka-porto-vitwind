// eslint-disable-next-line react/prop-types
export default function SocialItem({link, title, children}) {
    
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:bg-purple hover:border-purple hover:text-white"
    >
      <svg
        role="img"
        width="20"
        className="fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        {children}
      </svg>
    </a>
  );
}
