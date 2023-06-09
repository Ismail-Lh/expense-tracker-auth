import { Link } from 'react-router-dom';

function FormFooter({ text, linkText, route, onClick, btnText }) {
  return (
    <div className="text-center py-3">
      <span className="text-gray-500">
        {text}{' '}
        {route ? (
          <Link className="text-red-500" to={route}>
            {linkText}
          </Link>
        ) : (
          <button type="button" className="text-red-500" onClick={onClick}>
            {btnText}
          </button>
        )}
      </span>
    </div>
  );
}

export default FormFooter;
