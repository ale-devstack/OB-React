import { useLocation, Link } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';

export default function PageNotFound() {
  usePageTitle('Página no encontrada');

  const location = useLocation();
  const pageName = location.pathname.replace('/', '') || 'inicio';

  return (
    <div className="min-h-screen flex items-center justify-center p-6 ob-section-soft">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">

          {/* 404 */}
          <div className="space-y-2">
            <h1 className="text-7xl font-light text-slate-400">404</h1>
            <div className="h-0.5 w-16 bg-slate-200 mx-auto"></div>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <h2 className="text-2xl font-medium text-slate-900">
              Página no encontrada
            </h2>
            <p className="text-slate-600 leading-relaxed">
              La página{' '}
              <span className="font-medium text-slate-700">
                "{pageName}"
              </span>{' '}
              no existe o fue movida.
            </p>
          </div>

          {/* Action */}
          <div className="pt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"
                />
              </svg>
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
