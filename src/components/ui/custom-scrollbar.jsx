export function CustomScrollbar({ children, className = "" }) {
  return (
    <div
      className={`
      scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-purple-500
      hover:scrollbar-thumb-purple-600 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-purple-700
      dark:hover:scrollbar-thumb-purple-600
      ${className}
    `}
    >
      {children}
    </div>
  );
}
