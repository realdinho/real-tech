export default function (context) {
  console.log('[Middleware] authenticating...');
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}