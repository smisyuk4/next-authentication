import { logout } from '@/actions/auth-actions';

export function AuthHeader() {
  return (
    <header id='auth-header'>
      <p>Welcome back</p>

      <form action={logout}>
        <button>Logout</button>
      </form>
    </header>
  );
}
