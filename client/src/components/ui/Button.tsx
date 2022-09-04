interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: Props) {
  return (
    <button className="bg-sky-600 px-2 hover:bg-sky-500" onClick={onClick}>
      {children}
    </button>
  );
}
