function HeaderBtn({ text }) {
  return (
    <div className="hover:animate-pulse hover:text-pink-400  transition-all duration-200 hover:-translate-y-1 active:translate-y-0 hover:cursor-pointer">
      <h2>{text}</h2>
    </div>
  );
}

export default HeaderBtn;
