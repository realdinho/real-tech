export default function (context) {
  console.log('[Middleware] checking authentication...');
  context.store.dispatch('initAuth', context.req)
}